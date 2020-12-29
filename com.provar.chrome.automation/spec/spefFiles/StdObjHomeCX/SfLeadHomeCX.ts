import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfLeadHomeCX = {
	selectRow:{
		Xpath: "(//tr/td//input[@type='checkbox'])[1]",
		interactionParameters: {
			interactionParameters: {
			id: 'Check',
			settings: {
				value: true,
			},
		}},
		executionStatus: [
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
						"text": "Check the Select Row rowSelectionCheckbox",
						"executionStatus": "Executed",
						"successfulCount": 1,
					}
				]
			},
		],
		testCaseXML: [
			{
				name: ['UiWithRow'],
				arguments: [{
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
										"sf:ui:locator:row?table=ObjectHome%2Frecent%2FrecentTable"
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
														"Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "AutomationLead",
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
					], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Check the Select Row rowSelectionCheckbox'],
								arguments: [{
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
														"ui:locator?name=SelectRow"
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
														"ui:interaction?name=check"
													]
												}
											]
										},
										], { partial: true, indexKey: 'id' }),
								}],
							},
							],
						}],
					}],
				}],
			}],
	},
	name: {
		Xpath: "//table/tbody/tr/th/a[(.)='AutomationLead']",
		interactionParameters: {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}},
		executionStatusAssert: [{
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
		}],
		executionStatusAssertColumn: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
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
										"sf:ui:locator:row?table=ObjectHome%2Frecent%2FrecentTable"
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
														"Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "AutomationLead",
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
																				"Name"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DName"
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
																									"text": "AutomationLead",
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
		}],
		testCaseXMLAssertColumn: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"columnAssertions"
						],
						"value": [
							{
								"uiColumnAssertion": [
									{
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DName"
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
																"text": "Name",
																"class": [
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
		}],
	},
	title: {
		Xpath: "(//tbody/tr//td/span)[3]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=LEAD_TITLE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DTitle'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	company: {
		Xpath: "(//table//tbody/tr//td[(.)='Provar'])[1]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=LEAD_COMPANY&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DCompany'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Provar',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	phone: {
		Xpath: "(//table/tbody/tr/td[contains(@class,'PhoneNumber') and (.)='+91-998 877 6655'])[1]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=LEAD_PHONE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DPhone'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: '+91-998 877 6655',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	email: {
		Xpath: "(//tbody/tr//td/span)[6]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=LEAD_EMAIL&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DEmail'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	leadStatus: {
		Xpath: "(//tbody/tr//td/span)[7]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=LEAD_STATUS&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DStatus'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Nurturing',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	ownerAlias: {
		Xpath: "(//tbody/tr//td/span)[8]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=CORE_USERS_ALIAS&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DUser%26field%3DAlias'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: /.*/,
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
};