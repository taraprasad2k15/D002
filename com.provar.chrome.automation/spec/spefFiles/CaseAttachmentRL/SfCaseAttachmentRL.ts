import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCaseAttachmentRL = {
	executionStatusWithRow: [{
		"name": "UiWithRow",
		"type": "Icon-ExecutingPaused",
		// "text": "With View/CombinedAttachments/CombinedAttachmentsTable {Title = \"template 1\"}",
		"text": "With CombinedAttachments rows {Title = \"template 1\"}",
		"executionStatus": "Executing",
		"successfulCount": 0,
		"failureCount": 0,
		"children": [
			{
				"name": "UiAssert",
				"type": "Icon-Successful",
				"text": "UI Assert",
				"executionStatus": "Executed",
				"successfulCount": 1,
			}
		]
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
	downloadInteractionParameters: {
		interactionParameters: {
			id: 'Download',
		}
	},
	executionStatusAssert: [{
		"name": "UiAssert",
		"type": "Icon-Successful",
		"text": "UI Assert",
		"executionStatus": "Executed",
		"successfulCount": 1,
	}],
	executionStatusDownload: [{
		"name": "UiDoAction",
		"type": "Icon-Successful",
		"text": "Download the File Name field to template 1",
		"executionStatus": "Executed",
		"successfulCount": 1,
		"failureCount": 0,
	}],
	rowLocators: [
		{
			"label": "File Name (Title)",
			"selected": true,
			"value": "template 1"
		},
		{
			"label": "Last Modified (LastModifiedDate)",
			"selected": false,
			"value": /.*/
		},
		{
			"label": "Size (ContentSize)",
			"selected": false,
			"value": /.*B/
		},
		{
			"label": "File Extension (FileExtension)",
			"selected": false,
			"value": "xml"
		}
	],
	uploadFiles: {
		xpath: "//span[normalize-space()='Attachments']/../../../../../following-sibling::div//span[normalize-space()='Upload Files']",
		xpath1: "//li/a[normalize-space()='Upload Files']",
		interactionParameters: {
			interactionParameters: {
				id: 'Choose File',
				settings: {
					value: 'templates/template 1.xml'
				},
			},

		},
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Choose File the Attachments Attach File button",
			"executionStatus": "Executed",
			"successfulCount": 1,
			"failureCount": 0,
		}],
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Choose File the Attachments Attach File button"
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
										/ui:locator\?name=AttachFile&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments&name=AttachFile|ui:locator\?name=AttachFile&binding=.*/
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
										"ui:interaction?name=file"
									]
								}
							]
						},
						{
							"id": [
								"fileLocation"
							],
							"value": [
								{
									"text": "templates/template 1.xml",
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						},
						{
							"id": [
								"fileContents"
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
									"text": "Choose File the Attachments Attach File button",
									"class": [
										"value"
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
		testCaseXML1: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Choose File the Attachments Attach File button"
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
										/ui:locator\?name=AttachFile&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments&name=AttachFile|ui:locator\?name=AttachFile&binding=.*/
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
										"ui:interaction?name=file"
									]
								}
							]
						},
						{
							"id": [
								"fileLocation"
							],
							"value": [
								{
									"text": "templates/template 1.xml",
									"class": [
										"value"
									],
									"valueClass": [
										"string"
									]
								}
							]
						},
						{
							"id": [
								"fileContents"
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
									"text": "Choose File the Attachments Attach File button",
									"class": [
										"value"
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
												"AttachFile"
											],
											"fieldLocator": [
												{
													"uri": [
														/ui:locator\?name=AttachFile&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DAttachFile%26relationship%3DCombinedAttachments&name=AttachFile|ui:locator\?name=AttachFile&binding=.*/
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
																	"text": "Upload Files",
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
	fileName: {
		xpath: "//div/header//span[normalize-space()='Attachments']/../../../../../following-sibling::div//a//div/span[@title]",
		testCaseXML: [{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiWithRow"
			],
			"name": [
				"UiWithRow"
			],
			"title": [
				/With View\/CombinedAttachments\/CombinedAttachmentsTable {Title = "template 1"}/
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
									"sf:ui:locator:row?table=View%2FCombinedAttachments%2FCombinedAttachmentsTable"
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
													"Title"
												]
											}
										]
									}
								],
								"rhs": [
									{
										"text": "template 1",
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
								// "text": "With View/CombinedAttachments/CombinedAttachmentsTable {Title = \"template 1\"}",
								"text": "With CombinedAttachments rows {Title = \"template 1\"}",
								"class": [
									"value"
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
																				"Title"
																			],
																			"fieldLocator": [
																				{
																					"uri": [
																						/ui:locator\?name=Title&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTitle%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DTitle%26relationship%3DCombinedAttachments&name=Title|ui:locator\?name=Title&binding=.*/
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
																									"text": "template 1",
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
		testCaseXML1: 
		[{
			"apiId": [
				"com.provar.plugins.forcedotcom.core.ui.UiDoAction"
			],
			"name": [
				"UiDoAction"
			],
			"title": [
				"Download the File Name field to template 1"
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
											/ui:locator\?name=Title&binding=.*&rowLocator=Title\+%3D\+%27template\+1%27|ui:locator\?rowLocator=Title\+%3D\+%27template\+1%27&name=Title&binding=.*|ui:locator\?binding=.*&name=Title&rowLocator=Title\+%3D\+%27template\+1%27/
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
											"ui:interaction?name=download"
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
										"text": "template 1",
										"class": [
											"value"
										],
										"valueClass": [
											"string"
										]
									}
								]
							},
							{
								"id": [
									"resultName"
								],
								"value": [
									{
										"text": "contents",
										"class": [
											"value"
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
									"resultFormat"
								],
								"value": [
									{
										"text": "Parsed",
										"class": [
											"value"
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
										"text": "Download the File Name field to template 1",
										"class": [
											"value"
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
	fileExtension: {
		xpath: "//div/header//span[normalize-space()='Attachments']/../../../../../following-sibling::div//a//div/p/span[contains(@class,'uiOutputText')]",
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
													"FileExtension"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:locator\?name=FileExtension&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DFileExtension%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DFileExtension%26relationship%3DCombinedAttachments&name=FileExtension|ui:locator\?name=FileExtension&binding=.*/
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
																		"text": "xml",
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
	fileLastModified: {
		xpath: "//div/header//span[normalize-space()='Attachments']/../../../../../following-sibling::div//a//div/p/span[contains(@class,'uiOutputDateTime')]",
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
													"LastModifiedDate"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:locator\?name=LastModifiedDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DLastModifiedDate%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DLastModifiedDate%26relationship%3DCombinedAttachments&name=LastModifiedDate|ui:locator\?name=LastModifiedDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLastModifiedDate%26relationship%3DCombinedAttachments/
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


						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	fileSize: {
		xpath: "//div/header//span[normalize-space()='Attachments']/../../../../../following-sibling::div//a//div/p//span[contains(@class,'uiOutputNumber')]",
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
													"ContentSize"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:locator\?name=ContentSize&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContentSize%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContentSize%26relationship%3DCombinedAttachments&name=ContentSize|ui:locator\?name=ContentSize&binding=.*/
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

						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
	viewAll: {
		xpath: "//a//span[normalize-space(.)='Attachments']/../../span[contains(text(),'View All')]",
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Click the Attachments Go To List button",
			"executionStatus": "Executed",
			"successfulCount": 1,
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
					"Click the Attachments Go To List button"
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
											/ui:locator\?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DGoToList%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26action%3DGoToList%26relationship%3DCombinedAttachments&name=GoToList|ui:locator\?name=GoToList&binding=.*/
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
										"text": "Click the Attachments Go To List button",
										"class": [
											"value"
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
	heading: {
		xpath: "//h2//span[normalize-space(.)='Attachments']",
		interactionParameters: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					assertTableAttributes: true,
					extractTableAttributes: true,
					expectedAttributes: {
						displayRowCount: {
							value: 2,
						},
						totalRowCount: {
							value: 2,
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
													"CombinedAttachments"
												],
												"fieldLocator": [
													{
														"uri": [
															/ui:locator\?name=CombinedAttachments&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26relationship%3DCombinedAttachments|ui:locator\?binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26relationship%3DCombinedAttachments&name=CombinedAttachments|ui:locator\?name=CombinedAttachments&binding=.*/
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
																"attributeName": [
																	"totalRowCount"
																],
																"comparisonType": [
																	"EqualTo"
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

						], { partial: true, indexKey: 'id' }),
					}
				],
			}],
	},
}