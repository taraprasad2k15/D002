export const SfRecordTypeScreen = {
    recordTypeRdBt: {
        xpath: "(//div[contains(@class,'changeRecordType')]/span)[1]",
        interactionParameter:{
            interactionParameters: {
                id: 'Set'
            }
        },
        testCaseXML:[{
            "title": [
                "Set the Record Type select to Default Layout"
            ],
            "arguments": [
                {
                    "argument": [
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
                                    "text": "Default Layout",
                                    "class": [
                                        "value"
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
                                    "text": "Set the Record Type select to Default Layout",
                                    "class": [
                                        "value"
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
                    ]
                }
            ],
        }],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Record Type select to Default Layout",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    description: {
        xpath: "//span[(.)='Default Layout']/following-sibling::div",
        interactionParameter:{
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		},
        testCaseXML: [{
            "title": [
                /With.*/
            ],
            "arguments": [
                {
                    "argument": [
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
                                        "sf:ui:locator:row?table=availableRecordTypes%2FavailableRecordTypesTable"
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
                                                        "recordTypeName"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "rhs": [
                                        {
                                            "text": "Default Layout",
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
                                    "text": /With.*/,
                                    "class": [
                                        "value"
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
                    ]
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
                                            "apiId": [
                                                "com.provar.plugins.forcedotcom.core.ui.UiAssert"
                                            ],
                                            "title": [
                                                "UI Assert"
                                            ],
                                            "arguments": [
                                                {
                                                    "argument": [
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
                                                                                "recordTypeDescription"
                                                                            ],
                                                                            "fieldLocator": [
                                                                                {
                                                                                    "uri": [
                                                                                        "ui:locator?name=recordTypeDescription&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3D%7BtargetUrl%3Aobject%7D%26field%3DrecordTypeDescription"
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
                                                                                                    "text": "Standard Salesforce Page",
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
        }],
        executionStatus: [{
            "name": "UiWithRow",
            "type": "Icon-ExecutingPaused",
            "text": /With.*/,
            "executionStatus": "Executing",
            "successfulCount": 0,
            "children": [
                {
                    "name": "UiAssert",
                    "type": "Icon-Successful",
                    "text": "UI Assert",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                }
            ]
        }],
    },
    nextBt: {
        xpath: "//button[(.)='Next']",
        interactionParameter:{
			interactionParameters: {
				id: 'Click',
			}
		},
        testCaseXML: [{
            "title": [
                "Click the Continue button"
            ],
            "arguments": [
                {
                    "argument": [
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
                    ]
                }
            ],
        }],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Continue button",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
};