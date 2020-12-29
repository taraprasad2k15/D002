import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const AssetNew = {
	PSI:{
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Asset New screen',
		},
	},
	status: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Status (Status)',
		},
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Status", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Shipped',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Status picklist to Shipped',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Status picklist to Shipped'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}]
	},
	assetName: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Asset Name (Name)',
		},
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Asset Name", FieldType.Text),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test Case New screen via automation script',
				},
			}
		},
		interactionParameters2: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractLabel: true,
					assertLabel: true,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Asset Name field to Test Case New screen via automation script',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Asset Name field to Test Case New screen via automation script'],
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
		fieldDetails:{
			disposition: 'Existing',
			text: 'Description (Description)',
		},
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Description", FieldType.Textarea),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Short description',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Short description',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Short description'],
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
	competitorAsset: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Competitor Asset (IsCompetitorProduct)',
		},
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Competitor Asset", FieldType.Checkbox),
		interactionParameters: {
			check: {interactionParameters: {
				id: 'Check',
			}},
		},
		executionStatus: {
			check: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Competitor Asset field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: {
			check: [{
				name: ['UiDoAction'],
				title: ['Check the Competitor Asset field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=check'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
		},
	},
	account:{
		fieldDetails:{
			disposition: 'Existing',
			text: 'Account (AccountId)',
		},
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Account", FieldType.Lookup),
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
						value: 'Every asset needs an account, a contact, or both.: Account ID, Contact ID',
						caseSensitive: true,
						normalise: true,
					},
				},
			}
		},
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
										text: 'Every asset needs an account, a contact, or both.: Account ID, Contact ID',
									}]
								},
								{
									attributeName: ['label'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Account',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
};