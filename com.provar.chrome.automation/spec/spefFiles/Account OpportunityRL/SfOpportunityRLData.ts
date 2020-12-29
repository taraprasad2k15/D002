import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();
export const SfAccountOpportunityRL = {
	executionStatusAssertion: [{
		"name": "UiAssert",
		"type": "Icon-Successful",
		"text": "UI Assert",
		"executionStatus": "Executed",
		"successfulCount": 1,
	}],
	valueAssertion: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			}
		},
	},
	newBtn: {
		xpath: "//header//span[normalize-space()='Opportunities']/ancestor::header/following-sibling::div//div[@title='New']",
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Opportunities New button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Opportunities New button"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
											"ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DNew%26relationship%3DOpportunities"
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
									"hover"
								],
								"value": [
									{
										"text": "false",
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
										"text": "Click the Opportunities New button",
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
						], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
	oppName: {
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Opportunity Name", FieldType.Text),
		xpathView: "//header//span[normalize-space()='Opportunities']/ancestor::article//div/h3//a",
		set: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "{oppName}",
				}
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: "On SF Opportunity New screen",
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: /Set the Opportunity Name field to Opp.*/,
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXML:
		{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],

			"title": [
				"On SF Opportunity New screen"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
											"sf:ui:target?object=Opportunity&action=New&noOverride=true"
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
										"text": "On SF Opportunity New screen",
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
									"sfUiTargetResultName"
								],
								"value": [
									{
										"text": "opportunityId",
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
									"sfUiTargetResultScope"
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
							}
						], { partial: true, indexKey: 'id' }),
				}
			],
			"clauses": [
				{
					"clause": [
						{
							"name": [
								"substeps"
							],

							"steps": [
								{
									"apiCall": [
										{
											"apiId": [
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],

											"title": [
												"Set the Opportunity Name field to {oppName}"
											],
											"arguments": [
												{
													argument: comparisonUtils.addCompareOptions(
														[
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
																			"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DName"
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
																			"variable"
																		],
																		"path": [
																			{
																				"element": [
																					"oppName"
																				]
																			}
																		]
																	}
																]
															},
															{
																"id": [
																	"blur"
																],
																"value": [
																	{
																		"text": "false",
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
																	"pressEnter"
																],
																"value": [
																	{
																		"text": "false",
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
																		"text": "Set the Opportunity Name field to {oppName}",
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
														], { partial: true, indexKey: 'id' }),
												}
											],

										}
									]
								}
							]
						}
					]
				}
			]
		},
		testCaseXMLAssertion:{
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Account (Default) View screen"
            ],
            "arguments": [
                {
                    argument: comparisonUtils.addCompareOptions(
						[
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
											"sf:ui:target?object=Account&action=View&recordType=Default&noOverride=true"
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
										"text": "On SF Account (Default) View screen",
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
						], { partial: true, indexKey: 'id' }),
                }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
                                            ],
                                            "name": [
                                                "UiWithRow"
                                            ],
                                            "title": [
                                                /With Opportunities rows {OPPORTUNITY_NAME = \"Opp.*/
                                            ],
                                            "arguments": [{
                                                argument: comparisonUtils.addCompareOptions(  [
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
																	"sf:ui:locator:row?table=View%2FOpportunities%2FOpportunitiesTable"
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
																					"OPPORTUNITY_NAME"
																				]
																			}
																		]
																	}
																],
																"rhs": [
																	{
																		"text": /Opp.*/,
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
																"text": /With Opportunities rows {OPPORTUNITY_NAME = \"Opp.*/,
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
												], { partial: true, indexKey: 'id' }),
                                            }],
                                            "clauses": [
                                                {
                                                    "clause": [
                                                        {
                                                            "name": [
                                                                "substeps"
                                                            ],

                                                            "steps": [
                                                                {
                                                                    "apiCall": [
                                                                        {
                                                                            "apiId": [
                                                                                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
                                                                            ],
                                                                            "name": [
                                                                                "UiAssert"
                                                                            ],
                                                                            "title": [
                                                                                "UI Assert"
                                                                            ],
                                                                            "arguments": [{
                                                                                argument: comparisonUtils.addCompareOptions(
																					[
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
																												"OPPORTUNITY_NAME"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=OPPORTUNITY_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.NAME%26relationship%3DOpportunities"
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
																																	"text": /Opp.*/,
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
																					], { partial: true, indexKey: 'id' }),
                                                                            }],


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
        },
		executionStatusAssertion:  {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Account (Default) View screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: /With Opportunities rows {OPPORTUNITY_NAME = \"Opp.*/,
                    executionStatus: "Executing",
                    successfulCount: 0,
                    children: [
                        {
                            name: 'UiAssert',
                            type: 'Icon-Successful',
                            text: 'UI Assert',
                            executionStatus: 'Executed',
                            successfulCount: 1,
                        },
                    ]
                }
            ]
        },
	},
	stage: {
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Stage", FieldType.Picklist),
		xpathView: "//span[@title='Opportunities']/ancestor::article//li//div[contains(@title,'Stage:')]/following-sibling::div/span",
		columnAssertion: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: false,
                    assertColumnAttributes: true,
                    extractColumnAttributes: true,
                    expectedAttributes: {
                        columnHeaderText: {
                            value: 'Stage',
                            caseSensitive: true,
                            normalise: true,
                        },
                        columnVisible: {
                            value: true,
                        },
                    },
                },
            }
        },
		set: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Qualification",
				}
			},
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Stage picklist to Qualification"
				],
				"arguments": [
					{
						argument: comparisonUtils.addCompareOptions(
							[
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
												"ui:locator?name=StageName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DStageName"
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
											"text": "Qualification",
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
										"blur"
									],
									"value": [
										{
											"text": "false",
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
										"pressEnter"
									],
									"value": [
										{
											"text": "false",
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
											"text": "Set the Stage picklist to Qualification",
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Stage picklist to Qualification",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLAssertion:
		[{
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
								argument: comparisonUtils.addCompareOptions(
									[
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
																"OPPORTUNITY_STAGE_NAME"
															],
															"fieldLocator": [
																{
																	"uri": [
																		"ui:locator?name=OPPORTUNITY_STAGE_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.STAGE_NAME%26relationship%3DOpportunities"
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
																					"text": "Qualification",
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
								, { partial: true, indexKey: 'id' }),
							}
						],
					}],
		testCaseXMLColumn:
					[{
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
											argument: comparisonUtils.addCompareOptions(
												[
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
															"columnAssertions"
														],
														"value": [
															{
																"class": [
																	"valueList"
																],
																"mutable": [
																	"Mutable"
																],
																"uiColumnAssertion": [
																	{
																		"resultName": [
																			"OPPORTUNITY_STAGE_NAME"
																		],
																		"fieldLocator": [
																			{
																				"uri": [
																					"ui:locator?name=OPPORTUNITY_STAGE_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.STAGE_NAME%26relationship%3DOpportunities"
																				]
																			}
																		],
																		"attributeAssertions": [
																			{
																				"uiAttributeAssertion": [
																					{
																						"attributeName": [
																							"columnHeaderText"
																						],
																						"comparisonType": [
																							"EqualTo"
																						],
																						"normalize": [
																							"true"
																						],
																						"value": [
																							{
																								"text": "Stage",
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
																						"attributeName": [
																							"columnVisible"
																						],
																						"comparisonType": [
																							"EqualTo"
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
															"fieldAssertions"
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
											, { partial: true, indexKey: 'id' }),
										}
									],
								}],

	},
	closeDate: {
		xpath: "//label/span[normalize-space(.)='Close Date']/../following-sibling::div/input",
		Xpath1: "//label[contains((.),'Close Date')]/following-sibling::div/input",
		xpathView: "//li//div[contains(@title,'Close Date:')]/following-sibling::div/span",
		set: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "{DateAdd(TODAY)}",
				}
			},
		},
		columnAssertion: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: false,
                    assertColumnAttributes: true,
                    extractColumnAttributes: true,
                    expectedAttributes: {
                        columnHeaderText: {
                            value: 'Close Date',
                            caseSensitive: true,
                            normalise: true,
                        },
                        columnVisible: {
                            value: true,
                        },
                    },
                },
            }
        },
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: /Set the Close Date field to .*/,
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Close Date field to {DateAdd(TODAY)}"
				],
				"arguments": [
					{
						argument: comparisonUtils.addCompareOptions(
							[
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
												"ui:locator?name=CloseDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DCloseDate"
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
												"funcCall"
											],
											"id": [
												"DateAdd"
											],
											"argument": [
												{
													"id": [
														"date"
													],
													"value": [
														{
															"class": [
																"variable"
															],
															"path": [
																{
																	"element": [
																		"TODAY"
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
										"blur"
									],
									"value": [
										{
											"text": "false",
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
										"pressEnter"
									],
									"value": [
										{
											"text": "false",
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
											"text": "Set the Close Date field to {DateAdd(TODAY)}",
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
			testCaseXMLAssertion:
			[{
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
									argument: comparisonUtils.addCompareOptions(
									[
									 
									]
									, { partial: true, indexKey: 'id' }),
								}
							],
						}],
						testCaseXMLColumn:
					[{
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
											argument: comparisonUtils.addCompareOptions(
												[
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
															"columnAssertions"
														],
														"value": [
															{
																"class": [
																	"valueList"
																],
																"mutable": [
																	"Mutable"
																],
																"uiColumnAssertion": [
																	{
																		"resultName": [
																			"OPPORTUNITY_CLOSE_DATE"
																		],
																		"fieldLocator": [
																			{
																				"uri": [
																					"ui:locator?name=OPPORTUNITY_CLOSE_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.CLOSE_DATE%26relationship%3DOpportunities"
																				]
																			}
																		],
																		"attributeAssertions": [
																			{
																				"uiAttributeAssertion": [
																					{
																						"attributeName": [
																							"columnHeaderText"
																						],
																						"comparisonType": [
																							"EqualTo"
																						],
																						"normalize": [
																							"true"
																						],
																						"value": [
																							{
																								"text": "Close Date",
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
																						"attributeName": [
																							"columnVisible"
																						],
																						"comparisonType": [
																							"EqualTo"
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
															"fieldAssertions"
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
											, { partial: true, indexKey: 'id' }),
										}
									],
								}],
	},
	amount: {
		xpathView: "//li//div[contains(@title,'Amount:')]/following-sibling::div/span",
		columnAssertion: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: false,
                    assertColumnAttributes: true,
                    extractColumnAttributes: true,
                    expectedAttributes: {
                        columnHeaderText: {
                            value: 'Amount',
                            caseSensitive: true,
                            normalise: true,
                        },
                        columnVisible: {
                            value: true,
                        },
                    },
                },
            }
        },
			testCaseXMLAssertion:
			[{
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
									argument: comparisonUtils.addCompareOptions(
									[
									 
									]
									, { partial: true, indexKey: 'id' }),
								}
							],
						}],
						testCaseXMLColumn:
					[{
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
											argument: comparisonUtils.addCompareOptions(
												[
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
															"columnAssertions"
														],
														"value": [
															{
																"class": [
																	"valueList"
																],
																"mutable": [
																	"Mutable"
																],
																"uiColumnAssertion": [
																	{
																		"resultName": [
																			"OPPORTUNITY_AMOUNT"
																		],
																		"fieldLocator": [
																			{
																				"uri": [
																					"ui:locator?name=OPPORTUNITY_AMOUNT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.AMOUNT%26relationship%3DOpportunities"
																				]
																			}
																		],
																		"attributeAssertions": [
																			{
																				"uiAttributeAssertion": [
																					{
																						"attributeName": [
																							"columnHeaderText"
																						],
																						"comparisonType": [
																							"EqualTo"
																						],
																						"normalize": [
																							"true"
																						],
																						"value": [
																							{
																								"text": "Amount",
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
																						"attributeName": [
																							"columnVisible"
																						],
																						"comparisonType": [
																							"EqualTo"
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
															"fieldAssertions"
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
											, { partial: true, indexKey: 'id' }),
										}
									],
								}],
	},
	save: {
		xpath: "//span[normalize-space()='Save']",
		Xpath1: "//button[normalize-space()='Save']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Save (save)'
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Save button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Save button"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
					    [
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
											"ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26action%3Dsave"
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
									"hover"
								],
								"value": [
									{
										"text": "false",
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
										"text": "Click the Save button",
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
						], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
	campaignName: {
		xpath: "//span[@title='Campaign History']/../../../../../following-sibling::div//th//a",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Campaign Name',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		testCaseXMLColumn:
			[{
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
						argument: comparisonUtils.addCompareOptions(
							[
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
										"columnAssertions"
									],
									"value": [
										{
											"class": [
												"valueList"
											],
											"mutable": [
												"Mutable"
											],
											"uiColumnAssertion": [
												{
													"resultName": [
														"CAMPAIGN_NAME"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=CAMPAIGN_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.NAME%26relationship%3DCampaignMembers"
															]
														}
													],
													"attributeAssertions": [
														{
															"uiAttributeAssertion": [
																{
																	"attributeName": [
																		"columnHeaderText"
																	],
																	"comparisonType": [
																		"EqualTo"
																	],
																	"normalize": [
																		"true"
																	],
																	"value": [
																		{
																			"text": "Campaign Name",
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
																	"attributeName": [
																		"columnVisible"
																	],
																	"comparisonType": [
																		"EqualTo"
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
										"fieldAssertions"
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
							], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Contact (Employee) View screen"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
											"sf:ui:target?object=Contact&action=View&noOverride=true&recordType=Employee"
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
										"text": "On SF Contact (Employee) View screen",
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
						], { partial: true, indexKey: 'id' }),
				}
			],
			"clauses": [
				{
					"clause": [
						{
							"name": [
								"substeps"
							],

							"steps": [
								{
									"apiCall": [
										{
											"apiId": [
												"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
											],
											"name": [
												"UiWithRow"
											],
											"title": [
												"With View/CampaignMembers/CampaignMembersTable {CAMPAIGN_NAME = \"AutomationCampaign\"}"
											],
											"arguments": [{
												argument: comparisonUtils.addCompareOptions([
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
																	"sf:ui:locator:row?table=View%2FCampaignMembers%2FCampaignMembersTable"
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
																					"CAMPAIGN_NAME"
																				]
																			}
																		]
																	}
																],
																"rhs": [
																	{
																		"text": "AutomationCampaign",
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
																"text": "With View/CampaignMembers/CampaignMembersTable {CAMPAIGN_NAME = \"AutomationCampaign\"}",
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
												], { partial: true, indexKey: 'id' }),
											}],
											"clauses": [
												{
													"clause": [
														{
															"name": [
																"substeps"
															],

															"steps": [
																{
																	"apiCall": [
																		{
																			"apiId": [
																				"com.provar.plugins.forcedotcom.core.ui.UiAssert"
																			],
																			"name": [
																				"UiAssert"
																			],
																			"title": [
																				"UI Assert"
																			],
																			"arguments": [{
																				argument: comparisonUtils.addCompareOptions(
																					[
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
																												"CAMPAIGN_NAME"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=CAMPAIGN_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.NAME%26relationship%3DCampaignMembers"
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
																																	"text": "AutomationCampaign",
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
																					], { partial: true, indexKey: 'id' }),
																			}],
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
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Contact (Employee) View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: "With View/CampaignMembers/CampaignMembersTable {CAMPAIGN_NAME = \"AutomationCampaign\"}",
					executionStatus: "Executing",
					successfulCount: 0,
					children: [
						{
							name: 'UiAssert',
							type: 'Icon-Successful',
							text: 'UI Assert',
							executionStatus: 'Executed',
							successfulCount: 1,
						},
					]
				}
			]
		}
	},

	type: {
		xpath: "//span[@title='Campaign History']/../../../../../following-sibling::div//td[2]/span",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Type',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		testCaseXMLColumn:
			[{
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
						argument: comparisonUtils.addCompareOptions(
							[
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
										"columnAssertions"
									],
									"value": [
										{
											"class": [
												"valueList"
											],
											"mutable": [
												"Mutable"
											],
											"uiColumnAssertion": [
												{
													"resultName": [
														"CAMPAIGN_CAMPAIGN_TYPE"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=CAMPAIGN_CAMPAIGN_TYPE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.CAMPAIGN_TYPE%26relationship%3DCampaignMembers"
															]
														}
													],
													"attributeAssertions": [
														{
															"uiAttributeAssertion": [
																{
																	"attributeName": [
																		"columnHeaderText"
																	],
																	"comparisonType": [
																		"EqualTo"
																	],
																	"normalize": [
																		"true"
																	],
																	"value": [
																		{
																			"text": "Type",
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
																	"attributeName": [
																		"columnVisible"
																	],
																	"comparisonType": [
																		"EqualTo"
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
										"fieldAssertions"
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
							], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML:
			[{
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
						argument: comparisonUtils.addCompareOptions([
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
													"CAMPAIGN_CAMPAIGN_TYPE"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=CAMPAIGN_CAMPAIGN_TYPE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.CAMPAIGN_TYPE%26relationship%3DCampaignMembers"
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
																		"text": "Advertisement",
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
						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	delete: {
		clickAndCancel: {
			interactionParameters: {
				id: 'Click and Cancel',
			},
		},
	},
	editActionButton: {
		Xpath: "//a[normalize-space(.)='Edit']",
		XpathCX: "(//a[normalize-space(.)='Edit'])[2]",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Opportunities Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Opportunities Edit button'],
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
	deleteActionButton: {
		Xpath: "//a[normalize-space(.)='Delete']",
		XpathCX: "//a[normalize-space(.)='Del']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click and Cancel the Opportunities Delete button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click and Cancel the Opportunities Delete button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=actionWithCancel'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	heading: {
		xpath: "//article//h2//a[contains(normalize-space(.),'Opportunities')]",
		rowCount: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					assertTableAttributes: true,
					extractTableAttributes: true,
					expectedAttributes: {
						displayRowCount: {
							value: 1,
						},
						totalRowCount: {
							value: 1,
						},
					},
				}
			},
		},
		rowcountAssertionXML: [{
			"name": [
				"UiAssert"
			],
			"title": [
				"UI Assert"
			],
			"arguments": [
				{
					"argument":      [
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
												"Opportunities"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Opportunities&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26relationship%3DOpportunities"
													]
												}
											],
											"attributeAssertions": [
												{
													"uiAttributeAssertion": [
														{
															"attributeName": [
																"displayRowCount"
															],
															"comparisonType": [
																"EqualTo"
															],
															"value": [
																{
																	"text": "1",
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
															"attributeName": [
																"totalRowCount"
															],
															"comparisonType": [
																"EqualTo"
															],
															"value": [
																{
																	"text": "1",
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
															"attributeName": [
																"value"
															],
															"comparisonType": [
																"None"
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
		}],

	},
	viewAll: {
		xpath: "//span[text()='View All']",
		click: {
			interactionParameters: {
				id: 'Click',
			},
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Opportunities Go To List button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Opportunities Go To List button"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
											"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DGoToList%26relationship%3DOpportunities"
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
									"hover"
								],
								"value": [
									{
										"text": "false",
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
										"text": "Click the Opportunities Go To List button",
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
						], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
}