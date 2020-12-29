import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();
export const SfContactAccountRL = {
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
		xpath: "//span[@title='Accounts']/ancestor::article//a[@title='New']",
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Accounts New button",
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
				"Click the Accounts New button"
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
											"ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3DNew%26relationship%3DAccounts__r"
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
										"text": "Click the Accounts New button",
										"class": [
											"value"
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
	accName: {
		xpath: "//header//span[normalize-space()='Accounts']/ancestor::article//div/h3//a",
		testCaseXMLAssertion: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				/With Accounts__r rows {ACCOUNT_NAME = \"Acc.*/
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(    [
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regression",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=View%2FAccounts__r%2FAccounts__rTable"
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
													"ACCOUNT_NAME"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": /Acc.*/,
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
								"text": /With Accounts__r rows {ACCOUNT_NAME = \"Acc.*/,
								"class": [
									"value"
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
																				"ACCOUNT_NAME"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=ACCOUNT_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DACCOUNT.NAME%26relationship%3DAccounts__r"
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
																									"text": /Acc.*/,
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
		}],
		executionStatusAssertion:
			[
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: /With Accounts__r rows {ACCOUNT_NAME = \"Acc.*/,
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
			],
	},
	billingCity: {
		xpath: "//span[@title='Accounts']/ancestor::article//li//div[contains(@title,'Billing City:')]/following-sibling::div/span",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Billing City',
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
														"ACCOUNT_ADDRESS1_CITY"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ACCOUNT_ADDRESS1_CITY&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DACCOUNT.ADDRESS1_CITY%26relationship%3DAccounts__r"
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
																			"text": "CA",
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
														"ACCOUNT_ADDRESS1_CITY"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ACCOUNT_ADDRESS1_CITY&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DACCOUNT.ADDRESS1_CITY%26relationship%3DAccounts__r"
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
																			"text": "Billing City",
																			"class": [
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
	phone: {
		xpath: "//span[@title='Accounts']/ancestor::article//li//div[contains(@title,'Phone:')]/following-sibling::div",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Phone',
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
														"ACCOUNT_PHONE1"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ACCOUNT_PHONE1&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DACCOUNT.PHONE1%26relationship%3DAccounts__r"
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
														"ACCOUNT_PHONE1"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ACCOUNT_PHONE1&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DACCOUNT.PHONE1%26relationship%3DAccounts__r"
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
																			"text": "Phone",
																			"class": [
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
	delete: {
		clickAndCancel: {
			interactionParameters: {
				id: 'Click and Cancel',
			},
		},
	},
	editActionButton: {
		Xpath: "//a[contains(@role,'menuitem') and normalize-space(.)='Edit']",
		XpathCX: "(//a[normalize-space(.)='Edit'])[2]",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Accounts Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Accounts Edit button'],
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
		Xpath: "//a[contains(@role,'menuitem') and normalize-space(.)='Delete']",
		XpathCX: "//a[normalize-space(.)='Del']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click and Cancel the Accounts Delete button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click and Cancel the Accounts Delete button'],
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
		xpath: "//article//h2//a[contains(normalize-space(.),'Accounts')]",
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
															"Accounts__r"
														],
														"fieldLocator": [
															{
																"uri": [
																	"ui:locator?name=Accounts__r&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26relationship%3DAccounts__r"
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
                            , { partial: true, indexKey: 'id' }),
                        }
                    ],
                }],
	},
	viewAll: {
		xpath: "//h2//a[contains(normalize-space(.),'Accounts')]/ancestor::article//span[text()='View All']",
		click: {
			interactionParameters: {
				id: 'Click',
			},
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Accounts Go To List button",
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
				"Click the Accounts Go To List button"
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
											"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3DGoToList%26relationship%3DAccounts__r"
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
										"text": "Click the Accounts Go To List button",
										"class": [
											"value"
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