import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const FlexiAppMCSRecentItems = {


    PSI: {
        itemDefinition: {
            itemClass: 'Page',
           // uiTargetUri: 'sf:ui:target?flexiPath=region3::0&flexiPage=Regression_App_Page_Main_Column_and_Sidebar&lightningComponent=flexipage:recentItems',
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Recent Items component in Regression App Page Main Column and Sidebar',
        },
    },
    URL: "https://provar-reg.lightning.force.com/lightning/n/Regression_App_Page_Main_Col_Sidebar",
    accountName: {
        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')])[1]",
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
                "On SF Recent Items component in Regression App Page Main Column and Sidebar"
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
                                        "sf:ui:target?flexiPage=Regression_App_Page_Main_Column_and_Sidebar&flexiPath=region3%3A%3A0&lightningComponent=flexipage%3ArecentItems"
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
                                    "text": "On SF Recent Items component in Regression App Page Main Column and Sidebar",
                                    "class": [
                                        "value"
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
            text: 'On SF Recent Items component in Regression App Page Main Column and Sidebar',
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
        executionStatusAssert: {
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
    },
    type: {
        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//span[contains(text(),'AccRI')]/..//following-sibling::ul//div[normalize-space(.)='Type']//following-sibling::div/span)[1]",
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
        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//div[normalize-space(.)='Phone']//following-sibling::div/span)[1]",
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
        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//div[normalize-space(.)='Website']//following-sibling::div/span)[1]",
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
                                                            "value": [
                                                                {
                                                                    "text": "www.web.com",
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
    accountOwner: {
        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//div[normalize-space(.)='Account Owner']//following-sibling::div/span)[1]",
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

        xpath: "(//div[@class='recentItemsContainer flexipageRecentItems']//div[normalize-space(.)='Industry']//following-sibling::div/span)[1]",
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
        xpath: "//div[@class='recentItemsContainer flexipageRecentItems']//div[normalize-space(.)='Billing Address']//following-sibling::div//div[contains(@class,'OutputAddressText')][1]",
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