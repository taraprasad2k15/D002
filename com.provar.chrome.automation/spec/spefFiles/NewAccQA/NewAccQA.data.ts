import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const NewAccQAData = {
	accountName: {
		xpath: "//label[normalize-space(.)='*Account Name']/parent::div/following-sibling::div//input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Account Name (Name)',
		},
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Automation'
				}
			}
		},
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF Opportunity Publisher Action Create New Account screen'],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the Account Name field to Automation'],
							arguments: [{
								argument: comparisonUtils.addCompareOptions([{
									id: ['interaction'],
									value: [{
										uri: ['ui:interaction?name=set'],
									}],
								}], { partial: true, indexKey: 'id' }),
							}],
						}],
					}],
				}],
			}],
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Opportunity Publisher Action Create New Account screen',
			executionStatus: 'Executing',
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Account Name field to Automation',
					executionStatus: 'Executed',
				},
			],
		},
	},
	customDate: {
		xpath: "//label[normalize-space(.)='Custom Date']/parent::div/following-sibling::div//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Custom Date (Custom_Date__c)',
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Today link the Custom Date field',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Today link the Custom Date field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfToday'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	approved: {
		xpath: "//label[normalize-space(.)='Approved']/parent::div/following-sibling::div//input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Approved (ProvarQS__Approved__c)',
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Approved field',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Approved field'],
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
	type: {
		xpath: "//span[contains(normalize-space(.),'--None--')]/select",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Type (Type)',
		},
		modificationParameter: {
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 3,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set By Index the Type picklist to 3',
				executionStatus: 'Executed',

			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Type picklist to 3'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	parentAcc: {
		xpath: "//label[normalize-space(.)='Parent Account']/parent::div/following-sibling::div//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Parent Account (ParentId)',
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Lookup the Parent Account reference',
			executionStatus: 'Executed',
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Lookup the Parent Account reference'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfLookup'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	parentAccName: {
		xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Account Name (Name)',
		},
		executionStatus: [{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Account Lookup screen',
			executionStatus: 'Executing',
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click the Account Name button',
					executionStatus: 'Executed',
				},
			],
		}],
		testCaseXML: [{
			name: ['UiWithScreen'],
			title: ['On SF Account Lookup screen'],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Click the Account Name button'],
							arguments: [{
								argument: comparisonUtils.addCompareOptions([{
									id: ['interaction'],
									value: [{
										uri: ['ui:interaction?name=action'],
									}],
								}], { partial: true, indexKey: 'id' }),
							}],
						}],
					}],
				}],
			}],
		}],
	},
	createBt: {
		xpath: "//input[@id='publishersharebutton']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Create (publishersharebutton)',
		},
		testCaseXML: [{
			"title": [
				"Click the Create button"
			]
		}],
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Create button',
				executionStatus: 'Executed',

			},
		],
	},
};