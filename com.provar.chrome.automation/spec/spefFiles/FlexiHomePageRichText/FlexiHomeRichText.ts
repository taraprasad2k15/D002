import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
import { ScreenType, FieldType, MiscUtils } from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const FlexiHomeRichText = {

    flexiHomeRichTextTopPSI: {
        itemDefinition: {
            itemClass: 'Page',
           // uiTargetUri: 'sf:ui:target?flexiPath=top::0&flexiPage=Custom_Home_Page&lightningComponent=flexipage:richText',
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Rich Text component in Custom Home Page',
        },
    },
    flexiHomeRichTextBottomPSI: {
        itemDefinition: {
            itemClass: 'Page',
        //    uiTargetUri: 'sf:ui:target?flexiPath=bottomRight::0&flexiPage=Custom_Home_Page&lightningComponent=flexipage:richText',
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'Rich Text component in Custom Home Page',
        },
    },
    richTextTopRegion: {
        xpath: "//div[@class='top']//div[contains(@class,'flexipageRichText')]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Rich Text (RichTextControl)',
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
                    "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
                ],
                "name": [
                    "UiWithScreen"
                ],
                "testItemId": [
                    "22"
                ],
                "title": [
                    "On SF Rich Text component in Custom Home Page"
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
                                            "sf:ui:target?flexiPath=top%3A%3A0&flexiPage=Custom_Home_Page&lightningComponent=flexipage%3ArichText"
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
                                        "text": "On SF Rich Text component in Custom Home Page",
                                        "class": [
                                            "value"
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
                                    "23"
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
                                                    "24"
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
                                                                                    "RichTextControl"
                                                                                ],
                                                                                "fieldLocator": [
                                                                                    {
                                                                                        "uri": [
                                                                                            "ui:locator?name=RichTextControl&binding=sf%3Aui%3Abinding%3Aobject%3Ffield%3DRichTextControl"
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
                                                                                                        "text": "Rich text component in Home page with plain text.",
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
            },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Rich Text component in Custom Home Page',
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
    },
    richTextBottomRegion: {
        xpath: "//div[@class='bottomRight']//div[contains(@class,'flexipageRichText')]",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Rich Text (RichTextControl)',
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
                    "com.provar.plugins.forcedotcom.core.ui.UiWithScreen"
                ],
                "name": [
                    "UiWithScreen"
                ],
                "testItemId": [
                    "25"
                ],
                "title": [
                    "On SF Rich Text component in Custom Home Page"
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
                                            "sf:ui:target?lightningComponent=flexipage%3ArichText&flexiPath=bottomRight%3A%3A0&flexiPage=Custom_Home_Page"
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
                                        "text": "On SF Rich Text component in Custom Home Page",
                                        "class": [
                                            "value"
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
                                    "26"
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
                                                    "27"
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
                                                                                    "RichTextControl"
                                                                                ],
                                                                                "fieldLocator": [
                                                                                    {
                                                                                        "uri": [
                                                                                            "ui:locator?name=RichTextControl&binding=sf%3Aui%3Abinding%3Aobject%3Ffield%3DRichTextControl"
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
                                                                                                        "text": "This is to test Rich Text Component",
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
            },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Rich Text component in Custom Home Page',
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
    },
};