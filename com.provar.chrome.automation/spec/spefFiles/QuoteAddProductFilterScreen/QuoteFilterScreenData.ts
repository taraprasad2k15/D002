import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const QuoteFilterScreenData = {
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
    iframe: ["//iframe[@title='Salesforce - Enterprise Edition']"],
    valueAssertion: {
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: true,
                assertValue: true,
            }
        },
    },
    executionStatus: [{
        name: 'UiAssert',
        type: 'Icon-Successful',
        text: 'UI Assert',
        executionStatus: 'Executed',
        successfulCount: 1,
    }],
    addProducts: {
        xpath: "//div[@id='buttons']//paper-button[normalize-space()='Add Products']",
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
            "fieldName": "addProducts",
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
                        ]
                        , { partial: true, indexKey: 'id' }),
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
                                                "Click the Add Products button"
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
                                                                            "ui:locator?name=addProducts"
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
                                                                        "text": "Click the Add Products button",
                                                                        "class": [
                                                                            "value"
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
        executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF SBQQ__sb page with pageobject Sbqq__sb",
            "executionStatus": "Executing",
            "children": [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Click the Add Products button",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ]
        },
    },
    filter: {
        xpath: "//*[@id='fb']",
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
            "fieldName": "_5",
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
                    "Click the 5 button"
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
                                                "ui:locator?name=_5"
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
                                            "text": "Click the 5 button",
                                            "class": [
                                                "value"
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
            text: "Click the 5 button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
    },
    productCode: {
        xpath: "//div[text()='Product Code']/following-sibling::div//input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "productCodeValue",
        },
        modificationParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: 'iPhoneXPack'
                }
            }
        },
        fieldDetailsExisting: {
            "disposition": "Existing",
            "fieldName": "productCodeValue",
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Product Code Value field to iPhoneXPack",
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
                    "Set the Product Code Value field to iPhoneXPack"
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
                                                "ui:locator?name=productCodeValue"
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
                                            "text": "iPhoneXPack",
                                            "class": [
                                                "value"
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
                                            "text": "Set the Product Code Value field to iPhoneXPack",
                                            "class": [
                                                "value"
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
        testCaseXMLBlankValue:
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
                                                    "productCodeValue"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=productCodeValue"
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
                                                        "productCodeValue"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=productCodeValue"
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
                                                                            "text": "iPhoneXPack",
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
    productName: {
        xpath: "//div[text()='Product Name']/following-sibling::div//input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "nameValue",
        },
        modificationParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: 'Apple iPhone X Package'
                }
            }
        },
        fieldDetailsExisting: {
            "disposition": "Existing",
            "fieldName": "nameValue",
        },
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
                                                        "nameValue"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=nameValue"
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
                                                                            "text": "Apple iPhone X Package",
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
                    "Set the Name Value field to Apple iPhone X Package"
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
                                                "ui:locator?name=nameValue"
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
                                            "text": "Apple iPhone X Package",
                                            "class": [
                                                "value"
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
                                            "text": "Set the Name Value field to Apple iPhone X Package",
                                            "class": [
                                                "value"
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
        testCaseXMLBlankValue:
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
                                                    "nameValue"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=nameValue"
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
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Name Value field to Apple iPhone X Package",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
    },
    productFamily: {
        xpath: "//div[text()='Product Family']/following-sibling::div//select",
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
            "fieldName": "familyValue",
        },
        fieldDetailsExisting: {
            "disposition": "Existing",
            "fieldName": "familyValue",
        },
        modificationParameter: {
            interactionParameters: {
                id: 'Set By Index',
                settings: {
                    value: 3,
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
                    "Set By Index the Family Value select to 3"
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
                                                "ui:locator?name=familyValue"
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
                                            "text": "3",
                                            "class": [
                                                "value"
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
                                            "text": "Set By Index the Family Value select to 3",
                                            "class": [
                                                "value"
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
        testCaseXMLBlankValue:
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
                                                    "familyValue"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=familyValue"
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
                                                                        "text": "--None--",
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
            text: "Set By Index the Family Value select to 3",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
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
                                                        "familyValue"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=familyValue"
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
                                                                            "text": "Hardware",
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
    clearFields: {
        xpath: "//text[@id='clearfilter']/*",
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
            "fieldName": "clearFields",
        },
        fieldDetailsExisting: {
            "disposition": "Existing",
            "fieldName": "clearFields",
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
                    "Click the Clear Fields button"
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
                                                "ui:locator?name=clearFields"
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
                                            "text": "Click the Clear Fields button",
                                            "class": [
                                                "value"
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
            text: "Click the Clear Fields button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
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
                                                        "clearFields"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=clearFields"
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
                                                                            "text": "Clear Fields",
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
    apply: {
        xpath: "//*[text()='Apply']",
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
            "fieldName": "submit",
        },
        fieldDetailsExisting: {
            "disposition": "Existing",
            "fieldName": "submit",
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
                    "Click the Submit button"
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
                                                "ui:locator?name=submit"
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
                                            "text": "Click the Submit button",
                                            "class": [
                                                "value"
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
            text: "Click the Submit button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
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
                                                        "submit"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=submit"
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
                                                                            "text": "Apply",
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
    }
}