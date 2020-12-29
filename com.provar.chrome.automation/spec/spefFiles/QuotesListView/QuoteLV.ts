import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const QuoteHome = {
	selectRow:{
		Xpath: "(//tr/td//input[@type='checkbox'])[1]",
		interactionParameters: {
			interactionParameters: {
			id: 'Check',
			settings: {
				value: true,
			},
		}},
		executionStatus: [
			{
				"name": "UiWithRow",
				"type": "Icon-ExecutingPaused",
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
									"class": [
										"value"
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
														"Name"
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
		}},
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
		Xpath: "(//tbody/tr//td/span)[8]",
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
	opportunity: {
		Xpath: "(//tbody/tr//td/span)[3]",
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
	listSearchBox:{
		Xpath: "//input[@type='search' and contains(@name,'search-input')]",
		interactionParameters: {
			interactionParameters: {
			id: 'Set',
			settings: {
				value: '{Quote_Number}',
				pressEnter: true,
			},
		}},
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
};