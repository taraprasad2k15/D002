import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewNoteAccountCX = {
    NewNoteViewPSI: {
        itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Account&action=QuickAction&quickAction=NewNote&recordType=Default',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account NewNote publisher action screen',
		},
    },
    feedTab: {
        Xpath: "//span[@class='linkText' and (.)='Show Feed']",
    },
    newNoteTab: {
        Xpath: "//span[(.)='New Note' and contains(@class,'publisherattachtext truncateLabel')]",
    },
    title: {
        Xpath: "//div[@class='quickActionFieldLabel']/label[contains((.),'Title')]/../following-sibling::div[@class='quickActionFieldElement']/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Title (Title)",
        },
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Title for the New Note QA",
                    },
                },
            },
            assert:{
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
                type: 'Icon-ExecutingPaused',
                text: 'On SF Account (Default) Publisher Action New Note screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Set the Title field to Title for the New Note QA',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            },
        executionStatusAssert:[
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: {
                name: ['UiWithScreen'],
                title: ['On SF Account (Default) Publisher Action New Note screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Account&action=QuickAction&quickAction=NewNote&recordType=Default'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                    name: ['UiDoAction'],
                                    title: ['Set the Title field to Title for the New Note QA'],
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
        testCaseXMLAssert:[{
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
												"Title"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Title&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DNote%26field%3DTitle"
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
																	"text": "Title for the New Note QA",
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
    private: {
        Xpath: "//div[@class='quickActionFieldLabel']/label[contains((.),'Private')]/../following-sibling::div[@class='quickActionFieldElement']/input",
        fieldDetails:{
            disposition: "Existing",
            text: "Private (IsPrivate)",
        },
        interactionParameters:{
            check:{
                interactionParameters:{
                    id: "Check",
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
				text: 'Check the Private field',
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
			title: ['Check the Private field'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=check'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
        }],
        testCaseXMLAssert:[{
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
												"IsPrivate"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=IsPrivate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DNote%26field%3DIsPrivate"
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
    body: {
        Xpath: "//div[@class='quickActionFieldLabel']/label[contains((.),'Body')]/../following-sibling::div[@class='quickActionFieldElement']/textarea",
        fieldDetails:{
            disposition: "Existing",
            text: "Body (Body)",
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id: "Set",
                    settings:{
                        value: "Text for the Body field of the New Note QA",
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
			set:[{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Body field to Text for the Body field of the New Note QA',
				executionStatus: 'Executed',
				successfulCount: 1,
            }],
            readAssert:[{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
        },
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Body field to Text for the Body field of the New Note QA'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=set'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
        }],
        testCaseXMLAssert:[{
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
												"Body"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Body&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DNote%26field%3DBody"
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
																	"text": "Text for the Body field of the New Note QA",
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
		fieldDetails:{
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
}