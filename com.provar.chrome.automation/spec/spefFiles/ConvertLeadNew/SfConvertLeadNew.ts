import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfConvertLeadNew = {
    leadViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Lead&noOverride=true&action=View',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Lead View screen',
        },
    },
    convertLeadPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Lead&action=Convert',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'SF Convert Lead screen',
        },
    },
    convert: {
        Xpath: "//div[(.)='Convert'] | //button[@name='Convert']",
        //Xpath: "//div[(.)='Convert']",
        fieldDetails: {
            disposition: "Existing",
            text: "Convert (Convert)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Convert button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Convert button'],
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
    accountName: {
        Xpath: "//label[contains((.),'Account Name')]/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Account Name (name)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "{AccountName}",
                    },
                },
            },
            assert: {
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
            set: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Lead Convert screen',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: /Set the Account Name field to AutomationAccount[a-zA-Z]{4}/,
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            },
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: {
                name: ['UiWithScreen'],
                title: ['On SF Lead Convert screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?object=Lead&action=Convert'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Account Name field to {AccountName}'],
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
                                                    "name"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3Dname"
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
                                                                        "text": /AutomationAccount[a-zA-Z]{4}/,
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
    },
    accountRecordType: {
        Xpath: "//div[@class='createPanelExpanded']//span[(.)='Record Type']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            text: "Account Record Type (recordTypeId)",
        },
        interactionParameters: {
            setByIndex: {
                interactionParameters: {
                    id: "Set By Index",
                    settings: {
                        value: "5",
                    },
                },
            },
            assert: {
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
            setByIndex: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set By Index the Account Record Type reference to 5',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            setByIndex: [{
                name: ['UiDoAction'],
                title: ['Set By Index the Account Record Type reference to 5'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=setByIndex'],
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
                                                    "recordTypeId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=recordTypeId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DrecordTypeId"
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
                                                                        "text": "Header Subheader and Right",
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
    },
    contact: {
        Xpath: "//div[@class='col1' and (.)='Contact']/following-sibling::div//label[(.)='Create New']/../../following-sibling::div//button",
    },
    lastName: {
        Xpath: "//label[contains((.),'Last Name')]/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Last Name (lastName)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "{LastName}",
                    },
                },
            },
            assert: {
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
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the Last Name field to AutomationContact[a-zA-Z]{4}/,
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Last Name field to {LastName}'],
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
                                                    "lastName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=lastName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DlastName"
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
                                                                        "text": /AutomationContact[a-zA-Z]{4}/,
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
    },
    contactRecordType: {
        Xpath: "//div[@class='createPanelExpanded']//span[(.)='Record Type']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Record Type (recordTypeId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Customer",
                    },
                },
            },
            assert: {
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
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Contact Record Type reference to Customer',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Contact Record Type reference to Customer'],
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
                                                    "recordTypeId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=recordTypeId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DrecordTypeId"
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
                                                                        "text": "Customer",
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
    },
    opportunity: {
        Xpath: "//div[@class='col1' and (.)='Opportunity']/following-sibling::div//label[(.)='Create New']/../../following-sibling::div//button",
    },
    opportunityName: {
        Xpath: "//label[contains((.),'Opportunity Name')]/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Opportunity Name (name)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "{OpportunityName}",
                    },
                },
            },
            assert: {
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
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the Opportunity Name field to AutomationOpportunity[a-zA-Z]{4}/,
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Opportunity Name field to {OpportunityName}'],
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
                                                    "name"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3Dname"
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
                                                                        "text": /AutomationOpportunity[a-zA-Z]{4}/,
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
    },
    recordOwner: {
        Xpath: "//label[contains((.),'Record Owner')]/following-sibling::div//span[@class='pillText']",
        fieldDetails: {
            disposition: "Existing",
            text: "Record Owner (ownerId)",
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
                                                "ownerId"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=ownerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DownerId"
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
                                                                    "text": /.*/,
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
    convertedStatus: {
        Xpath: "//span[contains((.),'Converted Status')]/following-sibling::div//a[@class='select']",
        fieldDetails: {
            disposition: "Existing",
            text: "Converted Status (status)",
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
                                                        "ui:locator?name=status&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3Dstatus"
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
                                                                    "text": "Qualified",
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
    opportunityCheckbox: {
        Xpath: "//div[@class='col1' and (.)='Opportunity']/following-sibling::div/div[@class='opportunityCheckbox']//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Do Not Create Opportunity (doNotCreateOpportunity)",
        },
        interactionParameters: {
            assert: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            check: {
                interactionParameters: {
                    id: "Check",
                },
            },
            uncheck: {
                interactionParameters: {
                    id: "Uncheck",
                },
            },
            toggle: {
                interactionParameters: {
                    id: "Toggle",
                },
            },
        },
        executionStatus: {
            assert: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            check: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Check the Do Not Create Opportunity checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            toggle: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Toggle the Do Not Create Opportunity checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            uncheck: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Uncheck the Do Not Create Opportunity checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertCheck: [{
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
                                                    "doNotCreateOpportunity"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=doNotCreateOpportunity&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DdoNotCreateOpportunity"
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
                                                                        "text": "true",
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
            assertUncheck: [{
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
                                                    "doNotCreateOpportunity"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=doNotCreateOpportunity&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DdoNotCreateOpportunity"
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
            check: [{
                name: ['UiDoAction'],
                title: ['Check the Do Not Create Opportunity checkbox'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=check'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
            uncheck: [{
                name: ['UiDoAction'],
                title: ['Uncheck the Do Not Create Opportunity checkbox'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=uncheck'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
            toggle: [{
                name: ['UiDoAction'],
                title: ['Toggle the Do Not Create Opportunity checkbox'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=toggle'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
        },
    },
    goToLeads: {
        Xpath: "//div[contains(@class,'modal-footer')]/button[(.)='Go to Leads']",
        fieldDetails: {
            disposition: "Existing",
            text: "Go To Leads (convertedGoToLeads)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Go To Leads button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Go To Leads button'],
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
    convertButton: {
        Xpath: "//div[contains(@class,'modal-footer')]//span[(.)='Convert']",
        fieldDetails: {
            disposition: "Existing",
            text: "Convert (submitConvert)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Convert button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Convert button'],
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