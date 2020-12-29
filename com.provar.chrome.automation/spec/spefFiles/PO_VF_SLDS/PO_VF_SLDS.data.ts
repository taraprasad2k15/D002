import { ExpectedResultSupport } from "../../support/ExpectedResultSupport";
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const PO_VF_SLDS = {
	PSI: {
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
	},
	textInput: {
		Xpath: "//label[normalize-space(.)='Text Input']/following-sibling::div//input",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textInput',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'set textInput',
				},
			},
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'textInput'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On MyPageObject page',
			executionStatus: 'Executing',
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Text Input to set textInput',
					executionStatus: 'Executed',
				},
			],
		},
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
													"textInput"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:pageobject:field\?field=frame%2FtextInput&pageId=pageobjects.*/
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
																		"text": "set textInput",
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
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On MyPageObject page'],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the Text Input to set textInput'],
							arguments: [
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
															/ui:pageobject:field\?field=frame%2FtextInput&pageId=pageobjects.*/
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
														"text": "set textInput",
														"class": [
															"value"
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
														"text": "Set the Text Input to set textInput",
														"class": [
															"value"
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
					}],
				}],
			}],
		},
	},
	textarea: {
		Xpath: "//label[normalize-space(.)='Textarea Label']/following-sibling::div//textarea",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textareaLabel',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Send textareaLabel",
				},
			},
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'textareaLabel'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Textarea Label to Send textareaLabel',
			executionStatus: 'Executed'
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
													"textareaLabel"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:pageobject:field\?field=frame%2FtextareaLabel&pageId=pageobjects.*/
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
																		"text": "Send textareaLabel",
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
			title: ['Set the Textarea Label to Send textareaLabel'],
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
											/ui:pageobject:field\?field=frame%2FtextareaLabel&pageId=pageobjects.*/
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
										"text": "Send textareaLabel",
										"class": [
											"value"
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
										"text": "Set the Textarea Label to Send textareaLabel",
										"class": [
											"value"
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
		}]
	},
	checkbox: {
		Xpath: "//label[normalize-space(.)='Checkbox Label']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'checkboxLabel'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkboxLabel',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Checkbox Label',
			executionStatus: 'Executed'
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
													"checkboxLabel"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:pageobject:field\?field=frame%2FcheckboxLabel&pageId=pageobjects.*/
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
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Checkbox Label'],
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
											/ui:pageobject:field\?field=frame%2FcheckboxLabel&pageId=pageobjects.*/
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
										"text": "Check the Checkbox Label",
										"class": [
											"value"
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
		}]
	},
	monday: {
		Xpath: "//fieldset[1]//label/span[normalize-space(.)='Mon']",
		fieldDetails: {
			disposition: "New",
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'monday'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'monday',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Monday',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Monday'],
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
											/ui:pageobject:field\?field=frame%2Fmonday&pageId=pageobjects.*/
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
										"text": "Check the Monday",
										"class": [
											"value"
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
		}]
	},
	checkbox2: {
		Xpath: "//label[normalize-space(.)='All contacts in the account owned by you']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'checkbox2'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkbox2',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Checkbox 2',
			executionStatus: 'Executed'
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
													"checkbox2"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:pageobject:field\?field=frame%2Fcheckbox2&pageId=pageobjects.*/
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
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Checkbox 2'],
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
											/ui:pageobject:field\?field=frame%2Fcheckbox2&pageId=pageobjects.*/
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
										"text": "Check the Checkbox 2",
										"class": [
											"value"
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
			]
		}],
	},
	picklist: {
		Xpath: "//select[@id='select-01']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'picklist',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Set By Index",
				settings:{
					value: 2
				}
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set By Index the Picklist to 2',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Picklist to 2'],
		}],
	},
	radio: {
		Xpath: "//label[normalize-space(.)='Radio Label One']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'radio',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Radio',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Radio'],
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
											/ui:pageobject:field\?field=frame%2Fradio&pageId=pageobjects.*/
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
										"text": "Check the Radio",
										"class": [
											"value"
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
			]
		}],
	},
	wed: {
		Xpath: "//fieldset[4]//label/span[normalize-space(.)='Wed']",
		fieldDetails: {
			disposition: "New",
		},
		assertionParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'Existing',
				fieldName: 'wed'
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				}
			}
		},
		modificationParameters: {
			pageStructureParameters:
				[
					{
						level: 1,
						type: 'Page',
						pageLayout: 'SeleniumUiTargetExtension'
					},
				],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'wed',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Wed',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Wed'],
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
											/ui:pageobject:field\?field=frame%2Fwed&pageId=pageobjects.*/
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
										"text": "Check the Wed",
										"class": [
											"value"
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
					argument: comparisonUtils.addCompareOptions(
						[

						]
						, { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
}