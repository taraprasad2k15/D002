import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const richTextCustObjData = {
    richtextfield: {
        Psi:{
            itemDefinition: {
                itemClass: 'Page',
                itemTypeId: 'SfFlexiUiTargetExtension',
            },
            pageDetails: {
                title: 'Rich Text 1 component in Provar Custom Obj  view',
            },
        },
        xpath: "//div[contains(@class,'active')]//p[contains(text(),'Rich text added as a standard')]",
        xpathU: "//div[contains(@class,'active')]//p[contains(text(),'Rich text added as a standard')]/parent::div",
        fieldDetails:{
            text: 'Rich Text (RichTextControl)',
            disposition: 'Existing',
        },
        modificationParameter:{
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        testCaseXML:{
            "title": [
                "On SF Rich Text 1 component in Provar Custom Obj view"
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
                                        "sf:ui:target?flexiPage=Custom_Page_3&flexiPath=sidebar%3A%3A1&lightningComponent=flexipage%3ArichText"
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
                                    "text": "On SF Rich Text 1 component in Provar Custom Obj view",
                                    "class": [
                                        "value"
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
                                    "text": /.*/,
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
                                                                                "RichTextControl"
                                                                            ],
                                                                            "fieldLocator": [
                                                                                {
                                                                                    "uri": [
                                                                                        "ui:locator?name=RichTextControl&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DRichTextControl"
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
                                                                                                    "text": "Rich text added as a standard lightning component for testing with plain text as formatted text is not yet supported in Provar.",
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
            ],
        },
        executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Rich Text 1 component in Provar Custom Obj view",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiAssert",
                    "type": "Icon-Successful",
                    "text": "UI Assert",
                    "executionStatus": "Executed",
                }
            ]
        },
    },
}