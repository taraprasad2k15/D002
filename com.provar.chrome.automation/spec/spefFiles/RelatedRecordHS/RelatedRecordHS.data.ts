
export const RelatedRecord = {
	PSI: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfFlexiUiTargetExtension',
		},
		pageDetails: {
			title: 'Related Record (Parent)  component in Account  view',
		},
	},
	name: {
		xpath: "//div[normalize-space(.)='Account Name']/following-sibling::div/span/span",
		xpathInput: "//label/span[normalize-space(.)='Account Name']/../following-sibling::input",
		modificationParameter: {
			interactionParameters: {
				id: '',
			}
		},
		testCaseXML: [{
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
												"Name"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DName"
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
				}
			]
		}],
	},
	type: {
		xpath: "",
		xpathInput: "//span[normalize-space(.)='Type']/following-sibling::div//a",
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings:{
					value: "Other",
				}
			}
		},
		testCaseXML: [{
			"title": [
				"Set the Type picklist to Other"
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
										"ui:locator?name=Type&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DType"
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
									"text": "Other",
									"class": [
										"value"
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
									"text": "Set the Type picklist to Other",
									"class": [
										"value"
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
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Type picklist to Other",
			"executionStatus": "Executed",
		}],
		asserttestCaseXML:[{
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
												"Type"
											],
											"fieldLocator": [
												{
													"uri": [
														"ui:locator?name=Type&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DType"
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
																	"text": "Other",
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
				}
			]
		}],
	},
	industry: {
		xpath: "//div[normalize-space(.)='Industry']/following-sibling::div/span/span",
		modificationParameter: {
			interactionParameters: {
				id: 'Start Inline Edit',
			}
		},
		testCaseXML: [{
			"title": [
				"Activate inline edit the Industry picklist"
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
										"ui:locator?name=Industry&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DIndustry"
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
									"text": "Activate inline edit the Industry picklist",
									"class": [
										"value"
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
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Activate inline edit the Industry picklist",
			"executionStatus": "Executed",
		}],
	},
	phone:{
		xpathInput: "//label[normalize-space(.)='Phone']/following-sibling::input",
		modificationParameter: {
			interactionParameters: {
				id: 'Set',
				settings:{
					value: "9988776655",
				}
			}
		},
		testCaseXML: [{
			"title": [
				"Set the Phone field to 9988776655"
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
										"ui:locator?name=Phone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DPhone"
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
									"text": "Set the Phone field to 9988776655",
									"class": [
										"value"
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
		executionStatus: [{
			"name": "UiDoAction",
			"type": "Icon-Successful",
			"text": "Set the Phone field to 9988776655",
			"executionStatus": "Executed",
		}],
	},
	removeBt: {
        xpath: "//a[text()='Remove']",
		fieldDetails:{
            disposition: "Existing",
			fieldName: 'Remove',
        },
        testCaseXML:[],
        executionStatus:[],
	},
	searchbox: {
		xpath: "//input[contains(@placeholder,'Search accounts')]",
		xpathWithError: "//a//span[@class='pillText' or contains(text(),'Sample')]",
		fieldDetails:{
            disposition: "Existing",
			fieldName: 'searchInput',
		},
		modificationParameters:{
			interactionParameters: {
				id: 'Set',
				settings:{
					value: "Sample Child Account for Related Record",
				}
			}
		},
        testCaseXML:[],
        executionStatus:[],
    },
}