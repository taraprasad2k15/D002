import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { MiscUtils, ScreenType, FieldType } from '../../support/MiscUtil';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
const miscUtilsObj: MiscUtils = new MiscUtils();

export const FSLPopUpsData = {
	appointmentPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Appointment',
		},
	},
	optimizePopUpPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Optimize',
		},
	},
	schedulePopUpPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Schedule',
		},
	},
	dispatchPopUpPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Dispatch',
		},
	},
	unschedulePopUpPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Unschedule',
		},
	},
	frame: "//iframe[contains(@name, 'vfFrameId_')]",
	rowLocators: [
		{
			"label": "Appointment Number (appointmentNumber)",
			"selected": true,
			"value": /SA-.*/,
		},
		{
			"label": "Status (status)",
			"selected": false,
			"value": 'None',
		},
		{
			"label": "Earliest Start Permitted (earliestStartPermitted)",
			"selected": false,
			"value": /.*/,
		},
	],
	executionStatus: [{
		name: 'UiAssert',
		type: 'Icon-Successful',
		text: 'UI Assert',
		executionStatus: 'Executed',
		successfulCount: 1,
	}],
	assertInteractionParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}
	},
	selectRow: {
		xpath: "//div[@id='TaskListItems']//input[@type='checkbox']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Select Row (selectRow)',
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
				],
				"name": [
					"UiWithRow"
				],
				"title": [
					/With Appointments Table {appointmentNumber = \"SA-.*/,
				],
				"arguments": [{
					argument: comparisonUtils.addCompareOptions(
						[
							{
								"id": [
									"uiConnectionName"
								],
								"value": [
									{
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:locator:row?table=appointmentsBlock%2FappointmentTable"
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
															"appointmentNumber"
														]
													}
												]
											}
										],
										"rhs": [
											{
												"text": /SA-.*/,
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
										"text": /With Appointments Table {appointmentNumber = \"SA-.*/,
										"class": [
											"value"
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
													"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
												],
												"name": [
													"UiDoAction"
												],
												"title": [
													"Check the Select Row rowSelectionCheckbox"
												],
												"arguments": [{
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
																			"ui:locator?name=selectRow"
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
																		"text": "Check the Select Row rowSelectionCheckbox",
																		"class": [
																			"value"
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

		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: /With Appointments Table {appointmentNumber = \"SA-.*/,
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Check the Select Row rowSelectionCheckbox',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
	},
	optimizeButton: {
		xpath: "//div[contains(@class,'BulkActionMenuItem')][1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Optimise (optimise)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Optimise button",
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
					"Click the Optimise button"
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
												"ui:locator?name=optimise&path=headerActionsBlock"
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
											"text": "Click the Optimise button",
											"class": [
												"value"
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
	},
	selectRowOptimize: {
		xpath: "//label[@title='Los Angeles']/preceding-sibling::input",
		xpath1: "//label[@title='San Francisco']/preceding-sibling::input",
		rowLocators: [
			{
				"label": "Territory (territory)",
				"selected": true,
				"value": "Los Angeles",
			},
		],
		rowLocators1: [
			{
				"label": "Territory (territory)",
				"selected": true,
				"value": "San Francisco",
			},
		],
		fieldDetails: {
			disposition: 'Existing',
			text: 'Select Row (selectRow)',
		},
		testCaseXMLOptimize: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Dispatcher Console Optimize view screen"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fieldService=Optimize"
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
										"text": "On SF Field Service Dispatcher Console Optimize view screen",
										"class": [
											"value"
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
												"With Territories Table {territory = \"Los Angeles\"}"
											],
											"arguments": [{
												argument: comparisonUtils.addCompareOptions(
													[
														{
															"id": [
																"uiConnectionName"
															],
															"value": [
																{
																	"text": "Regtest",
																	"class": [
																		"value"
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
																		"sf:ui:locator:row?table=territoriesTable"
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
																						"territory"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
																		{
																			"text": "Los Angeles",
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
																	"text": "With Territories Table {territory = \"Los Angeles\"}",
																	"class": [
																		"value"
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
																				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
																			],
																			"name": [
																				"UiDoAction"
																			],
																			"title": [
																				"Check the Select Row rowSelectionCheckbox"
																			],
																			"arguments": [{
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
																										"ui:locator?name=selectRow"
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
																									"text": "Check the Select Row rowSelectionCheckbox",
																									"class": [
																										"value"
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
		executionStatusOptimize: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: "On SF Field Service Dispatcher Console Optimize view screen",
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: "With Territories Table {territory = \"Los Angeles\"}",
					executionStatus: "Executing",
					successfulCount: 0,
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Check the Select Row rowSelectionCheckbox',
							executionStatus: 'Executed',
							successfulCount: 1,
						},
					]
				}
			]
		},
		executionStatusOptimize1:
			[{
				name: "UiWithRow",
				type: "Icon-ExecutingPaused",
				text: "With Territories Table {territory = \"San Francisco\"}",
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
			}],
		testCaseXMLOptimize1: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"San Francisco\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=territoriesTable"
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
													"territory"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "San Francisco",
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
								"text": "With Territories Table {territory = \"San Francisco\"}",
								"class": [
									"value"
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
																				"selectRow"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=selectRow"
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
		executionStatusDispatch1: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With Territories Table {territory = \"San Francisco\"}",
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
		}],
		executionStatusDispatch2: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With Territories Table {territory = \"Los Angeles\"}",
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
		}],
		executionStatusDispatch: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With Territories Table {territory = \"Los Angeles\"}",
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Check the Select Row rowSelectionCheckbox',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
		testCaseXMLDispatch: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"Los Angeles\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=territoriesTable"
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
														"territory"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "Los Angeles",
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
									"text": "With Territories Table {territory = \"Los Angeles\"}",
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Check the Select Row rowSelectionCheckbox"
											],
											"arguments": [{
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
																		"ui:locator?name=selectRow"
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
																	"text": "Check the Select Row rowSelectionCheckbox",
																	"class": [
																		"value"
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
		testCaseXMLDispatch1: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"San Francisco\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=territoriesTable"
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
													"territory"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "San Francisco",
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
								"text": "With Territories Table {territory = \"San Francisco\"}",
								"class": [
									"value"
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
																				"selectRow"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=selectRow"
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
		testCaseXMLDispatch2: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"Los Angeles\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=territoriesTable"
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
														"territory"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "Los Angeles",
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
									"text": "With Territories Table {territory = \"Los Angeles\"}",
									"class": [
										"value"
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
																				"selectRow"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=selectRow"
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
		testCaseXMLUnsch: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"Los Angeles\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=territoriesTable"
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
													"territory"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "Los Angeles",
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
								"text": "With Territories Table {territory = \"Los Angeles\"}",
								"class": [
									"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Check the Select Row rowSelectionCheckbox"
											],
											"arguments": [{
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
																		"ui:locator?name=selectRow"
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
																	"text": "Check the Select Row rowSelectionCheckbox",
																	"class": [
																		"value"
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
		testCaseXMLUnsch1: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"San Francisco\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=territoriesTable"
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
														"territory"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "San Francisco",
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
									"text": "With Territories Table {territory = \"San Francisco\"}",
									"class": [
										"value"
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
																				"selectRow"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=selectRow"
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
		testCaseXMLUnsch2: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With Territories Table {territory = \"Los Angeles\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=territoriesTable"
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
													"territory"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "Los Angeles",
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
								"text": "With Territories Table {territory = \"Los Angeles\"}",
								"class": [
									"value"
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
																				"selectRow"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=selectRow"
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
	},
	appointmentWithoutTerritory: {
		xpath: "//label[contains(text(),'Service Appointments without a territory')]/preceding-sibling::input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Appointments Without Territory (appointmentsWithoutTerritory)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Toggle"
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Toggle the Appointments Without Territory checkbox",
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
					"Toggle the Appointments Without Territory checkbox"
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
												"ui:locator?name=appointmentsWithoutTerritory&path=bulkOptimize"
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
											"text": "Toggle the Appointments Without Territory checkbox",
											"class": [
												"value"
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
														"appointmentsWithoutTerritory"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=appointmentsWithoutTerritory&path=bulkOptimize"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	startDate: {
		xpath: "//div[@class='bulkOptimizeOptions']/u[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Start Date (startDate)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: '{DateFormat(DateAdd(TODAY, "-2"), "d MMM yyyy")}'
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: /Set the Start Date field to .*/,
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
														"startDate"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=startDate&path=bulkOptimize"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
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
					"Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}"
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
												"ui:locator?name=startDate&path=bulkOptimize"
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
												"DateFormat"
											],
											"argument": [
												{
													"id": [
														"date"
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
																},
																{
																	"id": [
																		"amount"
																	],
																	"value": [
																		{
																			"text": "-2",
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
												},
												{
													"id": [
														"outputFormat"
													],
													"value": [
														{
															"text": "d MMM yyyy",
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
											"text": "Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}",
											"class": [
												"value"
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
		testCaseXMLDispatch:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}"
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
												"ui:locator?name=startDate&path=bulkDispatch"
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
												"DateFormat"
											],
											"argument": [
												{
													"id": [
														"date"
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
																},
																{
																	"id": [
																		"amount"
																	],
																	"value": [
																		{
																			"text": "-2",
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
												},
												{
													"id": [
														"outputFormat"
													],
													"value": [
														{
															"text": "d MMM yyyy",
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
											"text": "Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}",
											"class": [
												"value"
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
		testCaseXMLDispatch1: [{
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
													"startDate"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=startDate&path=bulkDispatch"
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
						, { partial: true, indexKey: 'id' }),
				}
			],
		}],
		testCaseXMLUnsch: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}"
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
											"ui:locator?name=startDate&path=bulkUnschedule"
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
											"DateFormat"
										],
										"argument": [
											{
												"id": [
													"date"
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
															},
															{
																"id": [
																	"amount"
																],
																"value": [
																	{
																		"text": "-2",
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
											},
											{
												"id": [
													"outputFormat"
												],
												"value": [
													{
														"text": "d MMM yyyy",
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
										"text": "Set the Start Date field to {DateFormat(DateAdd(TODAY, \"-2\"), \"d MMM yyyy\")}",
										"class": [
											"value"
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
		testCaseXMLUnsch1: [{
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
													"startDate"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=startDate&path=bulkUnschedule"
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
						, { partial: true, indexKey: 'id' }),
				}
			],
		}],

	},
	appointmentType: {
		xpath: "//div[@class='bulkOptimizeOptions']/select",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Appointment Type (appointmentType)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'Unscheduled'
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Appointment Type select to Unscheduled",
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
					"Set the Appointment Type select to Unscheduled"
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
												"ui:locator?name=appointmentType&path=bulkOptimize"
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
											"text": "Unscheduled",
											"class": [
												"value"
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
											"text": "Set the Appointment Type select to Unscheduled",
											"class": [
												"value"
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
	},
	policy: {
		xpath: "//div[@id='PolicyInOptimize']/select[@title]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Policy (policy)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set By Index",
				settings: {
					value: '3'
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set By Index the Policy select to 3",
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
					"Set By Index the Policy select to 3"
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
												"ui:locator?name=policy&path=bulkOptimize"
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
											"text": "3",
											"class": [
												"value"
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
											"text": "Set By Index the Policy select to 3",
											"class": [
												"value"
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
														"policy"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=policy&path=bulkOptimize"
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
																			"text": "GES Emergency Policy",
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
	},
	optimizeButtonPopUp: {
		xpath: "//button[text()='Optimize']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Optimize (optimize)',
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
														"optimize"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=optimize&path=bulkOptimize"
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
																			"text": "Optimize",
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

		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Optimize button"
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
												"ui:locator?name=optimize&path=bulkOptimize"
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
											"text": "Click the Optimize button",
											"class": [
												"value"
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
			text: "Click the Optimize button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	scheduleButton: {
		xpath: "//div[@title='Schedule']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Schedule (schedule)',
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Appointment view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Schedule button",
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
				"On SF Field Service Dispatcher Console Appointment view screen"
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
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:target?fieldService=Appointment"
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
									"text": "On SF Field Service Dispatcher Console Appointment view screen",
									"class": [
										"value"
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
												"Click the Schedule button"
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
																			"ui:locator?name=schedule&path=headerActionsBlock"
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
																		"text": "Click the Schedule button",
																		"class": [
																			"value"
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
	},
	scheduleMessage: {
		xpath: "//div[@class='HowManyWereScheduled']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Schedule Message (scheduleMessage)',
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Schedule view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
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
				"On SF Field Service Dispatcher Console Schedule view screen"
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
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:target?fieldService=Schedule"
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
									"text": "On SF Field Service Dispatcher Console Schedule view screen",
									"class": [
										"value"
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
																					"scheduleMessage"
																				],
																				"fieldLocator": [
																					{
																						"uri": [
																							"ui:locator?name=scheduleMessage&path=bulkSchedule"
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
																										"text": /Scheduled.*/,
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
	viewServiceAppointments: {
		xpath: "//span[text()='View Service Appointments']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'View Service Appointments (viewServiceAppointments)',
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
														"viewServiceAppointments"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=viewServiceAppointments&path=bulkSchedule"
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
																			"text": "View Service Appointments",
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
	},
	close: {
		xpath: "//span[text()='Close']",
		xpath1: "//*[@id='CloseDispatchLightbox']",
		xpath2: "//*[contains(@class,'slds-icon CloseLightbox')]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Close (close)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Close button",
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
					"Click the Close button"
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
												"ui:locator?name=close&path=bulkSchedule"
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
											"text": "Click the Close button",
											"class": [
												"value"
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
		testCaseXMLDispatch:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Close button"
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
												"ui:locator?name=close&path=bulkDispatch"
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
											"text": "Click the Close button",
											"class": [
												"value"
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
			testCaseXMLUnschedule:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Close button"
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
												"ui:locator?name=close&path=bulkUnschedule"
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
											"text": "Click the Close button",
											"class": [
												"value"
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
	},
	dispatchButton: {
		xpath: "//div[@title='Dispatch']",
		xpath1: "//button[text()='Dispatch']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Dispatch (dispatch)',
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
				"On SF Field Service Dispatcher Console Appointment view screen"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fieldService=Appointment"
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
										"text": "On SF Field Service Dispatcher Console Appointment view screen",
										"class": [
											"value"
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
												"Click the Dispatch button"
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
																			"ui:locator?name=dispatch&path=headerActionsBlock"
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
																		"text": "Click the Dispatch button",
																		"class": [
																			"value"
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
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Appointment view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click the Dispatch button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		},
		executionStatus1: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Dispatch button",
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
														"dispatch"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=dispatch&path=bulkDispatch"
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
																			"text": "Dispatch",
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
		testCaseXML1:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Dispatch button"
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
												"ui:locator?name=dispatch&path=bulkDispatch"
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
											"text": "Click the Dispatch button",
											"class": [
												"value"
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
	},
	chooseServiceTerritory: {
		xpath: "//div[@class='selectedTargetLocations']/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Choose Service Territories (chooseServiceTerritories)',
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
				"On SF Field Service Dispatcher Console Dispatch view screen"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fieldService=Dispatch"
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
										"text": "On SF Field Service Dispatcher Console Dispatch view screen",
										"class": [
											"value"
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
												"Check the Choose Service Territories button"
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
																			"ui:locator?name=chooseServiceTerritories&path=bulkDispatch"
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
																		"text": "Check the Choose Service Territories button",
																		"class": [
																			"value"
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
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Dispatch view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Check the Choose Service Territories button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
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
														"chooseServiceTerritories"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=chooseServiceTerritories&path=bulkDispatch"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXMLUnsch: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Dispatcher Console Unschedule view screen"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fieldService=Unschedule"
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
										"text": "On SF Field Service Dispatcher Console Unschedule view screen",
										"class": [
											"value"
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
												"Check the Choose Service Territories button"
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
																		"ui:locator?name=chooseServiceTerritories&path=bulkUnschedule"
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
																	"text": "Check the Choose Service Territories button",
																	"class": [
																		"value"
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
		executionStatusUnsch: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Unschedule view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Check the Choose Service Territories button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		},
		testCaseXMLUnsch1: [{
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
													"chooseServiceTerritories"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=chooseServiceTerritories&path=bulkUnschedule"
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
						, { partial: true, indexKey: 'id' }),
				}
			],
		}],

	},
	startHour: {
		xpath: "//div[@class='bulkOptimizeOptions']/select[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Start Hour (startHour)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "12"
				}
			}
		},
		testCaseXMLDispatch:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Start Hour select to 12"
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
												"ui:locator?name=startHour&path=bulkDispatch"
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
											"text": "12",
											"class": [
												"value"
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
											"text": "Set the Start Hour select to 12",
											"class": [
												"value"
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
		testCaseXMLUnsch: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Set the Start Hour select to 12"
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
											"ui:locator?name=startHour&path=bulkUnschedule"
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
										"text": "12",
										"class": [
											"value"
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
										"text": "Set the Start Hour select to 12",
										"class": [
											"value"
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
			text: "Set the Start Hour select to 12",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	startMinute: {
		xpath: "//div[@class='bulkOptimizeOptions']/select[2]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Start Minute (startMinute)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set By Index",
				settings: {
					value: "40"
				}
			}
		},
		testCaseXMLDispatch:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set By Index the Start Minute select to 40"
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
												"ui:locator?name=startMinute&path=bulkDispatch"
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
											"text": "40",
											"class": [
												"value"
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
											"text": "Set By Index the Start Minute select to 40",
											"class": [
												"value"
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
		testCaseXMLDispatch1:
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
														"startMinute"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=startMinute&path=bulkDispatch"
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
																			"text": "39",
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set By Index the Start Minute select to 40",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLUnsch: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Set By Index the Start Minute select to 40"
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
											"ui:locator?name=startMinute&path=bulkUnschedule"
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
										"text": "40",
										"class": [
											"value"
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
										"text": "Set By Index the Start Minute select to 40",
										"class": [
											"value"
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
		testCaseXMLUnsch1: [{
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
													"startMinute"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=startMinute&path=bulkUnschedule"
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
																		"text": "39",
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

	},
	selectedServiceAppointment: {
		xpath: "//input[@value='selectedServices']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Selected Service Appointments (selectedServiceAppointments)',
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
														"selectedServiceAppointments"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=selectedServiceAppointments&path=bulkDispatch"
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
		testCaseXMLUnsch: [{
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
													"selectedServiceAppointments"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=selectedServiceAppointments&path=bulkUnschedule"
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
	flagUnflagButton: {
		xpath: "//div[contains(@class,'BulkActionMenuItem')][2]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Flag Unflag (flagUnflag)',
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Appointment view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Flag Unflag button",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Dispatcher Console Appointment view screen"
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
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:target?fieldService=Appointment"
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
									"text": "On SF Field Service Dispatcher Console Appointment view screen",
									"class": [
										"value"
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
												"Click the Flag Unflag button"
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
																		"ui:locator?name=flagUnflag&path=headerActionsBlock"
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
																	"text": "Click the Flag Unflag button",
																	"class": [
																		"value"
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
	},
	unscheduleButton: {
		xpath: "//div[contains(@class,'BulkActionMenuItem')][3]",
		xpath1: "//button[text()='Unschedule']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Unschedule (unschedule)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Unschedule button",
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
					"Click the Unschedule button"
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
												"ui:locator?name=unschedule&path=headerActionsBlock"
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
											"text": "Click the Unschedule button",
											"class": [
												"value"
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
		testCaseXML1:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Unschedule button"
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
												"ui:locator?name=unschedule&path=bulkUnschedule"
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
											"text": "Click the Unschedule button",
											"class": [
												"value"
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
														"unschedule"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=unschedule&path=bulkUnschedule"
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
																			"text": "Unschedule",
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
	},
}