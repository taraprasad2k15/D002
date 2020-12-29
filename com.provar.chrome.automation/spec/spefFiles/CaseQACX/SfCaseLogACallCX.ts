import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCaseLogACallCX = {
	PublisherActionPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Case&quickAction=Case.LogACall&action=QuickAction',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case Log a call Quick Action screen',
		},
	},
	lookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=003',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact Lookup Screen',
		},
	},
	feedTab: {
		Xpath: "//span[@class='optionLabel' and (.)='Feed']",
	},
	logACallTab: {
		Xpath: "//span[@class='optionLabel' and (.)='Log a Call']",
	},
	comments: {
		Xpath: "//textarea[contains(@class,'caseLogCallPublisherText')]",
		fieldDetails: {
			disposition: "Existing",
			text: "Comments (comments)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Comments for the Log A Call Quick Action",
					},
				},
			},
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
		executionStatus: {
			set: {
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Case Publisher Action Log a Call screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Comments field to Comments for the Log A Call Quick Action',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			},
			assert: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			set: {
				name: ['UiWithScreen'],
				title: ['On SF Case Publisher Action Log a Call screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?object=Case&quickAction=Case.LogACall&action=QuickAction'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Comments field to Comments for the Log A Call Quick Action'],
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
			assert: [{
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
													"comments"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=comments&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DDescription"
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
																		"text": "Comments for the Log A Call Quick Action",
																		"class": [
																			"value"
																		],
																		"valueClass": [
																			"string"
																		]
																	}
																]
															},
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
	},
	customerName: {
		Xpath: "//div[@class='publisherFieldElement']/span[@class='lookupInput']/input",
		fieldDetails: {
			disposition: "Existing",
			text: "Customer Name (contactName)",
		},
		interactionParameters: {
			sfLookup: {
				interactionParameters: {
					id: "SF Lookup",
				},
			},
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "{LastName}",
					},
				},
			},
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
		executionStatus: {
			lookup: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Lookup the Customer Name reference',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			set: {
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Customer Name reference to : AutomationContact',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
			assert: [{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Customer Name reference to {LastName}'],
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
												"contactName"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=contactName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId"
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
																	"text": "AutomationContact",
																	"class": [
																		"value"
																	],
																	"valueClass": [
																		"string"
																	]
																}
															]
														},
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
		testCaseXMLlookup: [{
			name: ['UiDoAction'],
			title: ['Lookup the Customer Name reference'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfLookup'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	searchText: {
		Xpath: "//label[@class='assistiveText']/following-sibling::input[@type='text']",
		fieldDetails: {
			disposition: "Existing",
			text: "Search (SearchName)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "{LastName}",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Contact Lookup screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Search text to AutomationContact',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			}],
		},
		testCaseXML: {
			set: [{
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
								title: ['Set the Search text to {LastName}'],
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
			}],
		},
	},
	go: {
		Xpath: "//label[@class='assistiveText']/following-sibling::input[@value=' Go! ' and @class='btn']",
		fieldDetails: {
			disposition: "Existing",
			text: "Go! (go)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Go! button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Go! button'],
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
	contactName: {
		Xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (Name)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Name button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
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
	logACallButton: {
		Xpath: "//div[contains(@class,'casePublisherButtonBox')]/input[@title='Log a Call']",
		fieldDetails: {
			disposition: "Existing",
			text: "Log a Call (LogaCall)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Log a Call button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Log a Call button'],
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
}