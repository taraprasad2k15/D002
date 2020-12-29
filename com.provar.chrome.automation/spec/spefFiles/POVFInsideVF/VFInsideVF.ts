import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const POVFTestcase = {
	VFPSI: {
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
		existing: {
			"itemDefinition": {
				"itemClass": "Page",
				"itemTypeId": "VfUiTargetExtension",
				"disposition": "Existing",
				"embedded": false,
			},
			"pageDetails": {
				"title": /.*/,
			}
		}
	},
	executionStatus: [{
		name: 'UiAssert',
		type: 'Icon-Successful',
		text: 'UI Assert',
		executionStatus: 'Executed',
		successfulCount: 1,
	}],
	caseOriginSet: {
		Xpath: "(//th[normalize-space(.)='Case Origin']/following-sibling::td/select)",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "choice",
			},
			"disposition": "New",
			"fieldName": "caseOrigin",
		},
		interactionParameters: {
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
                fieldName: 'caseOrigin', 
                locator: {
                    type: 'By ProvarX™',
                }
            },
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Phone',
				},
			}
		},
		executionStatus: {
			"name": "UiWithScreen",
			"type": "Icon-ExecutingPaused",
			"text": "On MyPageObject page",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiDoAction",
					"type": "Icon-Successful",
					"text": "Set the Case Origin to Phone",
					"executionStatus": "Executed",
					"successfulCount": 1,
				}
			]
		},
		testCaseXML: {
			"title": [
				"On MyPageObject page"
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
									"text": "On MyPageObject page",
									"class": [
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
											"title": [
												"Set the Case Origin to Phone"
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
																		/ui:pageobject:field\?field=frame%2FcaseOrigin&pageId=pageobjects.*/
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
																	"text": "Phone",
																	"class": [
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
																	"text": "Set the Case Origin to Phone",
																	"class": [
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
	caseOrigin: {
		Xpath: "(//th[normalize-space(.)='Case Origin']/following-sibling::td/select)",
		Xpath1:"(//th[(.)='Case Origin']/following-sibling::td/span)[1]",
		fieldDetails: {
			"disposition": "New",
			"fieldName": "caseOrigin",
		},
		interactionParameters: {
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
                fieldName: 'caseOrigin',
            },
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 4,
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'caseOrigin',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set By Index the Case Origin to 4",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set By Index the Case Origin to 4"
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
										"ui:interaction?name=setByIndex"
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
									"text": "4",
									"class": [
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
									"text": "Set By Index the Case Origin to 4",
									"class": [
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
		testCaseXML1: [{
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
                                                "caseOrigin1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcaseOrigin/
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
                                                                    "text": "Phone",
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
	customPicklist: {
        Xpath1:"(//th[(.)='Custom Picklist(Multi)']/following-sibling::td/span)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "customPicklistMulti",
        },
		interactionParameters: {
			readAssert: {
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
					fieldName: 'customPicklistMulti',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
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
                                                "customPicklistMulti"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2FcustomPicklistMulti.*/
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
                                                                    "text": "Orange; Green",
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
	subject: {
		Xpath: "//th[normalize-space(.)='Subject']/following-sibling::td/input",
        Xpath1:"//th[(.)='Subject']/following-sibling::td[1]/span",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "subject",
		},
		interactionParameters: {
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
                fieldName: 'subject', 
                locator: {
                    type: 'By ProvarX™',
                }
            },
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test VF page via automation script',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'subject',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Subject to Test VF page via automation script",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML1: [{
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
					"argument":  [
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
												"subject1"
											],
											"fieldLocator": [
												{
													"uri": [
														/ui:pageobject:field\?field=frame%2Fsubject1.*/
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
		testCaseXML: [{
			"title": [
				"Set the Subject to Test VF page via automation script"
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
									"text": "Test VF page via automation script",
									"class": [
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
									"text": "Set the Subject to Test VF page via automation script",
									"class": [
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
	escalated: {
        Xpath: "//th[(.)='Escalated']/following-sibling::td/span/img",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "boolean",
            },
            "disposition": "New",
            "fieldName": "escalated",
        },
		interactionParameters: {
			readAssert: {
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
					fieldName: 'escalated',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
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
                                                "escalated1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2Fescalated.*/
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
	description: {
		Xpath: "//th[normalize-space(.)='Description']/following-sibling::td/textarea",
		Xpath1:"//th[(.)='Description']/following-sibling::td[1]/span",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "description",
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'description',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		interactionParameters: {
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
                fieldName: 'description', 
                locator: {
                    type: 'By ProvarX™',
                }
            },
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Short description',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Description to Short description",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML1: [{
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
                                                "description1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2Fdescription.*/
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
                                                                    "text": "Test description",
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
		testCaseXML: [{
			"title": [
				"Set the Description to Short description"
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
									"text": "Short description",
									"class": [
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
									"text": "Set the Description to Short description",
									"class": [
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
	customTextArea: {
        Xpath1:"(//th[(.)='Custom Text Area Encrypted']/following-sibling::td[1]/span)[2]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "customTextAreaEncrypted",
        },
		interactionParameters: {
			readAssert: {
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
					fieldName: 'customTextAreaEncrypted',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
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
                                                "customTextAreaEncrypted"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomTextAreaEncrypted.*/
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
                                                                    "text": "XXXXXXXXXXXXX5178",
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
	customCheckbox: {
		Xpath: "//th[normalize-space(.)='Escalated']/following-sibling::td/input[@type='checkbox']",
		fieldDetailsNew: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "boolean",
			},
			"disposition": "New",
			"fieldName": "escalated",
		},
		interactionParameters: {
			check: {
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
					fieldName: 'escalated',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Check',
				}
			},
			uncheck: {
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
					fieldName: 'escalated',
				},
				interactionParameters: {
					id: 'Uncheck',
				}
			},
			toggle: {
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
					fieldName: 'escalated',
				},
				interactionParameters: {
					id: 'Toggle',
				}
			},
		},
		executionStatus: {
			check: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Check the Escalated",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
			uncheck: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Uncheck the Escalated",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
			toggle: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "Toggle the Escalated",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}],
		},
		testCaseXML: {
			check: [{
				"title": [
					"Check the Escalated"
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
										"text": "Check the Escalated",
										"class": [
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
			uncheck: [{
				"title": [
					"Uncheck the Escalated"
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
											"ui:interaction?name=uncheck"
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
										"text": "Uncheck the Escalated",
										"class": [
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
			toggle: [{
				"title": [
					"Toggle the Escalated"
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
											"ui:interaction?name=toggle"
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
										"text": "Toggle the Escalated",
										"class": [
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
	},
	customTime: {
		Xpath: "//th[normalize-space(.)='Custom Time Field']/following-sibling::td/span/input",
		Xpath1:"(//th[(.)='Custom Time Field']/following-sibling::td/span)[2]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customTimeField",
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customTimeField',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		interactionParameters: {
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
					fieldName: 'customTimeField',
					locator: {
						type: 'By ProvarX™',
					}
				},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '23:30',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Time Field to 23:30",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Time Field to 23:30"
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
									"text": "23:30",
									"class": [
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
									"text": "Set the Custom Time Field to 23:30",
									"class": [
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
		    testCaseXML1: [{
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
                                                "customTimeField1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2FcustomTimeField.*/
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
                                                                    "text": "07:30",
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
	customRichText: {
		Xpath: "//div[contains(@class,'cke_contents ')]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "com.provar.plugins.forcedotcom.core.ui.pagecontrols.cke.CkEditor",
			},
			"disposition": "New",
			"fieldName": "customRichTextField",
		},
		interactionParameters: {
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
				fieldName: 'customRichTextField',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Rich Text',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Rich Text Field to Rich Text',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Rich Text Field to Rich Text'],
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
		Xpath: "//select[contains(@title,'Available')]/optgroup/option[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "choice",
			},
			"disposition": "New",
			"fieldName": "customPicklistMulti",
		},
		interactionParameters: {
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
					fieldName: 'customPicklistMulti',
					locator: {
						type: 'By ProvarX™',
					}
				},
			interactionParameters: {
				id: 'SF Multi Select',
				settings: {
					value: 'Red',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": /Multi-Select the Custom Picklist.*/,
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				/Multi-Select the Custom Picklist.*/
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
										"ui:interaction?name=sfSelect"
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
									"text": /Multi-Select the Custom Picklist.*/,
									"class": [
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
	customPicklistDeselect: {
		Xpath: "//select[contains(@title,'Chosen')]//option[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"disposition": "Existing",
			"fieldName": "customPicklistMulti",
		},
		interactionParameters: {
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
				fieldName: 'customPicklistMulti',
			},
			interactionParameters: {
				id: 'SF Multi Deselect',
				settings: {
					value: 'Red',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
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
										"ui:interaction?name=sfDeselect"
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
									"class": [
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
	customDate: {
		Xpath: "//th[normalize-space(.)='Custom Date Field']/following-sibling::td/span[contains(@class,'dateOnlyInput')]/input",
		Xpath1:"//th[(.)='Custom Date Field']/following-sibling::td/span[@id]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customDateField",
		},
		interactionParameters: {
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
				fieldName: 'customDateField',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01-01-2019',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customDateField',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Date Field to 01-01-2019",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Date Field to 01-01-2019"
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
									"text": "01-01-2019",
									"class": [
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
									"text": "Set the Custom Date Field to 01-01-2019",
									"class": [
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
		testCaseXML1: [{
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
                                                "customDateField1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomDateField.*/
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
                                                                    "text": "28/03/2020",
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
	customDateTime: {
		Xpath: "//th[normalize-space(.)='Custom Date-Time Field']/following-sibling::td/span/input",
		Xpath1:"(//th[(.)='Custom Date-Time Field']/following-sibling::td/span)[2]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customDateTimeField",
		},
		interactionParameters: {
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
				fieldName: 'customDateTimeField',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '01-01-2019 13:13',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customDateTimeField',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Date Time Field to 01-01-2019 13:13",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Date Time Field to 01-01-2019 13:13"
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
									"text": "01-01-2019 13:13",
									"class": [
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
									"text": "Set the Custom Date Time Field to 01-01-2019 13:13",
									"class": [
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
		testCaseXML1: [{
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
                                                "customDateTimeField1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomDateTimeField.*/
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
                                                                    "text": "28/03/2020 08:24",
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
	customRadioButton: {
		Xpath: "(//input[@type='radio'])[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "boolean",
			},
			"disposition": "New",
			"fieldName": "one",
		},
		interactionParameters1: {
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
				fieldName: 'one',
				locator: {
                    type: 'By ProvarX™',
                }
			},
		},
		interactionParameters: {
			interactionParameters: {
				id: 'Check',
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Check the One",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Check the One"
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
									"text": "Check the One",
									"class": [
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
	parentCase: {
		Xpath: "//th[normalize-space(.)='Parent Case']/following-sibling::td/span[@class='lookupInput']/a",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "parentCase",

		},
		interactionParameters: {
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
				fieldName: 'parentCase',
				locator: {
                    type: 'By ProvarX™',
                }
			},
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Lookup the Parent Case",
			"executionStatus": "Executed",
			"successfulCount": 1,
			"failureCount": 0,
		}],
		testCaseXML: [{
			"name": [
				"UiDoAction"
			],
			"title": [
				"Lookup the Parent Case"
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
									"text": "Lookup the Parent Case",
									"class": [
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
	},

	customCurrency: {
		Xpath: "//th[normalize-space(.)='Custom Currency']/following-sibling::td/input",
		Xpath1:"//th[(.)='Custom Currency']/following-sibling::td[1]/span",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customCurrency",
		},
		interactionParameters: {
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
				fieldName: 'customCurrency',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'INR',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customCurrency',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Currency to INR",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Currency to INR"
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
									"text": "INR",
									"class": [
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
									"text": "Set the Custom Currency to INR",
									"class": [
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
		testCaseXML1: [{
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
                                                "customCurrency1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomCurrency.*/
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
                                                                    "text": "£898,956",
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
	customNumber: {
		Xpath: "//th[normalize-space(.)='Custom Number']/following-sibling::td[1]/input",
		Xpath1:"//th[(.)='Custom Number']/following-sibling::td[1]/span",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customNumber",
		},
		interactionParameters: {
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
				fieldName: 'customNumber',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '69',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customNumber',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Number to 69",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Number to 69"
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
									"text": "69",
									"class": [
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
									"text": "Set the Custom Number to 69",
									"class": [
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
		testCaseXML1: [{
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
                                                "customNumber1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2FcustomNumber.*/
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
                                                                    "text": "11,145,265",
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
	customMobile:{
		Xpath: "//th[normalize-space(.)='Custom Mobile']/following-sibling::td[1]/input",
		Xpath1:"//th[(.)='Custom Mobile']/following-sibling::td[1]/span",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customMobile",
		},
		interactionParameters: {
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
				fieldName: 'customMobile',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '9988776655',
				},
			}
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customMobile',
					locator: {
						type: 'By ProvarX™',
					}
				},
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
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Mobile to 9988776655",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML1: [{
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
                                                "customMobile1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomMobile.*/
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
                                                                    "text": "8989898156",
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
		testCaseXML: [{
			"title": [
				"Set the Custom Mobile to 9988776655"
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
									"text": "9988776655",
									"class": [
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
									"text": "Set the Custom Mobile to 9988776655",
									"class": [
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
	customURL:{
		Xpath: "//th[normalize-space(.)='Custom URL']/following-sibling::td[1]/input",
		Xpath1: "//th[(.)='Custom URL']/following-sibling::td/span/a",
		fieldDetails1: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customURL",
		},
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "link",
			},
			"disposition": "New",
			"fieldName": "customURL",
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customURL',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		interactionParameters: {
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
				fieldName: 'customUrl',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'www.provartesting.com',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Url to www.provartesting.com",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Url to www.provartesting.com"
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
									"text": "www.provartesting.com",
									"class": [
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
									"text": "Set the Custom Url to www.provartesting.com",
									"class": [
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
		testCaseXML1: [{
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
                                                "customURL"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcustomURL.*/
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
                                                                    "text": "http://ww.google.com",
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
	webEmail:{
		Xpath: "//th[normalize-space(.)='Web Email']/following-sibling::td[1]/input",
		Xpath1:"(//th[(.)='Web Email']/following-sibling::td/span)[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "webEmail",
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'webEmail',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		interactionParameters: {
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
				fieldName: 'webEmail',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'sample@provartesting.com',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Web Email to sample@provartesting.com",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Web Email to sample@provartesting.com"
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
									"text": "sample@provartesting.com",
									"class": [
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
									"text": "Set the Web Email to sample@provartesting.com",
									"class": [
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
		testCaseXML1: [{
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
                                                "webEmail1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FwebEmail.*/
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
                                                                    "text": "a@bc.com12",
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
	customPercent:{
		Xpath: "//th[normalize-space(.)='Custom Percent']/following-sibling::td[1]/input",
		Xpath1:"(//th[(.)='Custom Percent']/following-sibling::td/span)[1]",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "customPercent",
		},
		interactionParameters1: {
			readAssert: {
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
					fieldName: 'customPercent',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
		interactionParameters: {
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
				fieldName: 'customPercent',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '97',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Custom Percent to 97",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Custom Percent to 97"
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
									"text": "97",
									"class": [
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
									"text": "Set the Custom Percent to 97",
									"class": [
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
		testCaseXML1: [{
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
                                                "customPercent1"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                       /ui:pageobject:field\?field=frame%2FcustomPercent.*/
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
                                                                    "text": "67%",
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
	internalComments:{
		Xpath: "//th[normalize-space(.)='Internal Comments']/following-sibling::td/textarea",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "internalComments",
		},
		interactionParameters: {
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
				fieldName: 'internalComments',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test VF page via automation script',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Internal Comments to Test VF page via automation script",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}],
		testCaseXML: [{
			"title": [
				"Set the Internal Comments to Test VF page via automation script"
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
									"text": "Test VF page via automation script",
									"class": [
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
									"text": "Set the Internal Comments to Test VF page via automation script",
									"class": [
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
	accountName:{
		Xpath: "//th[normalize-space(.)='Account Name']/following-sibling::td/span/input",
		fieldDetails: {
			"platformElementLocators": [
				{
					"elementLocator": {
						"locatorType": "Vf",
					},
				}
			],
			"valueType": {
				"id": "text",
			},
			"disposition": "New",
			"fieldName": "accountName",
		},
		interactionParameters: {
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
				fieldName: 'accountName',
				locator: {
                    type: 'By ProvarX™',
                }
			},
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Sample Account',
				},
			}
		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Account Name to Sample Account",
			"executionStatus": "Executed",
		}],
		testCaseXML: [{
			"title": [
				"Set the Account Name to Sample Account"
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
									"text": "Sample Account",
									"class": [
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
									"text": "Set the Account Name to Sample Account",
									"class": [
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
	caseNumber: {
        Xpath: "//th[(.)='Case Number']/following-sibling::td/span[(.)='00002617']",
        Xpath1:"//th[(.)='Case Number']/following-sibling::td[1]/span[contains((.), '00')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "caseNumber",
        },
		interactionParameters: {
			readAssert: {
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
					fieldName: 'caseNumber',
					locator: {
						type: 'By ProvarX™',
					}
				},
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
					},
				},
			},
		},
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
                    argument: comparisonUtils.addCompareOptions([
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
                                                "caseNumber"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        /ui:pageobject:field\?field=frame%2FcaseNumber.*/
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
                                                                    "text": "00002617",
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ]
        }],
    },
};