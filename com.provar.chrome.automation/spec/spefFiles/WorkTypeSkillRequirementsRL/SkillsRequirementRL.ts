import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { MiscUtils, ScreenType, FieldType } from '../../support/MiscUtil';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
const miscUtilsObj: MiscUtils = new MiscUtils();

export const SkillRequirementsRLData = {
	workTypeViewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Work Type View screen',
		},
	},
	skillRequirementsNewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Skill Requirement New screen',
		},
	},
	lookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=Skill',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Skill Lookup Screen',
		},
	},
	rowLocators: [
		{
			"label": "Skill Required (Skill)",
			"selected": true,
			"value": 'SP Installation',
		},
		{
			"label": "Skill Level (SkillLevel)",
			"selected": false,
			"value": '2.00',
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
	newButton: {
		xpath: "//span[@title='Skill Requirements']/ancestor::header/following-sibling::div//div[text()='New']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements New (New)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Skill Requirements New button",
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
				"Click the Skill Requirements New button"
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
											"ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26action%3DNew%26relationship%3DSkillRequirements"
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
										"text": "Click the Skill Requirements New button",
										"class": [
											"value"
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
	skillLevel: {
		xpath: "//span[text()='Skill Level']/../following-sibling::input",
		xpathRL: "//span[normalize-space()='Skill Requirements']/ancestor::article//tbody//td[1]/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Level (SkillLevel)',
		},
		modificationParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: "2"
				}
			}
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
							value: 'Skill Level',
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
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Skill Requirement New screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Set the Skill Level field to 2",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXMLRL2:[{
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
													"SkillLevel"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=SkillLevel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26field%3DSkillLevel%26relationship%3DSkillRequirements"
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
																		"text": "Skill Level",
																		"class": [
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
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Skill Requirement New screen"
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
											"sf:ui:target?object=SkillRequirement&action=New&noOverride=true"
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
										"text": "On SF Skill Requirement New screen",
										"class": [
											"value"
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
										"text": "skillRequirementId",
										"class": [
											"value"
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
												"Set the Skill Level field to 2"
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
																			"ui:locator?name=SkillLevel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DSkillRequirement%26field%3DSkillLevel"
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
																		"text": "2",
																		"class": [
																			"value"
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
																		"text": "Set the Skill Level field to 2",
																		"class": [
																			"value"
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
		executionStatusRL1: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Work Type View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: "With SkillRequirements rows {Skill = \"SP Installation\"}",
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
		testCaseXMLRL1: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Work Type View screen"
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
											"sf:ui:target?object=WorkType&action=View&noOverride=true"
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
										"text": "On SF Work Type View screen",
										"class": [
											"value"
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
												"With SkillRequirements rows {Skill = \"SP Installation\"}"
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
																		"sf:ui:locator:row?table=View%2FSkillRequirements%2FSkillRequirementsTable"
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
																						"Skill"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
																		{
																			"text": "SP Installation",
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
																	"text": "With SkillRequirements rows {Skill = \"SP Installation\"}",
																	"class": [
																		"value"
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
																												"SkillLevel"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=SkillLevel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26field%3DSkillLevel%26relationship%3DSkillRequirements"
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
																																	"text": "2.00",
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

	},
	skillRequired: {
		xpath: "//span[text()='Skill Required']/../following-sibling::div//input",
		xpathRL: "//span[normalize-space()='Skill Requirements']/ancestor::article//tbody//th/span[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Required (SkillId)',
		},
		fieldDetailsRL: {
			disposition: 'Existing',
			text: 'Skill Required (Skill)',
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
							value: 'Skill Required',
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
		modificationParameters: {
			interactionParameters: {
				id: 'SF Lookup',
				settings: {
					value: "SP Installation"
				}
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Lookup the Skill Required reference to SP Installation',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
			{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Skill Lookup screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Search text to SP Installation',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Click the Go! button',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			}],
		testCaseXML: [
			{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Lookup the Skill Required reference to SP Installation"
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
												"ui:locator?name=SkillId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DSkillRequirement%26field%3DSkillId"
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
										"value"
									],
									"value": [
										{
											"text": "SP Installation",
											"class": [
												"value"
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
											"text": "Lookup the Skill Required reference to SP Installation",
											"class": [
												"value"
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
			},
			{
				name: ['UiWithScreen'],
				title: ['On SF Skill Lookup screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?lookup=Skill'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Search text to SP Installation'],
								arguments: [{
									argument: comparisonUtils.addCompareOptions([
										{
											id: ['interaction'],
											value: [{
												uri: ['ui:interaction?name=set'],
											}],
										}], { partial: true, indexKey: 'id' }),
								}],
							},
							{
								name: ['UiDoAction'],
								title: ['Click the Go! button'],
								arguments: [{
									argument: comparisonUtils.addCompareOptions([
										{
											id: ['interaction'],
											value: [{
												uri: ['ui:interaction?name=action'],
											}],
										}], { partial: true, indexKey: 'id' }),
								}],
							}],
						}],
					}],
				}],
			}
		],
		testCaseXMLRL2:[{
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
													"Skill"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Skill&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26field%3DSkill%26relationship%3DSkillRequirements"
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
																		"text": "Skill Required",
																		"class": [
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
		testCaseRL1:
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
														"Skill"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Skill&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26field%3DSkill%26relationship%3DSkillRequirements"
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
																			"text": "SP Installation",
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
	name: {
		xpath: "//th[@title='Name']/ancestor::table//tbody//td[1]/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Result Name (nameSelector)',
		},
		rowLocators: [
			{
				"label": "Result Name (nameSelector)",
				"selected": true,
				"value": "SP Installation"
			},
		],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Result Name button"
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
												"ui:locator?name=nameSelector&path=resultsFrame%2FresultsTable%2FresultsRow&rowLocator=nameSelector+%3D+%27SP+Installation%27"
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
											"text": "Click the Result Name button",
											"class": [
												"value"
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
			text: "Click the Result Name button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	editButton: {
		xpath: "//a[@title='Edit']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements Edit (Edit)',
		},
		testCaseXMLAssert:
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
														"Edit"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26action%3DEdit%26relationship%3DSkillRequirements"
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
																			"text": "Edit",
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
	deleteButton: {
		modificationParameters: {
			interactionParameters: {
				id: "Click and Cancel"
			}
		},
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements Delete (Delete)',
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click and Cancel the Skill Requirements Delete button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click and Cancel the Skill Requirements Delete button'],
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
		xpath: "//span[@title='Skill Requirements']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements (SkillRequirements)',
		},
		interactionParametersRowCount: {
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
													"SkillRequirements"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=SkillRequirements&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26relationship%3DSkillRequirements"
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
	viewAll:{
		xpath:"//span[@title='Skill Requirements']/ancestor::article//span[contains(@class,'view-all')]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements Go To List (GoToList)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Skill Requirements Go To List button",
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
				"Click the Skill Requirements Go To List button"
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
											"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkType%26action%3DGoToList%26relationship%3DSkillRequirements"
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
										"text": "Click the Skill Requirements Go To List button",
										"class": [
											"value"
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
}