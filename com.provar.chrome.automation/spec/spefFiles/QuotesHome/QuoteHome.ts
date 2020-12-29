import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {FieldType, ScreenType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj = new MiscUtils();
export const QuoteHome = {
	selectRow: {
		Xpath: "(//tr/td//input[@type='checkbox'])[1]",
		interactionParameters: {
			interactionParameters: {
				id: 'Check',
				settings: {
					value: true,
				},
			}
		},
		executionStatus: [
			{
				"name": "UiWithRow",
				"type": "Icon-ExecutingPaused",
				"text": /With SBQQ__Quote__c rows {SBQQ__QUOTE__C_NAME.*/,
				"executionStatus": "Executing",
				"children": [
					{
						"name": "UiDoAction",
						"type": "Icon-Successful",
						"text": "Check the Select Row rowSelectionCheckbox",
						"executionStatus": "Executed",
					}
				]
			},
		],
		testCaseXML: [
			{
				name: ['UiWithRow'],
				title: [/With SBQQ__Quote__c rows {SBQQ__QUOTE__C_NAME.*/],
				arguments: [{
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
										"sf:ui:locator:row?table=ObjectHome%2Frecent%2FrecentTable"
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
									"text": /With SBQQ__Quote__c rows {SBQQ__QUOTE__C_NAME.*/,
									"class": [
										"value"
									],
									"valueClass": [
										"string"
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
														"SBQQ__QUOTE__C_NAME"
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
					], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Check the Select Row rowSelectionCheckbox'],
								arguments: [{
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
														"ui:locator?name=SelectRow"
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
									], { partial: true, indexKey: 'id' }),
								}],
							},
							],
						}],
					}],
				}],
			}],
	},
	name: {
		Xpath: "(//table/tbody/tr/th/span/a)[1]",
		interactionParameters: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		},
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
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
								uri: [],
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
	status: {
		Xpath: "(//tbody/tr//td/span)[5]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
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
								uri: [],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	additionalDiscount: {
		Xpath: "(//tbody/tr//td/span)[6]",
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
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
								uri: [],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	leadStatus: {
		Xpath: "(//tbody/tr//td/span)[7]",
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
								uri: ['ui:locator?name=LEAD_STATUS&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DStatus'],
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
	listSearchBox: {
		Xpath: "//input[@type='search' and contains(@name,'search-input')]",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '{Quote_Number}',
					pressEnter: true,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
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
	opportunity: {
		Xpath: {
			input: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Opportunity', FieldType.Lookup),
			lookup: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Opportunity', FieldType.LookupSearch),
		},
		interactionParameters: {
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: '{Opp_Name}',
					},
				},
			},
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					text: /Lookup the Opportunity reference to.*/,
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Opportunity Lookup screen',
					executionStatus: 'Executing',
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: /Set the Search text to.*/,
							executionStatus: 'Executed',
						},
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Click the Go! button',
							executionStatus: 'Executed',
						},
					],
				},
			],
			new:{
				text: "On SF Quote New screen",
				children:[
					{
						name: 'UiDoAction',
						text: /Lookup the Opportunity reference to.*/,
						executionStatus: 'Executed',
						successfulCount: 1,
					},
					{
						name: 'UiWithScreen',
						type: 'Icon-ExecutingPaused',
						text: 'On SF Opportunity Lookup screen',
						executionStatus: 'Executing',
						children: [
							{
								name: 'UiDoAction',
								type: 'Icon-Successful',
								text: /Set the Search text to.*/,
								executionStatus: 'Executed',
							},
							{
								name: 'UiDoAction',
								type: 'Icon-Successful',
								text: 'Click the Go! button',
								executionStatus: 'Executed',
							},
						],
					},
				],
			}
		},
		testCaseXML: {
			lookup: [
				{
					"title": [
						/Lookup the Opportunity reference to AutomationAPI.*/
					],
				},
				{
					"title": [
						"On SF Opportunity Lookup screen"
					],
					"clauses": [
						{
							"clause": [
								{
									"steps": [
										{
											"apiCall": [
												{
													"title": [
														/Set the Search text to .*/
													],
												},
												{
													"title": [
														"Click the Go! button"
													],
												},
											]
										}
									]
								}
							]
						}
					]
				}],
			new:{
				"title": [
					"On SF Quote New screen"
				],
				"clauses": [
					{
						"clause": [
							{
								"steps": [
									{
										"apiCall":  [
											{
												"title": [
													/Lookup the Opportunity reference to.*/
												],
											},
											{
												"title": [
													"On SF Opportunity Lookup screen"
												],
												"clauses": [
													{
														"clause": [
															{
																"steps": [
																	{
																		"apiCall": [
																			{
																				"title": [
																					/Set the Search text to .*/
																				],
																			},
																			{
																				"title": [
																					"Click the Go! button"
																				],
																			},
																		]
																	}
																]
															}
														]
													}
												]
											}]
									}
								]
							}
						]
					}
				],
			}
		},
		fieldDetails: {
			disposition: "Existing",
			fieldName: 'SBQQ__Opportunity2__c',
		},
	},
	opportunityName: {
		xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
		fieldDetails: {
			disposition: "Existing",
			fieldName: 'Name',
		},
		testCaseXML: [
			{
				"title": [
					"Click the Opportunity Name button"
				],
			}],
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Opportunity Name button",
			"executionStatus": "Executed",
		}],
	},
	account: {
		Xpath: {
			input: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Account', FieldType.Lookup),
			lookup: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Account', FieldType.LookupSearch),
		},
		interactionParameters: {
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: '{Acc_Name}',
					},
				},
			},
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					text: /Lookup the Account reference to.*/,
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Account Lookup screen',
					executionStatus: 'Executing',
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: /Set the Search text to.*/,
							executionStatus: 'Executed',
						},
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: 'Click the Go! button',
							executionStatus: 'Executed',
						},
					],
				},
			],
		},
		testCaseXML: {
			lookup: [
				{
					"title": [
						/Lookup the Account reference to.*/
					],
				},
				{
					"title": [
						"On SF Account Lookup screen"
					],
					"clauses": [
						{
							"clause": [
								{
									"steps": [
										{
											"apiCall": [
												{
													"title": [
														/Set the Search text to.*/
													],
												},
												{
													"title": [
														"Click the Go! button"
													],
												},
											]
										}
									]
								}
							]
						}
					]
				}],
		},
		fieldDetails: {
			disposition: "Existing",
			fieldName: 'SBQQ__Account__c',
		},
	},
	accountName: {
		xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
		fieldDetails: {
			disposition: "Existing",
			fieldName: 'Name',
		},
		testCaseXML: [
			{
				"title": [
					"Click the Account Name button"
				],
			}],
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Account Name button",
			"executionStatus": "Executed",
		}],
	},
};