
export const PriceBookRL = {
	PSI: {},
	addToPriceBookButton: {
		Xpath: "//a[normalize-space(.)='Add to Price Book']",
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF Product View screen",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": "Click the Price Books Add to Price Book button",
					"executionStatus": "Executed",
				}
			]
		},
		testCaseXML: {
			"title": [
				"On SF Product View screen"
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
												"Click the Price Books Add to Price Book button"
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
	priceBookName: {
		Xpath: "//a[starts-with(text(),'Standard')]",
		executionStatus: [
			{
				"name": "UiWithRow",
				"type": "Icon-ExecutingPaused",
				"text": /With.*/,
				"executionStatus": "Executing",
				"children": [
					{
						"name": "UiAssert",
						"type": "Icon-Successful",
						"text": "UI Assert",
						"executionStatus": "Executed"
					}
				]
			}
		],
		testCaseXML: [
			{
				"title": [
					/With.*/
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
																					"Pricebook2_Name"
																				],
																				"fieldLocator": [
																					{
																						"uri": [
																							
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
		],
	},
	listPrice: {
		Xpath: "//td/span[contains(text(),'89') and @class='forceOutputCurrency']",
		Xpath2: "//label[normalize-space(.)='List Price*']/following-sibling::input",
		testCaseXML: [
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
													"UnitPrice"
												],
												"fieldLocator": [
													{
														"uri": [
															
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
																		"text": "£89.00",
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
		testCaseXML2:[{
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
												"UnitPrice"
											],
											"fieldLocator": [
												{
													"uri": [
														
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
																	"text": "89",
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
		assertColumnInteractionParameter: {
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
							value: 'List Price',
							caseSensitive: true,
							normalise: true,
						},
					},
				}
			},
		},
		assertColumntestcaseXML: [{
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
												"UnitPrice"
											],
											"fieldLocator": [
												{
													"uri": [
														
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
																	"text": "List Price",
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
	active: {
		Xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//td[3]//img",
		Xpath2:"//label[normalize-space(.)='Active']/following-sibling::input[@type='checkbox']",
		testCaseXML: [
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
													"IsActive"
												],
												"fieldLocator": [
													{
														"uri": [
															
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
																		"text": "true",
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
		testCaseXML2:[{
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
												"IsActive"
											],
											"fieldLocator": [
												{
													"uri": [
														
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
																	"text": "true",
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
		}]
	},
	useStandardPrice: {
		Xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//td[2]//img",
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
														"ui:locator?name=CASES_PRIORITY&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCASES.PRIORITY%26relationship%3DCases"
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
			"name": "UiWithRow",
			"type": "Icon-ExecutingPaused",
			"text": /With.*/,
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": "Click the Price Books Edit button",
					"executionStatus": "Executed",
				}
			]
		}],
		testCaseXML: [{
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
														"Pricebook2_Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "Standard Price Book",
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
												"Click the Price Books Edit button"
											],
										}
									]
								}
							]
						}
					]
				}
			]
		}],
	},
	cancelButtonOnEdit: {
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF Price Book Entry Edit screen",
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
			"title": [
				"On SF Price Book Entry Edit screen"
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
												"Click the Cancel button"
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
			interactionParameters: {
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
					"text": /With View.*CASES_CASE_NUMBER.*/,
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
												/With View.*CASES_CASE_NUMBER.*/
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
																		"sf:ui:locator:row?table=View%2FCases%2FCasesTable"
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
																	"text": /With View.*CASES_CASE_NUMBER.*/,
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
		Xpath: "//span[@class='view-all-label']",
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
										"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26action%3DGoToList%26relationship%3DCases"
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
	rowcountAssertionXML: [{
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
											"PricebookEntries"
										],
										"fieldLocator": [
											{
												"uri": []
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
	pricebook: {
		Xpath: "//label[normalize-space(.)='Price Book']/following-sibling::select",
		modificationParameter: {
			interactionParameters: {
				id: 'Set By Index',
				settings:{
					value:2
				}
			}
		},
		testCaseXML: {
			"title": [
				"On SF Price Book Choose Pricebook screen"
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
												"Set By Index the Price Book select to 2"
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
		executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Price Book Choose Pricebook screen",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Set By Index the Price Book select to 2",
                    "executionStatus": "Executed"
                }
            ]
        }
	},
	currency: {
		Xpath: "//label[normalize-space(.)='Currency']/following-sibling::select",
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings:{
					value:'GBP'
				}
			}
		},
		testCaseXML: [{
			"title": [
				"Set the Currency field to GBP"
			],
		}],
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Currency field to GBP",
			"executionStatus": "Executed"
		}]
	},
	nextButton: {
		Xpath: "//button[normalize-space(.)='Next']",
		testCaseXML: [{
			"title": [
				"Click the Save button"
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
										"ui:locator?name=save"
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
					]
				}
			],
		}],
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Save button",
			"executionStatus": "Executed",
		}]
	},
	productName:{
		Xpath:"//label[.='Product*']/following-sibling::div//ul/li/a//span[starts-with(text(),'AutomationAPI')]",
		testCaseXML:{
			"title": [
				"On SF Price Book Entry New screen"
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
																				"Product2Id"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						
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
		executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Price Book Entry New screen",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiAssert",
                    "type": "Icon-Successful",
                    "text": "UI Assert",
                    "executionStatus": "Executed",
                }
            ]
        }
	}
};