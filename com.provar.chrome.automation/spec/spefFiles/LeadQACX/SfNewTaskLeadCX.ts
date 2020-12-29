import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewTaskLeadCX = {
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
			uiTargetUri: 'sf:ui:target?object=Lead&quickAction=NewTask&action=QuickAction',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Lead NewTask publisher action screen',
		},
	},
	comboBoxPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=combo',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Combo Box',
		},
	},
	feedTab: {
		Xpath: "//span[@class='showFeedLink']//span[(.)='Show Feed']",
	},
	newTaskTab: {
		Xpath: "//span[@class='publisherattachtext truncateLabel' and (.)='New Task']",
	},
	subject: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Subject']/../following-sibling::div[@class='quickActionFieldElement']/input",
		XpathCombo: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Subject']/../following-sibling::div[@class='quickActionFieldElement']/a",
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
			text: 'On SF Lead Publisher Action New Task screen',
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
			title: ['On SF Lead Publisher Action New Task screen'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['target'],
					value: [{
						uri: ['sf:ui:target?object=Lead&quickAction=NewTask&action=QuickAction'],
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
	dueDate: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Due Date']/../following-sibling::div[@class='quickActionFieldElement']//span[@class='dateFormat']/a",
		fieldDetails: {
			disposition: "Existing",
			text: "Due Date (ActivityDate)",
		},
		interactionParameters: {
			sfToday: {
				interactionParameters: {
					id: "SF Today",
				},
			},
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Today link the Due Date field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Today link the Due Date field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfToday'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	relatedTo: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Related To']/../../following-sibling::div/div[@class='quickActionFieldElement']/span[@class='lookupInput']/input",
		fieldDetails: {
			disposition: "Existing",
			text: "Related To (WhatId)",
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
			sfLookup: {
				interactionParameters: {
					id: "SF Lookup",
				},
			},
		},
		executionStatus: {
			set: {
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Related To reference to : AutomationOpportunity',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
			lookup: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Lookup the Related To reference',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Related To reference to {OpportunityName}'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		testCaseXMLlookup: [{
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
	},
	assignedTo: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[contains((.),'Assigned To')]/../../following-sibling::div/div[@class='quickActionFieldElement']/span[@class='lookupInput']/input",
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
												"OwnerId"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=OwnerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DOwnerId"
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
	name: {
		Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Name']/../../following-sibling::div/div[@class='quickActionFieldElement']/span[@class='lookupInput']/input",
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
														"ui:locator?name=WhoId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DTask%26field%3DWhoId"
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
																	"text": "AutomationLead, Provar",
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
}