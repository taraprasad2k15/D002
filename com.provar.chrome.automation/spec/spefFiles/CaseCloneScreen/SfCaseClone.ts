import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const SfCaseCloneData = {
	assertInteractionParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
				extractLabel: true,
				assertLabel: true,
			},
		}
	},
	assertAttributesParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
				extractLabel: true,
				assertLabel: true,
				extractAttributes: true,
				assertAttributes: true,
				expectedAttributes: {
					visible: {
						value: true,
					},
					readOnly: {
						value: true,
					},
					inlineEditable: {
						value: true,
					},
				}
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
	caseClonePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Clone&object=Case&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case Clone screen',
		},
	},
	clone: {
		xpath: "//a[@name='Clone']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Clone (Clone)',
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
					"Click the Clone button"
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
												/ui:locator\?name=Clone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DClone|ui:locator?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DClone&name=Clone/
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
											"text": "Click the Clone button",
											"class": [
												"value"
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
			text: "Click the Clone button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	status: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Status", FieldType.Picklist),
		Xpath1: "//span[text()='Status']/ancestor::div[1]//a | //label[text()='Status']/following-sibling::div",
		interactionParameters: {
			interactionParameters: {
				id: 'Start Inline Edit',
			}
		},
		clearInteraction: {
			interactionParameters: {
				id: 'Clear',
			}
		},
		assertMessage: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractMessage: true,
					assertMessage: true,
					extractLabel: true,
					assertLabel: true,
					expectedMessage: {
						value: 'Complete this field.',
						caseSensitive: true,
						normalise: true,
					},
				},
			}
		},
		testCaseXML2: [{
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
		testCaseXML1: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Case Clone screen"
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
										"sf:ui:target?object=Case&action=Clone&noOverride=true"
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
									"text": "On SF Case Clone screen",
									"class": [
										"value"
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
												"Clear the Status picklist"
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
																		/ui:locator\?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DStatus|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DStatus&name=Status/
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
																		"ui:interaction?name=clear"
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
																	"text": "Clear the Status picklist",
																	"class": [
																		"value"
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
		executionStatus1:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Case Clone screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Clear the Status picklist",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Status picklist',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Activate inline edit the Status picklist'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfIleActivate'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	pageError: {
		Xpath: "//ul[@class='errorsList']/li",
		fieldDetails: {
			disposition: 'Existing',
			text: 'pageErrors',
		},
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['pageAssertions'],
					value: [{
						uiPageAssertion: [{
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['pageMessages'],
									comparisonType: ['EqualTo'],
									listOperator: ['Contains'],
									normalize: ['true'],
									value: [{
										text: 'These required fields must be completed: Status',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	customDateTime:{
	 xpath: "//label[normalize-space()='Date']/following-sibling::input",
	 fieldDetails: {
		disposition: 'Existing',
		text: 'Custom Date-Time Field (Custom_Date_Time_Field__c)',
	},
	interactionParameters: {
		interactionParameters: {
			id: 'Set',
			settings: {
				value: '{DateFormat(TODAY, "dd/MM/yyyy HH:mm")}',
			},
		}
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
                    "Set the Custom Date-Time Field field to {DateFormat(TODAY, \"dd/MM/yyyy HH:mm\")}"
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
												/ui:locator\?name=Custom_Date_Time_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Date_Time_Field__c|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Date_Time_Field__c&name=Custom_Date_Time_Field__c/
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
														"outputFormat"
													],
													"value": [
														{
															"text": "dd/MM/yyyy HH:mm",
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
											"text": "Set the Custom Date-Time Field field to {DateFormat(TODAY, \"dd/MM/yyyy HH:mm\")}",
											"class": [
												"value"
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
				text: /Set the Custom Date-Time Field field to .*/,
				executionStatus: "Executed",
				successfulCount: 1,
		 }],
	},
	Contacts: {
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Contact Name", FieldType.Lookup),
		xpath1: "//span[normalize-space()='Contact Name']/../following-sibling::div//span[@class='pillText']",
		interactionParameters: {
			interactionParameters: {
				id: 'SF Lookup',
				settings: {
					value: '{ContactName}',
				},
			},
		},
			fieldDetails: {
				disposition: 'Existing',
				text: 'Contact Name (ContactId)',
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
																	"ContactId"
																],
																"fieldLocator": [
																	{
																		"uri": [
																			/ui:locator\?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId&name=ContactId/
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
																						"text": "Contact Name",
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
			[
				{
					"apiId": [
						"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
					],
					"name": [
						"UiDoAction"
					],
					"title": [
						"Lookup the Contact Name reference to {ContactName}"
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
													/ui:locator\?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId&name=ContactId/
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
												"class": [
													"variable"
												],
												"path": [
													{
														"element": [
															"ContactName"
														]
													}
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
												"text": "Lookup the Contact Name reference to {ContactName}",
												"class": [
													"value"
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

				},
				{
					name: ['UiWithScreen'],
					title: ['On SF Contact Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=Contact'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to {ContactName}'],
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
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: /Lookup the Contact Name reference to AutomationAPI.*/,
				executionStatus: 'Executed',
				successfulCount: 1,
			},
			{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Contact Lookup screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: /Set the Search text to AutomationAPI.*/,
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
	},
	name: {
		xpath: "(//td[1]/a)[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Name (Name)',
		},
		psi:{
			itemDefinition: {
				itemClass: 'Page',
				uiTargetUri: 'sf:ui:target?lookup=Contact',
				itemTypeId: 'SfLookupUiTargetExtension',
			},
			pageDetails: {
				title: 'Contact Lookup Screen',
			},
		},
		rowlocators: [
			{
				"label": "Name (Name)",
				"selected": true,
			},
			{
				"label": "Account Name (ACCOUNT_NAME)",
				"selected": false,
			},
			{
				"label": "Phone (CONTACT_PHONE1)",
				"selected": false,
			},
			{
				"label": "Email (CONTACT_EMAIL)",
				"selected": false,
				
			},
			{
				"label": "Contact Owner Alias (CORE_USERS_ALIAS)",
				"selected": false,
				
			},
		],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Name button"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
										"text": "Click the Name button",
										"class": [
											"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Name button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	caseStatus: {
		caseTypeXpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Status", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'New',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Status picklist to New',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Status picklist to New'],
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
	caseOrigin: {
		caseOriginXpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Case Origin", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 4,
				},
			}
		},
		interactionParametersAssert: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractLabel: true,
					assertLabel: true,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set By Index the Case Origin picklist to 4',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Case Origin picklist to 4'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
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
								uri: [/ui:locator\?name=Origin&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DOrigin|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DOrigin&name=Origin/],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Web',
									}]
								},
								{
									attributeName: ['label'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Case Origin',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	subject: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Subject", FieldType.Text),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test Case New screen via automation script',
				},
			}
		},
		interactionParameters2: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractLabel: true,
					assertLabel: true,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Subject field to Test Case New screen via automation script',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Test Case New screen via automation script'],
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
	description: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Description", FieldType.Textarea),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Short description',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Short description',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Short description'],
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
	customCheckbox: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Checkbox", FieldType.Checkbox),
		interactionParameters: {
			check: {interactionParameters: {
				id: 'Check',
			}},
			uncheck: {interactionParameters: {
				id: 'Uncheck',
			}},
			toggle: {interactionParameters: {
				id: 'Toggle',
			}},
		},
		executionStatus: {
			check: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			uncheck: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Uncheck the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			toggle: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Toggle the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: {
			check: [{
				name: ['UiDoAction'],
				title: ['Check the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=check'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			uncheck: [{
				name: ['UiDoAction'],
				title: ['Uncheck the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=uncheck'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			toggle: [{
				name: ['UiDoAction'],
				title: ['Toggle the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=toggle'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
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
																"Custom_Checkbox__c"
															],
															"fieldLocator": [
																{
																	"uri": [
																		/ui:locator\?name=Custom_Checkbox__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Checkbox__c|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Checkbox__c&name=Custom_Checkbox__c/
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
																					"text": "Custom Checkbox",
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
	customTime: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Time Field", FieldType.Time),
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '23:30',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Time Field field to 23:30',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Time Field field to 23:30'],
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
	customRichText: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Rich-Text Field", FieldType.Richtext),
		interactionParameters: {
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
				text: 'Set the Custom Rich-Text Field field to Adding text into Rich-Text field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
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
																"Custom_Rich_text_Field__c"
															],
															"fieldLocator": [
																{
																	"uri": [
																		/ui:locator\?name=Custom_Rich_text_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Rich_text_Field__c|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Rich_text_Field__c&name=Custom_Rich_text_Field__c/
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
																					"text": "Adding text into Rich-Text field",
																					"class": [
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
								, { partial: true, indexKey: 'id' }),
							}
						],
					}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Rich-Text Field field to Adding text into Rich-Text field'],
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
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Picklist(Multi)", FieldType.MultiPicklistSelect),
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Select',
				settings: {
					value: 'Green',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Select the Custom Picklist(Multi) field to Green',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
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
	},
	customPicklistDeselect: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Custom Picklist(Multi)", FieldType.MultiPicklistDeSelect),
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Deselect',
				settings: {
					value: 'Orange',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Deselect the Custom Picklist(Multi) field to Orange',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
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
	},
	cancel:{
		modificationParameter: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
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
																"cancel"
															],
															"fieldLocator": [
																{
																	"uri": [
																		/ui:locator\?name=cancel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3Dcancel|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3Dcancel&name=cancel/
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
																					"text": "Cancel",
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
	
	}
};