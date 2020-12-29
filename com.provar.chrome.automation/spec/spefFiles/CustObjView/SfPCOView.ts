import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilObj = new MiscUtils();

export const SfPCOView = {
	name: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Provar Custom Obj Name", FieldType.Text),
		// "//span[text()[normalize-space(.)='Provar Custom Obj Name'] and contains(@class,'test-id')]/../following-sibling::div//span[@class='uiOutputText'] | //span[text()[normalize-space(.)='Provar Custom Obj Name'] and contains(@class,'test-id')]/../following-sibling::div//span",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Provar Custom Obj Name", FieldType.Text),
		// "//span[normalize-space(.)='Provar Custom Obj Name']/../following-sibling::input | //label[text()[normalize-space(.)='Provar Custom Obj Name']]/following-sibling::div/input",
		disposition: 'Existing',
		text: 'Provar Custom Obj Name (Name)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineEdit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: 'Automation Object',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Provar Custom Obj Name field to Automation Object',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Provar Custom Obj Name field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Activate inline edit the Provar Custom Obj Name field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfIleActivate'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLSet: [{
			name: ['UiDoAction'],
			title: ['Set the Provar Custom Obj Name field to Automation Object'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Name"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DName"
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
																	"text": "Automation Object",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Provar Custom Obj Name",
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
	testStatus: {
		Xpath: "//span[contains(@class,'uiOutputCheckbox')]/img | //span[normalize-space(.)='Test Status']/../following-sibling::div//label/span[1]",
		XpathIE: "//span[normalize-space(.)='Test Status']/../following-sibling::input | //span[text()[normalize-space(.)='Test Status']]/../following-sibling::div//input",
		disposition: 'Existing',
		text: 'Test Status (Test_Status__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			check: {
				interactionParameters: {
					id: 'check',
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Test Status field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Test Status field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=check'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Test_Status__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Test_Status__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DTest_Status__c"
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
														},
														{
															"attributeName": [
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Test Status",
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
	testDate: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Test Date", FieldType.Text),
		//  "//span[normalize-space(.)='Test Date']/../following-sibling::div//span[contains(@class,'uiOutputDateTime')] | //span[normalize-space(.)='Test Date']/../following-sibling::div//lightning-formatted-text",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Date", FieldType.DateTime), 
		// "//label[normalize-space(.)='Date']/following-sibling::input | //label[normalize-space(.)='Date']/following-sibling::div/input",
		disposition: 'Existing',
		text: 'Test Date (Test_Date__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineEdit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '01/11/2019 13:00:00',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Test Date field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusSet: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Test Date field to 2019-11-01 13:00:00',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Test Date field to 2019-11-01 13:00:00'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Test_Date__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Test_Date__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DTest_Date__c"
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
																	"text": "01/11/2019 13:00",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Test Date",
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
	testPercent: {
		Xpath:  miscUtilObj.getFieldXpathLightning(ScreenType.View, "Test Percent", FieldType.Text), //"//span[@class='uiOutputPercent']",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Test Percent", FieldType.Text), //"//span[normalize-space(.)='Test Percent']/../following-sibling::input",
		disposition: 'Existing',
		text: 'Test Percent (Test_percent__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineEdit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '100',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Test Percent field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusSet: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Test Percent field to 100',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Test Percent field to 100'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Test_percent__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Test_percent__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DTest_percent__c"
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
																	"text": "100%",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Test Percent",
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
	pathStages: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Path Stages", FieldType.Picklist), //"//span[normalize-space(.)='Path Stages']/../following-sibling::div/span/span | //span[normalize-space(.)='Path Stages']/../following-sibling::div//lightning-formatted-text",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Path Stages", FieldType.Picklist), //"//span[normalize-space(.)='Path Stages']/../following-sibling::div//a | //label[text()[normalize-space(.)='Path Stages']]/following-sibling::div//input",
		disposition: 'Existing',
		text: 'Path Stages (Path_Stages__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineEdit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: 'Done',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Path Stages picklist',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusSet: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Path Stages picklist to Done',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Path Stages picklist to Done'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Path_Stages__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Path_Stages__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DPath_Stages__c"
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
																	"text": "Done",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Path Stages",
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
	shortDescription: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Short Description", FieldType.Textarea), //"//span[normalize-space(.)='Short Description']/../following-sibling::div//span[@class='uiOutputTextArea'] | //span[normalize-space(.)='Short Description']/../following-sibling::div//lightning-formatted-text",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Short Description", FieldType.Textarea), // "//span[normalize-space(.)='Short Description']/../following-sibling::textarea | //label[normalize-space(.)='Short Description']/following-sibling::div/textarea",
		disposition: 'Existing',
		text: 'Short Description (Short_Description__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineEdit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: 'Automation Description for the Short Description',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Short Description field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusSet: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Short Description field to Automation Description for the Short Description',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLSet: [{
			name: ['UiDoAction'],
			title: ['Set the Short Description field to Automation Description for the Short Description'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Short_Description__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Short_Description__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DShort_Description__c"
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
																	"text": "Automation Description for the Short Description",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Short Description",
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
	customRichTextField: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Custom Rich-Text Field", FieldType.Richtext), // "//div[contains(@class,'uiOutputRichText')]/p | //span[normalize-space(.)='Custom Rich-Text Field']/../following-sibling::div//p",
		XpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Rich-Text Field", FieldType.Richtext), //"//div[contains(@class,'ql-editor')]/p | //span[normalize-space(.)='Custom Rich-Text Field']/following-sibling::lightning-input-rich-text/div/div[@class='slds-rich-text-editor__textarea slds-grid']//span",
		disposition: 'Existing',
		text: 'Custom Rich-Text Field (Custom_Rich_Text_Field__c)',
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
				inlineEdit: {
					interactionParameters: {
						id: 'Start Inline Edit',
					},
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: 'Automation Value for the Rich Text Field'
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Custom Rich-Text field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusSet: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Rich-Text Field field to Automation Value for the Rich Text Field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLSet: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Rich-Text Field field to Automation Value for the Rich Text Field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Custom_Rich_Text_Field__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Custom_Rich_Text_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCustom_Rich_Text_Field__c"
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
																	"text": "Automation Value for the Rich Text Field",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Custom Rich-Text Field",
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
	customPicklist: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.View, "Custom Picklist(Multi)", FieldType.MultiPicklist), //"//span[normalize-space(.)='Custom Picklist(Multi)']/../following-sibling::div/span[contains(@class,'test-id')]/span | //span[normalize-space(.)='Custom Picklist(Multi)']/../following-sibling::div//lightning-formatted-text",
		XpathIEMutliSelect: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Picklist(Multi)", FieldType.MultiPicklistSelect), //"//span[normalize-space(.)='Available']/following-sibling::div//li",
		XpathIEMultiDeselect: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Picklist(Multi)", FieldType.MultiPicklistDeSelect), //"//span[normalize-space(.)='Chosen']/following-sibling::div//li",
		disposition: 'Existing',
		text: 'Custom Picklist(Multi) (Custom_Picklist_Multi__c)',
		interactionParameters: {
			readassert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				},
			},
			inlineedit: {
				interactionParameters: {
					id: 'Start Inline Edit',
				},
			},
			multiselect: {
				interactionParameters: {
					id: 'SF Multi Select',
					settings: {
						value: 'Green',
					},
				},
			},
			multideselect: {
				interactionParameters: {
					id: 'SF Multi Deselect',
					settings: {
						value: 'Orange',
					},
				},
			},
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusIE: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Custom Picklist(Multi) field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusMultiSelect: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Select the Custom Picklist(Multi) field to Green',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		executionStatusMultiDeselect: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Deselect the Custom Picklist(Multi) field to Orange',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLMultiSelect: [{
			name: ['UiDoAction'],
			title: ['Multi-Select the Custom Picklist(Multi) field to Green'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfSelect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLMultiDeSelect: [{
			name: ['UiDoAction'],
			title: ['Multi-Deselect the Custom Picklist(Multi) field to Orange'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfDeselect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLAssert: [{
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
												"Custom_Picklist_Multi__c"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Custom_Picklist_Multi__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DCustom_Picklist_Multi__c"
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
																	"text": "Green",
																	"class": [
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
																"label"
															],
															"comparisonType": [
																"EqualTo"
															],
															"normalize": [
																"true"
															],
															"value": [
																{
																	"text": "Custom Picklist(Multi)",
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
	longitude: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, 'Longitude',FieldType.Text),// "//label/span[text()='Longitude']/ancestor::div[1]//input | //label[text()='Longitude']/following-sibling::div/input", // some changes in SF
		applicableInteractions: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '17',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Geo Location (Longitude) field to 17',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Geo Location (Longitude) field to 17'],
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
	latitude: {
		Xpath: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, 'Latitude',FieldType.Text),// "//label/span[text()='Latitude']/ancestor::div[1]//input | //label[text()='Latitude']/following-sibling::div/input",
		applicableInteractions: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '17',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Geo Location (Latitude) field to 17',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Geo Location (Latitude) field to 17'],
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
	time: {
        Xpath: "//label[(.)='Time']/following-sibling::div//input",
        XpathV: "//span[(.)='Time']/../following-sibling::div//span[(.)='12:45:00']",
        XpathIE: "//label[(.)='Time']/following-sibling::div//input[@name='Time__c']",
        XpathVS: "//span[(.)='Time']/../following-sibling::div//span[(.)='14:30:00']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Time (Time__c)',
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                        extractLabel: true,
                        assertLabel: true,
                    },
                },
            },
            inlineEdit: {
                interactionParameters: {
                    id: 'Start Inline Edit',
                },
            },
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: '12:45',
                    },
                },
            },
            setIE: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: '14:30',
                    },
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Time field to 12:45',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        executionStatusSet: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Time field to 14:30',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        executionStatusAssert: [
            {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        executionStatusIE: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Activate inline edit the Time field',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Time field to 12:45'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=set'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLIE: [{
            name: ['UiDoAction'],
            title: ['Activate inline edit the Time field'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=sfIleActivate'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLSet: [{
            name: ['UiDoAction'],
            title: ['Set the Time field to 14:30'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=set'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLAssert: [{
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
                                                "Time__c"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DTime__c&name=Time__c"
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
                                                                    "text": "14:30:00",
                                                                    "class": [
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
                                                                "label"
                                                            ],
                                                            "comparisonType": [
                                                                "EqualTo"
                                                            ],
                                                            "normalize": [
                                                                "true"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "Time",
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
}