export const GlobalSearchData = {
    Psi:{
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Global Search',
        },
    },
    PCOSearchPsi: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Provar_Custom_Obj__c Search',
        },
    },
    searchBox: {
        xpath: "//header//input[contains(@title,'Search')]",
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value:'{Name}'
                }
            }
        },
		fieldDetails:{
            disposition: "Existing",
			text: "Search Box (searchBox)",
        },
        testCaseXML:{
            "title": [
                "On SF Global Search"
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
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?action=GlobalSearch"
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
                                    "text": "On SF Global Search",
                                    "class": [
                                        "value"
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
                                            "title": [
                                                "Set the Search Box field to {Name}"
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
                                                                        "ui:locator?name=searchBox"
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
                                                                                "Name"
                                                                            ]
                                                                        }
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
                                                                    "text": "Set the Search Box field to {Name}",
                                                                    "class": [
                                                                        "value"
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
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Global Search",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": /Set the Search Box field to GlobalSearch.*/,
                    "executionStatus": "Executed",
                }
            ]
        },
    },
    searchObject:{
        xpath: "//header//li/a/span[contains(text(),'in Provar')]",
        modificationParameter:{
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: "Existing",
			text: "Search Object (searchObject)",
        },
        testCaseXML:[{
            "title": [
                "Click the Search Object button"
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
                                        "ui:locator?name=searchObject"
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
                                    "text": "Click the Search Object button",
                                    "class": [
                                        "value"
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
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Search Object button",
            "executionStatus": "Executed",
        }],
    },
    name: {
        xpath: "(//table/tbody/tr/th/span/a)[last()]",
        modificationParameter:{
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: 'Existing',
            text: 'Provar Custom Obj Name (PROVAR_CUSTOM_OBJ__C_NAME)'
        },
        testCaseXML:{
            "title": [
                "On SF Provar Custom Obj Search screen"
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
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?object=Provar_Custom_Obj__c&action=Search"
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
                                    "text": "On SF Provar Custom Obj Search screen",
                                    "class": [
                                        "value"
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
                                            "title": [
                                                /With Provar_Custom_Obj__c rows {PROVAR_CUSTOM_OBJ__C_NAME = .*GlobalSearch.*/
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
                                                                        "sf:ui:locator:row?table=Search%2FsearchView%2FsearchTable"
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
                                                                                        "PROVAR_CUSTOM_OBJ__C_NAME"
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "rhs": [
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
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "locatorDescription"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": /With Provar_Custom_Obj__c rows {PROVAR_CUSTOM_OBJ__C_NAME = .*GlobalSearch.*/,
                                                                    "class": [
                                                                        "value"
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
                                                                            "title": [
                                                                                "Click the Provar Custom Obj Name field"
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
                                                                                                        "ui:locator?name=PROVAR_CUSTOM_OBJ__C_NAME&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DName"
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
                                                                                                    "text": "Click the Provar Custom Obj Name field",
                                                                                                    "class": [
                                                                                                        "value"
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
        executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "text": "On SF Provar Custom Obj Search screen",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": /With Provar_Custom_Obj__c rows {PROVAR_CUSTOM_OBJ__C_NAME = .*GlobalSearch.*/,
                    "executionStatus": "Executing",
                    "children": [
                        {
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Click the Provar Custom Obj Name field",
                            "executionStatus": "Executed",
                        }
                    ]
                }
            ]
        },
    },
    searchGlobal:{
        xpath: "//header//li/a/span",
        modificationParameter:{
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: "Existing",
            // text: "Search Global (searchGlobal)",
            text: "Search Object (searchObject)",
        },
        testCaseXML:{
            "title": [
                "On SF Global Search"
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
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?action=GlobalSearch"
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
                                    "text": "On SF Global Search",
                                    "class": [
                                        "value"
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
                                            "title": [
                                                "Click the Search Object button"
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
                                                                        "ui:locator?name=searchObject"
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
                                                                    "text": "Click the Search Object button",
                                                                    "class": [
                                                                        "value"
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
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Global Search",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Click the Search Object button",
                    "executionStatus": "Executed",
                }
            ]
        },
    },
    filterSearch:{
        xpath: "//header//li[contains(@class,'FILTER_OPTION')]/a/span",
        modificationParameter:{
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: "Existing",
			text: "Filter Search (filterSearch)",
        },
        testCaseXML:[{
            "title": [
                "Click the Filter Search button"
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
                                        "ui:locator?name=filterSearch"
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
                                    "text": "Click the Filter Search button",
                                    "class": [
                                        "value"
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
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Filter Search button",
            "executionStatus": "Executed",
        }],
    },
    recordNameLink:{
        xpath: "(//header//li[contains(@class,'MRU_GLOBAL')]/a/div[2]/span[contains(@class,'mruName')]/div)[1]",
        modificationParameter:{
            fieldParameters: {
                fieldName: 'Name (name)',
                rowLocator: {
                    value: 1,
                    type: 'useRowIndex',
                },		
            },
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: "Existing",
			text: "Name (name)",
        },
        testCaseXML:[{
            "title": [
                /With Search Results rows \{name = \"GlobalSearch-.*\"\}/
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
                                        "sf:ui:locator:row?table=searchResults"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                
                            ],
                            "value": [
                                
                            ]
                        },
                        {
                            "id": [
                                "locatorDescription"
                            ],
                            "value": [
                                {
                                    "text": /With Search Results rows \{name = \"GlobalSearch-.*\"\}/,
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
                                            "title": [
                                                "Click the Name button"
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
                                                                        "ui:locator?name=name"
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
                                                                    "text": "Click the Name button",
                                                                    "class": [
                                                                        "value"
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
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }],
        executionStatus:[{
            "name": "UiWithRow",
            "type": "Icon-ExecutingPaused",
            "text": /With Search Results rows \{name = \"GlobalSearch-.*\"\}/,
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful",
                    "text": "Click the Name button",
                    "executionStatus": "Executed",
                }
            ]
        }],
    },
    recordObjectLink:{
        xpath: "(//header//li[contains(@class,'MRU_GLOBAL')]/a/div[2]/div/div[text()='Provar Custom Obj'])[1]",
        modificationParameter:{
            interactionParameters: {
                id: 'Click',
            }
        },
		fieldDetails:{
            disposition: "Existing",
			text: "Object (object)",
        },
    }
}