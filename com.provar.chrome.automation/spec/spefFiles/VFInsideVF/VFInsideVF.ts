import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const VFTestcase = {
	VFPSI: {
		new: {
			"itemDefinition": {
				"itemClass": "Page",
				"itemTypeId": "VfUiTargetExtension",
				"disposition": "New",
				"embedded": false,
			},
			"pageDetails": {
				"title": /.*/,
			}
		},
		existing: {
			"itemDefinition": {
				"itemClass": "Page",
				"itemTypeId": "VfUiTargetExtension",
				"disposition": "Existing",
				"embedded": false,
			},
			"pageDetails": {
				"title": /.*/,
			}
		}
	},
	caseOriginSet: {
		Xpath: "(//th[normalize-space(.)='Case Origin']/following-sibling::td/select)",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "choice",
			},
			"disposition": "New",
			"fieldName": "caseOrigin",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Phone',
				},
			}
		},
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF VFInsideVF page with pageobject VF Inside VF",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": "Set the Case Origin select to Phone",
					"executionStatus": "Executed",
					"successfulCount": 1,
				}
			]
		},
		testCaseXML: {
			"title": [
				"On SF VFInsideVF page with pageobject VF Inside VF"
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
									"text": "On SF VFInsideVF page with pageobject VF Inside VF",
									"class": [
										"value"
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
												"Set the Case Origin select to Phone"
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
																		"ui:locator?name=caseOrigin"
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
																	"text": "Set the Case Origin select to Phone",
																	"class": [
																		"value"
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
		},
	},
	caseOrigin: {
		Xpath: "(//th[normalize-space(.)='Case Origin']/following-sibling::td/select)",
		fieldDetails: {
			"disposition": "Existing",
			"fieldName": "caseOrigin",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 4,
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set By Index the Case Origin select to 4",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set By Index the Case Origin select to 4"
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
										"ui:locator?name=caseOrigin"
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
										"ui:interaction?name=setByIndex"
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
									"text": "4",
									"class": [
										"value"
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
									"text": "Set By Index the Case Origin select to 4",
									"class": [
										"value"
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
	subject: {
		Xpath: "//th[normalize-space(.)='Subject']/following-sibling::td/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "subject",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test VF page via automation script',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Subject field to Test VF page via automation script",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Subject field to Test VF page via automation script"
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
										"ui:locator?name=subject"
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
									"text": "Test VF page via automation script",
									"class": [
										"value"
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
									"text": "Set the Subject field to Test VF page via automation script",
									"class": [
										"value"
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
	description: {
		Xpath: "//th[normalize-space(.)='Description']/following-sibling::td/textarea",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "description",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Short description',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Description field to Short description",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Description field to Short description"
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
										"ui:locator?name=description"
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
									"text": "Short description",
									"class": [
										"value"
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
									"text": "Set the Description field to Short description",
									"class": [
										"value"
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
	customCheckbox: {
		Xpath: "//th[normalize-space(.)='Escalated']/following-sibling::td/input[@type='checkbox']",
		fieldDetailsNew: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "boolean",
			},
			"disposition": "New",
			"fieldName": "escalated",
		},
		fieldDetailsExisting: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "boolean",
			},
			"disposition": "Existing",
			"fieldName": "escalated",
		},
		interactionParameters: {
			check: {
				interactionParameters: {
					id: 'Check',
				}
			},
			uncheck: {
				interactionParameters: {
					id: 'Uncheck',
				}
			},
			toggle: {
				interactionParameters: {
					id: 'Toggle',
				}
			},
		},
		executionStatus: {
			check: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Check the Escalated field",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
			uncheck: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Uncheck the Escalated field",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
			toggle: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Toggle the Escalated field",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
		},
		testCaseXML: {
			check: [{
				"title": [
					"Check the Escalated field"
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
											"ui:locator?name=escalated"
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
										"text": "Check the Escalated field",
										"class": [
											"value"
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
			uncheck: [{
				"title": [
					"Uncheck the Escalated field"
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
											"ui:locator?name=escalated"
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
											"ui:interaction?name=uncheck"
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
										"text": "Uncheck the Escalated field",
										"class": [
											"value"
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
			toggle: [{
				"title": [
					"Toggle the Escalated field"
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
											"ui:locator?name=escalated"
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
											"ui:interaction?name=toggle"
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
										"text": "Toggle the Escalated field",
										"class": [
											"value"
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
	},
	customTime: {
		Xpath: "//th[normalize-space(.)='Custom Time Field']/following-sibling::td/span/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customTimeField",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '23:30',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Time Field field to 23:30",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Time Field field to 23:30"
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
										"ui:locator?name=customTimeField"
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
									"text": "23:30",
									"class": [
										"value"
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
									"text": "Set the Custom Time Field field to 23:30",
									"class": [
										"value"
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
	customRichText: {
		Xpath: "//div[contains(@class,'cke_contents ')]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "textAreaDelegate_Custom_Rich_text_Field__c",
		},interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Adding text into Rich-Text field',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Text Area Delegate_ Custom_ Rich_text_ Field__c field to Adding text into Rich-Text field',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Text Area Delegate_ Custom_ Rich_text_ Field__c field to Adding text into Rich-Text field'],
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
	customPicklistSelect: {
		Xpath: "//select[contains(@title,'Available')]/optgroup/option[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "choice",
			},
			"disposition": "New",
			"fieldName": "customPicklistMulti",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Select',
				settings: {
					value: 'Red',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": /Multi-Select the Custom Picklist.*/,
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				/Multi-Select the Custom Picklist.*/
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
										"ui:locator?name=customPicklistMulti"
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
										"ui:interaction?name=sfSelect"
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
									"text": /Multi-Select the Custom Picklist.*/,
									"class": [
										"value"
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
	customPicklistDeselect: {
		Xpath: "//select[contains(@title,'Chosen')]//option[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"disposition": "Existing",
			"fieldName": "customPicklistMulti",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Deselect',
				settings: {
					value: 'Red',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
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
										"ui:locator?name=customPicklistMulti"
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
										"ui:interaction?name=sfDeselect"
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
									"class": [
										"value"
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
	customDate: {
		Xpath: "//th[normalize-space(.)='Custom Date Field']/following-sibling::td/span[contains(@class,'dateOnlyInput')]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customDateField",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01-01-2019',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Date Field field to 01-01-2019",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Date Field field to 01-01-2019"
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
										"ui:locator?name=customDateField"
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
									"text": "01-01-2019",
									"class": [
										"value"
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
									"text": "Set the Custom Date Field field to 01-01-2019",
									"class": [
										"value"
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
	customDateTime: {
		Xpath: "//th[normalize-space(.)='Custom Date-Time Field']/following-sibling::td/span/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customDateTimeField",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01-01-2019 13:13',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Date Time Field field to 01-01-2019 13:13",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Date Time Field field to 01-01-2019 13:13"
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
										"ui:locator?name=customDateTimeField"
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
									"text": "01-01-2019 13:13",
									"class": [
										"value"
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
									"text": "Set the Custom Date Time Field field to 01-01-2019 13:13",
									"class": [
										"value"
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
	customRadioButton: {
		Xpath: "(//input[@type='radio'])[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "boolean",
			},
			"disposition": "New",
			"fieldName": "one",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Check',
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Check the One field",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Check the One field"
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
										"ui:locator?name=one"
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
									"text": "Check the One field",
									"class": [
										"value"
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
	parentCase: {
		Xpath: "//th[normalize-space(.)='Parent Case']/following-sibling::td/span[@class='lookupInput']/a",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "parentCase",

		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Lookup the Parent Case field",
			"executionStatus": "Executed",
			"successfulCount": 1,
			"failureCount": 0,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Lookup the Parent Case field"
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
										"ui:locator?name=parentCase"
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
									"text": "Lookup the Parent Case field",
									"class": [
										"value"
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
			]
		}],
	},
	caseNumber: {
		Xpath: "//table/tbody/tr[2]/th/a",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "parentCase",

		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Case button",
			"executionStatus": "Executed",
		}],
		testCaseXML: [{
			"title": [
				"Click the Case button"
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
									"text": "Click the Case button",
									"class": [
										"value"
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
	searchbox: {
		Xpath: "//div[@class='pBody']//input[@type='text']",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: "{CaseNumber}",
					pressEnter: true,
				},
			}
		},
		executionStatus: [{
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF Case Lookup screen",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": /Set the Search text to .*/,
					"executionStatus": "Executed",
				}
			]
		}],
		testCaseXML: [{
			"title": [
				"On SF Case Lookup screen"
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
										"sf:ui:target?lookup=Case"
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
									"text": "On SF Case Lookup screen",
									"class": [
										"value"
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
												"Set the Search text to {CaseNumber}"
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
																		"variable"
																	],
																	"path": [
																		{
																			"element": [
																				"CaseNumber"
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
																	"text": "Set the Search text to {CaseNumber}",
																	"class": [
																		"value"
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
		}],
	},
	customCurrency: {
		Xpath: "//th[normalize-space(.)='Custom Currency']/following-sibling::td/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customCurrency",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'INR',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Currency field to INR",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Currency field to INR"
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
										"ui:locator?name=customCurrency"
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
									"text": "INR",
									"class": [
										"value"
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
									"text": "Set the Custom Currency field to INR",
									"class": [
										"value"
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
	customNumber: {
		Xpath: "//th[normalize-space(.)='Custom Number']/following-sibling::td[1]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customNumber",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '69',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Number field to 69",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Number field to 69"
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
										"ui:locator?name=customNumber"
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
									"text": "69",
									"class": [
										"value"
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
									"text": "Set the Custom Number field to 69",
									"class": [
										"value"
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
	customMobile:{
		Xpath: "//th[normalize-space(.)='Custom Mobile']/following-sibling::td[1]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customMobile",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '9988776655',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Mobile field to 9988776655",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Mobile field to 9988776655"
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
										"ui:locator?name=customMobile"
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
									"text": "9988776655",
									"class": [
										"value"
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
									"text": "Set the Custom Mobile field to 9988776655",
									"class": [
										"value"
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
	customURL:{
		Xpath: "//th[normalize-space(.)='Custom URL']/following-sibling::td[1]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customURL",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'www.provartesting.com',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom URL field to www.provartesting.com",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom URL field to www.provartesting.com"
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
										"ui:locator?name=customURL"
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
									"text": "www.provartesting.com",
									"class": [
										"value"
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
									"text": "Set the Custom URL field to www.provartesting.com",
									"class": [
										"value"
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
	webEmail:{
		Xpath: "//th[normalize-space(.)='Web Email']/following-sibling::td[1]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "webEmail",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'sample@provartesting.com',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Web Email field to sample@provartesting.com",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Web Email field to sample@provartesting.com"
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
										"ui:locator?name=webEmail"
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
									"text": "sample@provartesting.com",
									"class": [
										"value"
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
									"text": "Set the Web Email field to sample@provartesting.com",
									"class": [
										"value"
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
	customPercent:{
		Xpath: "//th[normalize-space(.)='Custom Percent']/following-sibling::td[1]/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customPercent",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '97',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Percent field to 97",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Percent field to 97"
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
										"ui:locator?name=customPercent"
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
									"text": "97",
									"class": [
										"value"
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
									"text": "Set the Custom Percent field to 97",
									"class": [
										"value"
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
	internalComments:{
		Xpath: "//th[normalize-space(.)='Internal Comments']/following-sibling::td/textarea",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "internalComments",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test VF page via automation script',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Internal Comments field to Test VF page via automation script",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Internal Comments field to Test VF page via automation script"
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
										"ui:locator?name=internalComments"
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
									"text": "Test VF page via automation script",
									"class": [
										"value"
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
									"text": "Set the Internal Comments field to Test VF page via automation script",
									"class": [
										"value"
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
	accountName:{
		Xpath: "//th[normalize-space(.)='Account Name']/following-sibling::td/span/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "accountName",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Sample Account',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Account Name field to Sample Account",
			"executionStatus": "Executed",
		}],
		testCaseXML: [{
			"title": [
				"Set the Account Name field to Sample Account"
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
										"ui:locator?name=accountName"
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
									"text": "Sample Account",
									"class": [
										"value"
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
									"text": "Set the Account Name field to Sample Account",
									"class": [
										"value"
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
};