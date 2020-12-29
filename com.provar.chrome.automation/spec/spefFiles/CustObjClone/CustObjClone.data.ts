import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj = new MiscUtils();
export const CustObjCloneData = {
	testStatus: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Test Status',FieldType.Checkbox),
		interactionParameters: {
			interactionParameters: {
				id: 'Check',
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Test Status field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Test Status field'],
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
	testDate: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Date',FieldType.DateTime),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01/01/2019 23:30',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Test Date field to 2019-01-01 23:30:00',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Test Date field to 2019-01-01 23:30:00'],
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
	pathStage: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Path Stages',FieldType.Picklist),
		interactionParameters: {
			setByIndex: {
				interactionParameters: {
					id: 'Set By Index',
					settings: {
						value: 3,
					}
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: 'New',
					}
				},
			}
		},
		executionStatus: {
			setByIndex: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set By Index the Path Stages picklist to 3',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
			set: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Path Stages picklist to New',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			setByIndex: [{
				name: ['UiDoAction'],
				title: ['Set By Index the Path Stages picklist to 3'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=setByIndex'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			set: [{
				name: ['UiDoAction'],
				title: ['Set the Path Stages picklist to New'],
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
	},
	shortDescription: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Short Description',FieldType.Textarea),
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
				text: 'Set the Short Description field to Text area field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Short Description field to Text area field'],
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
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Provar Custom Obj Name',FieldType.Text),
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
				text: 'Set the Provar Custom Obj Name field to Created By Automated Script',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Provar Custom Obj Name field to Created By Automated Script'],
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
								uri: ['ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DName'],
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
										text: 'Provar Custom Obj Name',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	customRichText: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Custom Rich-Text Field',FieldType.Richtext),
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
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Custom Picklist(Multi)',FieldType.MultiPicklistSelect),
		// Xpath:"(//ul[contains(@id,'source-list')]/li/div/span/span)[1]",
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
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Custom Picklist(Multi)',FieldType.MultiPicklistDeSelect),
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
	longitude:{
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Longitude',FieldType.Text),
		applicableInteractions:["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '17',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Geo Location (Longitude) field to 17',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Geo Location (Longitude) field to 17'],
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
	latitude:{
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Latitude',FieldType.Text),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '17',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Geo Location (Latitude) field to 17',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Geo Location (Latitude) field to 17'],
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
};