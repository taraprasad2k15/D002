
export const CaseRL = {
	newButton: {
		Xpath: "//span[@title='Cases']/../../../../following-sibling::div//a[@role='button']/div[(.)='New']",
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Cases New button",
			"executionStatus": "Executed",
			"successfulCount": 1,
			"failureCount": 0,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Cases New button"
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
										"ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26action%3DNew%26relationship%3DCases__r"
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
									"text": "Click the Cases New button",
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
		}],
	},
	cancelButtonOnNew: {
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Case New screen",
            "executionStatus": "Executing",
            "successfulCount": 0,
            "failureCount": 0,
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Click the Cancel button",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                    "failureCount": 0,
                }
            ]
        },
		testCaseXML: {
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Case New screen"
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
										"sf:ui:target?object=Case&action=New&noOverride=true"
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
									"text": "On SF Case New screen",
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
									"text": "caseId",
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
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click the Cancel button"
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
																		"ui:locator?name=cancel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3Dcancel"
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
																	"text": "Click the Cancel button",
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
	caseNumber: {
		Xpath: "//span[@title='Cases']/../../../../../following-sibling::div//a[contains(@class,'outputLookupLink') and @title='']",
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "text": "On SF Provar Custom Obj (Default Layout) View screen",
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
                        },                        
                    ]
                }
            ]
        },
		testCaseXML: {
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Provar Custom Obj (Default Layout) View screen"
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
										"sf:ui:target?object=Provar_Custom_Obj__c&action=View&recordType=Default+Layout&noOverride=true"
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
									"text": "On SF Provar Custom Obj (Default Layout) View screen",
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
									"text": /.*/,
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
											"name": [
												"UiWithRow"
											],
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
																		"sf:ui:locator:row?table=View%2FCases__r%2FCases__rTable"
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
																						"CASES_CASE_NUMBER"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
																		{
																			"text": /[0-9]{8}/,
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
																	"text": /With.*/,
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
																												"CASES_CASE_NUMBER"
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
																																	"text": /[0-9]{8}/,
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
																		},
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
	subject: {
		Xpath: "//span[@title='Cases']/../../../../../following-sibling::div//ul[contains(@class,'itemRows')]/li[1]//a",
		testCaseXML: [{
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
												"CASES_SUBJECT"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=CASES_SUBJECT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCASES.SUBJECT%26relationship%3DCases__r"
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
																	"text": "Testing Case RL on PCO",
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
		}],
		assertColumnInteractionParameter:{
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					extractColumnAttributes: true,
					assertColumnAttributes: true,					
					expectedAttributes: {
						columnVisible: {
							value: true,
						},
						columnHeaderText: {
							value: 'Subject',
							caseSensitive: true,
							normalise: true,
						},
					},
				}
			},	
		},
		assertColumntestcaseXML:[{
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
												"CASES_SUBJECT"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=CASES_SUBJECT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCASES.SUBJECT%26relationship%3DCases__r"
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
																	"text": "Subject",
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
				}
			]
		}],
	},
	dateTimeOpened: {
		Xpath: "//span[@title='Cases']/../../../../../following-sibling::div//ul[contains(@class,'itemRows')]/li[2]//span[@class='uiOutputDateTime']",
		testCaseXML: [{
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
												"CASES_CREATED_DATE"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=CASES_CREATED_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCASES.CREATED_DATE%26relationship%3DCases__r"
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
	priority: {
		Xpath: "//span[@title='Cases']/../../../../../following-sibling::div//ul[contains(@class,'itemRows')]/li[3]//span",
		testCaseXML: [{
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
												"CASES_PRIORITY"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=CASES_PRIORITY&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCASES.PRIORITY%26relationship%3DCases__r"
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
																	"text": "Medium",
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
		}],
	},
	editButton: {
		Xpath: "//div[contains(@class,'visible')]//li[@class='uiMenuItem']/a/div[(.)='Edit']",
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Cases Edit button",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"name": [
				 "UiDoAction"
			 ],
			 "title": [
				 "Click the Cases Edit button"
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
									 "text": "Click the Cases Edit button",
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
		 }],
	},
	cancelButtonOnEdit: {
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Case Edit screen",
            "executionStatus": "Executing",
            "successfulCount": 0,
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Click the Cancel button",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                }
            ]
        },
		testCaseXML: {
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Case Edit screen"
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
										"sf:ui:target?object=Case&action=Edit&noOverride=true"
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
									"text": "On SF Case Edit screen",
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
									"text": /.*/,
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
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click the Cancel button"
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
																		"ui:locator?name=cancel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3Dcancel"
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
																	"text": "Click the Cancel button",
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
	deleteButton: {
		Xpath: "//div[contains(@class,'visible')]//li[@class='uiMenuItem']/a/div[(.)='Delete']",
		interactionParameters: {
			interactionParameters:{
				id: 'Click and Cancel',
			},
		},
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "text": "On SF Provar Custom Obj (Default Layout) View screen",
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
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Click and Cancel the Cases Delete button",
                            "executionStatus": "Executed",
                            "successfulCount": 1,
                        }
                    ]
                }
            ]
        },
		testCaseXML: {
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Provar Custom Obj (Default Layout) View screen"
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
									"text": "On SF Provar Custom Obj (Default Layout) View screen",
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
									"text": /.*/,
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
											"name": [
												"UiWithRow"
											],
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
																		"sf:ui:locator:row?table=View%2FCases__r%2FCases__rTable"
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
																						"CASES_CASE_NUMBER"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
																		{
																			"text": /[0-9]{8}/,
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
																	"text": /With.*/,
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
																			"name": [
																				"UiDoAction"
																			],
																		   "title": [
																				"Click and Cancel the Cases Delete button"
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
																										"ui:interaction?name=actionWithCancel"
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
																									"text": "Click and Cancel the Cases Delete button",
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
	viewAllButton: {
		Xpath: "//span[@title='Cases']/../../../../../following-sibling::a//span[@class='view-all-label']",
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Cases Go To List button",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Cases Go To List button"
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
										"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26action%3DGoToList%26relationship%3DCases__r"
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
									"text": "Click the Cases Go To List button",
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
		}],
	},
	rowcountAssertionXML:[{
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
											"Cases__r"
										],
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=Cases__r&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26relationship%3DCases__r"
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
};