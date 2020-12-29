import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const VfEmbeddedPageBlockTableData = {
    PSI: {
        new: [
            {
                "itemDefinition": {
                    "itemClass": "Page",
                    "itemTypeId": "SfLayoutUiTargetExtension",
                    "disposition": "Existing",
                    "embedded": false,
                },
                "pageDetails": {
                    "title": "Contact (Embedded VF) View screen",
                }
            },
            {
                "itemDefinition": {
                    "itemClass": "Page",
                    "itemTypeId": "VfUiTargetExtension",
                    "disposition": "New",
                    "embedded": true,
                    "pageObjectId": /.*/,
                },
                "pageDetails": {
                    "title": /.*UAT_EmbeddedVFTable.*/,
                }
            },
            {
                "itemDefinition": {
                    "itemClass": "Table",
                    "itemTypeId": "VfTableLocatorExtension",
                    "disposition": "New",
                    "embedded": false,
                    "pageObjectId": /Con.*/,
                }
            },
        ],
        existing: [
            {
                "itemDefinition": {
                    "itemClass": "Page",
                    "itemTypeId": "SfLayoutUiTargetExtension",
                    "disposition": "Existing",
                    "embedded": false,
                },
                "pageDetails": {
                    "title": "Contact (Embedded VF) View screen",
                }
            },
            {
                "itemDefinition": {
                    "itemClass": "Page",
                    "itemTypeId": "VfUiTargetExtension",
                    "disposition": "Existing",
                    "embedded": true,
                    "pageObjectId": /.*/,
                },
                "pageDetails": {
                    "title": "UAT_ Embedded VF Table",
                }
            },
            {
                "itemDefinition": {
                    "itemClass": "Table",
                    "itemTypeId": "VfTableLocatorExtension",
                    "disposition": "Existing",
                    "embedded": false,
                    "pageObjectId": /con.*/,
                }
            },
        ]
    },
    readAssertColumn: {
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: false,
                extractColumnAttributes: true,
                assertColumnAttributes: true,
            },
        },
    },
    lastName: {
        Xpath: "(//div[@class='pbBody']//tr/td[@title='Last Name']/span)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "lastName",
        },
        fieldDetailsExisting: {
            fieldDetails: {
                "disposition": "Existing",
                "fieldName": "lastName",
            }
        },
        interactionParameters: {
            readAssertRow: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            readAssertColumn: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: false,
                        extractColumnAttributes: true,
                        assertColumnAttributes: true,
                        expectedAttributes: {
                            columnVisible: {
                                value: true,
                            },
                            columnHeaderText: {
                                value: 'Last Name',
                                caseSensitive: true,
                                normalise: true,
                            },
                        },
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF UAT_EmbeddedVFTable page with pageobject UAT_ Embedded VF Table',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: "With Con rows {1}",
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
        }],
        executionStatusColumn: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF UAT_EmbeddedVFTable page with pageobject UAT_ Embedded VF Table"
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
                                                "With Con rows {1}"
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
                                                                                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
                                                                            ],
                                                                            "name": [
                                                                                "UiAssert"
                                                                            ],
                                                                            "title": [
                                                                                "UI Assert"
                                                                            ],
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
        }],
        testCaseXMLColumn: [{
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
                                                    "lastName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=lastName&path=con"
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
                                                                        "text": "Last Name",
                                                                        "class": [
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
    deleteLink: {
        xpath: "(//div[@class='pbBody']//tr/td[@title='Delete link']/a)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "link",
            },
            "disposition": "New",
            "fieldName": "deleteLink",
        },
        readAssertRow: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
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
                                                        "deleteLink"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=deleteLink"
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
                                                                            "text": "Delete",
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
    email: {
        xpath: "(//div[@class='pbBody']//tr/td[@title='Email']//a)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "link",
            },
            "disposition": "New",
            "fieldName": "email",
        },
        fieldDetailsExisting: {
            fieldDetails: {
                "disposition": "Existing",
                "fieldName": "email",
            }
        },
        readAssertRow: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            },
        },
        testCaseXMLColumn: [{
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
                                                    "email"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=email&path=con"
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
                                                                    "None"
                                                                ]
                                                            },
                                                            {
                                                                "attributeName": [
                                                                    "columnVisible"
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
                                                        "email"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=email"
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
                                                                            "text": "contactvwv@testemail.com",
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
    mobile: {
        xpath: "(//div[@class='pbBody']//tr/td[@title='Mobile']/span)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "mobile",
        },
        readAssertRow: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
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
                                                        "mobile"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=mobile"
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
                                                                            "text": "1234567890",
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
    deleteButton: {
        xpath: "(//div[@class='pbBody']//tr/td[@title='Delete button']/input)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "deleteButton",
        },
        fieldDetailsExisting: {
            fieldDetails: {
                "disposition": "Existing",
                "fieldName": "deleteButton",
            }
        },
        clickAndCancel: {
            interactionParameters: {
                id: 'Click and Cancel',
            },
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
                    "Click and Cancel the Delete Button button"
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
                                                "ui:locator?name=deleteButton"
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
                                                "ui:interaction?name=actionWithCancel"
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
                                            "text": "Click and Cancel the Delete Button button",
                                            "class": [
                                                "value"
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
        testCaseXMLColumn: [{
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
                                                    "deleteButton"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=deleteButton&path=con"
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
                                                                    "None"
                                                                ]
                                                            },
                                                            {
                                                                "attributeName": [
                                                                    "columnVisible"
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
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click and Cancel the Delete Button button',
            executionStatus: 'Executed',
        }],
    },
    pdf: {
        xpath: "(//div[@class='pbBody']//tr/td[@title='Download PDF']/a)[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "link",
            },
            "disposition": "New",
            "fieldName": "downloadPDF",
        },
        click: {
            interactionParameters: {
                id: 'Click',
            },
        },
        testCaseXML:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
                ],
                "name": [
                    "UiWithRow"
                ],
                "title": [
                    "With Con rows {1}"
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
                                        "sf:ui:locator:row?table=con"
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
                                    "text": "1",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "decimal"
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
                                    "text": "With Con rows {1}",
                                    "class": [
                                        "value"
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
                        },
                        {
                            "id": [
                                "autoRetry"
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
                                                    "Click the Download PDF button"
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
                                                                            "ui:locator?name=downloadPDF"
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
                                                                        "text": "Click the Download PDF button",
                                                                        "class": [
                                                                            "value"
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
        executionStatus:
            [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: "With Con rows {1}",
                    executionStatus: "Executing",
                    children: [
                        {
                            name: 'UiDoAction',
                            type: 'Icon-Successful',
                            text: "Click the Download PDF button",
                            executionStatus: 'Executed',
                        },
                    ]
                }
            ]
    },
}