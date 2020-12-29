import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewEventContactCX = {
	oppLookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=006',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity Lookup Screen',
		},
	},
	NewTaskViewPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Contact&action=QuickAction&quickAction=NewEvent&recordType=Employee',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact NewEvent publisher action screen',
		},
	},
	comboBoxPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=combo',
			itemTypeId: 'SfComboUiTargetExtension',
		},
		pageDetails: {
			title: 'Combo Box',
		},
	},
	feedTab: {
		Xpath: "//span[@class='showFeedLink' and contains(@style,'inline-block')]//span[(.)='Show Feed']",
	},
	newEventTab: {
		Xpath: "//span[(.)='New Event' and contains(@class,'publisherattachtext truncateLabel')]",
	},
	subject: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'Subject')]/../following-sibling::div[@class='quickActionFieldElement']/input[@data-fieldname='subject']",
		XpathCombo: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'Subject')]/../following-sibling::div[@class='quickActionFieldElement']/a",
		fieldDetails: {
			disposition: "Existing",
			text: "Subject (Subject)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Email",
					},
				},
			},
			combo: [{
				interactionParameters: {
					id: "SF Combo Lookup",
				},
			}],
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
				text: 'On SF Contact (Employee) Publisher Action New Event screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Subject field to Email',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			},
			combo: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Combo Lookup the Subject field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			assert: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
					successfulCount: 1,
				}
			],
		},
		testCaseXML: {
			set: {
				name: ['UiWithScreen'],
				title: ['On SF Contact (Employee) Publisher Action New Event screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?object=Contact&action=QuickAction&quickAction=NewEvent&recordType=Employee'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Subject field to Email'],
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
			combo: [{
				name: ['UiDoAction'],
				title: ['Combo Lookup the Subject field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=sfCombo'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
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
													"Subject"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Subject&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DSubject"
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
																		"text": "Email",
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
	option: {
		Xpath: "//li/a[text()='Email']",
		fieldDetails: {
			disposition: "Existing",
			text: "Option (option)",
		},
		executionStatus: {
			click: [{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Combo Box screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Click the Option button',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			}],
		},
		testCaseXML: {
			click: {
				name: ['UiWithScreen'],
				title: ['On SF Combo Box screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?action=combo'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Click the Option button'],
								arguments: [{
									argument: comparisonUtils.addCompareOptions([{
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
			},
		},
	},
	description: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'Description')]/../following-sibling::div[@class='quickActionFieldElement']/textarea",
		fieldDetails: {
			disposition: "Existing",
			text: "Description (Description)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "Set description for New Event QA on Contact view screen",
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
			setPcombo: {
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Contact (Employee) Publisher Action New Event screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Description field to Set description for New Event QA on Contact view screen',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			},
			set: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Set description for New Event QA on Contact view screen',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			assert: [{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: {
			setPcombo: [{
				name: ['UiWithScreen'],
				title: ['On SF Contact (Employee) Publisher Action New Event screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?object=Contact&action=QuickAction&quickAction=NewEvent&recordType=Employee'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Description field to Set description for New Event QA on Contact view screen'],
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
													"Description"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DDescription"
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
																		"text": "Set description for New Event QA on Contact view screen",
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
			set: [{
				name: ['UiDoAction'],
				title: ['Set the Description field to Set description for New Event QA on Contact view screen'],
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
	},
	relatedTo: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Related To']/../../following-sibling::div/div/span/input",
		fieldDetails: {
			disposition: "Existing",
			text: "Related To (WhatId)",
		},
		interactionParameters: {
			sfLookup: {
				interactionParameters: {
					id: "SF Lookup",
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
				text: 'Lookup the Related To reference',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			assert: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
					successfulCount: 1,
				}
			],
		},
		testCaseXML: {
			lookup: [{
				name: ['UiDoAction'],
				title: ['Lookup the Related To reference'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=sfLookup'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
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
													"WhatId"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=WhatId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhatId"
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
																		"text": "AutomationOpportunity",
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
	name: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Name']/../../following-sibling::div/div/span/input",
		fieldDetails: {
			disposition: "Existing",
			text: "Name (WhoId)",
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
												"WhoId"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=WhoId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhoId"
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
	},
	create: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//span[contains(@class,'publisherShareButton')]/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Create (publishersharebutton)',
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Create button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Create button'],
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
						value: "{OpportunityName}",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Opportunity Lookup screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: 'Set the Search text to AutomationOpportunity',
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			}],
		},
		testCaseXML: {
			set: [{
				name: ['UiWithScreen'],
				title: ['On SF Opportunity Lookup screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?lookup=Opportunity'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Search text to {OpportunityName}'],
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
	opportunityName: {
		Xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Opportunity Name (Name)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Opportunity Name button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Opportunity Name button'],
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
	startDate: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'Start')]/../following-sibling::div[@class='quickActionFieldElement']//input",
		fieldDetails: {
			disposition: "Existing",
			text: "Start (StartDateTime)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "31/01/2020 ",
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
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Start field to 31/01/2020 ',
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
			title: ['Set the Start field to 31/01/2020 '],
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
												"StartDateTime"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=StartDateTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DStartDateTime"
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
																	"text": "31/01/2020",
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
	endDate: {
		Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'End')]/../following-sibling::div[@class='quickActionFieldElement']//input",
		fieldDetails: {
			disposition: "Existing",
			text: "End (EndDateTime)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "31/01/2020",
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
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the End field to 31/01/2020',
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
			title: ['Set the End field to 31/01/2020'],
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
												"EndDateTime"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=EndDateTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DEndDateTime"
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
																	"text": "31/01/2020",
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
}