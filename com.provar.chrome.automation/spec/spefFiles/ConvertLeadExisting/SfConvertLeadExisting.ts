import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfConvertLeadExisting = {
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
    lookupPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=Contact',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact Lookup Screen',
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
    chosenContact: {
        Xpath: "//span[(.)='0 Contact Matches detected']",
        fieldDetails: {
            disposition: "Existing",
            text: "Chosen Contact (chosenContact)",
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: {
            assertI: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingPaused',
                text: 'On SF Lead Convert screen',
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
        },
        testCaseXML: {
            assertI: {
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
                                                                    "chosenContact"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=chosenContact&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DchosenContact"
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
                                                                                        "text": "0 Contact Matches detected",
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
    },
    chosenOpportunity: {
        Xpath: "//span[(.)='To find opportunity, choose an existing account']",
        fieldDetails: {
            disposition: "Existing",
            text: "Chosen Opportunity (chosenOpportunity)",
        },
        interactionParameters: {
            id: "Read/Assert",
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: {
            assertI: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertI: [{
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
                                                    "chosenOpportunity"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=chosenOpportunity&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DchosenOpportunity"
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
                                                                        "text": "To find opportunity, choose an existing account",
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
    accountRadio: {
        Xpath: "//div[contains(@class,'expand')]//label[(.)='Choose Existing']/span[contains(@class,'radio')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Choose Existing Account (chooseExistingAccount)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Check the Choose Existing Account radio',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Check the Choose Existing Account radio'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=check'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    accountSearch: {
        Xpath: "//input[contains(@class,'lookup') and @title='Search for matching accounts']",
        fieldDetails: {
            disposition: "Existing",
            text: "Account Search (parentId)",
        },
        interactionParameters: {
            id: "Set",
            settings: {
                value: "{AccountName}",
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: /Set the Account Search reference to AutomationAccount[a-zA-Z]{4}/,
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Account Search reference to {AccountName}'],
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
    contactRadio: {
        Xpath: "//div[@class='col1' and (.)='Contact']/following-sibling::div[@class='col4']//label[contains(@class,'radio')]/span[contains(@class,'radio')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Choose Existing Contact (chooseExistingContact)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Check the Choose Existing Contact radio',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Check the Choose Existing Contact radio'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=check'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    contactSearch: {
        Xpath: "//input[contains(@class,'lookup') and @title='Search for matching contacts']",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Search (contactId)",
        },
        interactionParameters: {
            sfLookup: {
                interactionParameters: {
                    id: "SF Lookup",
                    settings: {
                        value: "{LastName}",
                    },
                },
            },
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "{ContactName}",
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: /Lookup the Contact Search reference to AutomationContact[a-zA-Z]{4}/,
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
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Lookup the Contact Search reference to {LastName}'],
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
        executionStatusSet: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: /Set the Contact Search reference to AutomationContact[a-zA-Z]{4}/,
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLSet: [{
            name: ['UiDoAction'],
            title: ['Set the Contact Search reference to {ContactName}'],
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
    contactName: {
        Xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
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
    contactCheckbox: {
        Xpath: "//div[contains(@class,'expand')]//div[@class='col4']//div[contains(@class,'checkbox')]/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Update Lead Source (updateLeadSource)",
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
                text: 'Check the Update Lead Source checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            toggle: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Toggle the Update Lead Source checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            uncheck: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Uncheck the Update Lead Source checkbox',
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
                                                    "updateLeadSource"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=updateLeadSource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DupdateLeadSource"
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
                                                    "updateLeadSource"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=updateLeadSource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DupdateLeadSource"
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
                title: ['Check the Update Lead Source checkbox'],
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
                title: ['Uncheck the Update Lead Source checkbox'],
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
                title: ['Toggle the Update Lead Source checkbox'],
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
    opportunityRadio: {
        Xpath: "//div[@class='col1' and (.)='Opportunity']/following-sibling::div[@class='col4']//label[contains(@class,'radio')]/span[(.)='Choose Existing']/preceding-sibling::span[contains(@class,'radio')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Choose Existing Opportunity (chooseExistingOpportunity)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Check the Choose Existing Opportunity radio',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Check the Choose Existing Opportunity radio'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=check'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    opportunityAccName: {
        Xpath: "//div[contains(@class,'expand')]//div[@class='col4']//div[@class='topSection']/ul/li//div[(.)='Account Name:']/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Account Name (Opportunity_AccountId)",
        },
        interactionParameters: {
            assertRow: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            assertColumn: {
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
                                value: 'Account Name',
                                caseSensitive: true,
                                normalise: true,
                            },
                        },
                    },
                },
            },
        },
        executionStatus: {
            row: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With Existing Opportunity Table {Opportunity_Name = "AutomationOpportunity[a-zA-Z]{4}"}/,
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
            column: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertRow: [{
                name: ['UiWithRow'],
                title: [/With Existing Opportunity Table {Opportunity_Name = "AutomationOpportunity[a-zA-Z]{4}"}/],
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
                                        "sf:ui:locator:row?table=ConvertLeadBlock%2FOpportunityBlock%2FChooseExistingOpportunityBlock%2FopportunityTable"
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
                                    "text": /With Existing Opportunity Table {Opportunity_Name = "AutomationOpportunity[a-zA-Z]{4}"}/,
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
                                                        "Opportunity_Name"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "rhs": [
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
                                }
                            ]
                        },
                    ], { partial: true, indexKey: 'id' }),
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
                                                                    "Opportunity_AccountId"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=Opportunity_AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAccountId"
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
                        }],
                    }],
                }],
            }],
            assertColumn: [{
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
                                                    "Opportunity_AccountId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAccountId"
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
                                                                        "text": "Account Name",
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
                        ], { partial: true, indexKey: 'id' }),
                    }
                ]
            }],
        },
    },
    opportunityDate: {
        Xpath: "//div[contains(@class,'expand')]//div[@class='col4']//div[@class='topSection']/ul/li//div[(.)='Close Date:']/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Close Date (Opportunity_CloseDate)",
        },
        interactionParameters: {
            assertRow: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            assertColumn: {
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
                                value: 'Close Date',
                                caseSensitive: true,
                                normalise: true,
                            },
                        },
                    },
                },
            },
        },
        executionStatus: {
            row: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            column: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertRow: [{
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
                                                    "Opportunity_CloseDate"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_CloseDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DCloseDate"
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
                                                                        "text": "31/10/2020",
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
            assertColumn: [{
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
                                                    "Opportunity_CloseDate"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_CloseDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DCloseDate"
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
                                                                        "text": "Close Date",
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
                        ], { partial: true, indexKey: 'id' }),
                    }
                ]
            }],
        },
    },
    opportunityAmount: {
        Xpath: "//div[contains(@class,'expand')]//div[@class='col4']//div[@class='topSection']/ul/li//div[(.)='Amount:']/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Amount (Opportunity_Amount)",
        },
        interactionParameters: {
            assertRow: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            assertColumn: {
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
                                value: 'Amount',
                                caseSensitive: true,
                                normalise: true,
                            },
                        },
                    },
                },
            },
        },
        executionStatus: {
            row: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            column: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertRow: [{
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
                                                    "Opportunity_Amount"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_Amount&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAmount"
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
            assertColumn: [{
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
                                                    "Opportunity_Amount"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_Amount&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAmount"
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
                                                                        "text": "Amount",
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
                        ], { partial: true, indexKey: 'id' }),
                    }
                ]
            }],
        },
    },
    opportunityOwner: {
        Xpath: "//div[contains(@class,'expand')]//div[@class='col4']//div[@class='topSection']/ul/li//div[(.)='Opportunity Owner:']/following-sibling::div/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Opportunity Owner (Opportunity_OwnerId)",
        },
        interactionParameters: {
            assertRow: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            assertColumn: {
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
                                value: 'Opportunity Owner',
                                caseSensitive: true,
                                normalise: true,
                            },
                        },
                    },
                },
            },
        },
        executionStatus: {
            row: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            column: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            assertRow: [{
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
                                                    "Opportunity_OwnerId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_OwnerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DOwnerId"
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
            assertColumn: [{
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
                                                    "Opportunity_OwnerId"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Opportunity_OwnerId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DOwnerId"
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
                                                                        "text": "Opportunity Owner",
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
                        ], { partial: true, indexKey: 'id' }),
                    }
                ]
            }],
        },
    },
    selectOpp: {
        Xpath: "//div[@class='col1' and (.)='Opportunity']/following-sibling::div[@class='col4']//div[@class='topSection']/div[@class='radioButton']//span[@class='slds-radio_faux']",
        fieldDetails: {
            disposition: "Existing",
            text: "Select Opportunity (selectOpportunity)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Check the Select Opportunity radio',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Check the Select Opportunity radio'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=check'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
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
    pageErrors: {
        Xpath: "//div[@class='errorMessage']",
        fieldDetails: {
            disposition: "Existing",
            text: "pageErrors",
        },
        interactionParameters: {
            id: 'Read/Assert',
			settings: {
				expectedPageMessage: {
					value: 'The lead can\'t be converted because the selected contact is not currently associated with any account. Please choose a different contact.',
					caseSensitive: true,
					normalise: true,	
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
                argument: comparisonUtils.addCompareOptions([{
                    id: ['pageAssertions'],
                    value: [{
                        uiPageAssertion: [{
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['pageMessages'],
                                    comparisonType: ['EqualTo'],
                                    listOperator: ['Contains'],
                                    normalize: ['true'],
                                    value: [{
                                        text: 'The lead can\'t be converted because the selected contact is not currently associated with any account. Please choose a different contact.',
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
}