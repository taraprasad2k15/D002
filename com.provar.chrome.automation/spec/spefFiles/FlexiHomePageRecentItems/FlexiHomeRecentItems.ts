import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const FlexiHomeRecentItems = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Recent Items component in Custom Home Page',
        },
    },
    PSIUtilityBar: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Recent Items component in Flexipage Console UtilityBar',
        },
    },
    scaffold: {
        "itemDefinition": {
            "itemClass": "Scaffold",
            "disposition": "Existing",
            "itemLabel": "SF Lightning Console Application",
            "properties": [
                {
                    "name": "sfConsoleTabType",
                    "value": "FooterComponent"
                },
                {},
                {},
                {
                    "name": "sfConsoleFooterComponentName",
                    "value": /.*/
                },
            ],
        },
    },
    accountName: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]",
        // xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//a//span)[1]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Account Name (Account_Name)',
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
        testCaseXMLClick:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],

            "title": [
                "On SF Recent Items 1 component in Custom Home Page"
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
                                        "sf:ui:target?lightningComponent=flexipage%3ArecentItems&flexiPath=bottomRight%3A%3A1&flexiPage=Custom_Home_Page"
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
                                    "text": "On SF Recent Items 1 component in Custom Home Page",
                                    "class": [
                                        "value"
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
                                                "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
                                            ],
                                            "name": [
                                                "UiWithRow"
                                            ],

                                            "title": [
                                                /With Recent Item Rows {Account_Name = \"AccRI.*/
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
                                                                        "sf:ui:locator:row?table=RecentItems%2FrecentItemTable"
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
                                                                                        "Account_Name"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "rhs": [
                                                                        {
                                                                            "text": /AccRI.*/,
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
                                                                    "text": /With Recent Item Rows {Account_Name = \"AccRI.*/,
                                                                    "class": [
                                                                        "value"
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
                                                                                "Click the Account Name field"
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
                                                                                                        /ui:locator\?name=Account_Name.*/
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
                                                                                                    "text": "Click the Account Name field",
                                                                                                    "class": [
                                                                                                        "value"
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
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        executionStatusClick: {

            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Recent Items 1 component in Custom Home Page',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiWithRow",
                    type: "Icon-ExecutingPaused",
                    text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
                    executionStatus: "Executing",
                    successfulCount: 0,
                    children: [
                        {
                            name: "UiDoAction",
                            type: "Icon-Successful",
                            text: "Click the Account Name field",
                            executionStatus: "Executed",
                            successfulCount: 1,
                        }
                    ],
                }
            ],
        },
        testCaseXMLAssert:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
            ],
            "name": [
                "UiWithScreen"
            ],
            "testItemId": [
                "28"
            ],
            "title": [
                "On SF Recent Items 1 component in Custom Home Page"
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
                                        "sf:ui:target?lightningComponent=flexipage%3ArecentItems&flexiPath=bottomRight%3A%3A1&flexiPage=Custom_Home_Page"
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
                                    "text": "On SF Recent Items 1 component in Custom Home Page",
                                    "class": [
                                        "value"
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
                            "testItemId": [
                                "29"
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
                                            "testItemId": [
                                                "30"
                                            ],
                                            "title": [
                                                /With Recent Item Rows {Account_Name = \"AccRI.*/
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
                                                                        "sf:ui:locator:row?table=RecentItems%2FrecentItemTable"
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
                                                                                        "Account_Name"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "rhs": [
                                                                        {
                                                                            "text": /AccRI1.*/,
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
                                                                    "text": /With Recent Item Rows {Account_Name = \"AccRI.*/,
                                                                    "class": [
                                                                        "value"
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
                                                            "testItemId": [
                                                                "31"
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
                                                                            "testItemId": [
                                                                                "32"
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
                                                                                                                "Account_Name"
                                                                                                            ],
                                                                                                            "fieldLocator": [
                                                                                                                {
                                                                                                                    "uri": [
                                                                                                                        "ui:locator?name=Account_Name&path=RecentAccount"
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
                                                                                                                                    "text": /AccRI.*/,
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
                }
            ]
        },
        executionStatusAssert: {

            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF Recent Items 1 component in Custom Home Page',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        },
        testCaseXMLClickUB: [{
            "title": [
                /With Recent Item Rows {Account_Name = \"AccRI.*/
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
                                                        "Account_Name"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "rhs": [
                                        {
                                            "text": /AccRI.*/,
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
                                    "text": /With Recent Item Rows {Account_Name = \"AccRI.*/,
                                    "class": [
                                        "value"
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
                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "title": [
                                                "Click the Account Name field"
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
                                                                        /ui:locator\?name=Account_Name.*/
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
                                                                    "text": "Click the Account Name field",
                                                                    "class": [
                                                                        "value"
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
        }],
        executionStatusClickUB: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiDoAction",
                    type: "Icon-Successful",
                    text: "Click the Account Name field",
                    executionStatus: "Executed",
                }
            ],
        },
        ]
    },
    type: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Type']//following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Type (Account_Type)',
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
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
            ],
            "name": [
                "UiAssert"
            ],
            "testItemId": [
                "33"
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
                                                "Account_Type"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Account_Type&path=RecentAccount"
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
                                                                    "text": "Analyst",
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
            ]
        },
        executionStatus: {
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        }

    },
    phone: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Phone']//following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Phone (Account_Phone)',
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
        testCaseXML: {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
            ],
            "name": [
                "UiAssert"
            ],
            "testItemId": [
                "34"
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
                                                "Account_Phone"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Account_Phone&path=RecentAccount"
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
                                                                    "text": "9891989198",
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
            ]
        },
        executionStatus: {
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        }
    },
    website: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Website']//following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Website (Account_Website)',
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
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
            ],
            "name": [
                "UiAssert"
            ],
            "testItemId": [
                "35"
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
                                                "Account_Website"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Account_Website&path=RecentAccount"
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
            ]
        },
        executionStatus: {
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        }
    },
    accountOwner: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Account Owner']//following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Account Owner (Account_OwnerId)',
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
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
            ],
            "name": [
                "UiAssert"
            ],
            "testItemId": [
                "33"
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
                                                "Account_Type"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Account_Type&path=RecentAccount"
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
                                                                    "text": "Analyst",
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
            ]
        },
        executionStatus: {
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: /With Recent Item Rows {Account_Name = \"AccRI.*/,
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        }
    },
    industry:
    {

        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Industry']//following-sibling::div/span",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Industry (Account_Industry)',
        },

        modificationParameter: {
            fieldParameters: {
                disposition:'Existing',
                rowLocator: {
                    value: 1,
                    type: 'useRowIndex',
                },
            },
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },

        executionStatus: [{
            name: "UiWithRow",
            type: "Icon-ExecutingPaused",
            text: "With Recent Item Rows {1}",
            executionStatus: "Executing",
            successfulCount: 0,
            children: [
                {
                    name: "UiAssert",
                    type: "Icon-Successful",
                    text: "UI Assert",
                    executionStatus: "Executed",
                    successfulCount: 1,
                }
            ],
        }],
        testCaseXML: [{
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiWithRow"
            ],
            "name": [
                "UiWithRow"
            ],
            "title": [
                "With Recent Item Rows {1}"
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
                                        "sf:ui:locator:row?table=RecentItems%2FrecentItemTable"
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
                                    "text": "1",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "decimal"
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
                                    "text": "With Recent Item Rows {1}",
                                    "class": [
                                        "value"
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
                            "testItemId": [
                                /.*/
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
                                            "testItemId": [
                                                /.*/
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
                                                                                "Account_Industry"
                                                                            ],
                                                                            "fieldLocator": [
                                                                                {
                                                                                    "uri": [
                                                                                        "ui:locator?name=Account_Industry&path=RecentAccount"
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
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }],
    },

    billingAddress: {
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Billing Address']//following-sibling::div//div[contains(@class,'OutputAddressText')][1]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Billing Address (Account_BillingAddress)',
        },
        modificationParameter: {
            fieldParameters: {
                disposition:'Existing',
                rowLocator: {
                    value: 1,
                    type: 'useRowIndex',
                },
            },
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        executionStatus: {

            name: "UiAssert",
            type: "Icon-Successful",
            text: "UI Assert",
            executionStatus: "Executed",
            successfulCount: 1,
        },
        testCaseXML:
        {
            "apiId": [
                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
            ],
            "name": [
                "UiAssert"
            ],
            "testItemId": [
                "40"
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
                                                "Account_BillingAddress"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=Account_BillingAddress&path=RecentAccount"
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
                                                                    "text": "India",
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
            ]
        },
    }
};