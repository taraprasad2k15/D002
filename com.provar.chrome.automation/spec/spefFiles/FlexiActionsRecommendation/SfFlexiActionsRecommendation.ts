import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiActionsRecommendation = {
    ActionPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=sidebar::0&flexiPage=Custom_Page_3&recordType=.*&lightningComponent=lbpm:actionList/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Guided Action List  component in Provar Custom Obj  view',
        },
    },
    EventPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Provar_Custom_Obj__c&quickAction=NewEvent&recordType=Custom+Page+3&action=QuickAction',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Provar_Custom_Obj__c NewEvent publisher action screen',
        },
    },
    contactLookupPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=Contact',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact Lookup Screen',
        },
    },
    NewCaseViewPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=QuickAction&object=Provar_Custom_Obj__c&quickAction=NewCase&recordType=Custom+Page+3',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Provar_Custom_Obj__c NewCase publisher action screen',
        },
    },
    newEvent: {
        Xpath: "//button//span[(.)='New Event']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Flow (openActionButton)',
        },
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Flow link',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Flow link'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=action'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        executionStatusClick: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Guided Action List component in Provar Custom Obj view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: "With Actions List {openActionButton = \"New Event\"}",
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Flow link',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXMLClick: {
            name: ['UiWithScreen'],
            title: ['On SF Guided Action List component in Provar Custom Obj view'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{}],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: ['With Actions List {openActionButton = \"New Event\"}'],
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
                                                    "sf:ui:locator:row?table=actionsBlock%2FactionsTable"
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
                                                "text": "With Actions List {openActionButton = \"New Event\"}",
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
                                                                    "openActionButton"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "rhs": [
                                                    {
                                                        "text": "New Event",
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
                                            title: ['Click the Flow link'],
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
        executionStatusAssert: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: "With Actions List {openActionButton = \"New Event\"}",
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
        testCaseXMLAssert: [{
            name: ['UiWithRow'],
            title: ['With Actions List {openActionButton = \"New Event\"}'],
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
                                    "sf:ui:locator:row?table=actionsBlock%2FactionsTable"
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
                                "text": "With Actions List {openActionButton = \"New Event\"}",
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
                                                    "openActionButton"
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "rhs": [
                                    {
                                        "text": "New Event",
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
                        apiCall:
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
                                        argument: comparisonUtils.addCompareOptions([
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
                                                                    "openActionButton"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=openActionButton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DopenActionButton"
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
                                                                                        "text": "New Event",
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
    },
    subject: {
        Xpath: "//label[normalize-space(.)='Subject']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Email",
                    },
                },
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Provar Custom Obj (Custom Page 3) Publisher Action New Event screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Subject field to Email',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Provar Custom Obj (Custom Page 3) Publisher Action New Event screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Provar_Custom_Obj__c&quickAction=NewEvent&recordType=Custom+Page+3&action=QuickAction'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set the Subject field to Email'],
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
    },
    description: {
        Xpath: "//label[normalize-space(.)='Description']/following-sibling::textarea | //label[(.)='Description']/following-sibling::div/textarea",
        fieldDetails: {
            disposition: "Existing",
            text: "Description (Description)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Description for the QA via Automation Script",
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Description field to Description for the QA via Automation Script',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Description field to Description for the QA via Automation Script'],
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
    startDate: {
        Xpath: "//legend[normalize-space(.)='*Start']/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Start (StartDateTime)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "20-Aug-2020 00:00",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Start field to 20-Aug-2020 00:00',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Start field to 20-Aug-2020 00:00'],
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
    endDate: {
        Xpath: "//legend[normalize-space(.)='*End']/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "End (EndDateTime)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "02-Sep-2020 00:00",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the End field to 02-Sep-2020 00:00',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the End field to 02-Sep-2020 00:00'],
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
    relatedTo: {
        Xpath: "//div[contains(@class,'modal-body')]//span[(.)='Related To']/../following-sibling::div//ul/li/a",
        XpathProvar: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//*[contains(@class, 'forceQuickActionLayout') or @class='bottomBar']//*[((self::label and (contains(@class,'uiLabel') or contains(@class,'slds-form-element__label')) and not(contains(@class, 'hide '))) or (self::span and (contains(@class,'inputLabel') or contains(@class,'slds-form-element__label'))) or (self::div and contains(@class,'test-id__field-label-container')) or (self::lightning-grouped-combobox and contains(@class, 'forceTextEnumLookup')) or (self::div and contains(@class, 'lightningInputRichText'))) and (.//text()='Related To')]/ancestor::div[1]//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Related To (WhatId)",
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
                    argument: comparisonUtils.addCompareOptions([
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
                                                "WhatId"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=WhatId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhatId"
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
    },
    contactName: {
        Xpath: "//label[(.)='Name']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        interactionParameters: {
            lookup: {
                interactionParameters: {
                    id: 'SF Lookup',
                    settings: {
                        value: '{LastName}',
                    },
                },
            },
        },
        executionStatus: {
            lookup: [{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": /Lookup the Name reference to AutomationContact.*/,
                "executionStatus": "Executed",
                "successfulCount": 1,
            },
            {
                "name": "UiWithScreen",
                "type": "Icon-ExecutingPaused",
                "text": "On SF Contact Lookup screen",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": /Set the Search text to AutomationContact.*/,
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
            }],
        },
        testCaseXML: [{
            "title": [
                "Lookup the Name reference to {LastName}"
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
                                            "ui:locator?name=WhoId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEvent%26field%3DWhoId"
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
                                            "variable"
                                        ],
                                        "path": [
                                            {
                                                "element": [
                                                    "LastName"
                                                ]
                                            }
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
                                        "text": "Lookup the Name reference to {LastName}",
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
                "On SF Contact Lookup screen"
            ],
            "arguments": [
                {
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
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?lookup=Contact"
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
                                    "text": "On SF Contact Lookup screen",
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
                                               "Set the Search text to {LastName}"
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
                                                                            "variable"
                                                                        ],
                                                                        "path": [
                                                                            {
                                                                                "element": [
                                                                                    "LastName"
                                                                                ]
                                                                            }
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
                                                                        "text": "Set the Search text to {LastName}",
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
        }]
    },
    contactID: {
        Xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Name (Name)',
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Name button',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
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
    saveButton: {
        Xpath: "//div/button[normalize-space(.)='Save']",
        XpathQA: "//button[(.)='Cancel']/following-sibling::button[(.)='Save']",
        XpathProvar: "//*[contains(@class, 'active') and ( (self::div and contains(@class, 'oneContent')) or (self::section and contains(@class, 'oneConsoleTab') and ancestor::div[contains(@class, 'active ') and contains(@class, ' oneWorkspace')]) )]//div[contains(@class, 'forceActionsContainer') and contains(@class, 'uiTabset')]//section[contains(@class, 'active') and contains(@class, 'uiTab')]//div[contains(@class,'container') and contains(@class, 'activeState')]//div[contains(@class, 'bottomBar') or contains(@class, 'slds-modal__footer')]//button[contains(@class, 'publisherShareButton')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Create (publishersharebutton)",
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
    cancelButton: {
        Xpath: "//button[contains(@class,'publisherCancelButton')]/span[(.)='Cancel']",
        fieldDetails: {
            disposition: "Existing",
            text: "Create (publishersCancelButton)",
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Cancel button',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
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
    },
    addButton: {
        Xpath: "//div[@class='slds-tabs_default__content slds-show']/button[(.)='Add']",
        fieldDetails: {
            disposition: "Existing",
            text: "Add (addButton)",
        },
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Guided Action List component in Provar Custom Obj view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Add button',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Guided Action List component in Provar Custom Obj view'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{}],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Click the Add button'],
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
        executionStatusAssert: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Guided Action List component in Provar Custom Obj view',
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
        testCaseXMLAssert: {
            name: ['UiWithScreen'],
            title: ['On SF Guided Action List component in Provar Custom Obj view'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{}],
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
                                    argument: comparisonUtils.addCompareOptions([
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
                                                                "addButton"
                                                            ],
                                                            "fieldLocator": [
                                                                {
                                                                    "uri": [
                                                                        "ui:locator?name=addButton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DaddButton"
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
                                                                                    "text": "Add",
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
    newCase: {
        Xpath: "//div[(.)='New Case' and contains(@class, 'lookup')]",
    },
    contactNameQA: {
        Xpath: "//span[normalize-space(.)='Contact Name']/../following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Name (ContactId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'AutomationContact',
                    },
                },
            },
        },
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": 'Set the Contact Name reference to AutomationContact',
            "executionStatus": "Executed",
            "successfulCount": 1,
            "failureCount": 0
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Contact Name reference to AutomationContact'],
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
    status: {
        Xpath: "//span[normalize-space(.)='Status']/../following-sibling::div//a",
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Closed',
                    },
                },
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Provar Custom Obj (Custom Page 3) Publisher Action New Case screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Status picklist to Closed',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Provar Custom Obj (Custom Page 3) Publisher Action New Case screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Provar_Custom_Obj__c&quickAction=NewCase&recordType=Custom+Page+3&action=QuickAction'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set the Status picklist to Closed'],
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
    },
    subjectQA: {
        Xpath: "//span[normalize-space(.)='Subject']/../following-sibling::input",
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Subject for the Automation Script New Case QA',
                    },
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Subject field to Subject for the Automation Script New Case QA',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Subject field to Subject for the Automation Script New Case QA'],
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
    descriptionQA: {
        Xpath: "//label[normalize-space(.)='Description']/following-sibling::textarea",
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Description for the Automation Script New Case Quick Action',
                    },
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Description field to Description for the Automation Script New Case Quick Action',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Description field to Description for the Automation Script New Case Quick Action'],
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
    statusField: {
        disposition: 'Existing',
        text: 'Status (Status)',
    },
    subjectField: {
        disposition: 'Existing',
        text: 'Subject (Subject)',
    },
    descriptionField: {
        disposition: 'Existing',
        text: 'Description (Description)',
    },
    viewAction: {
        XpathDrop: "//button//span[contains((.),'Log a Call')]/../../following-sibling::div//button",
        Xpath: "//button//span[contains((.),'Log a Call')]/../../following-sibling::div//button/following-sibling::div//span[(.)='View Action']",
        fieldDetails: {
            disposition: "Existing",
            text: "View Action (openAction)",
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Guided Action List component in Provar Custom Obj view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: "With Actions List {openActionButton = \"Log a Call\"}",
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the View Action button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Guided Action List component in Provar Custom Obj view'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{}],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: ['With Actions List {openActionButton = \"Log a Call\"}'],
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
                                                    "sf:ui:locator:row?table=actionsBlock%2FactionsTable"
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
                                                "text": "With Actions List {openActionButton = \"Log a Call\"}",
                                                "class": [
                                                    "value"
                                                ],
                                                "valueClass": [
                                                    "string"
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
                                            title: ['Click the View Action button'],
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
    logAcall: {
        Xpath: "//button//span[contains((.),'Log a Call')]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Flow (openActionButton)',
        },
        interactionParameters: {
            id: 'Read/Assert',
            settings: {
                extractValue: true,
                assertValue: true,
            },
        },
        executionStatus: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: "With Actions List {openActionButton = \"Log a Call\"}",
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
            title: ['With Actions List {openActionButton = \"Log a Call\"}'],
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
                                    "sf:ui:locator:row?table=actionsBlock%2FactionsTable"
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
                                "text": "With Actions List {openActionButton = \"Log a Call\"}",
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
                                                    "openActionButton"
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "rhs": [
                                    {
                                        "text": "Log a Call",
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
                        apiCall:
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
                                        argument: comparisonUtils.addCompareOptions([
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
                                                                    "openActionButton"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=openActionButton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DopenActionButton"
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
                                                                                        "text": "Log a Call",
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
    },
    remove: {
        XpathDrop: "//button//span[contains((.),'Log a Call')]/../../following-sibling::div//button",
        Xpath: "//button//span[contains((.),'Log a Call')]/../../following-sibling::div//button/following-sibling::div//span[(.)='Remove']",
        fieldDetails: {
            disposition: "Existing",
            text: "Remove (removeAction)",
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Remove button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Remove button'],
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
    actionHistoryState: {
        Xpath: "//span[normalize-space(.)='Started']",
        fieldDetails: {
            disposition: "Existing",
            text: "Action State (actionHistoryState)",
        },
        executionStatus:[{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With History List.*/,
            executionStatus: "Executing",
            children: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
            }],
        }],
        testCaseXML: [{
            name: ['UiWithRow'],
            title: [/With History List.*/],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall:
                            [{
                                "title": [
                                    "UI Assert"
                                ],
                            }],
                    }],
                }],
            }],
        }],
    },
    actionHistoryLoggedTime: {
        Xpath: "(//div[contains(@class,'active') and contains(@class,'oneContent')]//span[contains(@class,'actionHistoryLoggedTime')]/lightning-formatted-date-time)[1]",
        fieldDetails: {
            disposition: "Existing",
            text: "Action Logged Time (actionHistoryLoggedTime)",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
        testCaseXML: [{
            title: ['UI Assert']
        }],
    },
    actionHistoryDefinitionLabel: {
        Xpath: "//span[normalize-space(.)='*Log a Call' and contains(@class,'History')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Action Label (actionHistoryDefinitionLabel)",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
        testCaseXML: [{
            title: ['UI Assert']
        }],
    },
    actionHistoryUser: {
        Xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//li[1]/span[contains(@class,'actionHistoryUser')]",
        fieldDetails: {
            disposition: "Existing",
            text: "Action User (actionHistoryUser)",
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
        testCaseXML: [{
            title: ['UI Assert']
        }],
    },

}