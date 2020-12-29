import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const SfCaseViewLabelAssertion = {
	 assertInteractionParameters: {
		interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: false,
				extractLabel: true,
				assertLabel: true,
			},
		}
	},
	 executionStatusAssert: [{
		"name": "UiAssert",
		"type": "Icon-Successful",
		"text": "UI Assert",
		"executionStatus": "Executed",
		"successfulCount": 1,
	}],
	status: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Status", FieldType.Picklist),
		interactionParameters: {
			interactionParameters: {
				id: 'Start Inline Edit',
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Activate inline edit the Status picklist',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Activate inline edit the Status picklist'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfIleActivate'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	caseType: {
		caseTypeXpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Type", FieldType.Picklist),
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
													"Type"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Type&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DType"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
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
	subject: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Subject", FieldType.Text),
		testCaseXMLAssert:
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
															"Subject"
														],
														"fieldLocator": [
															{
																"uri": [
																	"ui:locator?name=Subject&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DSubject"
																]
															}
														],
														"attributeAssertions": [
															{
																"uiAttributeAssertion": [
																	{
																		"attributeName": [
																			"label"
																		],
																		"comparisonType": [
																			"EqualTo"
																		],
																		"normalize": [
																			"true"
																		],
																		"value": [
																			{
																				"text": "Subject",
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
	description: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Description", FieldType.Textarea),
		testCaseXMLAssert:
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
													"Description"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DDescription"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Description",
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
	customCheckbox: {
		Xpath:  miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Checkbox", FieldType.Checkbox),
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
													"Custom_Checkbox__c"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Custom_Checkbox__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Checkbox__c"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Custom Checkbox",
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
	customTime: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Time Field", FieldType.Time),
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
													"Custom_Time_Field__c"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Custom_Time_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Time_Field__c"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Custom Time Field",
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
	customDateTime: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Date", FieldType.Time),
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
													"Custom_Date_Time_Field__c"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Custom_Date_Time_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Date_Time_Field__c"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Custom Date-Time Field",
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
	customDate: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Date Field", FieldType.Time),
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
													"Custom_Date_Field__c"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Custom_Date_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Date_Field__c"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Custom Date Field",
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
	parentCase: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Parent Case", FieldType.Time),
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
													"ParentId"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Parent Case",
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
	customRichText: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Rich-Text Field", FieldType.Richtext),
	
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
													"Custom_Rich_text_Field__c"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=Custom_Rich_text_Field__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Rich_text_Field__c"
														]
													}
												],
												"attributeAssertions": [
													{
														"uiAttributeAssertion": [
															{
																"attributeName": [
																	"label"
																],
																"comparisonType": [
																	"EqualTo"
																],
																"normalize": [
																	"true"
																],
																"value": [
																	{
																		"text": "Custom Rich-Text Field",
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
	customPicklistSelect: {
		Xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Custom Picklist(Multi)", FieldType.MultiPicklistSelect),
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
															"Custom_Picklist_Multi__c"
														],
														"fieldLocator": [
															{
																"uri": [
																	"ui:locator?name=Custom_Picklist_Multi__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DCustom_Picklist_Multi__c"
																]
															}
														],
														"attributeAssertions": [
															{
																"uiAttributeAssertion": [
																	{
																		"attributeName": [
																			"label"
																		],
																		"comparisonType": [
																			"EqualTo"
																		],
																		"normalize": [
																			"true"
																		],
																		"value": [
																			{
																				"text": "Custom Picklist(Multi)",
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
};