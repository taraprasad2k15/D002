import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfContactNewEvent = {
    newEventPSI:{
        itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=QuickAction&object=Contact&quickAction=NewEvent&recordType=Employee',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact NewEvent publisher action screen',
		},
    },
    newEventTab:{
        Xpath: "//a[normalize-space(.)='New Event']",
    },
    subject:{
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
                        value: "Email",
                    },
                },
                },
            },
        executionStatus: {
            set:{
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Contact (Employee) Publisher Action New Event screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Set the Subject field to Email',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
                },
			},
        testCaseXML: {
            set:{
                name: ['UiWithScreen'],
                title: ['On SF Contact (Employee) Publisher Action New Event screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Contact&quickAction=NewEvent&recordType=Employee&action=QuickAction'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Subject field to Email'],
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
            },
    },
    description:{
        Xpath:"//label[normalize-space(.)='Description']/following-sibling::textarea | //label[(.)='Description']/following-sibling::div/textarea",
        fieldDetails:{
            disposition: "Existing",
            text: "Description (Description)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Description for the QA via Automation Script",
                    },
                },
            },
        },
        executionStatus:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Description field to Description for the QA via Automation Script',
                executionStatus: 'Executed',
                successfulCount: 1,
        }],
        testCaseXML:[{
            name: ['UiDoAction'],
            title: ['Set the Description field to Description for the QA via Automation Script'],
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
    startDate:{
        Xpath:"//legend[normalize-space(.)='*Start']/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div//input",
        fieldDetails:{
            disposition: "Existing",
            text: "Start (StartDateTime)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "18-Nov-2019 08:00",
                    },
                },
            },
        },
        executionStatus:{
            set:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Start field to 18-Nov-2019 08:00',
                executionStatus: 'Executed',
                successfulCount: 1,
                }],
        },
        testCaseXML:[{
            name: ['UiDoAction'],
            title: ['Set the Start field to 18-Nov-2019 08:00'],
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
    endDate:{
        Xpath:"//legend[normalize-space(.)='*End']/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div//input",
        fieldDetails:{
            disposition: "Existing",
            text: "End (EndDateTime)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "18-Nov-2019 18:00",
                    },
                },
            },
        },
        executionStatus:{
            set:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the End field to 18-Nov-2019 18:00',
                executionStatus: 'Executed',
                successfulCount: 1,
                }],
        },
        testCaseXML:[{
            name: ['UiDoAction'],
            title: ['Set the End field to 18-Nov-2019 18:00'],
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
    relatedTo:{
        Xpath:"(//label[normalize-space(.)='Related To']/following-sibling::div//input)[2]|//div[contains(@class,'active')]//span[normalize-space(.)='Related To']/../following-sibling::div//input",//some sf change
        XpathProvar:"//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Related To')]/ancestor::div[1]//input",
        fieldDetails:{
            disposition: "Existing",
            text: "Related To (WhatId)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "AutomationAccount",
                    },
                },
            },
        },
        executionStatus:{
            set:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Related To reference to AutomationAccount',
                executionStatus: 'Executed',
                successfulCount: 1,
                }],
        },
        testCaseXML:[{
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
    contactName:{
        Xpath:"(//div[contains(@class,'active')]//span[normalize-space(.)='Name']/../following-sibling::div//ul/li/a)[2]|//div[contains(@class,'active')]//span[normalize-space(.)='Name']/../following-sibling::div//span[@class='pillText']",//some sf change
        fieldDetails:{
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        interactionParameters:{
            readAssert:{
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
												"WhoId"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=WhoId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhoId"
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
																	"text": "AutomationContact",
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
    saveButton:{
        Xpath: "//div[@id='activityPanelContainer']//div/button[normalize-space(.)='Save']",
        XpathProvar:"//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//div[contains(@class, 'bottomBar') or contains(@class, 'slds-modal__footer')]//button[contains(@class, 'publisherShareButton')]",
        fieldDetails:{
            disposition: "Existing",
            text: "Create (publishersharebutton)",
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
    activityTabSubject:{
		Xpath: "//a[contains(@class,'subjectLink') and (.)='Email']",
		fieldDetails:{
			disposition: "Existing",
			text: "Subject (subject)",
		},
		interactionParameters:{
			readAssert:{
				interactionParameters:{
					id: 'Read/Assert',
                    settings: {
                        extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "text": "On SF Contact (Employee) Activity Timeline screen",
            "executionStatus": "Executing",
            "successfulCount": 0,
            "children": [
                {
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": /With.*/,
                    "executionStatus": "Executing",
                    "successfulCount": 0,
                    "children": [
                        {
                            "name": "UiAssert",
                            "type": "Icon-Successful",
                            "text": "UI Assert",
                            "executionStatus": "Executed",
                            "successfulCount": 1,
                        }
                    ]
                }
            ]
        },
		testCaseXML:{
			"title": [
				"On SF Contact (Employee) Activity Timeline screen"
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
                                        "sf:ui:target?object=Contact&recordType=Employee&action=ActivityTimeline"
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
									"text": "On SF Contact (Employee) Activity Timeline screen",
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
												/With.*/
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
																"locator"
															],
															"value": [
																{
																	"class": [
																		"uiLocator"
																	],
																	"uri": [
																		"sf:ui:locator:row?table=pastActivity%2FpastActivityTimeline"
																	]
																}
															]
														},
														{
															"id": [
																"uiRowLocator"
															],
															"value": [
																{
																	"class": [
																		"eq"
																	],
																	"lhs": [
																		{
																			"class": [
																				"variable"
																			],
																			"path": [
																				{
																					"element": [
																						"subject"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
																		{
																			"text": "Email",
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
														},
														{
															"id": [
																"locatorDescription"
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
																"failIfNotFound"
															],
															"value": [
																{
																	"text": "true",
																	"class": [
																		"value"
																	],
																	"valueClass": [
																		"boolean"
																	]
																}
															]
														},
														{
															"id": [
																"debugRowLocator"
															]
														},
														{
															"id": [
																"resultName"
															],
															"value": [
																{
																	"text": "Row",
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
																	"text": "Local",
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
																												"subject"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=subject&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3Dsubject"
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
																																	"text": "Email",
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
	activityTimelinePSI:{
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Contact&recordType=Employee&action=ActivityTimeline',
			itemTypeId: 'SfLayoutUiTargetExtension', 
		},
		pageDetails: {
			title: 'Contact Activity timeline screen',
		},
	},
}