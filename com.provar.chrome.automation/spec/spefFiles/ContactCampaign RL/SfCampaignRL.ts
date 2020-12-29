import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfContactCampaignRL = {
	addToCampaignPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=ChooseCampaign&object=Contact',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Choose a Campaign',
		},
	},
	executionStatusAssertion: [{
		"name": "UiAssert",
		"type": "Icon-Successful",
		"text": "UI Assert",
		"executionStatus": "Executed",
		"successfulCount": 1,
	}],
	valueAssertion: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			}
		},
	},
	campaignMemberPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=CampaignMember&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Campaign Member New screen',
		},
	},
	addToCampaign: {
		xpath: "//div[@title='Add to Campaign']",
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Campaign History Add to Campaign button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Campaign History Add to Campaign button"
			],
			"arguments": [
				{
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
										"ui:locator?name=AddCampaign&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3DAddCampaign%26relationship%3DCampaignMembers"
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
									"text": "Click the Campaign History Add to Campaign button",
									"class": [
										"value"
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
					], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
	campaign: {
		xpath: "//input[contains(@placeholder,'Search Campaigns')]",
		set: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "AutomationCampaign",
				}
			},
		},
		fieldDetails: {
			disposition: 'Existing',
			text: 'Campaign (campaign)'
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Contact Choose a Campaign screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Set the Campaign reference to AutomationCampaign",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXML:
		{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],

			"title": [
				"On SF Contact Choose a Campaign screen"
			],
			"arguments": [
				{
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
								"target"
							],
							"value": [
								{
									"class": [
										"uiTarget"
									],
									"uri": [
										"sf:ui:target?object=Contact&action=ChooseCampaign"
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
									"text": "On SF Contact Choose a Campaign screen",
									"class": [
										"value"
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
					], { partial: true, indexKey: 'id' }),
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
												"Set the Campaign reference to AutomationCampaign"
											],
											"arguments": [
												{
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
																		"ui:locator?name=campaign&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaignMember%26field%3DCampaignId"
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
																	"text": "AutomationCampaign",
																	"class": [
																		"value"
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
																	"text": "Set the Campaign reference to AutomationCampaign",
																	"class": [
																		"value"
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
													], { partial: true, indexKey: 'id' }),
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
	next: {
		xpath: "//span[normalize-space()='Next']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Next (next)'
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Next button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Next button"
			],
			"arguments": [
				{
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
										"ui:locator?name=next"
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
									"text": "Click the Next button",
									"class": [
										"value"
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
					], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
	status: {
		xpath: "//label/span[normalize-space()='Status']/../following-sibling::div//a",
		xpathViewScreen: "//span[@title='Campaign History']/../../../../../following-sibling::div//td[3]/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Status (Status)'
		},
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Status',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		set: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Responded",
				}
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Campaign Member New screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Set the Status picklist to Responded",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXMLColumn:
			[{
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
						argument: comparisonUtils.addCompareOptions( [
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
													"CM_STATUS"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=CM_STATUS&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCM.STATUS%26relationship%3DCampaignMembers"
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
																		"text": "Status",
																		"class": [
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
						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML:
		{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],

			"title": [
				"On SF Campaign Member New screen"
			],
			"arguments": [
				{
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
								"target"
							],
							"value": [
								{
									"class": [
										"uiTarget"
									],
									"uri": [
										"sf:ui:target?object=CampaignMember&action=New&noOverride=true"
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
									"text": "On SF Campaign Member New screen",
									"class": [
										"value"
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
									"text": "campaignMemberId",
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
												"Set the Status picklist to Responded"
											],
											"arguments": [
												{
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
																		"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaignMember%26field%3DStatus"
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
																	"text": "Responded",
																	"class": [
																		"value"
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
																	"text": "Set the Status picklist to Responded",
																	"class": [
																		"value"
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
													], { partial: true, indexKey: 'id' }),
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
		testCaseXML1:
			[{
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
													"CM_STATUS"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=CM_STATUS&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCM.STATUS%26relationship%3DCampaignMembers"
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
																		"text": "Responded",
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
						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	save: {
		xpath: "//span[normalize-space()='Save']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Save (save)'
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Save button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Save button"
			],
			"arguments": [
				{
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
										"ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaignMember%26action%3Dsave"
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
					], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
	campaignName: {
		xpath: "//span[@title='Campaign History']/../../../../../following-sibling::div//th//a",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Campaign Name',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		testCaseXMLColumn:
			[{
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
														"CAMPAIGN_NAME"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=CAMPAIGN_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.NAME%26relationship%3DCampaignMembers"
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
																			"text": "Campaign Name",
																			"class": [
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
							], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Contact (Employee) View screen"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions(
						[
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
											"sf:ui:target?object=Contact&action=View&noOverride=true&recordType=Employee"
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
										"text": "On SF Contact (Employee) View screen",
										"class": [
											"value"
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
						], { partial: true, indexKey: 'id' }),
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
												"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
											],
											"name": [
												"UiWithRow"
											],
											"title": [
												"With CampaignMembers rows {CAMPAIGN_NAME = \"AutomationCampaign\"}"
											],
											"arguments": [{
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
																	"sf:ui:locator:row?table=View%2FCampaignMembers%2FCampaignMembersTable"
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
																					"CAMPAIGN_NAME"
																				]
																			}
																		]
																	}
																],
																"rhs": [
																	{
																		"text": "AutomationCampaign",
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
																"text": "With CampaignMembers rows {CAMPAIGN_NAME = \"AutomationCampaign\"}",
																"class": [
																	"value"
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
												], { partial: true, indexKey: 'id' }),
											}],
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
																				"com.provar.plugins.forcedotcom.core.ui.UiAssert"
																			],
																			"name": [
																				"UiAssert"
																			],
																			"title": [
																				"UI Assert"
																			],
																			"arguments": [{
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
																												"CAMPAIGN_NAME"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=CAMPAIGN_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.NAME%26relationship%3DCampaignMembers"
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
																																	"text": "AutomationCampaign",
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
																					], { partial: true, indexKey: 'id' }),
																			}],
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
			]
		},
		executionStatus:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Contact (Employee) View screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: "With CampaignMembers rows {CAMPAIGN_NAME = \"AutomationCampaign\"}",
					executionStatus: "Executing",
					successfulCount: 0,
					children: [
						{
							name: 'UiAssert',
							type: 'Icon-Successful',
							text: 'UI Assert',
							executionStatus: 'Executed',
							successfulCount: 1,
						},
					]
				}
			]
		}
	},
	startDate: {
		xpath: "//span[@title='Campaign History']/../../../../../following-sibling::div//td/span[contains(@class,'uiOutputDate')]/..",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Start Date',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		testCaseXMLColumn:
			[{
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

						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML:
			[{
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
													"CAMPAIGN_START_DATE"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=CAMPAIGN_START_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.START_DATE%26relationship%3DCampaignMembers"
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
						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	type: {
		xpath: "//span[@title='Campaign History']/../../../../../following-sibling::div//td[2]/span",
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'Type',
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
		testCaseXMLColumn:
			[{
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
														"CAMPAIGN_CAMPAIGN_TYPE"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=CAMPAIGN_CAMPAIGN_TYPE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.CAMPAIGN_TYPE%26relationship%3DCampaignMembers"
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
																			"text": "Type",
																			"class": [
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
							], { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML:
			[{
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
													"CAMPAIGN_CAMPAIGN_TYPE"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=CAMPAIGN_CAMPAIGN_TYPE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DCAMPAIGN.CAMPAIGN_TYPE%26relationship%3DCampaignMembers"
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
																		"text": "Advertisement",
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
						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	delete: {
		clickAndCancel: {
			interactionParameters: {
				id: 'Click and Cancel',
			},
		},
	},
	editActionButton:{
		Xpath: "//a[normalize-space(.)='Edit']",
		XpathCX: "(//a[normalize-space(.)='Edit'])[2]",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Campaign History Edit button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Campaign History Edit button'],
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
	deleteActionButton:{
		Xpath: "//a[normalize-space(.)='Delete']",
		XpathCX: "//a[normalize-space(.)='Del']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click and Cancel the Campaign History Del button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click and Cancel the Campaign History Del button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=actionWithCancel'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	heading: {
		xpath: "//a[contains(normalize-space(.),'Campaign History')]",
		xpath1:"//a[contains(normalize-space(.),'Campaign History')]/parent::h2/../../..",
		rowCount: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					assertTableAttributes: true,
					extractTableAttributes: true,
					expectedAttributes: {
						displayRowCount: {
							value: 1,
						},
						totalRowCount: {
							value: 1,
						},
					},
				}
			},
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
												"CampaignMembers"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=CampaignMembers&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26relationship%3DCampaignMembers"
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

	},
	viewAll: {
		xpath: "//span[text()='View All']",
		click: {
			interactionParameters:{
				id: 'Click',
			},
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Campaign History Go To List button",
			executionStatus: "Executed",
			successfulCount: 1,
	 }],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Campaign History Go To List button"
			],
			"arguments": [
				{
					argument: comparisonUtils.addCompareOptions( [
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
										"ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3DGoToList%26relationship%3DCampaignMembers"
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
									"text": "Click the Campaign History Go To List button",
									"class": [
										"value"
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
					], { partial: true, indexKey: 'id' }),
				}
			],
		}],
	},
}