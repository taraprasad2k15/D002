import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfCloneWithRelatedCamp = {
    campViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Campaign&noOverride=true&action=View',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Campaign View screen',
        },
    },
    campClonePSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Campaign&noOverride=true&action=Clone',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Campaign Clone screen',
        },
    },
    cloneWithRelatedPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Campaign&noOverride=true&action=DeepClone',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Campaign DeepClone screen',
        },
    },
    showMoreActions: {
        Xpath: "//li/a/div[(.)='New Lead']/../../following-sibling::li[contains(@class,'oneActionsDropDown')]//span[(.)='Show more actions']",
    },
    cloneWithRelated: {
        Xpath: "//a[@title='Clone with Related']/div[(.)='Clone with Related']",
        fieldDetails: {
            disposition: "Existing",
            text: "Clone with Related (DeepClone)",
        },
        executionStatus: {
            click: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Clone with Related button',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            click: [{
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
        },
    },
    campMemberStatus: {
        Xpath: "//input[@name='CampaignMemberStatus']/following-sibling::label/span[contains(@class,'label')]",
        XpathCheckbox: "//input[@name='CampaignMemberStatus']/following-sibling::label/span[contains(@class,'checkbox')]",
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
                text: 'On SF Campaign Clone with Related screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [
                    {
                        "name": "UiWithRow",
                        "type": "Icon-ExecutingPaused",
                        "text": /With.*/,
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
                title: ['On SF Campaign Clone with Related screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Campaign&noOverride=true&action=DeepClone'],
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
                                                    "text": /With.*/,
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
                                                            "text": "Campaign Member Status",
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
                                                            "ui:locator?name=itemToClone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaign%26field%3DitemToClone"
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
                                                                        "text": "Campaign Member Status",
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
        Xpath: "//legend[(.)='Select records to clone with this campaign.']",
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
                                                            "ui:locator?name=pageMessage&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaign%26field%3DpageMessage"
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
                                                                        "text": "Select records to clone with this campaign.",
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
    campName: {
        Xpath: "//span[(.)='Campaign Name']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Campaign Name (Name)",
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
                text: 'On SF Campaign Clone screen',
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
                title: ['On SF Campaign Clone screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Campaign&noOverride=true&action=Clone'],
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
                                                                            "ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCampaign%26field%3DName"
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
}