import { parseString } from 'xml2js';
import { ExpectedResultSupport } from './ExpectedResultSupport';

export enum ScreenType {
	New,
	Edit,
	View,
	InlineEdit,
}
export enum FieldType {
	Text,
	Textarea,
	Picklist,
	Richtext,
	MultiPicklistSelect,
	MultiPicklistDeSelect,
	MultiPicklist,
	Checkbox,
	Button,
	Date,
	Time,
	DateTime,
	Lookup,
	LookupSearch,
	LookupNewInSF,
	Link,
	Number
}
export class MiscUtils {
	private comparisonUtils: ExpectedResultSupport;
	constructor(comparisonUtils?: ExpectedResultSupport) {
		this.comparisonUtils = comparisonUtils;
	}
	public async convertXMLToJSON(xmlString: string): Promise<any> {
		return new Promise((resolve, reject) => {
			parseString(xmlString, {
				charkey: 'text',
				mergeAttrs: true,
			}, (err, result) => {
				if (err) {
					console.error('Error while parsing XML to JSON');
					resolve(null);
				}
				resolve(result);
			});
		});
	}

	public findTestItemIdForName(xmlString: string, name: string, includeNested?: boolean): string {
		const parser: DOMParser = new DOMParser();
		const xmlDoc: Document = parser.parseFromString(xmlString, 'text/xml');
		let xpath: string;
		if (includeNested) {
			xpath = '(//apiCall[@name="' + name + '"])[last()]/@testItemId';
		} else {
			xpath = '(//testCase/steps/apiCall[@name="' + name + '"])[last()]/@testItemId';
		}
		const testItemNode: XPathResult = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.STRING_TYPE, null);
		return testItemNode.stringValue;
	}

	public getLastTestItemId(xmlString: string): number {
		const parser: DOMParser = new DOMParser();
		const xmlDoc: Document = parser.parseFromString(xmlString, 'text/xml');
		const xpath: string = '(//*/@testItemId)[last()]';
		const testItemNode: XPathResult = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.STRING_TYPE, null);
		return parseInt(testItemNode.stringValue, 10);
	}

	public appendToXMLJson(originalJson: any, data: any, parentTestItemId: string): any {
		let apiCalls: any[] = originalJson.testCase.steps[0].apiCall;
		apiCalls = this.comparisonUtils.addCompareOptions(apiCalls, { strict: true });
		// Appending to the root
		if (parentTestItemId === '0') {
			apiCalls.push(data);
		} else {
			const parentApiCall = this.getParentApi(parentTestItemId, apiCalls);
			if (parentApiCall) {
				if (parentApiCall.clauses) {
					if (!parentApiCall.clauses[0].clause[0].steps || (parentApiCall.clauses[0].clause[0].steps && parentApiCall.clauses[0].clause[0].steps.length === 0) ||
						(parentApiCall.clauses[0].clause[0].steps && !parentApiCall.clauses[0].clause[0].steps[0].apiCall)) {
						parentApiCall.clauses[0].clause[0].steps = [{
							apiCall: [],
						}];
					}
					const childApiCalls = parentApiCall.clauses[0].clause[0].steps[0].apiCall;
					childApiCalls.push(...data);
					this.comparisonUtils.addCompareOptions(childApiCalls, { strict: true });
				} else {
					parentApiCall.clauses = [{
						clause: [{
							steps: [{
								apiCall: this.comparisonUtils.addCompareOptions(data, { strict: true }),
							}],
						}],
					}];
				}
			}
		}
		return originalJson;
	}

	public appendToTestCaseJson(originalJson: any, data: any, parentTestItemId: string): any {
		let children: any[] = originalJson.children;
		if (parentTestItemId === '0') {
			children.push(data);
			children = this.comparisonUtils.addCompareOptions(children, { strict: true });
		} else {
			const parent: any = this.getParent(parentTestItemId, children);
			if (parent) {
				if (parent.children && parent.children.length > 0) {
					parent.children.push(...data);
					this.comparisonUtils.addCompareOptions(parent.children, { strict: true });
				} else {
					parent.children = this.comparisonUtils.addCompareOptions(data, { strict: true });
				}
			}
		}
		return originalJson;
	}

	public updateValueInTestCase(testCase: any, key: string, newValue: any, testItemId: string) {
		if (testCase.testItemId === testItemId) {
			testCase[key] = newValue;
		} else {
			if (testCase.children && testCase.children.length > 0) {
				const child: any = this.getParent(testItemId, testCase.children);
				child ? child[key] = newValue : null;
			}
		}
		return testCase;
	}

	public updateValueInTestCase2(testCase: any, newValues: any, testItemId: string) {
		if (testCase.testItemId === testItemId) {
			// testCase[key] = newValue;
			for (const key in newValues) {
				testCase[key] = newValues[key];
			};
		} else {
			if (testCase.children && testCase.children.length > 0) {
				const child: any = this.getParent(testItemId, testCase.children);
				// child ? child[key] = newValue : null;
				if (child) {
					for (const key in newValues) {
						child[key] = newValues[key];
					};
				}
			}
		}
		return testCase;
	}

	private getParentApi(parentTestItemId: string, apiCalls: any[]): any {
		apiCalls = this.comparisonUtils.addCompareOptions(apiCalls, { strict: true });
		for (const apiCall of apiCalls) {
			if (apiCall.testItemId[0] === parentTestItemId) {
				return apiCall;
			}
			if (apiCall.clauses && apiCall.clauses[0].clause[0].steps && apiCall.clauses[0].clause[0].steps.length > 0 && apiCall.clauses[0].clause[0].steps[0].apiCall) {
				const result = this.getParentApi(parentTestItemId, apiCall.clauses[0].clause[0].steps[0].apiCall);
				if (result) {
					return result;
				}
			}
		}
		return null;
	}

	private getParent(parentTestItemId: string, children: any[]): any {
		children = this.comparisonUtils.addCompareOptions(children, { strict: true });
		for (const child of children) {
			if (child.testItemId === parentTestItemId) {
				return child;
			}
			if (child.children && child.children.length > 0) {
				const result = this.getParent(parentTestItemId, child.children);
				if (result) {
					return result;
				}
			}
		}
		return null;
	}

	public getFieldXpathLightning(screenType: ScreenType, fieldNameOnUI: string, fieldType: FieldType): string {

		var xpath: string;
		switch (screenType) {
			case ScreenType.New:
				switch (fieldType) {
					case FieldType.Picklist:
						xpath = "//span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//a | //label[text()='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.Text:
						// last xpath for winter 21 bst
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "*']/following-sibling::input | //label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::input | //label/span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//input | //label[contains(text(),'" + fieldNameOnUI + "')]/following-sibling::div/input";
						break;
					case FieldType.Textarea:
						// last xpath for winter 21 bst
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::textarea | //label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::*/textarea";
						break;
					case FieldType.Checkbox:
						// last xpath for winter 21 bst
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::input | //label/span[text()='" + fieldNameOnUI + "']/parent::label/following-sibling::input | //label/span[text()='" + fieldNameOnUI + "']/parent::label/following-sibling::*//input";
						break;
					case FieldType.DateTime:
						// last xpath for winter 21 bst
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::input| //label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::*/input";
						break;
					case FieldType.Time:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.Richtext:
						xpath = "//span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//p";
						break;
					case FieldType.MultiPicklistSelect:
						xpath = "(//div[text()='" + fieldNameOnUI + "']/following-sibling::div//ul[contains(@id,'source-list')]/li/div)[1]";
						break;
					case FieldType.MultiPicklistDeSelect:
						xpath = "(//div[text()='" + fieldNameOnUI + "']/following-sibling::div//ul[contains(@id,'selected-list')]/li/div)[1]";
						break;
					case FieldType.Button:
						xpath = "//button[@title='" + fieldNameOnUI + "'] | //input[@title='" + fieldNameOnUI + "']";
						break;
					case FieldType.Lookup:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.LookupNewInSF:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@class,'itemLabel') and contains(@title,'New')] | (//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@title,'New')])[last()]";
						break;
					// last xpath for winter 21 bst
					case FieldType.LookupSearch:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@class,'itemLabel') and contains(@title,'in')] | //label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@title,'Show All Results')]";
						break;
				};
				break;
			case ScreenType.View:
				switch (fieldType) {
					case FieldType.Picklist:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-text";
						break;
					case FieldType.Text:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-text";
						break;
					case FieldType.Textarea:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-text";
						break;
					case FieldType.Checkbox:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@class,'slds-checkbox_faux')]";
						break;
					case FieldType.Time:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-text | //div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-time";
						break;
					case FieldType.Richtext:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-rich-text";
						break;
					case FieldType.MultiPicklist:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-text";
						break;
					case FieldType.Link:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span//a";
						break;
					case FieldType.Lookup:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span//a";
						break;
					case FieldType.Number:
						xpath = "//div[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//lightning-formatted-number";
						break;
				};
				break;
			case ScreenType.InlineEdit:
				switch (fieldType) {
					case FieldType.Picklist:
						xpath = "//span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//a | //label[text()='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.Text:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "*']/following-sibling::div//input | //label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input | //label[contains(normalize-space(.),'" + fieldNameOnUI + "')]/following-sibling::div//input";
						break;
					case FieldType.Textarea:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//textarea";
						break;
					case FieldType.Checkbox:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input | //label/span[text()='" + fieldNameOnUI + "']/parent::label/following-sibling::input";
						break;
					case FieldType.Time:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.Richtext:
						xpath = "//span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//lightning-formatted-rich-text | //span[text()='" + fieldNameOnUI + "']/ancestor::div[1]//p"
						break;
					case FieldType.MultiPicklistSelect:
						xpath = "(//div[text()='" + fieldNameOnUI + "']/following-sibling::div//ul[contains(@id,'source-list')]/li/div)[1]";
						break;
					case FieldType.MultiPicklistDeSelect:
						xpath = "(//div[text()='" + fieldNameOnUI + "']/following-sibling::div//ul[contains(@id,'selected-list')]/li/div)[1]";
						break;
					case FieldType.Button:
						xpath = "//button[@title='" + fieldNameOnUI + "'] | //input[@title='" + fieldNameOnUI + "']";
						break;
					case FieldType.Lookup:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
					case FieldType.LookupNewInSF:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@class,'itemLabel') and contains(@title,'New')]";
						break;
					case FieldType.LookupSearch:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//span[contains(@class,'itemLabel') and contains(@title,'in')]";
						break;
					case FieldType.DateTime:
						xpath = "//label[normalize-space(.)='" + fieldNameOnUI + "']/following-sibling::div//input";
						break;
				};
				break;
		}
		return xpath;
	}
}