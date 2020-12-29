import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiHomeLV = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=top.*&flexiPage=Custom_Home_Page&lightningComponent=flexipage:filterListCard/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'List View (Lead) component in Custom Home Page',
        },
    },
    editPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Lead&noOverride=true&action=Edit',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Lead Edit screen',
        },
    },
    changeOwnerPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: "sf:ui:target?object=Lead&action=ownershipTransfer",
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Lead change owner screen',
        },
    },
    selectRow: {
        Xpath: "(//tr/td//input[@type='checkbox'])[1]",
        interactionParameters: {
            interactionParameters: {
                id: 'Check',
                settings: {
                    value: true,
                },
            }
        },
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
                                            "text": /AutomationLead.*/,
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
            }
        },
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
                                uri: ['ui:locator?name=Name'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: /AutomationLead[a-zA-Z]{4}/,
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLAssertColumn: [{
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
                                                    "ui:locator?name=Name&path=List%2FlistView%2FlistTable"
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
                                                                "text": "Name",
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
    company: {
        Xpath: "(//tbody/tr//td/span)[3]",
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
                                uri: ['ui:locator?name=Company'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: /AutomationCompany[a-zA-Z]{4}/,
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    email: {
        Xpath: "(//tbody/tr//td/span)[6]",
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
    listSearchBox: {
        Xpath: "//input[@type='search' and contains(@name,'search-input')]",
        interactionParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: '{LeadName}',
                    pressEnter: true,
                },
            }
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the List Search select to AutomationLead[a-zA-Z]{4}/,
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the List Search select to {LeadName}'],
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
    deleteButton: {
        Xpath: "(//a[normalize-space(.)='Delete'])[2]",
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF List View (Lead) 1 component in Custom Home Page',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/,
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Delete button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF List View (Lead) 1 component in Custom Home Page'],
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
                            title: [/With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/],
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
                                                "text": /With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/,
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
                                                        "text": /AutomationLead[a-zA-Z]{4}/,
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
                                            title: ['Click the Delete button'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([{
                                                    id: ['interaction'],
                                                    value: [{
                                                        uri: ['ui:interaction?name=action'],
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
    changeOwnerButton: {
        Xpath: "(//div[contains(@class,'uiPopupTarget')]//a[normalize-space(.)='Change Owner'])[2]",
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF List View (Lead) 1 component in Custom Home Page',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/,
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Change Owner button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF List View (Lead) 1 component in Custom Home Page'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    // value: [{
                    //     uri: [/sf:ui:target\?flexiPath=top.*&flexiPage=Custom_Home_Page&lightningComponent=flexipage:filterListCard/],
                    // }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: [/With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/],
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
                                                "text": /With Lead rows {Name = \"AutomationLead[a-zA-Z]{4}\"}/,
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
                                                        "text": /AutomationLead[a-zA-Z]{4}/,
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
                                            title: ['Click the Change Owner button'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([{
                                                    id: ['interaction'],
                                                    value: [{
                                                        uri: ['ui:interaction?name=action'],
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
    cancelButton: {
        XpathCO: "//div[contains(@class,'modal-footer')]//span[(.)='Submit']/../preceding-sibling::button/span[(.)='Cancel']",
        XpathEdit: "//div[contains(@class,'modal-footer')]//span[(.)='Cancel']|//button[@title='Cancel']//span[(.)='Cancel'] | //div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//button[normalize-space(.)='Cancel']",
        executionStatusEdit: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Lead Edit screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Cancel button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        executionStatusCO: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Lead Change Owner screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Cancel button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        testCaseXMLEdit: {
            name: ['UiWithScreen'],
            title: ['On SF Lead Edit screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Lead&noOverride=true&action=Edit'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Click the Cancel button'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=action'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        },
        testCaseXMLCO: {
            name: ['UiWithScreen'],
            title: ['On SF Lead Change Owner screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Lead&action=ownershipTransfer'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Click the Cancel button'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=action'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
}
