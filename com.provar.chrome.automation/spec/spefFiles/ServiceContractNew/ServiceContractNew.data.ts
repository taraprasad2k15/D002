import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj = new MiscUtils();

export const ServiceContractNewData = {
	startDate: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Start Date', FieldType.DateTime),
		fieldDetails: {
			disposition: 'Existing',
			text: 'Start Date (StartDate)',
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01/01/2019',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Start Date field to 2019-01-01',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Start Date field to 2019-01-01'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	description: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Description', FieldType.Textarea),
		fieldDetails: {
			disposition: 'Existing',
			text: 'Description (Description)',
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Text area field',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Text area field',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Text area field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	name: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Contract Name', FieldType.Text),
		fieldDetails: {
			disposition: 'Existing',
			text: 'Contract Name (Name)',
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Created By Automated Script',
				},
			}
		},
		interactionParametersAssert: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractMessage: true,
					assertMessage: true,
					extractLabel: true,
					assertLabel: true,
					expectedMessage: {
						value: 'Complete this field.',
						caseSensitive: true,
						normalise: true,
					},
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Contract Name field to Created By Automated Script',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Contract Name field to Created By Automated Script'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',

			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: [],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
								},
								{
									attributeName: ['message'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Complete this field.',
									}]
								},
								{
									attributeName: ['label'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Contract Name',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	billingStreet: {
		xpath: "//span[normalize-space()='Billing Street']/../following-sibling::textarea",
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '78'
				}
			}
		},
		fieldDetails: {
			disposition: 'Existing',
			text: 'Billing Street (BillingStreet)',
		},
		testCaseXML: [{
			"title": [
				"Set the Billing Street field to 78"
			]
		}],
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Billing Street field to 78',
				executionStatus: 'Executed',

			},
		],
		
	},
	accountName: {
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Account Name", FieldType.Text),
		fieldDetails: {
			disposition: 'Existing',
			text: 'Account Name (AccountId)',
		},
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Automation'
				}
			}
		},
		testCaseXML: [{
			"title": [
				/Set the Account Name reference to./
			],
		}],
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: /Set the Account Name reference to .*/,
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
};