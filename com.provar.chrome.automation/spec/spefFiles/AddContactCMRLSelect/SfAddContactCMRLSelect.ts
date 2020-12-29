import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfAddContactCMRLSelect = {
    campaignViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Campaign&noOverride=true&action=View',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Campaign View screen',
        },
    },
    campaignMemberPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=CampaignMember&action=CampaignContactMultiAdd',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Campaign Member CampaignContactMultiAdd screen',
        },
    },
    addToCampaignPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=CampaignMember&action=AddToCampaign',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Add to Campaign',
        },
    },
    relatedTab: {
        Xpath: "//span[(.)='Related']",
    },
    addContact: {
        Xpath: "//div[(.)='Add Contacts']",
        fieldDetails: {
            disposition: "Existing",
            text: "Members Add Contacts (AddContact)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Members Add Contacts button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Members Add Contacts button'],
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
    byKeyword: {
        Xpath: "//input[contains(@class,'uiInput--lookup') and @title= 'Search Contacts']",
        fieldDetails: {
            disposition: "Existing",
            text: "By Keyword (byKeyword)",
        },
        interactionParameters: {
            id: "SF Lookup",
            settings: {
                value: "{LastName}",
            }
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Campaign Member Add Contacts To Campaign Member screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Lookup the By Keyword reference to AutomationContact[a-zA-Z]{4}/,
                executionStatus: 'Executed',
                successfulCount: 1,
            },
            {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Contact Lookup screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: /Set the Search text to AutomationContact[a-zA-Z]{4}/,
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                    {
                        name: 'UiDoAction',
                        type: 'Icon-Successful',
                        text: 'Click the Go! button',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    },
                ],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Campaign Member Add Contacts To Campaign Member screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=CampaignMember&action=CampaignContactMultiAdd'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Lookup the By Keyword reference to {LastName}'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=sfLookup'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        },
                        {
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
                                            title: ['Set the Search text to {LastName}'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([
                                                    {
                                                        id: ['interaction'],
                                                        value: [{
                                                            uri: ['ui:interaction?name=set'],
                                                        }],
                                                    }], { partial: true, indexKey: 'id' }),
                                            }],
                                        },
                                        {
                                            name: ['UiDoAction'],
                                            title: ['Click the Go! button'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([
                                                    {
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
    selectRow: {
        Xpath: "//div[contains(@class,'test-listViewManager')]//tbody/tr[1]//span[contains(@class,'checkbox--faux')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Select Row (SelectRow)",
        },
        interactionParameters: {
            id: "Check",
        },
        executionStatus: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Contact Table \{Name = \"AutomationContact[a-zA-Z]{4}\"\}/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Check the Select Row rowSelectionCheckbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        }],
        testCaseXML: [{
            name: ['UiWithRow'],
            title: [/With Contact Table \{Name = \"AutomationContact[a-zA-Z]{4}\"\}/],
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
                                    "sf:ui:locator:row?table=ObjectSearchMultiAdd%2FContactBlock%2FContactTable"
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
                                "text": /With Contact Table \{Name = \"AutomationContact[a-zA-Z]{4}\"\}/,
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
                                        "text": /AutomationContact.*/,
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
    },
    next: {
        Xpath: "//button[contains(@class,'slds-button')]/span[(.)='Next']",
        fieldDetails: {
            disposition: "Existing",
            text: "Next (next)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Next button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
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
    campaign: {
        Xpath: "//label/span[(.)='Campaign']/../following-sibling::div//a[contains(@class,'pill')]",
        XpathC: "//label/span[(.)='Campaign']/../following-sibling::div//a[contains(@class,'pill')]/parent::li",
        fieldDetails: {
            disposition: "Existing",
            text: "Campaign (campaign)",
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Campaign Member Add to Campaign screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Campaign Member Add to Campaign screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=CampaignMember&action=AddToCampaign'],
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
                                    "argument": comparisonUtils.addCompareOptions([
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
                                                                "campaign"
                                                            ],
                                                            "fieldLocator": [
                                                                {
                                                                    "uri": [
                                                                        "ui:locator?name=campaign"
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
                                                                                    "text": "AutomationCampaign",
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
                                    ], { partial: true, indexKey: 'id' }),
                                }
                            ]
                        }],
                    }],
                }],
            }],
        },
    },
    memberStatus: {
        Xpath: "//span[contains(@class,'uiPicklistLabel')]/span[(.)='Member Status']/../following-sibling::div//a[@class='select']",
        fieldDetails: {
            disposition: "Existing",
            text: "Status (status)",
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
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
                    "argument": comparisonUtils.addCompareOptions([
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
                                                "status"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=status"
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
                                                                    "text": "Sent",
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ]
        }],
    },
    exisitngMember: {
        Xpath: "//legend[(.)='Existing campaign member']/following-sibling::div/label/span[(.)='Keep existing Member Status']/../preceding-sibling::input",
        Xpath1: "//legend[(.)='Update existing campaign members?']/following-sibling::div/label/span[(.)='Keep member status']/../preceding-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Existing Member Status (existingMemberStatus)"
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
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
                    "argument": comparisonUtils.addCompareOptions([
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
                                                "existingMemberStatus"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=existingMemberStatus"
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
                                                                    "text": "Keep member status",
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ]
        }],
    },
    selectedNumber: {
        Xpath: "//div[contains(@class,'selectedNumber')]/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Selected Number (selectedNumber)",
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
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
                    "argument": comparisonUtils.addCompareOptions([
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
                                                "selectedNumber"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=selectedNumber"
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
                                                                    "text": "1 Contact Selected",
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ]
        }],
    },
    submit: {
        Xpath: "//span[@class=' label bBody' and (.)='Submit']",
        fieldDetails: {
            disposition: "Existing",
            text: "Submit (submit)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Submit button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Submit button'],
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