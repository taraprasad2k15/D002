import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {FieldType, ScreenType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj = new MiscUtils();
export const Lookups = {
	linkedCase: {
		Xpath: {
			input: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Linked Case', FieldType.Lookup),
			lookup: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Linked Case', FieldType.LookupSearch),
			newInSF: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Linked Case', FieldType.LookupNewInSF),
			view: miscUtilsObj.getFieldXpathLightning(ScreenType.View, 'Linked Case', FieldType.Lookup),
			prefilled: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, 'Linked Case', FieldType.Lookup),
		},
		interactionParameters: {
			newInSF: {
				interactionParameters: {
					id: 'New In SF Lookup',
				},
			},
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '{CaseNumber}',
					},
				},
			},
			setLinked: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '{LinkedCaseNumber}',
					},
				},
			},
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: '{CaseNumber}',
					},
				},
			},
			assert: {
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
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: /Lookup the Linked Case reference to.*[0-9]{8}/,
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Case Lookup screen',
					executionStatus: 'Executing',
					successfulCount: 0,
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: /Set the Search text to.*[0-9]{8}/,
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
				},
			],
			set: {
				"name": "UiWithScreen",
				"type": "Icon-ExecutingPaused",
				"text": "On SF Provar Custom Obj (Default Layout) New screen",
				"executionStatus": "Executing",
				"successfulCount": 0,
				"failureCount": 0,
				"children": [
					{
						"name": "UiDoAction",
						"type": "Icon-Successful",
						"text": /Set the Linked Case reference to.*[0-9]{8}/,
						"executionStatus": "Executed",
						"successfulCount": 1,
						"failureCount": 0,
					}
				]
			},
			setLinked: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": /Set the Linked Case reference to.*[0-9]{8}/,
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0
			}],
			newInSF: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "New In SF Lookup the Linked Case reference",
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0
			}],
			assert: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
			inlineEdit: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Activate inline edit the Linked Case reference",
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0,
			}],
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Linked Case reference to {CaseNumber}'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['interaction'],
							value: [{
								uri: ['ui:interaction?name=sfLookup'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
				},
				{
					name: ['UiWithScreen'],
					title: ['On SF Case Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=Case'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to {CaseNumber}'],
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
				}],
			set: {
                        
				"name": [
					"UiWithScreen"
				],
				"title": [
					"On SF Provar Custom Obj (Default Layout) New screen"
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
											"sf:ui:target?object=Provar_Custom_Obj__c&action=New&recordType=Default+Layout&noOverride=true"
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
										"text": "On SF Provar Custom Obj (Default Layout) New screen",
										"class": [
											"value"
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
										"text": "provar_Custom_Obj__cId",
										"class": [
											"value"
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
								"name": [
									"substeps"
								],
								"steps": [
									{
										"apiCall": [
											{
												"name": [
													"UiDoAction"
												],
												"title": [
													"Set the Linked Case reference to {CaseNumber}"
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
																			"ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c"
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
																		"text": "Set the Linked Case reference to {CaseNumber}",
																		"class": [
																			"value"
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
			setLinked: [{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Linked Case reference to {LinkedCaseNumber}"
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
											"ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c"
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
													"LinkedCaseNumber"
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
										"text": "Set the Linked Case reference to {LinkedCaseNumber}",
										"class": [
											"value"
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
			newInSF: [{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"New In SF Lookup the Linked Case reference"
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
											"ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c"
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
											"ui:interaction?name=newInSfLookup"
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
										"text": "New In SF Lookup the Linked Case reference",
										"class": [
											"value"
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
			assert: [{
				name: ['UiAssert'],
				title: ['UI Assert'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['fieldAssertions'],
						value: [{
							uiFieldAssertion: [{
								fieldLocator: [{
									uri: ['ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c'],
								}],
								attributeAssertions: [{
									uiAttributeAssertion: [{
										attributeName: ['value'],
										comparisonType: ['EqualTo'],
										normalize: ['true'],
									},
									{
										attributeName: ['label'],
										comparisonType: ['EqualTo'],
										normalize: ['true'],
										value: [{
											text: 'Linked Case',
										}]
									}]
								}]
							}],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			inlineEdit: [{
				"name": [
					"UiDoAction"
				],
				"title": [
					"Activate inline edit the Linked Case reference"
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
											"ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c"
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
											"ui:interaction?name=sfIleActivate"
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
										"text": "Activate inline edit the Linked Case reference",
										"class": [
											"value"
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
			}]
		},
	},
	cancelButton: {
		Xpath: "//h2[(.)='New Case']/../following-sibling::div/div/button[(.)='Cancel']",
		executionStatus: {
			"name": "UiWithScreen",
			"icon": "executing_paused",
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
		testCaseXML: 
			{
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
				]
			},
	},
	caseId: {
		caseIdXpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Case button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Case button'],
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
};