import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfAccountChangeOwner = {

    changeOwnerPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=ownershipTransfer&object=Account',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Account change owner screen',
        },
    },
    userLookupPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=User',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'User Lookup Screen',
        },
    },
    changeOwnerButton: {
        Xpath: "//lightning-button-menu[contains(@class,'slds-is-open')]//span[normalize-space()='Change Owner']",
        fieldDetails: {
            disposition: "Existing",
            text: "Change Owner (ChangeOwnerOne)",
        },
        executionStatus: {
            name: "UiWithScreen",
            type: "Icon-ExecutingPaused",
            text: "On SF Account (Default) View screen",
            executionStatus: "Executing",
            successfulCount: 0,
            children: [{
                name: "UiDoAction",
                type: "Icon-Successful",
                text: "Click the Change Owner button",
                executionStatus: "Executed",
                successfulCount: 1,
            }]
        },
        testCaseXML: {
            "title": [
                "On SF Account (Default) View screen"
            ],
            "arguments": [
                {
                    "argument": comparisonUtils.addCompareOptions([
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
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?object=Account&action=View&noOverride=true&recordType=Default"
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
                                    "text": "On SF Account (Default) View screen",
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
                        {
                            "id": [
                                "sfUiTargetObjectId"
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
                        }
                    ], { partial: true, indexKey: 'id' }),
                }
            ],
            "clauses": [{
                "clause": [{
                    "steps": [{
                        "apiCall": [{
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
        },
        executionStatus1: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Change Owner button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML1: [{
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
    },
    userLookup: {
        Xpath: "//input[contains(@class,'uiInput--lookup')]",
        XpathLookup: "//span[contains((.),'in People')]",
        Xpath1: "//span[contains((.),'Search Users')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Owner (newOwn)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Provar Admin",
                    },
                },
            },
            sfLookup: {
                interactionParameters: {
                    id: "SF Lookup",
                    settings: {
                        value: "Provar Admin",
                    },
                },
            },
        },
        executionStatus: {
            set: {
                "name": "UiWithScreen",
                "type": "Icon-ExecutingPaused",
                "text": "On SF Account Change Owner screen",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [{
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Set the Owner reference to Provar Admin",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                }]
            },
            sfLookup: [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Lookup the Owner reference to Provar Admin",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                },
                {
                    "name": "UiWithScreen",
                    "type": "Icon-ExecutingPaused",
                    "text": "On SF User Lookup screen",
                    "executionStatus": "Executing",
                    "successfulCount": 0,
                    "children": [
                        {
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Set the Search text to Provar Admin",
                            "executionStatus": "Executed",
                            "successfulCount": 1,
                        },
                        {
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Click the Go! button",
                            "executionStatus": "Executed",
                            "successfulCount": 1,
                        }
                    ]
                }
            ]
        },
        testCaseXML: {
            set: {
                name: ['UiWithScreen'],
                title: ['On SF Account Change Owner screen'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{
                            uri: ['sf:ui:target?action=ownershipTransfer&object=Account'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Set the Owner reference to Provar Admin'],
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
            sfLookup: [
                {
                    "title": [
                        "Lookup the Owner reference to Provar Admin"
                    ],
                    "arguments": [
                        {
                            "argument": comparisonUtils.addCompareOptions([
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
                                                "ui:locator?name=newOwn&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOwnerId"
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
                                                "ui:interaction?name=sfLookup"
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
                                            "text": "Lookup the Owner reference to Provar Admin",
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
                },
                {
                    "title": [
                        "On SF User Lookup screen"
                    ],
                    "arguments": [
                        {
                            "argument": comparisonUtils.addCompareOptions([
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
                                        "target"
                                    ],
                                    "value": [
                                        {
                                            "class": [
                                                "uiTarget"
                                            ],
                                            "uri": [
                                                "sf:ui:target?lookup=User"
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
                                            "text": "On SF User Lookup screen",
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
                                }
                            ], { partial: true, indexKey: 'id' }),
                        }
                    ],
                    "clauses": [
                        {
                            "clause": [
                                {
                                    "steps": [
                                        {
                                            "apiCall": [
                                                {
                                                    "title": [
                                                        "Set the Search text to Provar Admin"
                                                    ],
                                                    "arguments": [
                                                        {
                                                            "argument": comparisonUtils.addCompareOptions([
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
                                                                                "ui:locator?name=SearchName&path=searchFrame"
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
                                                                        "interactionDescription"
                                                                    ],
                                                                    "value": [
                                                                        {
                                                                            "text": "Set the Search text to Provar Admin",
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
                                                                        "afterWait"
                                                                    ]
                                                                },
                                                                {
                                                                    "id": [
                                                                        "autoRetry"
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
                                                                }
                                                            ], { partial: true, indexKey: 'id' }),
                                                        }
                                                    ],
                                                },
                                                {
                                                    "title": [
                                                        "Click the Go! button"
                                                    ],
                                                    "arguments": [
                                                        {
                                                            "argument": comparisonUtils.addCompareOptions([
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
                                                                                "ui:locator?name=go&path=searchFrame"
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
                                                                        "interactionDescription"
                                                                    ],
                                                                    "value": [
                                                                        {
                                                                            "text": "Click the Go! button",
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
                                                                        "afterWait"
                                                                    ]
                                                                },
                                                                {
                                                                    "id": [
                                                                        "autoRetry"
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
                                                                }
                                                            ], { partial: true, indexKey: 'id' }),
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
        },
    },
    checkbox: {
        Xpath: "//div[contains(@class,'uiInput--checkbox')]/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Transfer open opportunities (transOpenOpps)"
        },
        interactionParameters: {
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
            check: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Check the Transfer open opportunities checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            toggle: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Toggle the Transfer open opportunities checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            uncheck: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Uncheck the Transfer open opportunities checkbox',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            check: [{
                name: ['UiDoAction'],
                title: ['Check the Transfer open opportunities checkbox'],
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
                title: ['Uncheck the Transfer open opportunities checkbox'],
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
                title: ['Toggle the Transfer open opportunities checkbox'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['interaction'],
                        value: [{
                            uri: ['ui:interaction?name=toggle'],
                        }],
                    }], { partial: true, indexKey: 'id' }),
                }],
            }],
        }
    },
    submit: {
        Xpath: "//span[(.)='Submit']",
        fieldDetails: {
            disposition: "Existing",
            text: "Save (save)",
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Save button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
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
    cancel: {
        Xpath: "//span[(.)='Cancel']",
        fieldDetails: {
            disposition: "Existing",
            text: "Cancel (cancel)",
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Account Change Owner screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiDoAction",
                type: "Icon-Successful",
                text: "Click the Cancel button",
                executionStatus: "Executed",
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Account Change Owner screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?action=ownershipTransfer&object=Account'],
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
    ownerName: {
        Xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]//a",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (Name)",
        },
        parameters: {
            fieldParameters: {
                disposition: 'Existing',
                rowLocator: {
                    value: 1,
                    type: 'useRowIndex',
                },
            },
            interactionParameters: {
                id: 'Click',
            },
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