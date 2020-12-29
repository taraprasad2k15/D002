import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfAccountLogACallConsole = {
    logACallPSI:{
        itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=QuickAction&object=Account&quickAction=LogACall&recordType=Default',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account LogACall publisher action screen',
		},
    },
    logACallTab:{
        Xpath: "//div[contains(@class,'SMALL uiTabset')]//li[not(contains(@class,'active'))]//span[normalize-space(.)='Log a Call']",
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
                        value: "Send Letter",
                    },
                },
                },
            },
        executionStatus: {
            set:{
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Account (Default) Publisher Action Log a Call screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Set the Subject field to Send Letter',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
                },
			},
        testCaseXML: {
            set:{
                name: ['UiWithScreen'],
                title: ['On SF Account (Default) Publisher Action Log a Call screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Account&quickAction=LogACall&recordType=Default&action=QuickAction'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Subject field to Send Letter'],
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
    comments:{
        Xpath:"//textarea[contains(@class,'uiInputTextArea')]",
        fieldDetails:{
            disposition: "Existing",
            text: "Comments (Description)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Comments for the QA via Automation Script",
                    },
                },
            },
        },
        executionStatus:{
            set:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Comments field to Comments for the QA via Automation Script',
                executionStatus: 'Executed',
                successfulCount: 1,
                }],
        },
        testCaseXML:[{
            name: ['UiDoAction'],
            title: ['Set the Comments field to Comments for the QA via Automation Script'],
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
		Xpath:"//label[normalize-space(.)='Related To']/following-sibling::div//a[contains(@class,'pill')]",
		XpathProvar: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Related To')]/ancestor::div[1]//input",
        fieldDetails:{
            disposition: "Existing",
            text: "Related To (WhatId)",
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
												"WhatId"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=WhatId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DWhatId"
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
																	"text": "AutomationAccount",
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
    contactName:{
		Xpath:"//label[normalize-space(.)='Name']/following-sibling::div//input",
		XpathProvar:"//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Name')]/ancestor::div[1]//input",
        fieldDetails:{
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "{LastName}",
                    },
                },
            },
        },
        executionStatus:{
            set:[{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the Name reference to.*/,
                executionStatus: 'Executed',
                successfulCount: 1,
                }],
        },
        testCaseXML:[{
            name: ['UiDoAction'],
            title: ['Set the Name reference to {LastName}'],
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
    saveButton:{
		Xpath: "(//div/button[normalize-space(.)='Save'])[last()]",
		XpathProvar: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//div[contains(@class, 'bottomBar') or contains(@class, 'slds-modal__footer')]//button[contains(@class, 'publisherShareButton')]",
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
		Xpath: "//a[normalize-space(.)='Send Letter' or contains(class,'subjectLink')]",
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
            "text": "On SF Account (Default) Activity Timeline screen",
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
				"On SF Account (Default) Activity Timeline screen"
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
										"sf:ui:target?object=Account&action=ActivityTimeline&recordType=Default"
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
									"text": "On SF Account (Default) Activity Timeline screen",
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
																			"text": "Send Letter",
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
																																	"text": "Send Letter",
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
			uiTargetUri: 'sf:ui:target?object=Account&recordType=Default&action=ActivityTimeline',
			itemTypeId: 'SfLayoutUiTargetExtension', 
		},
		pageDetails: {
			title: 'Account Activity timeline screen',
		},
	},
}