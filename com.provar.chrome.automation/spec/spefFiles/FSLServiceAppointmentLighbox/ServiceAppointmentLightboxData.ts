import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { MiscUtils, ScreenType, FieldType } from '../../support/MiscUtil';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
const miscUtilsObj: MiscUtils = new MiscUtils();

export const ServiceAppointmentLightboxData = {
	appointmentDetailsPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'FSL Dispatcher Service Appointment Details Lightbox',
		},
	},
	workOrderDetailsPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'FSL Dispatcher Work Order Details Lightbox',
		},
	},
	workOrderRLPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'FSL Dispatcher Service Appointment Related Lightbox',
		},
	},
	stLookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=0Hh',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Service Territory Lookup Screen',
		},
	},
	wtLookupPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=08q',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Work Type Lookup Screen',
		},
	},
	closeIconPSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Field Service Dispatcher Console Appointment',
		},
	},
	woliRowLocators: [
		{
			"label": "Work Order Line Item Number (Name)",
			"selected": true,
			"value": /000.*/,
		},
		{
			"label": "Work Type (WorkType)",
			"selected": false,
			"value": "Solar Panel Repair",
		},
		{
			"label": "Asset (Asset)",
			"selected": false,
			"value": "Asset",
		},
	],
	skillRowLocators: [
		{
			"label": "Skill Required (Skill)",
			"selected": true,
			"value": "SP Repair",
		},
		{
			"label": "Skill Level (SkillLevel)",
			"selected": false,
			"value": "2.00",
		},
	],
	resourcePreferencesRowLocators: [
		{
			"label": "Service Resource (ServiceResource)",
			"selected": true,
			"value": "Alan Reed",
		},
		{
			"label": "Preference Type (PreferenceType)",
			"selected": false,
			"value": "Preferred",
		},
	],
	serviceAppRowLocators: [
		{
			"label": "Appointment Number (Name)",
			"selected": true,
			"value": /SA-.*/,
		},
		{
			"label": "Contact (Contact)",
			"selected": false,
			"value": "",
		},
		{
			"label": "Account (Account)",
			"selected": false,
			"value": "Account1",
		},
		{
			"label": "Status (Status)",
			"selected": false,
			"value": "Dispatched",
		},
		{
			"label": "Scheduled Start (SchedStartTime)",
			"selected": false,
			"value": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
		},
		{
			"label": "Scheduled End (SchedEndTime)",
			"selected": false,
			"value": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
		},
		{
			"label": "Earliest Start Permitted (EarliestStartTime)",
			"selected": false,
			"value": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
		},

	],
	lookupST: [
		{
			"label": "Name (Name)",
			"selected": true,
			"value": "Los Angeles",
		},
		{
			"label": "Active (IsActive)",
			"selected": false,
			"value": "true"
		},
		{
			"label": "Operating Hours (OperatingHours)",
			"selected": false,
			"value": "Showroom staff working hours",
		},
		{
			"label": "Parent Territory (ParentTerritory)",
			"selected": false,
			"value": "",
		},
		{
			"label": "Last Modified (LAST_UPDATE)",
			"selected": false,
		},
		{
			"label": "Last Modified By (LastModifiedBy)",
			"selected": false,
		},
	],
	executionStatus: [{
		name: 'UiAssert',
		type: 'Icon-Successful',
		text: 'UI Assert',
		executionStatus: 'Executed',
		successfulCount: 1,
	}],
	assertInteractionParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}
	},
	iframe: "//iframe[contains(@name, 'vfFrameId_')]",
	lightboxIframe: "//iframe[@class='SubTabsIframe']",
	workOrderIframe: "//iframe[contains(@src,'_workorderlightbox')]",
	relatedTabIframe: "//iframe[contains(@src,'_workworderrelatedlists')]",
	closeIcon: {
		xpath: "//div[@id='ResourceLightboxHeader']/*[contains(@class,'CloseLightbox')]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Close (close)',
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Dispatcher Console Appointment view screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Close button",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Dispatcher Console Appointment view screen"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fieldService=Appointment"
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
										"text": "On SF Field Service Dispatcher Console Appointment view screen",
										"class": [
											"value"
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
												"Click the Close button"
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
																		"ui:locator?name=close&path=popupActions"
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
																	"text": "Click the Close button",
																	"class": [
																		"value"
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
	edit: {
		xpath: "(//div[@class='serviceAppointmentBlock']//input[@value='Edit'])[last()-1]",
		xpathWO: "//div[@class='workOrderBlock']//div[@class='pbHeader']//input[@value='Edit']",
		xpathRelated: "",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Edit (edit)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Click"
			}
		},
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Click the Edit button"
			],
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
											"ui:locator?name=edit&path=lightBoxActionBlock"
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
										"text": "Click the Edit button",
										"class": [
											"value"
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
		executionStatus:
			[
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Edit button",
					executionStatus: "Executed",
					successfulCount: 1,
				}
			],
		testCaseXMLWO: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Work Order Details Lightbox"
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
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:target?fslLightBoxTab=ServiceAppointmentWorkOrderDetails"
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
									"text": "On SF Field Service Work Order Details Lightbox",
									"class": [
										"value"
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
												"Click the Edit button"
											],
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
																			"ui:locator?name=edit&path=lightBoxActionBlock"
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
																		"text": "Click the Edit button",
																		"class": [
																			"value"
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
		executionStatusWO:
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Field Service Work Order Details Lightbox',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiDoAction",
					type: "Icon-Successful",
					text: "Click the Edit button",
					executionStatus: "Executed",
					successfulCount: 1,
				},
			],
		},
	},
	status: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//tr[1]//label[normalize-space(.)='Service Territory']/../preceding-sibling::td/select",
		xpath1: "//table[@class='detailList']//tr//th[normalize-space(.)='Service Territory']/preceding-sibling::td/span",
		xpathWO: "//div[@class='workOrderBlock']//th[text()='Status']/following-sibling::td/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Status (Status)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Dispatched"
				}
			}
		},
		testCaseXMLAssertion:
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
														"Status"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DStatus"
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
																			"text": "Dispatched",
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
		testCaseXMLAssertion1:
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
														"Status"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DStatus"
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
																			"text": "Dispatched",
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Status picklist to Dispatched"
				],
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
												"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DStatus"
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
											"text": "Dispatched",
											"class": [
												"value"
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
											"text": "Set the Status picklist to Dispatched",
											"class": [
												"value"
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
		testCaseXMLAssertionWO:
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
														"Status"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DStatus"
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
																			"text": "New",
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Status picklist to Dispatched",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	name: {
		xpath: "//tr[contains(@class,'dataRow')]//th[1]//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Name (Name)',
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Name button"
				],
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
												"ui:locator?name=Name&path=resultsFrame%2FresultsTable%2FresultsRow&rowLocator=Name+%3D+%27Los+Angeles%27"
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
											"text": "Click the Name button",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Name button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	serviceTerritory: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//tr//label[normalize-space(.)='Service Territory']/../following-sibling::td//img",
		xpath1: "//div[@class='editPage']//table[@class='detailList']//tr//label[normalize-space(.)='Service Territory']/../following-sibling::td//span//input",
		xpath2: "//table[@class='detailList']//tr//th[normalize-space(.)='Service Territory']/following-sibling::td//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Service Territory (ServiceTerritoryId)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "SF Lookup",
				settings: {
					value: "{Territory}"
				}
			}
		},
		executionStatus:
			[
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: "Lookup the Service Territory reference to Los Angeles",
					executionStatus: 'Executed',
					successfulCount: 1,
				},
				{
					name: 'UiWithScreen',
					type: 'Icon-ExecutingPaused',
					text: 'On SF Service Territory Lookup screen',
					executionStatus: 'Executing',
					successfulCount: 0,
					children: [
						{
							name: 'UiDoAction',
							type: 'Icon-Successful',
							text: "Set the Search text to Los Angeles",
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
		testCaseXMLAssertion1:
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
														"ServiceTerritoryId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ServiceTerritoryId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DServiceTerritoryId"
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
																			"text": "Los Angeles",
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
		testCaseXMLAssertion:
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
														"ServiceTerritoryId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ServiceTerritoryId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DServiceTerritoryId"
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
																			"text": "Los Angeles",
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
		testCaseXML:
			[
				{
					"apiId": [
						"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
					],
					"name": [
						"UiDoAction"
					],
					"title": [
						"Lookup the Service Territory reference to {Territory}"
					],
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
													"ui:locator?name=ServiceTerritoryId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DServiceTerritoryId"
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
													"ui:interaction?name=sfLookup"
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
															"Territory"
														]
													}
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
												"text": "Lookup the Service Territory reference to {Territory}",
												"class": [
													"value"
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

				},
				{
					name: ['UiWithScreen'],
					title: ['On SF Service Territory Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=ServiceTerritory'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to {Territory}'],
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
				}
			],
	},
	emergency: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//tr//label[normalize-space(.)='Emergency']/../following-sibling::td/input",
		xpath1: "//table[@class='detailList']//tr//th[normalize-space(.)='Emergency']/following-sibling::td//img",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Emergency (FSL__Emergency__c)',
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Check the Emergency field"
				],
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
												"ui:locator?name=FSL__Emergency__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DFSL__Emergency__c"
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
											"text": "Check the Emergency field",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Check the Emergency field",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLAssertion:
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
														"FSL__Emergency__c"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=FSL__Emergency__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DFSL__Emergency__c"
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
		testCaseXMLAssertion1:
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
														"FSL__Emergency__c"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=FSL__Emergency__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DFSL__Emergency__c"
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
	},
	description: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//tr//*[normalize-space(.)='Description']/./following-sibling::td/textarea",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Description (Description)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Description via script"
				}
			}
		},
		testCaseXMLAssertion:
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
																"ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DDescription"
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
																			"text": "Description via script",
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Description field to Description via script"
				],
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
												"ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DDescription"
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
											"text": "Description via script",
											"class": [
												"value"
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
											"text": "Set the Description field to Description via script",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Description field to Description via script",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	earliestStartPermitted: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Due Date']/../preceding-sibling::td//span/a",
		xpath1: "//table[@class='detailList']//th[normalize-space(.)='Due Date']/preceding-sibling::td/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Earliest Start Permitted (EarliestStartTime)',
		},
		testCaseXMLAssertion1:
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
														"EarliestStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=EarliestStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DEarliestStartTime"
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
																			"text": /.*2020 .*/,
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
	},
	arrivalWindowStart: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Arrival Window End']/../preceding-sibling::td//span/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Arrival Window Start (ArrivalWindowStartTime)',
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Today link the Arrival Window Start field",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Today link the Arrival Window Start field"
				],
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
												"ui:locator?name=ArrivalWindowStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DArrivalWindowStartTime"
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
												"ui:interaction?name=sfToday"
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
											"text": "Today link the Arrival Window Start field",
											"class": [
												"value"
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
	},
	actualStart: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Actual End']/../preceding-sibling::td//input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Actual Start (ActualStartTime)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: '{DateFormat(DateAdd(TODAY), "dd/MM/yyyy")} 11:00'
				}
			}
		},
		testCaseXMLAssertion:
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
														"ActualStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ActualStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DActualStartTime"
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Actual Start field to {DateFormat(DateAdd(TODAY), \"dd/MM/yyyy\")} 11:00"
				],
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
												"ui:locator?name=ActualStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DActualStartTime"
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
												"compound"
											],
											"parts": [
												{
													"funcCall": [
														{
															"id": [
																"DateFormat"
															],
															"argument": [
																{
																	"id": [
																		"date"
																	],
																	"value": [
																		{
																			"class": [
																				"funcCall"
																			],
																			"id": [
																				"DateAdd"
																			],
																			"argument": [
																				{
																					"id": [
																						"date"
																					],
																					"value": [
																						{
																							"class": [
																								"variable"
																							],
																							"path": [
																								{
																									"element": [
																										"TODAY"
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
																		"outputFormat"
																	],
																	"value": [
																		{
																			"text": "dd/MM/yyyy",
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
													"value": [
														{
															"text": " 11:00",
															"valueClass": [
																"string"
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
											"text": "Set the Actual Start field to {DateFormat(DateAdd(TODAY), \"dd/MM/yyyy\")} 11:00",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: /Set the Actual Start field to .*/,
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	actualDuration: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Actual Duration (Minutes)']/../following-sibling::td/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Actual Duration (Minutes) (ActualDuration)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: '100'
				}
			}
		},
		testCaseXMLAssertion:
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
														"ActualDuration"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ActualDuration&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DActualDuration"
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
																			"text": "100",
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Actual Duration (Minutes) field to 100"
				],
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
												"ui:locator?name=ActualDuration&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DActualDuration"
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
											"text": "100",
											"class": [
												"value"
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
											"text": "Set the Actual Duration (Minutes) field to 100",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Actual Duration (Minutes) field to 100",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	street: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Street']/../following-sibling::td/textarea",
		xpath1: "//table[@class='detailList']//tr/th[normalize-space(.)='Street']/following-sibling::td[1]/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Street (Street)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'Street Number 101'
				}
			}
		},
		testCaseXMLAssertion1:
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
														"Street"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Street&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DStreet"
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
																			"text": "Street Number 101",
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Street field to Street Number 101"
				],
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
												"ui:locator?name=Street&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DStreet"
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
											"text": "Street Number 101",
											"class": [
												"value"
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
											"text": "Set the Street field to Street Number 101",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Street field to Street Number 101",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	parentRecordType: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Parent Record Type']/../following-sibling::td",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Parent Record Type (ParentRecordType)',
		},
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
														"ParentRecordType"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ParentRecordType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DParentRecordType"
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
																			"text": "WorkOrder",
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
	},
	contact: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Parent Record']/../preceding-sibling::td/span/input",
		xpath1: "//div[@class='serviceAppointmentBlock']//table[@class='detailList']//th[normalize-space(.)='Parent Record']/preceding-sibling::td/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Contact (ContactId)',
		},
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
														"ContactId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DContactId"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXMLAssertion1:
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
														"ContactId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DContactId"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	ganttLabel: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Gantt Label']/../following-sibling::td//input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Gantt Label (FSL__GanttLabel__c)',
		},
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
														"FSL__GanttLabel__c"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=FSL__GanttLabel__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DFSL__GanttLabel__c"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	arrivalWindowEnd: {
		xpath: "//div[@class='editPage']//table[@class='detailList']//label[normalize-space(.)='Arrival Window End']/../following-sibling::td//input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Arrival Window End (ArrivalWindowEndTime)',
		},
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
														"ArrivalWindowEndTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ArrivalWindowEndTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DArrivalWindowEndTime"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	saveChanges: {
		xpath: "(//input[@value='Save Changes'])[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Save Changes (saveChanges)',
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Save Changes button"
				],
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
												"ui:locator?name=saveChanges&path=lightBoxActionBlock"
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
											"text": "Click the Save Changes button",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Save Changes button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	city: {
		xpath: "//div[@class='serviceAppointmentBlock']//table[@class='detailList']//th[normalize-space(.)='City']/following-sibling::td/span",
		xpathWO: "//label[text()='City']/../following-sibling::td/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'City (City)',
		},
		testCaseXMLAssertion1:
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
														"City"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=City&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DCity"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXMLAssertionWO:
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
														"City"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=City&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DCity"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	actualEnd: {
		xpath: "//div[@class='serviceAppointmentBlock']//table[@class='detailList']//th[normalize-space(.)='Actual End']/following-sibling::td/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Actual End (ActualEndTime)',
		},
		testCaseXMLAssertion:
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
														"ActualEndTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ActualEndTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DServiceAppointment%26field%3DActualEndTime"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	priority: {
		xpath: "//table[@class='detailList']//label[normalize-space()='Priority']/../following-sibling::td/select",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Priority (Priority)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set By Index",
				settings: {
					value: "2"
				}
			}
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set By Index the Priority picklist to 2"
				],
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
												"ui:locator?name=Priority&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DPriority"
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
											"text": "2",
											"class": [
												"value"
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
											"text": "Set By Index the Priority picklist to 2",
											"class": [
												"value"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set By Index the Priority picklist to 2",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLAssertion:
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
														"Priority"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Priority&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DPriority"
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
																			"text": "Low",
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
	},
	workType: {
		xpath: "//label[text()='Work Type']/../following-sibling::td//img",
		xpath1: "//label[text()='Work Type']/../following-sibling::td/span/input",
		xpath2: "//th[text()='Work Type']/following-sibling::td/span/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Work Type (WorkTypeId)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "SF Lookup",
				settings: {
					value: "Solar Panel Repair"
				}
			}
		},
		modificationParameters2: {
			interactionParameters: {
				id: "Hover",
			}
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: "Lookup the Work Type reference to Solar Panel Repair",
			executionStatus: 'Executed',
			successfulCount: 1,
		},
		{
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF Work Type Lookup screen',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: "Set the Search text to Solar Panel Repair",
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
		executionStatus2: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Hover the Work Type reference",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML:
			[
				{
					"apiId": [
						"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
					],
					"name": [
						"UiDoAction"
					],
					"title": [
						"Lookup the Work Type reference to Solar Panel Repair"
					],
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
													"ui:locator?name=WorkTypeId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DWorkTypeId"
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
												"text": "Lookup the Work Type reference to Solar Panel Repair",
												"class": [
													"value"
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

				},
				{
					name: ['UiWithScreen'],
					title: ['On SF Work Type Lookup screen'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['target'],
							value: [{
								uri: ['sf:ui:target?lookup=WorkType'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
					clauses: [{
						clause: [{
							steps: [{
								apiCall: [{
									name: ['UiDoAction'],
									title: ['Set the Search text to Solar Panel Repair'],
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
				}
			],
		testCaseXML2:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Hover the Work Type reference"
				],
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
												"ui:locator?name=WorkTypeId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DWorkTypeId"
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
												"ui:interaction?name=hover"
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
											"text": "Hover the Work Type reference",
											"class": [
												"value"
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
		testCaseXMLAssertion:
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
														"WorkTypeId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=WorkTypeId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DWorkTypeId"
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
																			"text": "Solar Panel Repair",
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
	},
	workTypeName: {
		xpath: "//tr[contains(@class,'dataRow')]//th[1]/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Work Type Name (Name)',
		},
		workTypeRowLocators: [
			{
				"label": "Work Type Name (Name)",
				"selected": true,
				"value": "Solar Panel Repair",
			},
			{
				"label": "Estimated Duration (EstimatedDuration)",
				"selected": false,
				"value": /.*/,
			},
			{
				"label": "Duration Type (DurationType)",
				"selected": false,
				"value": "Hours",
			},
		],
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Work Type Name button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Work Type Name button"
				],
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
												"ui:locator?name=Name&path=resultsFrame%2FresultsTable%2FresultsRow&rowLocator=Name+%3D+%27Solar+Panel+Repair%27"
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
											"text": "Click the Work Type Name button",
											"class": [
												"value"
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
	},
	address: {
	//	xpath: "//label[text()='Address']/../following-sibling::td/textarea",
		// fieldDetails: {
		// 	disposition: 'Existing',
		// 	text: 'Address (Street)',
		// },
		xpath: "//label[text()='Street']/../following-sibling::td/textarea",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Street (Street)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "India 203003"
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: /Set the Address|Street field to India 203003/,
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLAssertion:
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
														"Street"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Street&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DStreet"
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
																			"text": "India 203003",
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					/Set the Address|Street field to India 203003/
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
	subject: {
		xpath: "//label[text()='Parent Work Order']/../preceding-sibling::td/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Subject (Subject)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Subject Via Automation API"
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Subject field to Subject Via Automation API",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXMLAssertion:
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

							]
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Subject field to Subject Via Automation API"
				],
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
												"ui:locator?name=Subject&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSubject"
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
											"text": "Subject Via Automation API",
											"class": [
												"value"
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
											"text": "Set the Subject field to Subject Via Automation API",
											"class": [
												"value"
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
	},
	serviceTerritoryWO: {
		xpath: "//label[text()='Status']/../preceding-sibling::td/span/input",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Service Territory (ServiceTerritoryId)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Los Angeles"
				}
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Set the Service Territory reference to Los Angeles",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Set the Service Territory reference to Los Angeles"
				],
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
												"ui:locator?name=ServiceTerritoryId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DServiceTerritoryId"
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
											"text": "Los Angeles",
											"class": [
												"value"
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
											"text": "Set the Service Territory reference to Los Angeles",
											"class": [
												"value"
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
	},
	asset: {
		xpath: "//label[text()='Case']/../preceding-sibling::td/span/input",
		xpath1: "//th[text()='Case']/preceding-sibling::td/span",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Asset (AssetId)',
		},
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
														"AssetId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=AssetId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DAssetId"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXMLAssertion:
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
														"AssetId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=AssetId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DAssetId"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],

	},
	account: {
		xpath: "//div[@class='workOrderBlock']//th[text()='Work Type']/preceding-sibling::td/span/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Account (AccountId)',
		},
		testCaseXMLAssertion:
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
														"AccountId"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DAccountId"
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
																			"text": "Account1",
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
	},
	refresh: {
		xpath: "(//div[@class='workOrderBlock']//input[@value='Refresh'])[1]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Refresh (refresh)',
		},
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Click the Refresh button"
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
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Click the Refresh button",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
	},
	workOrderLineItemRL: {
		xpath: "//div[contains(@class,'workOrderLineItemBlock')]//tr[contains(@class,'dataRow')]/th//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Work Order Line Item Number (Name)',
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
							value: 'WORK ORDER LINE ITEM NUMBER',
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
		testCaseXML: {
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
			],
			"name": [
				"UiWithScreen"
			],
			"title": [
				"On SF Field Service Appointment Related Lightbox"
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
										"text": "Regtest",
										"class": [
											"value"
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
											"sf:ui:target?fslLightBoxTab=ServiceAppointmentRelated"
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
										"text": "On SF Field Service Appointment Related Lightbox",
										"class": [
											"value"
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
												/With WorkOrderLineItems rows {Name = \"000.*/
											],
											"arguments": [{
												argument: comparisonUtils.addCompareOptions([
													{
														"id": [
															"uiConnectionName"
														],
														"value": [
															{
																"text": "Regtest",
																"class": [
																	"value"
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
																	"sf:ui:locator:row?table=WorkOrderLineItems%2FWorkOrderLineItemsTable"
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
																					"Name"
																				]
																			}
																		]
																	}
																],
																"rhs": [
																	{
																		"text": "00000001",
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
																"text": "With WorkOrderLineItems rows {Name = \"00000001\"}",
																"class": [
																	"value"
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
																												"Name"
																											],
																											"fieldLocator": [
																												{
																													"uri": [
																														"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DName%26relationship%3DWorkOrderLineItems"
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
																																	"text": "00000001",
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
														"Name"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DName%26relationship%3DWorkOrderLineItems"
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
																			"text": "WORK ORDER LINE ITEM NUMBER",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingChildPaused',
			text: 'On SF Field Service Appointment Related Lightbox',
			executionStatus: 'Executing',
			successfulCount: 0,
			children: [
				{
					name: "UiWithRow",
					type: "Icon-ExecutingPaused",
					text: /With WorkOrderLineItems rows {Name = \"000.*/,
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
		},
	},
	workTypeRL: {
		xpath: "//div[contains(@class,'workOrderLineItemBlock')]//tr[contains(@class,'dataRow')]/td[2]/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Work Type (WorkType)',
		},
		executionStatus: [{
			name: 'UiAssert',
			type: 'Icon-Successful',
			text: 'UI Assert',
			executionStatus: 'Executed',
			successfulCount: 1,
		}],
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'WORK TYPE',
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
														"WorkType"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=WorkType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DWorkType%26relationship%3DWorkOrderLineItems"
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
																			"text": "Solar Panel Repair",
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
														"WorkType"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=WorkType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DWorkType%26relationship%3DWorkOrderLineItems"
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
																			"text": "WORK TYPE",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	assetRL: {
		xpath: "//div[contains(@class,'workOrderLineItemBlock')]//tr[contains(@class,'dataRow')]/td[3]/a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Asset (Asset)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Hover"
			}
		},
		executionStatus: [{
			name: "UiDoAction",
			type: "Icon-Successful",
			text: "Hover the Asset reference",
			executionStatus: "Executed",
			successfulCount: 1,
		}],
		columnAssertion: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: 'ASSET',
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
		testCaseXML:
			[{
				"apiId": [
					"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
				],
				"name": [
					"UiDoAction"
				],
				"title": [
					"Hover the Asset reference"
				],
				"arguments": [
					{
						argument: comparisonUtils.addCompareOptions(
							[
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
												"ui:interaction?name=hover"
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
											"text": "Hover the Asset reference",
											"class": [
												"value"
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
														"Asset"
													],
													"fieldLocator": [
														{
															"uri": [
																/ui:locator\?name=Asset.*/
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
																			"text": "ASSET",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	headingWOLI: {
		xpath: "//div[contains(@class,'workOrderLineItemBlock')]//h3",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Line Items (WorkOrderLineItems)',
		},
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
														"WorkOrderLineItems"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=WorkOrderLineItems&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26relationship%3DWorkOrderLineItems"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	editButton: {
		xpathWOLI: "//div[contains(@class,'workOrderLineItemBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Edit']",
		xpathSR: "//div[contains(@class,'skillRequirementBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Edit']",
		xpathRP: "//div[contains(@class,'resourcePreferenceBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Edit']",
		xpathSA: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Edit']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Edit (edit)',
		},
		testCaseXMLWOLI:
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
														"edit"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3Dedit%26relationship%3DWorkOrderLineItems"
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
																			"text": "Edit",
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
		testCaseXMLSR:
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
														"edit"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3Dedit%26relationship%3DSkillRequirements"
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
																			"text": "Edit",
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
		testCaseXMLRP:
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
														"edit"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3Dedit%26relationship%3DResourcePreferences"
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
																			"text": "Edit",
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
		testCaseXMLSA:
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
														"edit"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3Dedit%26relationship%3DServiceAppointments"
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
																			"text": "Edit",
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
	},
	deleteWOLI: {
		xpath: "//div[contains(@class,'workOrderLineItemBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Del']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Delete (delete)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Click and Confirm"
			}
		},
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: /With WorkOrderLineItems rows {Name = \"00000.*/,
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click and Confirm the Delete button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				/With WorkOrderLineItems rows {Name = \"00000.*/
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=WorkOrderLineItems%2FWorkOrderLineItemsTable"
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
														"Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "00000001",
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
									"text": "With WorkOrderLineItems rows {Name = \"00000001\"}",
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click and Confirm the Delete button"
											],
											"arguments": [{
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
																		"ui:locator?name=delete&path=WorkOrderLineItemsRow&rowLocator=Name+%3D+%2700000001%27"
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
																		"ui:interaction?name=actionWithOk"
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
																	"text": "Click and Confirm the Delete button",
																	"class": [
																		"value"
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
											}],


										}
									]
								}
							]
						}
					]
				}
			]
		}],
	},
	deleteSR: {
		xpath: "//div[contains(@class,'skillRequirementBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Del']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Delete (delete)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Click and Confirm"
			}
		},
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With SkillRequirements rows {Skill = \"SP Repair\"}",
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click and Confirm the Delete button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With SkillRequirements rows {Skill = \"SP Repair\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=SkillRequirements%2FSkillRequirementsTable"
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
														"Skill"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "SP Repair",
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
									"text": "With SkillRequirements rows {Skill = \"SP Repair\"}",
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click and Confirm the Delete button"
											],
											"arguments": [{
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
																		"ui:locator?name=delete&path=SkillRequirementsRow&rowLocator=Skill+%3D+%27SP+Repair%27"
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
																		"ui:interaction?name=actionWithOk"
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
																	"text": "Click and Confirm the Delete button",
																	"class": [
																		"value"
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
											}],


										}
									]
								}
							]
						}
					]
				}
			]
		}],
	},
	deleteRP: {
		xpath: "//div[contains(@class,'resourcePreferenceBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Del']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Delete (delete)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Click and Confirm"
			}
		},
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}",
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click and Confirm the Delete button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=ResourcePreferences%2FResourcePreferencesTable"
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
														"ServiceResource"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "Alan Reed",
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
									"text": "With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}",
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click and Confirm the Delete button"
											],
											"arguments": [{
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
																		"ui:locator?name=delete&path=ResourcePreferencesRow&rowLocator=ServiceResource+%3D+%27Alan+Reed%27"
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
																		"ui:interaction?name=actionWithOk"
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
																	"text": "Click and Confirm the Delete button",
																	"class": [
																		"value"
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
											}],


										}
									]
								}
							]
						}
					]
				}
			]
		}],
	},
	deleteSA: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//a[normalize-space()='Del']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Delete (delete)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Click and Confirm"
			}
		},
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: /With ServiceAppointments rows {Name = \"SA-.*/,
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Click and Confirm the Delete button',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				/With ServiceAppointments rows {Name = \"SA-.*/
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=ServiceAppointments%2FServiceAppointmentsTable"
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
														"Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": /SA-.*/,
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
									"text": /With ServiceAppointments rows {Name = \"SA-.*/,
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Click and Confirm the Delete button"
											],
											"arguments": [{
												argument: comparisonUtils.addCompareOptions(
													[
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
																		"ui:interaction?name=actionWithOk"
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
																	"text": "Click and Confirm the Delete button",
																	"class": [
																		"value"
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
											}],


										}
									]
								}
							]
						}
					]
				}
			]
		}],
	},
	skillRequired: {
		xpath: "//div[contains(@class,'skillRequirementBlock')]//tr[contains(@class,'dataRow')]/th",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Required (Skill)',
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
							value: 'SKILL REQUIRED',
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
														"Skill"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Skill&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSkill%26relationship%3DSkillRequirements"
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
																			"text": "SKILL REQUIRED",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],

		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With SkillRequirements rows {Skill = \"SP Repair\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=SkillRequirements%2FSkillRequirementsTable"
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
													"Skill"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "SP Repair",
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
								"text": "With SkillRequirements rows {Skill = \"SP Repair\"}",
								"class": [
									"value"
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
																				"Skill"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						"ui:locator?name=Skill&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSkill%26relationship%3DSkillRequirements"
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
																									"text": "SP Repair",
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
		}],
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With SkillRequirements rows {Skill = \"SP Repair\"}",
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
		}],
	},
	skillLevel: {
		xpath: "//div[contains(@class,'skillRequirementBlock')]//tr[contains(@class,'dataRow')]/td[2]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Level (SkillLevel)',
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
							value: 'SKILL LEVEL',
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
		testCaseXMLAssertion:
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
														"SkillLevel"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SkillLevel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSkillLevel%26relationship%3DSkillRequirements"
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
																			"text": "2.00",
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
														"SkillLevel"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SkillLevel&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSkillLevel%26relationship%3DSkillRequirements"
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
																			"text": "SKILL LEVEL",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	headingSR: {
		xpath: "//div[contains(@class,'skillRequirementBlock')]//h3",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Skill Requirements (SkillRequirements)',
		},
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
														"SkillRequirements"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SkillRequirements&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26relationship%3DSkillRequirements"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	serviceResource: {
		xpath: "//div[contains(@class,'resourcePreferenceBlock')]//th//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Service Resource (ServiceResource)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Hover"
			},
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
							value: 'SERVICE RESOURCE',
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
														"ServiceResource"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ServiceResource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DServiceResource%26relationship%3DResourcePreferences"
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
																			"text": "SERVICE RESOURCE",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				"With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}"
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions([
					{
						"id": [
							"uiConnectionName"
						],
						"value": [
							{
								"text": "Regtest",
								"class": [
									"value"
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
									"sf:ui:locator:row?table=ResourcePreferences%2FResourcePreferencesTable"
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
													"ServiceResource"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "Alan Reed",
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
								"text": "With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}",
								"class": [
									"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Hover the Service Resource reference"
											],
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
																			/ui:locator\?name=ServiceResource.*/
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
																			"ui:interaction?name=hover"
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
																		"text": "Hover the Service Resource reference",
																		"class": [
																			"value"
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
										}
									]
								}
							]
						}
					]
				}
			]
		}],
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: "With ResourcePreferences rows {ServiceResource = \"Alan Reed\"}",
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: "Hover the Service Resource reference",
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
	},
	preferenceType: {
		xpath: "(//div[contains(@class,'resourcePreferenceBlock')]//td)[last()]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Preference Type (PreferenceType)',
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
							value: 'PREFERENCE TYPE',
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
		testCaseXMLAssertion:
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
														"PreferenceType"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=PreferenceType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DPreferenceType%26relationship%3DResourcePreferences"
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
																			"text": "Preferred",
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
														"PreferenceType"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=PreferenceType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DPreferenceType%26relationship%3DResourcePreferences"
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
																			"text": "PREFERENCE TYPE",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	headingRP: {
		xpath: "//div[contains(@class,'resourcePreferenceBlock')]//h3",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Resource Preferences (ResourcePreferences)',
		},
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
														"ResourcePreferences"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ResourcePreferences&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26relationship%3DResourcePreferences"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	appointmentNumber: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//th//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Appointment Number (Name)',
		},
		modificationParameters: {
			interactionParameters: {
				id: "Hover"
			},
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
							value: 'APPOINTMENT NUMBER',
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
														"Name"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DName%26relationship%3DServiceAppointments"
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
																			"text": "APPOINTMENT NUMBER",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				/With ServiceAppointments rows {Name = \"SA-.*/
			],
			"arguments": [{
				argument: comparisonUtils.addCompareOptions(
					[
						{
							"id": [
								"uiConnectionName"
							],
							"value": [
								{
									"text": "Regtest",
									"class": [
										"value"
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
										"sf:ui:locator:row?table=ServiceAppointments%2FServiceAppointmentsTable"
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
														"Name"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": /SA-.*/,
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
									"text": /With ServiceAppointments rows {Name = \"SA-.*/,
									"class": [
										"value"
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
												"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
											],
											"name": [
												"UiDoAction"
											],
											"title": [
												"Hover the Appointment Number field"
											],
											"arguments": [
												{
													argument: comparisonUtils.addCompareOptions(
														[
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
																			"ui:interaction?name=hover"
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
																		"text": "Hover the Appointment Number field",
																		"class": [
																			"value"
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
										}
									]
								}
							]
						}
					]
				}
			]
		}],
		executionStatus: [{
			name: "UiWithRow",
			type: "Icon-ExecutingPaused",
			text: /With ServiceAppointments rows {Name = \"SA-.*/,
			executionStatus: "Executing",
			successfulCount: 0,
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: "Hover the Appointment Number field",
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			]
		}],
	},
	contactRL: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[2]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Contact (Contact)',
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
							value: 'CONTACT',
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
		testCaseXMLAssertion:
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
														"Contact"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Contact&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DContact%26relationship%3DServiceAppointments"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
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
														"Contact"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Contact&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DContact%26relationship%3DServiceAppointments"
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
																			"text": "CONTACT",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	accountRL: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[3]//a",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Account (Account)',
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
							value: 'ACCOUNT',
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
		testCaseXMLAssertion:
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
														"Account"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Account&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DAccount%26relationship%3DServiceAppointments"
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
																			"text": "Account1",
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
														"Account"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Account&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DAccount%26relationship%3DServiceAppointments"
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
																			"text": "ACCOUNT",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	statusRL: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[4]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Status (Status)',
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
							value: 'STATUS',
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
		testCaseXMLAssertion:
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
														"Status"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DStatus%26relationship%3DServiceAppointments"
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
																			"text": "Dispatched",
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
														"Status"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DStatus%26relationship%3DServiceAppointments"
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
																			"text": "STATUS",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	scheduledStart: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[5]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Scheduled Start (SchedStartTime)',
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
							value: 'SCHEDULED START',
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
		testCaseXMLAssertion:
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
														"SchedStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SchedStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSchedStartTime%26relationship%3DServiceAppointments"
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
																			"text": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
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
														"SchedStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SchedStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSchedStartTime%26relationship%3DServiceAppointments"
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
																			"text": "SCHEDULED START",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	scheduledEnd: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[6]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Scheduled End (SchedEndTime)',
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
							value: 'SCHEDULED END',
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
		testCaseXMLAssertion:
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
														"SchedEndTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SchedEndTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSchedEndTime%26relationship%3DServiceAppointments"
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
																			"text": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
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
														"SchedEndTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=SchedEndTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DSchedEndTime%26relationship%3DServiceAppointments"
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
																			"text": "SCHEDULED END",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	earliestStartPermittedRL: {
		xpath: "//div[contains(@class,'serviceAppointmentBlock')]//tr[contains(@class,'dataRow')]//td[7]",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Earliest Start Permitted (EarliestStartTime)',
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
							value: 'EARLIEST START PERMITTED',
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
		testCaseXMLAssertion:
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
														"EarliestStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=EarliestStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DEarliestStartTime%26relationship%3DServiceAppointments"
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
																			"text": /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d.*/,
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
														"EarliestStartTime"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=EarliestStartTime&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26field%3DEarliestStartTime%26relationship%3DServiceAppointments"
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
																			"text": "EARLIEST START PERMITTED",
																			"class": [
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	headingSA: {
		xpath: "//h3[normalize-space(.)='Service Appointments']",
		fieldDetails: {
			disposition: 'Existing',
			text: 'Service Appointments (ServiceAppointments)',
		},
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
														"ServiceAppointments"
													],
													"fieldLocator": [
														{
															"uri": [
																"ui:locator?name=ServiceAppointments&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DWorkOrder%26relationship%3DServiceAppointments"
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
							, { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
}