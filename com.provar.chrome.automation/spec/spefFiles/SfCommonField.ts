import { ExpectedResultSupport } from '../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCommonFIeld = {
    saveAndNewButton: {
		//Xpath: "//button[@title='Save & New'] | //input[@title='Save & New']",
		Xpath: "//button[@title='Save & New' or @name= 'SaveAndNew'] | //input[@title='Save & New']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Save & New button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Save & New button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	saveAndNewButton2: {
		Xpath: "//button[@title='Save & New'] | //input[@title='Save & New']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Save and New button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Save and New button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	cancelButton: {
		//Xpath: "//button[@title='Cancel'] | //input[@title='Cancel']",
		Xpath: "//button[@title='Cancel' or @name='CancelEdit'] | //input[@title='Cancel']",
		Xpath2: "//div[contains(@class, 'active') and contains(@class, 'open')]//button[@title='Cancel'] | //button[normalize-space(.)='Cancel' and @name='CancelEdit']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Cancel button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Cancel button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	pageError: {
		Xpath: "//span[normalize-space(.)='Review the errors on this page.'] | //div[@class='pbError' and contains(text(),'Error')]",
		interactionParameters: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				value: 'Review the errors on this page.',
			},
		}},
		interactionParametersCX: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				expectedPageMessage: {
					value: 'Error: Invalid Data.',
					caseSensitive: true,
					normalise: true,	
				},
			},
		}},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['pageAssertions'],
					value: [{
						uiPageAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['pageMessages'],
									comparisonType: ['EqualTo'],
									listOperator: ['Contains'],
									normalize: ['true'],
									value: [{
										text: 'Review the errors on this page.',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLCX: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['pageAssertions'],
					value: [{
						uiPageAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['pageMessages'],
									comparisonType: ['EqualTo'],
									listOperator: ['Contains'],
									normalize: ['true'],
									value: [{
										text: 'Error: Invalid Data.',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	pageErrorNew: {
		Xpath: "//*[.='Review the following fields']/*",
		interactionParameters: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				value: 'Review the following fields',
			},
		}},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['pageAssertions'],
					value: [{
						uiPageAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['pageMessages'],
									comparisonType: ['EqualTo'],
									listOperator: ['Contains'],
									normalize: ['true'],
									value: [{
										text: 'Review the following fields',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	saveButton: {
		//last one for winter 21 bst
		Xpath: "//div[contains(@class, 'active') and contains(@class, 'open')]//button[@title='Save']/span | //input[@title='Save']|//div[contains(@class, 'active') and contains(@class, 'open')]//button[@title='Save']| (//button[.='Save'])[last()] | //button[@title='Save' or @name='SaveEdit'] | //input[@title='Save']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Save button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Save button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	newButton:{
		Xpath: "//a[normalize-space(.)='New'] | //input[@title='New']",
		XpathCX: "//input[@title='New']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the New button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the New button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	importButton:{
		Xpath: "//a[normalize-space(.)='Import']",
	},
	addToCampaignButton:{
		Xpath: "//a[normalize-space(.)='Add to Campaign']",
	},
	changeStatusButton:{
		Xpath: "//a[normalize-space(.)='Change Status']",
	},
	changeOwnerButton:{
		Xpath: "//a[normalize-space(.)='Change Owner']",
	},
	sendListEmailButton:{
		Xpath: "//a[normalize-space(.)='Send List Email']",
	},
	listSearchBox:{
		Xpath: "//input[@type='search' and contains(@name,'search-input')]",
		interactionParameters: {
			interactionParameters: {
			id: 'Set',
			settings: {
				value: 'Nurturing',
				pressEnter: true,
			},
		}},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the List Search select to Nurturing',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the List Search select to Nurturing'],
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
	searchType:{
		Xpath: "//span[contains(@class, 'selectedListView')] | //span[text()='All' and contains(@class,'selectedListView')] ",
		interactionParameters: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: /.*/,
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	searchTypeCX:{
		Xpath: "//option[@selected='selected']",
		interactionParameters: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: /.*/,
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	editActionButton:{
		Xpath: "//a[normalize-space(.)='Edit']",
		XpathCX: "(//a[normalize-space(.)='Edit'])[2]",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Edit button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	deleteActionButton:{
		Xpath: "//a[normalize-space(.)='Delete']",
		XpathCX: "//a[normalize-space(.)='Del']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Delete button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Delete button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	changeOwnerActionButton:{
		Xpath: "//div[contains(@class,'uiPopupTarget')]//a[normalize-space(.)='Change Owner']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Change Owner button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Change Owner button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	saveEditButton: {
//		Xpath: "//button[@title='Save'] | //input[@title='Save']",
		Xpath: "//button[@title='Save' or @name='SaveEdit'] | //input[@title='Save']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Save button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Save button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	editButton: {
		Xpath: "//button[@title='Edit'] | //input[@title='Edit']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Edit button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	goButtonLookup:{
		Xpath: "//div[@class='pBody']//input[@type='submit']",
		executionStatus: [],
		testCaseXML: [],
	},
	executionStatusAssert: [
		{
			name: 'UiAssert',
			type: 'Icon-Successful',
			text: 'UI Assert',
			executionStatus: 'Executed',
		},
	],
}