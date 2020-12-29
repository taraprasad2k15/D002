import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfLeadPageTitle = {
    pageTitle:{
		xpath: "//div[contains(@class,'region-header')]//lightning-formatted-name",
        readAssert:{
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            },
        },
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
        ],
        testCaseXML:	[{
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
													"title"
												],
												"fieldLocator": [
													{
														"uri": [
															"ui:locator?name=title&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3Dtitle"
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
																		"text": "Lead1",
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
}