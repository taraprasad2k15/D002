import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const QuoteChoosePriceBookData = {
    Psi: {
        "itemDefinition": {
            "itemClass": "Page",
            "itemTypeId": "VfUiTargetExtension",
            "disposition": "New",
            "embedded": false,
        },
        "pageDetails": {
            "title": /.*/,
        }
    },
    existingPSI: {
        "itemDefinition": {
            "itemClass": "Page",
            "itemTypeId": "VfUiTargetExtension",
            "disposition": "Existing",
            "embedded": false,
        },
        "pageDetails": {
            "title": /.*/,
        }
    },
    iframe: "//iframe[@title='Salesforce - Enterprise Edition']",
    pricebook: {
        xpath: "//div[contains(@class,'sb-pricebook-dialog')]//select",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "choice",
            },
            "disposition": "New",
            "fieldName": "sbPricebook",
        },
        fieldDetails1: {
            "disposition": "Existing",
            "fieldName": "sbPricebook",
        },
        modificationParameter: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Standard'
                    },
                }
            },
            assert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    }
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
                "On SF SBQQ__sb page with pageobject Sbqq__sb"
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
                                    "text": "On SF SBQQ__sb page with pageobject Sbqq__sb",
                                    "class": [
                                        "value"
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
                                                "Set the Sb Pricebook select to Standard"
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
                                                                        "ui:locator?name=sbPricebook"
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
                                                                    "text": "Standard",
                                                                    "class": [
                                                                        "value"
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
                                                                    "text": "Set the Sb Pricebook select to Standard",
                                                                    "class": [
                                                                        "value"
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
                                                        "sbPricebook"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=sbPricebook"
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
                                                                            "text": "Standard",
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
        executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF SBQQ__sb page with pageobject Sbqq__sb",
            "executionStatus": "Executing",
            "children": [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Sb Pricebook select to Standard",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ]
        },
        executionStatus1: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
    },
    cancel: {
        xpath: "//div[contains(@class,'sb-pricebook-dialog')]//footer//paper-button[text()='Cancel']",
        assert: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                }
            },
        },
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "cancel",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
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
                                                        "cancel"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=cancel"
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
                                                                            "text": "Cancel",
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
    save: {
        xpath: "//div[contains(@class,'sb-pricebook-dialog')]//footer//sb-i18n[text()='Save']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "save",
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Save button",
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
                    "Click the Save button"
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
                                                "ui:locator?name=save"
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
                            ]
                            , { partial: true, indexKey: 'id' }),
                    }
                ],
            }],
    }
}