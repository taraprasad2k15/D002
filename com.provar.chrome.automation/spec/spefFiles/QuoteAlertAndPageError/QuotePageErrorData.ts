import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const QuotePageErrorData = {
    newPagePSI: {
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
    existingPagePSI: {
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
    startDate: {
        xpath: "//input[@id='dateInput']",
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
            "fieldName": "startDate",
        },
        modificationParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: '1234567'
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
                                                "Set the Start Date field to 1234567"
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
                                                                            "ui:locator?name=startDate"
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
                                                                        "text": "1234567",
                                                                        "class": [
                                                                            "value"
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
                                                                        "text": "Set the Start Date field to 1234567",
                                                                        "class": [
                                                                            "value"
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
                    text: "Set the Start Date field to 1234567",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ]
        },
    },
    save: {
        xpath: "//*[@id='mainButton' and text()='Quick Save']",
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
            "fieldName": "quickSave",
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Quick Save button",
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
                    "Click the Quick Save button"
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
                                                "ui:locator?name=quickSave"
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
                                            "text": "Click the Quick Save button",
                                            "class": [
                                                "value"
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
    pageError:{
        xpath: "//div[contains(@class,'slds-theme--error style-scope sb-toast')]//h2",
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
            "fieldName": "pageErrors",
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
                                        "pageAssertions"
                                    ],
                                    "value": [
                                        {
                                            "class": [
                                                "valueList"
                                            ],
                                            "mutable": [
                                                "Mutable"
                                            ],
                                            "uiPageAssertion": [
                                                {
                                                    "attributeAssertions": [
                                                        {
                                                            "uiAttributeAssertion": [
                                                                {
                                                                    "attributeName": [
                                                                        "pageMessages"
                                                                    ],
                                                                    "comparisonType": [
                                                                        "EqualTo"
                                                                    ],
                                                                    "listOperator": [
                                                                        "Contains"
                                                                    ],
                                                                    "normalize": [
                                                                        "true"
                                                                    ],
                                                                    "value": [
                                                                        {
                                                                            "text": " Invalid Date. ",
                                                                            "class": [
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