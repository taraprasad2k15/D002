import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiThreeRegionLV = {
    casePSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=region1.*&flexiPage=Regression_App_Page_3_Columns&lightningComponent=flexipage:filterListCard/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'List View (Case) component in Regression App Page 3 Columns',
        },
    },
    contactPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=region3.*&flexiPage=Regression_App_Page_3_Columns&lightningComponent=flexipage:filterListCard/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'List View (Contact) component in Regression App Page 3 Columns',
        },
    },
    caseOwnerAlias: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[1]//div[(.)='Case Owner Alias:' and contains(@class,'label')]/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Case Owner Alias (Owner_Alias)",
        },
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: false,
                assertColumnAttributes: true,
                extractColumnAttributes: true,
                expectedAttributes: {
                    columnHeaderText: {
                        value: 'Case Owner Alias',
                        caseSensitive: true,
                        normalise: true,
                    },
                    columnVisible: {
                        value: true,
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([
                    {
                        "id": [
                            "columnAssertions"
                        ],
                        "value": [
                            {
                                "uiColumnAssertion": [
                                    {
                                        "fieldLocator": [
                                            {
                                                "uri": [
                                                    "ui:locator?name=Owner_Alias&path=List%2FlistView%2FlistTable"
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
                                                                "text": "Case Owner Alias",
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
        }],
    },
    caseNumber: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[1]//h2[@class='itemTitle']/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Case (CaseNumber)",
        },
        executionStatus: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        }],
        testCaseXML: [{
            name: ['UiWithRow'],
            title: [/With Case rows {CaseNumber = \"[0-9]{8}\"}/],
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
                                    "sf:ui:locator:row?table=List%2FlistView%2FlistTable"
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
                                "text": /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
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
                                                    "CaseNumber"
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "rhs": [
                                    {
                                        "text": /[0-9]{8}/,
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
                            name: ['UiAssert'],
                            title: ['UI Assert'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['fieldAssertions'],
                                    value: [{
                                        uiFieldAssertion: [{
                                            fieldLocator: [{
                                                uri: ['ui:locator?name=CaseNumber'],
                                            }],
                                            attributeAssertions: [{
                                                uiAttributeAssertion: [{
                                                    attributeName: ['value'],
                                                    comparisonType: ['EqualTo'],
                                                    normalize: ['true'],
                                                    value: [{
                                                        text: /[0-9]{8}/,
                                                    }]
                                                }]
                                            }]
                                        }],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        }],
    },
    contactName: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[1]//div[(.)='Contact Name:' and contains(@class,'label')]/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Name (ContactId)",
        },
        executionStatusAssert: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=ContactId'],
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
    priority: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[1]//div[(.)='Priority:' and contains(@class,'label')]/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Priority (Priority)",
        },
        executionStatusAssert: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=Priority'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: "High",
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    contactOwnerAlias: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[15]//div[(.)='Contact Owner Alias:' and contains(@class,'label')]/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Owner Alias (Owner_Alias)",
        },
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: false,
                assertColumnAttributes: true,
                extractColumnAttributes: true,
                expectedAttributes: {
                    columnHeaderText: {
                        value: 'Contact Owner Alias',
                        caseSensitive: true,
                        normalise: true,
                    },
                    columnVisible: {
                        value: true,
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([
                    {
                        "id": [
                            "columnAssertions"
                        ],
                        "value": [
                            {
                                "uiColumnAssertion": [
                                    {
                                        "fieldLocator": [
                                            {
                                                "uri": [
                                                    "ui:locator?name=Owner_Alias&path=List%2FlistView%2FlistTable"
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
                                                                "text": "Contact Owner Alias",
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
        }],
    },
    phone: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[15]//div[(.)='Phone:' and contains(@class,'label')]/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Phone (Phone)",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=Phone'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: "9990000999",
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    name: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[15]//h2|h3[@class='itemTitle']/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (Name)",
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF List View (Contact) component in Regression App Page 3 Columns',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With List\/listView\/listTable {Name = \"AutomationContact\"}/,
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF List View (Contact) component in Regression App Page 3 Columns'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: [/With List\/listView\/listTable {Name = \"AutomationContact\"}/],
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
                                                    "sf:ui:locator:row?table=List%2FlistView%2FlistTable"
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
                                                "text": /With List\/listView\/listTable {Name = \"AutomationContact\"}/,
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
                                                        "text": "AutomationContact",
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
                                            name: ['UiAssert'],
                                            title: ['UI Assert'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([{
                                                    id: ['fieldAssertions'],
                                                    value: [{
                                                        uiFieldAssertion: [{
                                                            fieldLocator: [{
                                                                uri: ['ui:locator?name=Name'],
                                                            }],
                                                            attributeAssertions: [{
                                                                uiAttributeAssertion: [{
                                                                    attributeName: ['value'],
                                                                    comparisonType: ['EqualTo'],
                                                                    normalize: ['true'],
                                                                    value: [{
                                                                        text: "AutomationContact",
                                                                    }]
                                                                }]
                                                            }]
                                                        }],
                                                    }],
                                                }], { partial: true, indexKey: 'id' }),
                                            }],
                                        }],
                                    }],
                                }],
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
    email: {
        Xpath: "(//li[contains(@class,'uiInfiniteListRow')])[15]//div[(.)='Email:' and contains(@class,'label')]/following-sibling::div",
        fieldDetails: {
            disposition: "Existing",
            text: "Email (Email)",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=Email'],
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
}