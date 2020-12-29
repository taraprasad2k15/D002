import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const SfNewCase = {

	caseType: {
		caseTypeXpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Type", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Feature Request',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Type picklist to Feature Request',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Type picklist to Feature Request'],
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
	caseOrigin: {
		caseOriginXpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Case Origin", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 4,
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
				text: 'Set By Index the Case Origin picklist to 4',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Case Origin picklist to 4'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
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
				successfulCount: 1,
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
								uri: ['ui:locator?name=Origin&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DOrigin'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: '--None--',
									}]
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
										text: 'Case Origin',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	subject: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Subject", FieldType.Text),
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
				text: 'Set the Subject field to Test Case New screen via automation script',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Test Case New screen via automation script'],
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
	customCheckbox: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Checkbox", FieldType.Checkbox),
		interactionParameters: {
			check: {interactionParameters: {
				id: 'Check',
			}},
			uncheck: {interactionParameters: {
				id: 'Uncheck',
			}},
			toggle: {interactionParameters: {
				id: 'Toggle',
			}},
		},
		executionStatus: {
			check: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			uncheck: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Uncheck the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			toggle: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Toggle the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: {
			check: [{
				name: ['UiDoAction'],
				title: ['Check the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=check'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			uncheck: [{
				name: ['UiDoAction'],
				title: ['Uncheck the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=uncheck'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			toggle: [{
				name: ['UiDoAction'],
				title: ['Toggle the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=toggle'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
		},
	},
	customTime: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Time Field", FieldType.Time),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '23:30',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Time Field field to 23:30',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Time Field field to 23:30'],
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
	customRichText: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Rich-Text Field", FieldType.Richtext),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Adding text into Rich-Text field',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Rich-Text Field field to Adding text into Rich-Text field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Rich-Text Field field to Adding text into Rich-Text field'],
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
	customPicklistSelect: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Picklist(Multi)", FieldType.MultiPicklistSelect),
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Select',
				settings: {
					value: 'Green',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Select the Custom Picklist(Multi) field to Green',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Multi-Select the Custom Picklist(Multi) field to Green'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfSelect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	customPicklistDeselect: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Picklist(Multi)", FieldType.MultiPicklistDeSelect),
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Deselect',
				settings: {
					value: 'Orange',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Deselect the Custom Picklist(Multi) field to Orange',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Multi-Deselect the Custom Picklist(Multi) field to Orange'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfDeselect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
};