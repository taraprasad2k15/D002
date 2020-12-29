import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj = new MiscUtils();

export const Lookups = {
	PSIlookup: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=Entitlement',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'Entitlement Lookup Screen',
        },
    },
	parentCase: {
		Xpath: {
			input: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Parent Case', FieldType.Lookup),
			lookup: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Parent Case', FieldType.LookupSearch),
			newInSF: miscUtilsObj.getFieldXpathLightning(ScreenType.New, 'Parent Case', FieldType.LookupNewInSF),
			view: miscUtilsObj.getFieldXpathLightning(ScreenType.View, 'Parent Case', FieldType.Lookup),
			prefilled: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, 'Parent Case', FieldType.Lookup),
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '{CaseNumber}',
					},
				},
			},
			setParent: {
				interactionParameters: {
					id: 'Set',
					settings: {
						value: '{ParentCaseNumber}',
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
					text: /Lookup the Parent Case reference to.*[0-9]{8}/,
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
			set: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": /Set the Parent Case reference to.*[0-9]{8}/,
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0
			}],
			setParent: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": /Set the Parent Case reference to.*[0-9]{8}/,
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0
			}],
			newInSF: [{
				"name": "UiDoAction",
				"type": "Icon-Successful",
				"text": "New In SF Lookup the Parent Case reference",
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
				"text": "Activate inline edit the Parent Case reference",
				"executionStatus": "Executed",
				"successfulCount": 1,
				"failureCount": 0,
			}],
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Parent Case reference to {CaseNumber}'],
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
			set: [{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Parent Case reference to {CaseNumber}"
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
											"ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId"
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
										"text": "Set the Parent Case reference to {CaseNumber}",
										"class": [
											"value"
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
			setParent: [{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Parent Case reference to {ParentCaseNumber}"
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
											"ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId"
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
													"ParentCaseNumber"
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
										"text": "Set the Parent Case reference to {ParentCaseNumber}",
										"class": [
											"value"
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
					"New In SF Lookup the Parent Case reference"
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
											"ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId"
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
										"text": "New In SF Lookup the Parent Case reference",
										"class": [
											"value"
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
									uri: ['ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId'],
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
											text: 'Parent Case',
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
					"Activate inline edit the Parent Case reference"
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
											"ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId"
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
										"text": "Activate inline edit the Parent Case reference",
										"class": [
											"value"
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
	entitlement: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Entitlement Name", FieldType.Lookup),
		FieldDetails: {
			disposition: 'Existing',
			text: 'Entitlement Name (EntitlementId)',
		},
		lookupInteraction: {
			interactionParameters: {
				id: "SF Lookup",
				settings: {
					value: "Entitlement",
				}
			},
		},
		executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Lookup the Entitlement Name reference to Entitlement',
            executionStatus: 'Executed',
            successfulCount: 1,
		},
		{
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Entitlement Lookup screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: /Set the Search text to Entitlement.*/,
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
		testCaseXML1: [{
            name: ['UiDoAction'],
            title: ['Lookup the Entitlement Name reference to Entitlement'],
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
            title: ['On SF Entitlement Lookup screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?lookup=Entitlement'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set the Search text to Entitlement'],
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
	name: {
		xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
		FieldDetails: {
			disposition: 'Existing',
			text: 'Entitlement Name (Name)',
		},
		executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Entitlement Name button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Entitlement Name button'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=action'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
	}
};