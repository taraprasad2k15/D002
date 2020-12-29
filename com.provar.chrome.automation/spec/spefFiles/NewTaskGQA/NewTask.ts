import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const NewTaskData = {
    NewTaskViewPSI: {
        itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'NewTask publisher action screen',
		},
    },
    subject: {
        Xpath: "//label[normalize-space(.)='Subject']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Send Quote",
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Subject field to Send Quote',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Send Quote'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							id: ['interaction'],
							value: [{
								uri: ['ui:interaction?name=set'],
							}],
						}], { partial: true, indexKey: 'id' }),
			}],
		}],
    },
    dueDate: {
        Xpath: "//label[normalize-space(.)='Due Date']/following-sibling::div//input",
        fieldDetails:{
            disposition: "Existing",
            text: "Due Date (ActivityDate)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "30/11/2019"
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Due Date field to 2019-11-30',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Due Date field to 2019-11-30'],
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
    accountLookup: {
        Xpath: "//div[contains(@class,'active')]//span[normalize-space(.)='Related To']/../following-sibling::div//input",
        XpathU: "//div[contains(@class,'active')]//input[@class='slds-input slds-combobox__input']",
        XpathInpUpdated: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Related To')]/ancestor::div[1]//input",
		XpathLookup: "//span[contains(@title,'in Accounts')]",
		XpathDeleteIcon: "//label[(.)='Related To']/following-sibling::div//span[contains(@class,'deleteIcon')]",
		XpathProvar: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Related To')]/ancestor::div[1]",
        fieldDetails:{
            disposition: "Existing",
            text: "Related To (WhatId)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "{AccountName}"
                    },
                },
            },
            lookup: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: "{AccountName}",
					},
				},
			},
        },
        executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Lookup the Related To reference to AutomationAPIAccount',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Account Lookup screen',
					executionStatus: 'Executing',
					successfulCount: 0,
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Set the Search text to AutomationAPIAccount',
							executionStatus: 'Executed',
							successfulCount: 1,
						},
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Click the Go! button',
							executionStatus: 'Executed',
							successfulCount: 1,
						},
					],
                },
			],
        },
        testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Related To reference to {AccountName}'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['interaction'],
							value: [{
								uri: ['ui:interaction?name=sfLookup'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
				},
				{
					name: ['UiWithScreen'],
					title: ['On SF Account Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=Account'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to {AccountName}'],
									arguments: [{
										argument: comparisonUtils.addCompareOptions([
											{
												id: ['interaction'],
												value: [{
													uri: ['ui:interaction?name=set'],
												}],
											}], { partial: true, indexKey: 'id' }),
									}],
								},
								{
									name: ['UiDoAction'],
									title: ['Click the Go! button'],
									arguments: [{
										argument: comparisonUtils.addCompareOptions([
											{
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
    },
    accountName: {
        Xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
        fieldDetails:{
            disposition: "Existing",
            text: "Account Name (Name)",
        },
        fieldParameters:{
            fieldName: 'Account Name (Name)',
            rowLocator: {
                value: 1,
                type: 'useRowIndex',
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Account Name button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
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
    },
    save: {
		Xpath: "//button[contains(@class,'publisherShareButton')]/span[normalize-space(.)='Save']",
		fieldDetails:{
            disposition: 'Existing',
            text: 'Create (publishersharebutton)', 
        },
        interactionParameters: {
            click:{
                interactionParameters:{
                    id: 'Click',
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Create button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Create button'],
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
	relatedTo: {
        Xpath: "//span[normalize-space(.)='Related To']/../following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Related To (WhatId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "AutomationAccount",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Related To reference to AutomationAccount',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Related To reference to AutomationAccount'],
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
    contactName: {
        Xpath: "//span[normalize-space(.)='Name']/../following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "AutomationAccount",
                    },
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Name reference to AutomationAccount',
                executionStatus: 'Executed',
            },
        ],
        testCaseXML:[{
            name: ['UiDoAction'],
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
    assignedTo: {
        Xpath: "//span[normalize-space(.)='Assigned To']/../following-sibling::div//span[@class='pillText']",
        fieldDetails: {
            disposition: "Existing",
            text: "Assigned To (OwnerId)",
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML:[{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiAssert"
			],
			"name": [
				"UiAssert"
			],
			"title": [
				"UI Assert"
			],
			"arguments": [
				{
					"argument": [
						{
							"id": [
								"resultName"
							],
							"value": [
								{
									"text": "Values",
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						},
						{
							"id": [
								"resultScope"
							],
							"value": [
								{
									"text": "Test",
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						},
						{
							"id": [
								"fieldAssertions"
							],
							"value": [
								{
									"class": [
										"valueList"
									],
									"mutable": [
										"Mutable"
									],
									"uiFieldAssertion": [
										{
											"resultName": [
												"OwnerId"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=OwnerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DOwnerId"
													]
												}
											],
											"attributeAssertions": [
												{
													"uiAttributeAssertion": [
														{
															"attributeName": [
																"value"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": /.*/,
																	"class": [
																		"value"
																	],
																	"valueClass": [
																		"string"
																	]
																}
															]
														},
													]
												}
											]
										}
									]
								}
							]
						},
						{
							"id": [
								"captureAfter"
							],
							"value": [
								{
									"text": "false",
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						},
						{
							"id": [
								"columnAssertions"
							],
							"value": [
								{
									"class": [
										"valueList"
									],
									"mutable": [
										"Mutable"
									]
								}
							]
						},
						{
							"id": [
								"pageAssertions"
							],
							"value": [
								{
									"class": [
										"valueList"
									],
									"mutable": [
										"Mutable"
									]
								}
							]
						},
						{
							"id": [
								"beforeWait"
							]
						},
						{
							"id": [
								"autoRetry"
							]
						}
					]
				}
			]
		}],
    },
}