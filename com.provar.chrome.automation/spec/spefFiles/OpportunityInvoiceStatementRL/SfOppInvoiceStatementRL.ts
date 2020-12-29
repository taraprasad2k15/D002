import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfOppInvoiceStatementRLData = {
	assertInteractionParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}
	},
	executionStatusAssert: [{
		"name": "UiAssert",
		"type": "Icon-Successful",
		"text": "UI Assert",
		"executionStatus": "Executed",
		"successfulCount": 1,
	}],
	rowLocators: [
		{
			"label": "Invoice Number (NAME)",
			"selected": true,
			"value": /INV-[0-9]{5}$/
		},
	],
	invoiceNumber: {
		xpath: "//h3[normalize-space()='Invoice Statements']/ancestor::div[@class='pbHeader']/following-sibling::div[@class='pbBody']//th/a",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Invoice Number',
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

		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Opportunity View screen"
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
									"target"
								],
								"value": [
									{
										"class": [
											"uiTarget"
										],
										"uri": [
											"sf:ui:target?object=Opportunity&action=View"
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
										"text": "On SF Opportunity View screen",
										"class": [
											"value"
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
												/With Invoice_Statements__r rows {NAME = \"INV-.*/
											],
											"arguments": [{
												argument: comparisonUtils.addCompareOptions([
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
																	"sf:ui:locator:row?table=View%2FInvoice_Statements__r%2FInvoice_Statements__rTable"
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
																					"NAME"
																				]
																			}
																		]
																	}
																],
																"rhs": [
																	{
																		"text": /INV-.*/,
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
																"text": /With Invoice_Statements__r rows {NAME = \"INV-.*/,
																"class": [
																	"value"
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
																												"NAME"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DNAME%26relationship%3DInvoice_Statements__r"
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
																																	"text": /INV-.*/,
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
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Opportunity View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: /With Invoice_Statements__r rows {NAME = \"INV-.*/,
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
		testCaseXML1:
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
														"NAME"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DNAME%26relationship%3DInvoice_Statements__r"
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
																			"text": "Invoice Number",
																			"class": [
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
	saveBtn: {
		xpath: "//h2[normalize-space()='Invoice Statement Edit']/ancestor::div[contains(@class,'bPageBlock')]//input[@title='Save']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Save (save)',
		},
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Invoice Statement New screen"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions([
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
								"target"
							],
							"value": [
								{
									"class": [
										"uiTarget"
									],
									"uri": [
										"sf:ui:target?object=Invoice_Statement__c&action=New"
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
									"text": "On SF Invoice Statement New screen",
									"class": [
										"value"
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
									"text": "invoice_Statement__cId",
									"class": [
										"value"
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
												"Click the Save button"
											],
											"arguments": [
												{
													argument: comparisonUtils.addCompareOptions([
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
																		"ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DInvoice_Statement__c%26action%3Dsave"
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
			type: 'Icon-ExecutingPaused',
			text: 'On SF Invoice Statement New screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Save button",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
	},
	newBtn: {
		xpath: "//input[@value='New Invoice Statement']",
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Invoice Statements New button"
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
												"ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26action%3DNew%26relationship%3DInvoice_Statements__r"
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
											"text": "Click the Invoice Statements New button",
											"class": [
												"value"
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
			text: "Click the Invoice Statements New button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	cancelButtonOnEdit: {
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF Case Comment Edit screen",
			"executionStatus": "Executing",
			"successfulCount": 0,
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": "Click the Cancel Button button",
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
				"On SF Case Comment Edit screen"
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
										"sf:ui:target?object=CaseComment&action=Edit&noOverride=true"
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
									"text": "On SF Case Comment Edit screen",
									"class": [
										"value"
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
												"Click the Cancel Button button"
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
																		"ui:locator?name=cancelButton"
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
																	"text": "Click the Cancel Button button",
																	"class": [
																		"value"
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
		interactionParameters: {
			interactionParameters: {
				id: 'Click and Cancel',
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click and Cancel the Invoice Statements Delete button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click and Cancel the Invoice Statements Delete button'],
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
		xpath: "//h3[normalize-space()='Invoice Statements']",
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
														"Invoice_Statements__r"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Invoice_Statements__r&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26relationship%3DInvoice_Statements__r"
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
	editBtn:{
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Invoice Statements Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Invoice Statements Edit button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	}
};