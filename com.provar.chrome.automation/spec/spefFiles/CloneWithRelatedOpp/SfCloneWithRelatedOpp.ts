import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCloneWithRelatedOpp = {
    oppViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Opportunity&noOverride=true&action=View',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Opportunity View screen',
        },
    },
    oppClonePSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Opportunity&noOverride=true&action=Clone',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Opportunity Clone screen',
        },
    },
    cloneWithRelatedPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Opportunity&noOverride=true&action=DeepClone',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Opportunity DeepClone screen',
        },
    },
    showMoreActions: {
        Xpat2: "//li/a/div[(.)='Edit']/../../following-sibling::li[contains(@class,'oneActionsDropDown')]//span[(.)='Show more actions’]",
        Xpath: "//li/a/div[(.)='Edit']/../../following-sibling::li[contains(@class,'oneActionsDropDown')]//span[(.)='Show more actions']| //li//span[contains(text(),'more actions')]/../../button",
    },
    cloneWithRelated: {
        Xpath: "//a[@title='Clone with Related']/div[(.)='Clone with Related']|//*[text()='Clone with Related']", // last one for BST win 21
        fieldDetails: {
            disposition: "Existing",
            text: "Clone with Related (DeepClone)",
        },
        executionStatus: {
            click: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Opportunity View screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Click the Clone with Related button',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            },
        },
        testCaseXML: {
            click: {
                name: ['UiWithScreen'],
                title: ['On SF Opportunity View screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Opportunity&noOverride=true&action=View'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Click the Clone with Related button'],
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
    },
    oppContactRole: {
        Xpath: "//label/span[(.)='Opportunity Contact Role']",
        XpathCheckbox: "//span[(.)='Opportunity Contact Role']/preceding-sibling::span",
        fieldDetails: {
            text: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "Item to clone (itemToClone)",
                },
            },
            checkbox: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "Select Row (selectRow)",
                },
            },
        },
        executionStatus: {
            check: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingChildPaused',
                text: 'On SF Opportunity Clone with Related screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        "name": "UiWithRow",
                        "type": "Icon-ExecutingPaused",
                        "executionStatus": "Executing",
                        "successfulCount": 0,
                        "children": [
                            {
                                "name": "UiDoAction",
                                "type": "Icon-Successful",
                                "text": "Check the Select Row rowSelectionCheckbox",
                                "executionStatus": "Executed",
                                "successfulCount": 1,
                            },
                        ],
                    },
                ],
            },
            readAssert: {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        },
        testCaseXML: {
            check: {
                name: ['UiWithScreen'],
                title: ['On SF Opportunity Clone with Related screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Opportunity&noOverride=true&action=DeepClone'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
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
                                                        "sf:ui:locator:row?table=cloneWithRelatedTable"
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
                                                                        "itemToClone"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "rhs": [
                                                        {
                                                            "text": "Opportunity Contact Role",
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
                                                    argument: comparisonUtils.addCompareOptions([{
                                                        id: ['interaction'],
                                                        value: [{
                                                            uri: ['ui:interaction?name=check'],
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
            readAssert: {
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
                                                    "itemToClone"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=itemToClone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DitemToClone"
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
                                                                        "text": "Opportunity Contact Role",
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
            },
        },
    },
    oppProduct: {
        Xpath: "//label/span[(.)='Opportunity Product']",
        XpathCheckbox: "//span[(.)='Opportunity Product']/preceding-sibling::span",
        fieldDetails: {
            text: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "Item to clone (itemToClone)",
                },
            },
            checkbox: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "Select Row (selectRow)",
                },
            },
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
        },
        executionStatus: {
            check: [{
                "name": "UiWithRow",
                "type": "Icon-ExecutingPaused",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": "Check the Select Row rowSelectionCheckbox",
                        "executionStatus": "Executed",
                        "successfulCount": 1,
                    },
                ],
            }],
            readAssert: {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        },
        testCaseXML: {
            check: [{
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
                                        "sf:ui:locator:row?table=cloneWithRelatedTable"
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
                                                        "itemToClone"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "rhs": [
                                        {
                                            "text": "Opportunity Product",
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
                                    argument: comparisonUtils.addCompareOptions([{
                                        id: ['interaction'],
                                        value: [{
                                            uri: ['ui:interaction?name=check'],
                                        }],
                                    }], { partial: true, indexKey: 'id' }),
                                }],
                            }],
                        }],
                    }],
                }],
            }],
            readAssert: {
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
                                                    "itemToClone"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=itemToClone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DitemToClone"
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
                                                                        "text": "Opportunity Product",
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
            },
        },
    },
    pageMessage: {
        Xpath: "//legend[(.)='Select records to clone with this opportunity.']",
        fieldDetails: {
            disposition: "Existing",
            text: "Page Message (pageMessage)",
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
        },
        executionStatus: {
            readAssert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            readAssert: [{
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
                                                    "pageMessage"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=pageMessage&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DpageMessage"
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
                                                                        "text": "Select records to clone with this opportunity.",
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
    },
    nextButton: {
        Xpath: "//button[(.)='Next']",
        fieldDetails: {
            disposition: "Existing",
            text: "Next (next)",
        },
        executionStatus: {
            click: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Next button',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            click: [{
                name: ['UiDoAction'],
                title: ['Click the Next button'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=action'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
        },
    },
    oppName: {
        Xpath: "//span[(.)='Opportunity Name']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Opportunity Name (Name)",
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
        },
        executionStatus: {
            readAssert: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Opportunity Clone screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiAssert',
                        type: 'Icon-Successful',
                        text: 'UI Assert',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            },
        },
        testCaseXML: {
            readAssert: {
                name: ['UiWithScreen'],
                title: ['On SF Opportunity Clone screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Opportunity&noOverride=true&action=Clone'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
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
                                                                            "ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DName"
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
                                                                                        "text": "AutomationOpportunity",
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
                        }],
                    }],
                }],
            },
        },
    },
    accName: {
        Xpath: "//span[(.)='Account Name']/../following-sibling::div//span[@class='pillText']",
        fieldDetails: {
            disposition: "Existing",
            text: "Account Name (AccountId)",
        },
        interactionParameters: {
            readAssert: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
        },
        executionStatus: {
            readAssert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            readAssert: [{
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
                                                    "AccountId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAccountId"
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
                                                                        "text": "AutomationAccount",
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
    },
    saveButton: {
        Xpath: "//span[(.)='Save']",
        fieldDetails: {
            disposition: "Existing",
            text: "Save (save)",
        },
        executionStatus: {
            click: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Save button',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            click: [{
                name: ['UiDoAction'],
                title: ['Click the Save button'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=action'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
        },
    },
    cancelButton:{
        Xpath: "//span[(.)='Cancel']",
        fieldDetails: {
            disposition: "Existing",
            text: "Cancel (cancel)",
        },
        executionStatus: {
            click: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
            }],
        },
        testCaseXML: {
            click: [{
                title: ['UI Assert'],
            }],
        },
    },
}