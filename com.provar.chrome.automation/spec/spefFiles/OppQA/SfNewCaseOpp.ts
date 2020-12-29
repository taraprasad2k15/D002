import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewCaseOpp = {
    newCaseButton: {
        Xpath: "//button[normalize-space(.)='New Case'] | //div[normalize-space(.)='New Case']",
        interactionParameters:{
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
				text: 'Click the New Case button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the New Case button'],
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
    contactName: {
        XpathInput: "//span[normalize-space(.)='Contact Name']/../following-sibling::div//input",
		XpathLookup: "//span[normalize-space(.)='Contact Name']/../following-sibling::div//span[contains(@title, 'in Contacts')]",
		Value: "LastName",
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: 'Set',
                    settings:{
                        value : 'AutomationC',
                    },
                },
            },
            lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: 'AutomationC',
					},
				},
			},
        },
        executionStatus: {
			lookup: {
				"name": "UiWithScreen",
				"type": "Icon-ExecutingChildPaused",
				"text": "On SF Opportunity Publisher Action New Case screen",
				"executionStatus": "Executing",
				"successfulCount": 0,
				"children": [
					{
						"name": "UiDoAction",
						"type": "Icon-Successful",
						"text": "Lookup the Contact Name reference to AutomationC",
						"executionStatus": "Executed",
						"successfulCount": 1,
					},
					{
						"name": "UiWithScreen",
						"type": "Icon-ExecutingPaused",
						"text": "On SF Contact Lookup screen",
						"executionStatus": "Executing",
						"successfulCount": 0,
						"children": [
							{
								"name": "UiDoAction",
								"type": "Icon-Successful",
								"text": "Set the Search text to AutomationC",
								"executionStatus": "Executed",
								"successfulCount": 1,
							},
							{
								"name": "UiDoAction",
								"type": "Icon-Successful",
								"text": "Click the Go! button",
								"executionStatus": "Executed",
								"successfulCount": 1,
							}
						]
					}
				]
			},
			set: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
                "text": 'Set the Search text to AutomationC',
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0
            }],
        },
        testCaseXML: {
			"title": [
				"On SF Opportunity Publisher Action New Case screen"
			],
			"arguments": [
				{
					"argument": [
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regmain",
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
								"target"
							],
							"value": [
								{
									"class": [
										"uiTarget"
									],
									"uri": [
										"sf:ui:target?object=Opportunity&action=QuickAction&quickAction=NewCase"
									]
								}
							]
						},
						{
							"id": [
								"navigate"
							],
							"value": [
								{
									"text": "Dont",
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
								"targetDescription"
							],
							"value": [
								{
									"text": "On SF Opportunity Publisher Action New Case screen",
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
								"windowSelection"
							],
							"value": [
								{
									"text": "Default",
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
								"windowSize"
							],
							"value": [
								{
									"text": "Default",
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
								"closeWindow"
							]
						},
						{
							"id": [
								"captureBefore"
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
								"sfUiTargetObjectId"
							],
							"value": [
								{
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						}
					]
				}
			],
			"clauses": [
				{
					"clause": [
						{
							"steps": [
								{
									"apiCall": [
										{
											"title": [
												"Lookup the Contact Name reference to AutomationC"
											],
											"arguments": [
												{
													"argument": [
														{
															"id": [
																"locator"
															],
															"value": [
																{
																	"class": [
																		"uiLocator"
																	],
																	"uri": [
																		"ui:locator?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId"
																	]
																}
															]
														},
														{
															"id": [
																"interaction"
															],
															"value": [
																{
																	"class": [
																		"uiInteraction"
																	],
																	"uri": [
																		"ui:interaction?name=sfLookup"
																	]
																}
															]
														},
														{
															"id": [
																"value"
															],
															"value": [
																{
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
																"captureBefore"
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
																"beforeWait"
															],
															"value": [
																{
																	"class": [
																		"uiWait"
																	],
																	"uri": [
																		"default"
																	]
																}
															]
														},
														{
															"id": [
																"afterWait"
															],
															"value": [
																{
																	"class": [
																		"uiWait"
																	],
																	"uri": [
																		"default"
																	]
																}
															]
														},
														{
															"id": [
																"interactionDescription"
															],
															"value": [
																{
																	"text": "Lookup the Contact Name reference to AutomationC",
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
																"autoRetry"
															]
														}
													]
												}
											],
										},
										{
											"title": [
												"On SF Contact Lookup screen"
											],
											"arguments": [
												{
													"argument": [
														{
															"id": [
																"uiConnectionName"
															],
															"value": [
																{
																	"text": "Regmain",
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
																"target"
															],
															"value": [
																{
																	"class": [
																		"uiTarget"
																	],
																	"uri": [
																		"sf:ui:target?lookup=Contact"
																	]
																}
															]
														},
														{
															"id": [
																"navigate"
															],
															"value": [
																{
																	"text": "Dont",
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
																"targetDescription"
															],
															"value": [
																{
																	"text": "On SF Contact Lookup screen",
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
																"windowSelection"
															],
															"value": [
																{
																	"text": "Default",
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
																"windowSize"
															],
															"value": [
																{
																	"text": "Default",
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
																"closeWindow"
															]
														},
														{
															"id": [
																"captureBefore"
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
														}
													]
												}
											],
											"clauses": [
												{
													"clause": [
														{
															"steps": [
																{
																	"apiCall": [
																		{
																			"title": [
																				"Set the Search text to AutomationC"
																			],
																			"arguments": [
																				{
																					"argument": [
																						{
																							"id": [
																								"locator"
																							],
																							"value": [
																								{
																									"class": [
																										"uiLocator"
																									],
																									"uri": [
																										"ui:locator?name=SearchName&path=searchFrame"
																									]
																								}
																							]
																						},
																						{
																							"id": [
																								"interaction"
																							],
																							"value": [
																								{
																									"class": [
																										"uiInteraction"
																									],
																									"uri": [
																										"ui:interaction?name=set"
																									]
																								}
																							]
																						},
																						{
																							"id": [
																								"value"
																							],
																							"value": [
																								{
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
																								"interactionDescription"
																							],
																							"value": [
																								{
																									"text": "Set the Search text to AutomationC",
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
																								"beforeWait"
																							]
																						},
																						{
																							"id": [
																								"afterWait"
																							]
																						},
																						{
																							"id": [
																								"autoRetry"
																							]
																						},
																						{
																							"id": [
																								"captureBefore"
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
																						}
																					]
																				}
																			],
																		},
																		{
																			"title": [
																				"Click the Go! button"
																			],
																			"arguments": [
																				{
																					"argument": [
																						{
																							"id": [
																								"locator"
																							],
																							"value": [
																								{
																									"class": [
																										"uiLocator"
																									],
																									"uri": [
																										"ui:locator?name=go&path=searchFrame"
																									]
																								}
																							]
																						},
																						{
																							"id": [
																								"interaction"
																							],
																							"value": [
																								{
																									"class": [
																										"uiInteraction"
																									],
																									"uri": [
																										"ui:interaction?name=action"
																									]
																								}
																							]
																						},
																						{
																							"id": [
																								"interactionDescription"
																							],
																							"value": [
																								{
																									"text": "Click the Go! button",
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
																								"beforeWait"
																							]
																						},
																						{
																							"id": [
																								"afterWait"
																							]
																						},
																						{
																							"id": [
																								"autoRetry"
																							]
																						},
																						{
																							"id": [
																								"captureBefore"
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
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			],
		},
    },
    status: {
        Xpath: "//span[normalize-space(.)='Status']/../following-sibling::div//a",
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: 'Set',
                    settings:{
                        value: 'Closed',
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Status picklist to Closed',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Status picklist to Closed'],
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
    subject: {
        Xpath: "//span[normalize-space(.)='Subject']/../following-sibling::input",
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: 'Set',
                    settings:{
                        value: 'Subject for the Automation Script New Case QA',
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Subject field to Subject for the Automation Script New Case QA',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Subject for the Automation Script New Case QA'],
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
        Xpath: "//label[normalize-space(.)='Description']/following-sibling::textarea",
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: 'Set',
                    settings:{
                        value: 'Description for the Automation Script New Case Quick Action',
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Description for the Automation Script New Case Quick Action',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Description for the Automation Script New Case Quick Action'],
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
    OppViewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Opportunity&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity View screen',
		},
    },
    NewCaseViewPSI: {
        itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=QuickAction&object=Opportunity&quickAction=NewCase',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity NewCase publisher action screen',
		},
    },
    newCase: {
        disposition: 'Existing',
        text:'New Case (NewCase)',
    },
    contactLookup:{
        disposition: 'Existing',
        text:'Contact Name (ContactId)',
    },
    statusField: {
        disposition: 'Existing',
        text: 'Status (Status)',
    },
    subjectField: {
        disposition: 'Existing',
        text: 'Subject (Subject)',
    },
    descriptionField: {
        disposition: 'Existing',
        text: 'Description (Description)',
    },
    save: {
        Xpath: "//div[contains(@class,'modal-footer')]//span[normalize-space(.)='Save']",
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
    saveButton: {
        disposition: 'Existing',
        text: 'Create (publishersharebutton)', 
    },
    contactID: {
        Xpath : "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Name button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Name button'],
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
    contactNameField:{
        disposition: 'Existing',
        text: 'Name (Name)',
    },
    contactLookupPSI: {
        itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=Contact',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact Lookup Screen',
		},
    },
}