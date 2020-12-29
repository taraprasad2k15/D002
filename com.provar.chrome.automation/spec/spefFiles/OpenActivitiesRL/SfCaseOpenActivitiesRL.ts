import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCaseOpenActivitiesRL = {
	NewTaskViewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Task&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Task New screen',
		},
	},
	NewEventViewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Event&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Event New screen',
		},
	},
	contactLookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=Contact',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact Lookup Screen',
		},
	},
	EditPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=Task&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Task Edit screen',
		},
	},
	newTaskButton: {
		Xpath: "//a/span[(.)='Open Activities']/../../../../following-sibling::div//div[@title='New Task']",
		fieldDetails: {
			disposition: "Existing",
			text: "Open Activities New Task (task)",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Click',
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Open Activities New Task button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Open Activities New Task button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([
					{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=action'],
						}],
					}
				], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	newEventButton: {
		Xpath: "//a/span[(.)='Open Activities']/../../../../following-sibling::div//div[@title='New Event']",
		fieldDetails: {
			disposition: "Existing",
			text: "Open Activities New Event (event)",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Click',
			}
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Case View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click the Open Activities New Event button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},

		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF Case View screen'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['target'],
					value: [{
						uri: ['sf:ui:target?object=Case&action=View&noOverride=true'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Click the Open Activities New Event button'],
							arguments: [{
								argument: comparisonUtils.addCompareOptions([
									{
										id: ['interaction'],
										value: [{
											uri: ['ui:interaction?name=action'],
										}],
									}
								], { partial: true, indexKey: 'id' }),
							}],
						}],
					}],
				}],
			}],
		},
	},
	taskSubject: {
		Xpath: "//label[contains(text(),'Subject')]/following-sibling::div//input",
		fieldDetails: {
			disposition: "Existing",
			text: "Subject (Subject)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Call",
					},
				},
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Task New screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Subject field to Call',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF Task New screen'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['target'],
					value: [{
						uri: ['sf:ui:target?object=Task&noOverride=true&action=New'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the Subject field to Call'],
							arguments: [{
								argument: comparisonUtils.addCompareOptions([{
									id: ['interaction'],
									value: [{
										uri: ['ui:interaction?name=set'],
									}],
								}], { partial: true, indexKey: 'id' }),
							}],
						}],
					}],
				}],
			}],
		},

	},
	eventSubject: {
		Xpath: "//label[contains(text(),'Subject')]/following-sibling::div//input",
		fieldDetails: {
			disposition: "Existing",
			text: "Subject (Subject)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Meeting",
					},
				},
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Event New screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Subject field to Meeting',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF Event New screen'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['target'],
					value: [{
						uri: ['sf:ui:target?object=Event&action=New&noOverride=true'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the Subject field to Meeting'],
							arguments: [{
								argument: comparisonUtils.addCompareOptions([{
									id: ['interaction'],
									value: [{
										uri: ['ui:interaction?name=set'],
									}],
								}], { partial: true, indexKey: 'id' }),
							}],
						}],
					}],
				}],
			}],
		},

	},
	caseRLSubject: {
		xpath: "//a/span[contains(normalize-space(.),'Open Activities')]/../../../../../following-sibling::div//a[contains(normalize-space(.),'Call')]",
		fieldDetails: {
			disposition: "Existing",
			text: "Subject (TASK_SUBJECT)",
		},
		interactionParameters: {
			readAssert: {
				// fieldParameters: {
				// 	rowLocator: {
				// 		value: [
				// 			{
				// 				"label": "Subject (TASK_SUBJECT)",
				// 				"selected": true,
				// 				"value": 'Call'
				// 			},
				// 			{
				// 				"label": "Name (TASK_WHO_NAME)",
				// 				"selected": true,
				// 				"value": /\${LastName}/
				// 			},
				// 			{
				// 				"label": "Task (ACTIVITY_TASK)",
				// 				"selected": true,
				// 				"value": 'true',
				// 			},
				// 			{
				// 				"label": "Due Date (TASK_DUE_DATE)",
				// 				"selected": false,
				// 				"value": "30/11/2020"
				// 			}
				// 		],
				// 		type: 'useWhere',
				// 	},
				// },
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},

		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Case View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					"name": "UiWithRow",
					"type": "Icon-ExecutingPaused",
					"text": 'With OpenActivities rows {TASK_SUBJECT = "Call"}',
					"executionStatus": "Executing",
					"successfulCount": 0,
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
			],
		},
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF Case View screen'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['target'],
					value: [{
						uri: ['sf:ui:target?object=Case&action=View&noOverride=true'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiWithRow'],
							title: ['With OpenActivities rows {TASK_SUBJECT = \"Call\"}'],
							arguments: [{
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
											"locator"
										],
										"value": [
											{
												"class": [
													"uiLocator"
												],
												"uri": [
													"sf:ui:locator:row?table=View%2FOpenActivities%2FOpenActivitiesTable"
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
																	"TASK_SUBJECT"
																]
															}
														]
													}
												],
												"rhs": [
													{
														"text": "Call",
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
												"text": "With OpenActivities rows {TASK_SUBJECT = \"Call\"}",
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
							}],
							clauses: [{
								clause: [{
									steps: [{
										apiCall: [{
											name: ['UiAssert'],
											title: ['UI Assert'],
											arguments: [{
												argument: comparisonUtils.addCompareOptions([
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
																			"TASK_SUBJECT"
																		],
																		"fieldLocator": [
																			{
																				"uri": [
																					"ui:locator?name=TASK_SUBJECT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTASK.SUBJECT%26relationship%3DOpenActivities"
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
																								"text": "Call",
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
												], { partial: true, indexKey: 'id' }),
											}],
										}],
									}],
								}],
							}],
						}],
					}],
				}],
			}],
		},
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
							value: 'Subject',
							caseSensitive: true,
							normalise: true,
						},
					},
				}
			},
		},
		assertColumntestcaseXML: [{
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
												"TASK_SUBJECT"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=TASK_SUBJECT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTASK.SUBJECT%26relationship%3DOpenActivities"
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
																	"text": "Subject",
																	"class": [
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
	caseRLName: {
		xpath: "(//a/span[contains(normalize-space(.),'Open Activities')]/../../../../../following-sibling::div//tr//a)[2]",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (TASK_WHO_NAME)",
		},
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: [{
			name: 'UiAssert',
			type: 'Icon-Successful',
			text: 'UI Assert',
			executionStatus: 'Executed',
			successfulCount: 1,
		}],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([
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
											"TASK_WHO_NAME"
										],
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=TASK_WHO_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTASK.WHO_NAME%26relationship%3DOpenActivities"
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
																"text": /AutomationContact.*/,
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
				], { partial: true, indexKey: 'id' }),
			}],
		}],

	},

	caseRLTask: {
		xpath: "//a/span[(.)='Open Activities']/../../../../../following-sibling::div//tbody/tr[1]/td/span/img",
		fieldDetails: {
			disposition: "Existing",
			text: "Task (ACTIVITY_TASK)",
		},
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: [{
			name: 'UiAssert',
			type: 'Icon-Successful',
			text: 'UI Assert',
			executionStatus: 'Executed',
			successfulCount: 1,
		}],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([
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
											"ACTIVITY_TASK"
										],
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=ACTIVITY_TASK&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DACTIVITY.TASK%26relationship%3DOpenActivities"
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
				], { partial: true, indexKey: 'id' }),
			}],

		}],
	},
	caseRLDueDate: {
		xpath: "//a/span[(.)='Open Activities']/../../../../../following-sibling::div//tbody/tr[1]/td[3]",
		fieldDetails: {
			disposition: "Existing",
			text: "Due Date (TASK_DUE_DATE)",
		},
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: [{
			name: 'UiAssert',
			type: 'Icon-Successful',
			text: 'UI Assert',
			executionStatus: 'Executed',
			successfulCount: 1,
		}],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([
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
											"TASK_DUE_DATE"
										],
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=TASK_DUE_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTASK.DUE_DATE%26relationship%3DOpenActivities"
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
																"text": "30/11/2019",
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
				], { partial: true, indexKey: 'id' }),
			}],

		}],

	},
	editButton: {
		Xpath: "//div[contains(@class,'visible')]//li[@class='uiMenuItem']/a/div[(.)='Edit']",
		fieldDetails: {
			disposition: "Existing",
			text: "Open Activities Edit (Edit)",
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Open Activities Edit button",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Open Activities Edit button"
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
										/.*/
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
									"text": "Click the Open Activities Edit button",
									"class": [
										"value"
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
	cancelButtonOnEdit: {
		cancelButton: {
			disposition: 'Existing',
			text: 'Cancel (cancel)',
		},
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On SF Task Edit screen",
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
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Task Edit screen"
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
										"sf:ui:target?object=Task&action=Edit&noOverride=true"
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
									"text": "On SF Task Edit screen",
									"class": [
										"value"
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
																		"ui:locator?name=cancel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26action%3Dcancel"
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
	deleteButton: {
		Xpath: "//div[contains(@class,'visible')]//li[@class='uiMenuItem']/a/div[(.)='Delete']",
		fieldDetails: {
			disposition: "Existing",
			text: "Open Activities Del (Delete)",
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Click and Cancel',
			},
		},
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingChildPaused",
			"text": "On SF Case View screen",
			"executionStatus": "Executing",
			"successfulCount": 0,
			"children": [
				{
					"name": "UiWithRow",
					"type": "Icon-ExecutingPaused",
					"text": /With OpenActivities rows {TASK_SUBJECT = "Call"}/,
					"executionStatus": "Executing",
					"successfulCount": 0,
					"children": [
						{
							"name": "UiDoAction",
							"type": "Icon-Successful",
							"text": "Click and Cancel the Open Activities Del button",
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
				"On SF Case View screen"
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
										"sf:ui:target?object=Case&action=View&noOverride=true"
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
									"text": "On SF Case View screen",
									"class": [
										"value"
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
												/With OpenActivities rows {TASK_SUBJECT = "Call"}/
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
																		"sf:ui:locator:row?table=View%2FOpenActivities%2FOpenActivitiesTable"
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
																						"TASK_SUBJECT"
																					]
																				}
																			]
																		}
																	],
																	"rhs": [
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
														},
														{
															"id": [
																"locatorDescription"
															],
															"value": [
																{
																	"text": /With OpenActivities rows {TASK_SUBJECT = "Call"}/,
																	"class": [
																		"value"
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
																				"Click and Cancel the Open Activities Del button"
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
																										/.*/
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
																									"text": "Click and Cancel the Open Activities Del button",
																									"class": [
																										"value"
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
		Xpath: "//span[(.)='Open Activities']/../../../../../following-sibling::a//span[@class='view-all-label']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Open Activities Go To List (GoToList)',
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Open Activities Go To List button",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Open Activities Go To List button"
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
										"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DGoToList%26relationship%3DOpenActivities"
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
									"text": "Click the Open Activities Go To List button",
									"class": [
										"value"
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
	taskDueDate: {
		Xpath: "//label[normalize-space(.)='Due Date']/following-sibling::div//input",
		fieldDetails: {
			disposition: "Existing",
			text: "Due Date (ActivityDate)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "30/11/2019"
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Due Date field to 2019-11-30',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Due Date field to 2019-11-30'],
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
	eventStartDate: {
		xpath: "//legend[contains(text(),'Start')]/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div/input",
		fieldDetails: {
			disposition: "Existing",
			text: "Start (StartDateTime)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "07-May-2020 16:00"
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: /Set the Start field to 2020-05-07 16:00:00|Set the Start field to 07-May-2020 16:00/,
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: [/Set the Start field to 2020-05-07 16:00:00|Set the Start field to 07-May-2020 16:00/],
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
	eventEndDate: {
		xpath: "//legend[contains(text(),'End')]/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div/input",
		fieldDetails: {
			disposition: "Existing",
			text: "End (EndDateTime)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "09-May-2020 16:30"
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: /Set the End field to 2020-05-09 16:30:00|Set the End field to 09-May-2020 16:30/,
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: [/Set the End field to 2020-05-09 16:30:00|Set the End field to 09-May-2020 16:30/],
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
	allDayEventCheckbox: {
		xpath: "//label[normalize-space(.)='All-Day Event']/following-sibling::input",
		fieldDetails: {
			disposition: "Existing",
			text: "All-Day Event (IsAllDayEvent)"
		},
		interactionParameters: {
			check: {
				interactionParameters: {
					id: "Check",
				},
			},
		},
		executionStatus: {
			check: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the All-Day Event field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the All-Day Event field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=check'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	taskAssignedTo: {
		Xpath: "//span[normalize-space(.)='Assigned To']/../following-sibling::div//span[@class='pillText']",
		fieldDetails: {
			disposition: "Existing",
			text: "Assigned To (OwnerId)",
		},
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=OwnerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DOwnerId'],
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
	eventAssignedTo: {
		//xpath: "//div[contains(@class,'modal-container slds-modal__container')]//div[contains(@class,'full forcePageBlock forceRecordLayout')]//label/span[normalize-space(.)='Assigned To']/../following-sibling::div//li/a"
		xpath: "//span[normalize-space(.)='Assigned To']/../following-sibling::div//span[@class='pillText']",
		fieldDetails: {
			disposition: "Existing",
			text: "Assigned To (OwnerId)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "{UserRead.Name}"
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: /Set the Assigned To reference to .*/,
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: [/Set the Assigned To reference to .*/],
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
	eventDescription: {
		xpath: "//textarea[contains(@class,'uiInputTextArea')]",
		fieldDetails: {
			disposition: "Existing",
			text: "Description (Description)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Description for the QA via Automation Script",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Description for the QA via Automation Script',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Description for the QA via Automation Script'],
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
	eventLocation: {
		xpath: "//span[normalize-space(.)='Location']/../following-sibling::input",
		fieldDetails: {
			disposition: "Existing",
			text: "Location (Location)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "USA",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Location field to USA',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Location field to USA'],
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
	eventShowTimeAs: {
		xpath: "//span[normalize-space(.)='Show Time As']/../following-sibling::div//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Show Time As (ShowAs)",
		},
		interactionParameters: {
			setbyIndex: {
				interactionParameters: {
					id: 'Set By Index',
					settings: {
						value: 3,
					},
				}
			},
		},
		executionStatus: {
			setByIndex: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set By Index the Show Time As picklist to 3',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Show Time As picklist to 3'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	taskComments: {
		Xpath: "//textarea[contains(@class,'uiInputTextArea')]",
		fieldDetails: {
			disposition: "Existing",
			text: "Comments (Description)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Comments for the QA via Automation Script",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Comments field to Comments for the QA via Automation Script',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Comments field to Comments for the QA via Automation Script'],
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
	taskStatus: {
		Xpath: "//span[normalize-space(.)='Status']/../following-sibling::div//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Status (Status)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "In Progress",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Status picklist to In Progress',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Status picklist to In Progress'],
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
	taskPriority: {
		Xpath: "//span[normalize-space(.)='Priority']/../following-sibling::div//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Priority (Priority)",
		},
		interactionParameters: {
			setbyIndex: {
				interactionParameters: {
					id: 'Set By Index',
					settings: {
						value: 2,
					},
				}
			},
		},
		executionStatus: {
			setByIndex: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set By Index the Priority picklist to 2',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Priority picklist to 2'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	taskName: {
		//  Xpath: "//label[normalize-space(.)='Name']/following-sibling::div//div/input[@placeholder='Search Contacts...']",
		xpath: "//div[contains(@class,'modal-container slds-modal__container')]//div[contains(@class,'full forcePageBlock forceRecordLayout')]//label[normalize-space(.)='Name']/following-sibling::div//div/input[@placeholder='Search Contacts...']",
		contactLookup: "//div[contains(@class,'DESKTOP uiModal--large uiModal open active')]//div[contains(@class,'slds-grid forceSearchBaseSearchPage forceSearchSearch')]//tbody/tr[1]/td[1]/a",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (WhoId)",
		},
		interactionParameters: {
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: "{LastName}",
					},
				},
			},
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: /Lookup the Name reference to AutomationContact.*/,
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
							text: /Set the Search text to AutomationContact.*/,
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
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Name reference to {LastName}'],
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
									title: [/Set the Search text to {LastName}/],
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
		},
	},
	eventName: {
		//  Xpath: "//label[normalize-space(.)='Name']/following-sibling::div//div/input[@placeholder='Search Contacts...']",
		xpath: "//div[contains(@class,'modal-container slds-modal__container')]//div[contains(@class,'full forcePageBlock forceRecordLayout')]//label[normalize-space(.)='Name']/following-sibling::div//div/input[@placeholder='Search Contacts...']",
		contactLookup: "//div[contains(@class,'DESKTOP uiModal--large uiModal open active')]//div[contains(@class,'slds-grid forceSearchBaseSearchPage forceSearchSearch')]//tbody/tr[1]/td[1]/a",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (WhoId)",
		},
		interactionParameters: {
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: "{LastName}",
					},
				},
			},
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: /Lookup the Name reference to AutomationContact.*/,
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
							text: /Set the Search text to AutomationContact.*/,
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
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Name reference to {LastName}'],
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
									title: [/Set the Search text to {LastName}/],
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
		},
	},
	conName: {
		Xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
		contactLookup: "//div[contains(@class,'slds-grid forceSearchBaseSearchPage forceSearchSearch')]//tbody/tr[1]/td[1]/a",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (Name)",
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Click the Name button',
			executionStatus: 'Executed',
			successfulCount: 1,
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Name button'],
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
	eventRelatedTo: {
		//xpath: "//div[contains(@class,'modal-container slds-modal__container')]//div[contains(@class,'full forcePageBlock forceRecordLayout')]//label/span[normalize-space(.)='Assigned To']/../following-sibling::div//li/a"
		xpath: "//span[normalize-space(.)='Related To']/../following-sibling::div//span[@class='pillText']",
		fieldDetails: {
			disposition: "Existing",
			text: "Related To (WhatId)",
		},
		interactionParameters: {
			readAssert: {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=WhatId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhatId'],
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
	saveButton: {
		Xpath: "//button[@title='Save']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Save (save)',
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Save button",
			"executionStatus": "Executed",
			"successfulCount": 1,
			"failureCount": 0,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
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
										"ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26action%3Dsave"
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
		testCaseXMLEvent: [{
			"name": [
				"UiDoAction"
			],
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
										"ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26action%3Dsave"
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
											"OpenActivities"
										],
										"fieldLocator": [
											{
												"uri": [
													"ui:locator?name=OpenActivities&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26relationship%3DOpenActivities"
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
			}
		]
	}],
	contactLookup: {
		fieldDetails: {
			disposition: "Existing",
			text: "Related To (WhatId)",
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Lookup the Related To reference to AutomationAPIAccount',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Account Lookup screen',
					executionStatus: 'Executing',
					successfulCount: 0,
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Set the Search text to AutomationAPIAccount',
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
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Related To reference to {AccountName}'],
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
					title: ['On SF Account Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=Account'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to {AccountName}'],
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
		},
	},
};
