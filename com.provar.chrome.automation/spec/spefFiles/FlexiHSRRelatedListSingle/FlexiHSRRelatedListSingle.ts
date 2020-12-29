import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const FlexiHSRRelatedListSingle = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=main:'Related Single':0&flexiPage=Regression_Account_Record_Header_Subheader_and_Right.*lightningComponent=force:relatedListSingleContain.*/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Related List (Account : Contacts)  component in Account  (Header Subheader and Right)  view',
        },
    },
    PSIContactNew: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=New&object=Contact&recordType=Customer&noOverride=true',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact (Customer) New screen',
        },
    },
    PSIContactEdit: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=Edit&object=Contact&recordType=Customer&noOverride=true',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact (Customer) Edit screen',
        },
    },
   // dropdownXpath:"//div[@class='previewMode SMALL forceRelatedListPreview']//span[text()='Show More' or text()='Show more actions']|(//span[text()='Show Actions']/..)[last()]", 
   dropdownXpath: "//div[@class='previewMode SMALL forceRelatedListPreview']//span[text()='Show More' or text()='Show more actions']|(//span[text()='Show Actions']|//a[@title='Show 3 more actions']/lightning-icon)[last()]",
    newButton: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//a[normalize-space(.)='New']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts New Contact (NewContact)',
        },
        interactionParameters: {
            Click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
        },
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],

            "title": [
                "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view"
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
                                        /sf:ui:target.*flexiPage=Regression_Account_Record_Header_Subheader_and_Righ.*/
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
                                    "text": "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view",
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
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                                            ],
                                            "name": [
                                                "UiDoAction"
                                            ],

                                            "title": [
                                                "Click the Contacts New Contact button"
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
                                                                        "ui:locator?name=NewContact&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DNewContact%26relationship%3DContacts"
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
                                                                "hover"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "false",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "boolean"
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
                                                                    "text": "Click the Contacts New Contact button",
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

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        executionStatus: {

            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Click the Contacts New Contact button",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
    },
    recordType: {
        xpath: "//div[@class='changeRecordTypeRow']//span[normalize-space(.)='Customer']/../preceding-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Record Type (RecordType)',
        },
        interactionParameters: {
            Click: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Customer',
                    }
                },
            },
        },
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],

            "title": [
                "On SF Contact Record Type selection screen"
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
                                        "sf:ui:target?object=Contact&action=recordTypeNew"
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
                                    "text": "On SF Contact Record Type selection screen",
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
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                                            ],
                                            "name": [
                                                "UiDoAction"
                                            ],

                                            "title": [
                                                "Set the Record Type select to Customer"
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
                                                                        "ui:locator?name=RecordType&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3D%7BtargetUrl%3Aobject%7D%26field%3DRecordTypeId"
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
                                                        {
                                                            "id": [
                                                                "blur"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "false",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "boolean"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "pressEnter"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "false",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "boolean"
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
                                                                    "text": "Set the Record Type select to Customer",
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

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Contact Record Type selection screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Record Type select to Customer",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
    },
    nextButton: {
        xpath: "//span[normalize-space(.)='Next']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Continue (save)',
        },
        interactionParameters: {
            Click: {
                interactionParameters: {
                    id: 'Click'
                },
            },
        },
        testCaseXML:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Click the Continue button"
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
                                            "ui:locator?name=save&path=selectRecordType"
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
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click the Continue button",
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

            }],
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Continue button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
    },

    lastName: {
        xpath: "//span[normalize-space(.)='Last Name']/../following-sibling::input|//label[contains(text(),'Last Name')]/following-sibling::div/input",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Last Name (LastName)',
        },
        interactionParameters: {
            Set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Contact1',
                    }
                },
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Contact (Customer) New screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Last Name field to Contact1",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Contact (Customer) New screen"
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
                                        "sf:ui:target?object=Contact&action=New&noOverride=true&recordType=Customer"
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
                                    "text": "On SF Contact (Customer) New screen",
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
                                "sfUiTargetResultName"
                            ],
                            "value": [
                                {
                                    "text": "contactId",
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
                                "sfUiTargetResultScope"
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
                        }
                    ], { partial: true, indexKey: 'id' }),
                }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                                            ],
                                            "name": [
                                                "UiDoAction"
                                            ],

                                            "title": [
                                                "Set the Last Name field to Contact1"
                                            ],
                                            "arguments": [{
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
                                                                    "ui:locator?name=LastName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DLastName"
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
                                                                "text": "Contact1",
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
                                                            "blur"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "false",
                                                                "class": [
                                                                    "value"
                                                                ],
                                                                "valueClass": [
                                                                    "boolean"
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": [
                                                            "pressEnter"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "false",
                                                                "class": [
                                                                    "value"
                                                                ],
                                                                "valueClass": [
                                                                    "boolean"
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
                                                                "text": "Set the Last Name field to Contact1",
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
                                                    }], { partial: true, indexKey: 'id' }),
                                            }],

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
    email: {
        xpathEditScreen: "//span[normalize-space(.)='Email']/../following-sibling::input|//label[normalize-space()='Email']/following-sibling::div/input",
        xpathViewScreen: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Email:']/following-sibling::div",
        xpathViewScreen1: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Email:']/following-sibling::div/a",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Email (Email)',
        },
        fieldDetails1: {
            disposition: 'Existing',
            text: 'Email (CONTACT_EMAIL)',
        },
        interactionParameters: {
            Set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'mail@mail.com',
                    }
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            columnAssertion: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: false,
                        assertColumnAttributes: true,
                        extractColumnAttributes: true,
                        expectedAttributes: {
                            columnHeaderText: {
                                value: 'Email',
                                caseSensitive: true,
                                normalise: true,
                            },
                            columnVisible: {
                                value: true,
                            },
                        },
                    },
                }
            },
        },
        executionStatus1: [
            {
                name: "UiDoAction",
                type: "Icon-Successful",
                text: "Set the Email field to mail@mail.com",
                executionStatus: "Executed",
                successfulCount: 1,
            },
        ],
        testCaseXML1:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Set the Email field to mail@mail.com"
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
                                            "ui:locator?name=Email&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DEmail"
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
                                        "text": "mail@mail.com",
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
                                    "blur"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": [
                                    "pressEnter"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Set the Email field to mail@mail.com",
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
            }],
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML:
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
                                                    "CONTACT_EMAIL"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_EMAIL&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.EMAIL%26relationship%3DContacts"
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
                ],
            }],
        testCaseXMLcolumn:
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
                "arguments": [{
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
                                                    "CONTACT_EMAIL"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_EMAIL&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.EMAIL%26relationship%3DContacts"
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
                                                                        "text": "Email",
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
                    }],
            }],
    },
    title: {
        xpath: "//span[normalize-space(.)='Title']/../following-sibling::input|//label[normalize-space()='Title']/following-sibling::div/input",
        xpathViewScreen: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Title:']/following-sibling::div",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Title (Title)',
        },
        fieldDetails1: {
            disposition: 'Existing',
            text: 'Title (CONTACT_TITLE)',
        },
        interactionParameters: {
            Set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Title1',
                    }
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            columnAssertion: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: false,
                        assertColumnAttributes: true,
                        extractColumnAttributes: true,
                        expectedAttributes: {
                            columnHeaderText: {
                                value: 'Title',
                                caseSensitive: true,
                                normalise: true,
                            },
                            columnVisible: {
                                value: true,
                            },
                        },
                    },
                }
            },
        },
        executionStatus1: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Contact (Customer) Edit screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Title field to Title1",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        executionStatus2: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: "With Contacts rows {FULL_NAME = \"Contact1\"}",
                    executionStatus: "Executing",
                    successfulCount: 0,
                    children: [
                        {
                            name: 'UiAssert',
                            type: 'Icon-Successful',
                            text: 'UI Assert',
                            executionStatus: 'Executed',
                            successfulCount: 1,
                        },
                    ]
                }
            ]
        },
        testCaseXML1:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Contact (Customer) Edit screen"
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
                                        "sf:ui:target?object=Contact&action=Edit&noOverride=true&recordType=Customer"
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
                                    "text": "On SF Contact (Customer) Edit screen",
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                                            ],
                                            "name": [
                                                "UiDoAction"
                                            ],

                                            "title": [
                                                "Set the Title field to Title1"
                                            ],
                                            "arguments": [{
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
                                                                    "ui:locator?name=Title&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DTitle"
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
                                                                "text": "Title1",
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
                                                            "blur"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "false",
                                                                "class": [
                                                                    "value"
                                                                ],
                                                                "valueClass": [
                                                                    "boolean"
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": [
                                                            "pressEnter"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "false",
                                                                "class": [
                                                                    "value"
                                                                ],
                                                                "valueClass": [
                                                                    "boolean"
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
                                                                "text": "Set the Title field to Title1",
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
                                            }],

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        testCaseXML2:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view"
            ],
            "arguments": [
                {
                    argument: comparisonUtils.addCompareOptions(
                        [
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
                                        "text": "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view",
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
                        ], { partial: true, indexKey: 'id' }),
                }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "name": [
                                "substeps"
                            ],

                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
                                            ],
                                            "name": [
                                                "UiWithRow"
                                            ],
                                            "title": [
                                                "With Contacts rows {FULL_NAME = \"Contact1\"}"
                                            ],
                                            "arguments": [{
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
                                                            "locator"
                                                        ],
                                                        "value": [
                                                            {
                                                                "class": [
                                                                    "uiLocator"
                                                                ],
                                                                "uri": [
                                                                    "sf:ui:locator:row?table=Contacts%2FContactsTable"
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
                                                                                    "FULL_NAME"
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ],
                                                                "rhs": [
                                                                    {
                                                                        "text": "Contact1",
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
                                                    {
                                                        "id": [
                                                            "locatorDescription"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "With Contacts rows {FULL_NAME = \"Contact1\"}",
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
                                                            "failIfNotFound"
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
                                                    },
                                                    {
                                                        "id": [
                                                            "debugRowLocator"
                                                        ]
                                                    },
                                                    {
                                                        "id": [
                                                            "resultName"
                                                        ],
                                                        "value": [
                                                            {
                                                                "text": "Row",
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
                                                                "text": "Local",
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
                                            }],
                                            "clauses": [
                                                {
                                                    "clause": [
                                                        {
                                                            "name": [
                                                                "substeps"
                                                            ],

                                                            "steps": [
                                                                {
                                                                    "apiCall": [
                                                                        {
                                                                            "apiId": [
                                                                                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
                                                                            ],
                                                                            "name": [
                                                                                "UiAssert"
                                                                            ],
                                                                            "title": [
                                                                                "UI Assert"
                                                                            ],
                                                                            "arguments": [{
                                                                                argument: comparisonUtils.addCompareOptions(
                                                                                    [
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
                                                                                                                "CONTACT_TITLE"
                                                                                                            ],
                                                                                                            "fieldLocator": [
                                                                                                                {
                                                                                                                    "uri": [
                                                                                                                        "ui:locator?name=CONTACT_TITLE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.TITLE%26relationship%3DContacts"
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
                                                                                                                                    "text": "Title1",
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
                                                                            }],


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
                        }
                    ]
                }
            ]
        },
        testCaseXML:
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
                                                    "CONTACT_TITLE"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_TITLE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.TITLE%26relationship%3DContacts"
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
                ],
            }],
            testCaseXMLcolumn:
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
                                                    "CONTACT_TITLE"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_TITLE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.TITLE%26relationship%3DContacts"
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
                                                                        "text": "Title",
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
                ],
            }],
    },
    phone: {
        xpathEditScreen: "//span[normalize-space(.)='Phone']/../following-sibling::input|//label[normalize-space()='Phone']/following-sibling::div/input",
        xpathViewScreen: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Phone:']/following-sibling::div",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Phone (Phone)',
        },
        fieldDetails1: {
            disposition: 'Existing',
            text: 'Phone (CONTACT_PHONE1)',
        },
        interactionParameters: {
            Set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: '123456789',
                    }
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            },
            columnAssertion: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: false,
                        assertColumnAttributes: true,
                        extractColumnAttributes: true,
                        expectedAttributes: {
                            columnHeaderText: {
                                value: 'Phone',
                                caseSensitive: true,
                                normalise: true,
                            },
                            columnVisible: {
                                value: true,
                            },
                        },
                    },
                }
            },
        },

        executionStatus1: [
            {
                name: "UiDoAction",
                type: "Icon-Successful",
                text: "Set the Phone field to 123456789",
                executionStatus: "Executed",
                successfulCount: 1,
            },
        ],
        testCaseXML1:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Set the Phone field to 123456789"
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
                                            "ui:locator?name=Phone&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DPhone"
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
                                        "text": "123456789",
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
                                    "blur"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": [
                                    "pressEnter"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Set the Phone field to 123456789",
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
            }],
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML:
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
                                                    "CONTACT_PHONE1"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_PHONE1&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.PHONE1%26relationship%3DContacts"
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
                ],
            }],
        testCaseXMLcolumn:
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
                                                    "CONTACT_PHONE1"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=CONTACT_PHONE1&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCONTACT.PHONE1%26relationship%3DContacts"
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
                                                                        "text": "Phone",
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
                ],
            }],
    },
    saveButton: {
        xpath: "//button/span[normalize-space(.)='Save']|//button[@name='SaveEdit']",
        interactionParameters: {
            Click: {
                interactionParameters: {
                    id: 'Click'
                },
            },
        },
        testCaseXML:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Click the Save button"
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
                                            "ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3Dsave"
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
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click the Save button",
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

            }],
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Save button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
    },
    contactName: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//span[@title='Contacts']/../../../../../following-sibling::div//h3//a",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contact Name (FULL_NAME)',
        },
        interactionParameters: {
            Click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus: {

            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "text": "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view",
            "executionStatus": "Executing",
            "successfulCount": 0,
            "children": [
                {
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": "With Contacts rows {FULL_NAME = \"Contact1\"}",
                    "executionStatus": "Executing",
                    "successfulCount": 0,
                    "children": [
                        {
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Click the Contact Name field",
                            "executionStatus": "Executed",
                            "successfulCount": 1,
                        },
                    ]
                }
            ]
        },
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view"
            ],
            "arguments": [{
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
                                "text": "On SF Related List (Account : Contacts) component in Account (Header Subheader and Right) view",
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

                ], { partial: true, indexKey: 'id' }),
            }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "name": [
                                "substeps"
                            ],
                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
                                            ],
                                            "name": [
                                                "UiWithRow"
                                            ],
                                            "title": [
                                                "With Contacts rows {FULL_NAME = \"Contact1\"}"
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
                                                                "locator"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "class": [
                                                                        "uiLocator"
                                                                    ],
                                                                    "uri": [
                                                                        "sf:ui:locator:row?table=Contacts%2FContactsTable"
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
                                                                                        "FULL_NAME"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "rhs": [
                                                                        {
                                                                            "text": "Contact1",
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
                                                        {
                                                            "id": [
                                                                "locatorDescription"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "With Contacts rows {FULL_NAME = \"Contact1\"}",
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
                                                                "failIfNotFound"
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
                                                        },
                                                        {
                                                            "id": [
                                                                "debugRowLocator"
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "resultName"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "Row",
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
                                                                    "text": "Local",
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
                                                            "name": [
                                                                "substeps"
                                                            ],
                                                            "steps": [
                                                                {
                                                                    "apiCall": [
                                                                        {
                                                                            "apiId": [
                                                                                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                                                                            ],
                                                                            "name": [
                                                                                "UiDoAction"
                                                                            ],
                                                                            "title": [
                                                                                "Click the Contact Name field"
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
                                                                                                        /ui:locator\?name=FULL_NAME.*/
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
                                                                                                "hover"
                                                                                            ],
                                                                                            "value": [
                                                                                                {
                                                                                                    "text": "false",
                                                                                                    "class": [
                                                                                                        "value"
                                                                                                    ],
                                                                                                    "valueClass": [
                                                                                                        "boolean"
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
                                                                                                    "text": "Click the Contact Name field",
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
                        }
                    ]
                }
            ]
        },
    },
    editButton: {
        xpath: "//li[@class='uiMenuItem']/a[@title='Edit']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts Edit (Edit)',
        },
        interactionParameters: {
            click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus1: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Contacts Edit button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML1:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Click the Contacts Edit button"
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
                                            /ui:locator\?name=Edit.*/
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
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click the Contacts Edit button",
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
            }],
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML:
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
                                                    "Edit"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DEdit%26relationship%3DContacts"
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
                                                                        "text": "Edit",
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
                ],
            }],
    },
    deleteButton: {
        xpath: "//li[@class='uiMenuItem']/a[@title='Delete']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts Del (Delete)',
        },
        interactionParameters: {
            clickAndCancel: {
                interactionParameters: {
                    id: 'Click and Cancel',
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML:
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
                                                    "Delete"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Delete&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DDelete%26relationship%3DContacts"
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
                                                                        "text": "Delete",
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
                ],
            }],
        executionStatus1: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click and Cancel the Contacts Del button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML1:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Click and Cancel the Contacts Del button"
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
                                            /ui:locator\?name=Delete.*/
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
                                            "ui:interaction?name=actionWithCancel"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": [
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click and Cancel the Contacts Del button",
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
            }],
    },
    addToCampaignButton: {
        xpath: "(//li[@class='uiMenuItem']//a[@title='Add to Campaign'])[last()]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts Add to Campaign (AddCampaign)',
        },
        interactionParameters: {
            click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
            valueAssert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus1: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Click the Contacts Add to Campaign button',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML1:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Click the Contacts Add to Campaign button"
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
                                            /ui:locator\?name=AddCampaign.*/
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
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click the Contacts Add to Campaign button",
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
            }],
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML:
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
                                                    "AddCampaign"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=AddCampaign&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DAddCampaign%26relationship%3DContacts"
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
                                                                        "text": "Add to Campaign",
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
                ],
            }],
    },
    headerText: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//a/span[contains(text(),'Contacts')]/..",
        interactions: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    assertTableAttributes: true,
                    extractTableAttributes: true,
                    expectedAttributes: {
                        displayRowCount: {
                            value: 1,
                        },
                        totalRowCount: {
                            value: 1,
                        },
                    },
                }
            },
        },
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts (Contacts)',
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
                                                "Contacts"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Contacts&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26relationship%3DContacts"
                                                    ]
                                                }
                                            ],
                                            "attributeAssertions": [
                                                {
                                                    "uiAttributeAssertion": [
                                                        {
                                                            "attributeName": [
                                                                "displayRowCount"
                                                            ],
                                                            "comparisonType": [
                                                                "EqualTo"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "1",
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
                                                                "totalRowCount"
                                                            ],
                                                            "comparisonType": [
                                                                "EqualTo"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "1",
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
                                                                "value"
                                                            ],
                                                            "comparisonType": [
                                                                "None"
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ],
        }]
    },
    viewAll: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//span[text()='View All']",
        interactions: {
        },
        fieldDetails: {
            disposition: 'Existing',
            text: 'Contacts Go To List (GoToList)',
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Contacts Go To List button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML:  [{
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
            ],
            "name": [
                "UiDoAction"
            ],
            "title": [
                "Click the Contacts Go To List button"
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
                                            "ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DGoToList%26relationship%3DContacts"
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
                                    "hover"
                                ],
                                "value": [
                                    {
                                        "text": "false",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "boolean"
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
                                        "text": "Click the Contacts Go To List button",
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
        }],
    }
};