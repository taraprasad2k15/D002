import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const FlexiHRRelatedListSingle = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=main::0&flexiPage=Regression_Account_Record_Header_and_Right.*lightningComponent=force:relatedListSingleContain.*/,
            //sf:ui:target?flexiPath=main::0&flexiPage=Regression_Account_Record_Header_and_Right&recordType=0010N00005Q8bJfQAJ&lightningComponent=force:relatedListSingleContainer
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Related List (Account : Opportunities)  component in Account  (Header and Right)  view',
        },
    },
    newButton: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//a[normalize-space(.)='New']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Opportunities New (New)',
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
                "On SF Related List (Account : Opportunities) component in Account (Header and Right) view"
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
                                        /sf:ui:target.*flexiPage=Regression_Account_Record_Header_and_Right.*/
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
                                    "text": "On SF Related List (Account : Opportunities) component in Account (Header and Right) view",
                                    "class": [
                                        "value"
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
                                                "Click the Opportunities New button"
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
                                                                        "ui:locator?name=New&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DNew%26relationship%3DOpportunities"
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
                                                                    "text": "Click the Opportunities New button",
                                                                    "class": [
                                                                        "value"
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
            text: 'On SF Related List (Account : Opportunities) component in Account (Header and Right) view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Click the Opportunities New button",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
    },
    opportunityName: {
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Opportunity Name", FieldType.Text),
        xpathRL: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//span[@title='Opportunities']/../../../../../following-sibling::div//h3//a",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Opportunity Name (OPPORTUNITY_NAME)',
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'oppName',
                    }
                },
            },
            readAssert: {
                interactionParameters:
                {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true
                    },
                }
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
                "On SF Opportunity New screen"
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
                                    "target"
                                ],
                                "value": [
                                    {
                                        "class": [
                                            "uiTarget"
                                        ],
                                        "uri": [
                                            "sf:ui:target?object=Opportunity&action=New&noOverride=true"
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
                                        "text": "On SF Opportunity New screen",
                                        "class": [
                                            "value"
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
                                        "text": "opportunityId",
                                        "class": [
                                            "value"
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
                                                "Set the Opportunity Name field to oppName"
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
                                                                            "ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DName"
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
                                                                        "text": "oppName",
                                                                        "class": [
                                                                            "value"
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
                                                                        "text": "Set the Opportunity Name field to oppName",
                                                                        "class": [
                                                                            "value"
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
        testCaseXML1:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],

            "title": [
                "On SF Related List (Account : Opportunities) component in Account (Header and Right) view"
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
                                    "target"
                                ],
                                "value": [
                                    {
                                        "class": [
                                            "uiTarget"
                                        ],
                                        "uri": [
                                            "sf:ui:target?lightningComponent=force%3ArelatedListSingleContainer&recordType=Header+and+Right&flexiPage=Regression_Account_Record_Header_and_Right&flexiPath=main%3A%3A0"
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
                                        "text": "On SF Related List (Account : Opportunities) component in Account (Header and Right) view",
                                        "class": [
                                            "value"
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
                                                "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}"
                                            ],
                                            "arguments": [{
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
                                                                "locator"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "class": [
                                                                        "uiLocator"
                                                                    ],
                                                                    "uri": [
                                                                        "sf:ui:locator:row?table=Opportunities%2FOpportunitiesTable"
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
                                                                                        "OPPORTUNITY_NAME"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "rhs": [
                                                                        {
                                                                            "text": "oppName",
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
                                                                    "text": "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}",
                                                                    "class": [
                                                                        "value"
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
                                                                                                                "OPPORTUNITY_NAME"
                                                                                                            ],
                                                                                                            "fieldLocator": [
                                                                                                                {
                                                                                                                    "uri": [
                                                                                                                        "ui:locator?name=OPPORTUNITY_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.NAME%26relationship%3DOpportunities"
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
                                                                                                                                    "text": "oppName",
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
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Opportunity New screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Opportunity Name field to oppName",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
        executionStatus1: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Related List (Account : Opportunities) component in Account (Header and Right) view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}",
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
    },
    closeDate: {
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Close Date", FieldType.Text),
        xpathRL: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Close Date:']/following-sibling::div",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Close Date (OPPORTUNITY_CLOSE_DATE)',
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: '01/06/2020',
                    }
                },
            },
            readAssert: {
                interactionParameters:
                {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true
                    },
                }
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
                                value: 'Close Date',
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
        testCaseXML:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Set the Close Date field to 2020-06-01"
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
                                                "ui:locator?name=CloseDate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DCloseDate"
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
                                            "text": "1590969600000",
                                            "class": [
                                                "value"
                                            ],
                                            "valueClass": [
                                                "date"
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
                                            "text": "Set the Close Date field to 2020-06-01",
                                            "class": [
                                                "value"
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
        testCaseXML1:
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
                                                    "OPPORTUNITY_CLOSE_DATE"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=OPPORTUNITY_CLOSE_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.CLOSE_DATE%26relationship%3DOpportunities"
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
        testCaseXMLcolumn: [{
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
                                                    "OPPORTUNITY_CLOSE_DATE"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=OPPORTUNITY_CLOSE_DATE&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.CLOSE_DATE%26relationship%3DOpportunities"
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
            ],
        }],
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Close Date field to 2020-06-01",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        executionStatus1: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
    },
    stage: {
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Stage", FieldType.Picklist),
        xpathRL: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Stage:']/following-sibling::div",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Stage (OPPORTUNITY_STAGE_NAME)',
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: 'Qualification',
                    }
                },
            },
            readAssert: {
                interactionParameters:
                {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true
                    },
                }
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
                                value: 'Stage',
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
        testCaseXML:
            [{
                "apiId": [
                    "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
                ],
                "name": [
                    "UiDoAction"
                ],
                "title": [
                    "Set the Stage picklist to Qualification"
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
                                                "ui:locator?name=StageName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DStageName"
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
                                            "text": "Qualification",
                                            "class": [
                                                "value"
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
                                            "text": "Set the Stage picklist to Qualification",
                                            "class": [
                                                "value"
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
        testCaseXML1:
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
                                                        "OPPORTUNITY_STAGE_NAME"
                                                    ],
                                                    "fieldLocator": [
                                                        {
                                                            "uri": [
                                                                "ui:locator?name=OPPORTUNITY_STAGE_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.STAGE_NAME%26relationship%3DOpportunities"
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
        testCaseXMLcolumn: [{
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
                    argument: comparisonUtils.addCompareOptions( [
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
                                                "OPPORTUNITY_STAGE_NAME"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=OPPORTUNITY_STAGE_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.STAGE_NAME%26relationship%3DOpportunities"
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
                                                                    "text": "Stage",
                                                                    "class": [
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
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Stage picklist to Qualification",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        executionStatus1: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
    },
    amount: {
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Amount", FieldType.Text),
        xpathRL: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Amount:']/following-sibling::div",
        xpathRL1: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//div[@title='Amount:']/following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Amount (OPPORTUNITY_AMOUNT)',
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: 'Set',
                    settings: {
                        value: '23',
                    }
                },
            },
            readAssert: {
                interactionParameters:
                {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true
                    },
                }
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
                                value: 'Amount',
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
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Opportunity Edit screen"
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
                                    "target"
                                ],
                                "value": [
                                    {
                                        "class": [
                                            "uiTarget"
                                        ],
                                        "uri": [
                                            "sf:ui:target?object=Opportunity&action=Edit&noOverride=true"
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
                                        "text": "On SF Opportunity Edit screen",
                                        "class": [
                                            "value"
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
                                                "Set the Amount field to 23"
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
                                                                        "ui:locator?name=Amount&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26field%3DAmount"
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
                                                                    "text": "23",
                                                                    "class": [
                                                                        "value"
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
                                                                    "text": "Set the Amount field to 23",
                                                                    "class": [
                                                                        "value"
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
        testCaseXML1:
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
                                                    "OPPORTUNITY_AMOUNT"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=OPPORTUNITY_AMOUNT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.AMOUNT%26relationship%3DOpportunities"
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
        testCaseXML2: {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "title": [
                "On SF Related List (Account : Opportunities) component in Account (Header and Right) view"
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
                                    "target"
                                ],
                                "value": [
                                    {
                                        "class": [
                                            "uiTarget"
                                        ],
                                        "uri": [
                                            "sf:ui:target?lightningComponent=force%3ArelatedListSingleContainer&recordType=Header+and+Right&flexiPage=Regression_Account_Record_Header_and_Right&flexiPath=main%3A%3A0"
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
                                        "text": "On SF Related List (Account : Opportunities) component in Account (Header and Right) view",
                                        "class": [
                                            "value"
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
                                                "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}"
                                            ],
                                            "arguments": [{
                                                argument: comparisonUtils.addCompareOptions(   [
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
                                                                    "sf:ui:locator:row?table=Opportunities%2FOpportunitiesTable"
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
                                                                                    "OPPORTUNITY_NAME"
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ],
                                                                "rhs": [
                                                                    {
                                                                        "text": "oppName",
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
                                                                "text": "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}",
                                                                "class": [
                                                                    "value"
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
                                                                                                                "OPPORTUNITY_AMOUNT"
                                                                                                            ],
                                                                                                            "fieldLocator": [
                                                                                                                {
                                                                                                                    "uri": [
                                                                                                                        "ui:locator?name=OPPORTUNITY_AMOUNT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.AMOUNT%26relationship%3DOpportunities"
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
        testCaseXMLcolumn: [{
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
                                                    "OPPORTUNITY_AMOUNT"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=OPPORTUNITY_AMOUNT&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DOPPORTUNITY.AMOUNT%26relationship%3DOpportunities"
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
            ],
        }],
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Opportunity Edit screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Set the Amount field to 23",
                    executionStatus: "Executed",
                    successfulCount: 1,
                },
            ],
        },
        executionStatus1: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        executionStatus2: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Related List (Account : Opportunities) component in Account (Header and Right) view',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: "With Opportunities rows {OPPORTUNITY_NAME = \"oppName\"}",
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
    },

    saveButton: {
        xpath: "//button[@title='Save' or @name='SaveEdit'] | //input[@title='Save']",
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
                                            "ui:locator?name=save&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DOpportunity%26action%3Dsave"
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
    editButton: {
        xpath: "//li[@class='uiMenuItem']/a[@title='Edit']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Opportunities Edit (Edit)',
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
            text: 'Click the Opportunities Edit button',
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
                    "Click the Opportunities Edit button"
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
                                        "text": "Click the Opportunities Edit button",
                                        "class": [
                                            "value"
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
                                                            "ui:locator?name=Edit&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DEdit%26relationship%3DOpportunities"
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
            text: 'Opportunities Delete (Delete)',
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
                                                            "ui:locator?name=Delete&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DDelete%26relationship%3DOpportunities"
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
            text: 'Click and Cancel the Opportunities Delete button',
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
                    "Click and Cancel the Opportunities Delete button"
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
                                        "text": "Click and Cancel the Opportunities Delete button",
                                        "class": [
                                            "value"
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
    headerText: {
        xpath: "//flexipage-component2[contains(@data-component-id,'force_relatedListSingleContainer')]//a/span[contains(text(),'Opportunities')]/..",
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
            text: 'Opportunities (Opportunities)',
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
                                                "Opportunities"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Opportunities&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26relationship%3DOpportunities"
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
            text: 'Opportunities Go To List (GoToList)',
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Click the Opportunities Go To List button",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiDoAction"
            ],
            "name": [
                "UiDoAction"
            ],
            "title": [
                "Click the Opportunities Go To List button"
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
                                        "ui:locator?name=GoToList&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26action%3DGoToList%26relationship%3DOpportunities"
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
                                    "text": "Click the Opportunities Go To List button",
                                    "class": [
                                        "value"
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