import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewCaseOpportunityCX = {
    conLookupPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=003',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact Lookup Screen',
        },
    },
    NewCaseViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Opportunity&quickAction=NewCase&action=QuickAction',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Opportunity NewCase publisher action screen',
        },
    },
    feedTab: {
        Xpath: "//span[@class='linkText' and (.)='Show Feed']",
    },
    newCaseTab: {
        Xpath: "//span[(.)='New Case' and contains(@class,'publisherattachtext truncateLabel')]",
    },
    subject: {
        Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[text()='Subject']/../following-sibling::div[@class='quickActionFieldElement']/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Subject for the New Case QA",
                    },
                },
            },
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
            set: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Opportunity Publisher Action New Case screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Set the Subject field to Subject for the New Case QA',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            },
            assert: [
                {
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },

        testCaseXML: {
            set: {
                name: ['UiWithScreen'],
                title: ['On SF Opportunity Publisher Action New Case screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Opportunity&quickAction=NewCase&action=QuickAction'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Subject field to Subject for the New Case QA'],
                                arguments: [{
                                    argument: comparisonUtils.addCompareOptions([{
                                        id: ['interaction'],
                                        value: [{
                                            uri: ['ui:interaction?name=set'],
                                        }],
                                    }], { partial: true, indexKey: 'id' }),
                                }],
                            }],
                        }],
                    }],
                }],
            },
            assert: [{
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
                                                    "Subject"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Subject&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DSubject"
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
                                                                        "text": "Subject for the New Case QA",
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
    status: {
        Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[text()='Status']/../following-sibling::div[@class='quickActionFieldElement']/select",
        fieldDetails: {
            disposition: "Existing",
            text: "Status (Status)",
        },
        interactionParameters: {
            setByIndex: {
                interactionParameters: {
                    id: "Set By Index",
                    settings: {
                        value: "1",
                    },
                },
            },
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
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set By Index the Status picklist to 1',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        executionStatusAssert: [
            {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set By Index the Status picklist to 1'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=setByIndex'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLAssert: [{
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
                                                "Status"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DStatus"
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
                                                                    "text": "On Hold",
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
    description: {
        Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[text()='Description']/../following-sibling::div[@class='quickActionFieldElement']/textarea",
        fieldDetails: {
            disposition: "Existing",
            text: "Description (Description)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Set description for New Case QA on Opportunity view screen",
                    },
                },
            },
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
            set: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Set the Description field to Set description for New Case QA on Opportunity view screen',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
            assert: [
                {
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },

        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Description field to Set description for New Case QA on Opportunity view screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=set'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
            assert: [{
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
                                                    "Description"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DDescription"
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
                                                                        "text": "Set description for New Case QA on Opportunity view screen",
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
    contactName: {
        Xpath: "//div[contains(@class,'activeTemplate')]//div[@class='quickActionFieldLabel']/label[(.)='Contact Name']/../following-sibling::div[@class='quickActionFieldElement']/span[@class='lookupInput']/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Name (ContactId)",
        },
        interactionParameters: {
            sfLookup: {
                interactionParameters: {
                    id: "SF Lookup",
                },
            },
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
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Lookup the Contact Name reference',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        executionStatusAssert: [
            {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXMLlookup: [{
            name: ['UiDoAction'],
            title: ['Lookup the Contact Name reference'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=sfLookup'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXML: [{
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
                                                "ContactId"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=ContactId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DContactId"
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
                                                                    "text": "AutomationContact",
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
    create: {
        Xpath: "//div[contains(@class,'publisherTemplate activeTemplate')]//span[contains(@class,'publisherShareButton')]/input",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Create (publishersharebutton)',
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Create button',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Create button'],
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
    searchText: {
        Xpath: "//label[@class='assistiveText']/following-sibling::input[@type='text']",
        fieldDetails: {
            disposition: "Existing",
            text: "Search (SearchName)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "{ContactName}",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Contact Lookup screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Set the Search text to AutomationContact',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiWithScreen'],
                title: ['On SF Contact Lookup screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?lookup=Contact'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Search text to {ContactName}'],
                                arguments: [{
                                    argument: comparisonUtils.addCompareOptions([{
                                        id: ['interaction'],
                                        value: [{
                                            uri: ['ui:interaction?name=set'],
                                        }],
                                    }], { partial: true, indexKey: 'id' }),
                                }],
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
    go: {
        Xpath: "//label[@class='assistiveText']/following-sibling::input[@value=' Go! ' and @class='btn']",
        fieldDetails: {
            disposition: "Existing",
            text: "Go! (go)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Go! button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Go! button'],
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
    conName: {
        Xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (Name)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Name button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Name button'],
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
}