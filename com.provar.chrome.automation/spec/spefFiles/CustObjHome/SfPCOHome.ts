import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfPCOHome = {
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
				"text": /With.*/,
				"executionStatus": "Executing",
				"successfulCount": 0,
				"children": [
					{
						"name": "UiDoAction",
						"type": "Icon-Successful",
						"text": "Check the Select Row rowSelectionCheckbox",
						"executionStatus": "Executed",
						"successfulCount": 1,
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
									"text": /With.*/,
									"class": [
										"value"
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
														"PROVAR_CUSTOM_OBJ__C_NAME"
													]
												}
											]
										}
									],
									"rhs": [
										{
											"text": "Automation Object",
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
								uri: ['ui:locator?name=PROVAR_CUSTOM_OBJ__C_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DName'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Automation Object',
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
				value: 'Automation Object',
				pressEnter: true,
			},
		}},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the List Search select to Automation Object',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the List Search select to Automation Object'],
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