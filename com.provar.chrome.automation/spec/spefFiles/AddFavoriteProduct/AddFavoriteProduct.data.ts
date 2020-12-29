export const addFavProd = {
    newPagePSI: {
        "itemDefinition": {
            "itemClass": "Page",
            "itemTypeId": "VfUiTargetExtension",
            "disposition": "New",
            "embedded": false,
        },
        "pageDetails": {
            "title": /.*/,
        }
    },
    existingPagePSI: {
        "itemDefinition": {
            "itemClass": "Page",
            "itemTypeId": "VfUiTargetExtension",
            "disposition": "Existing",
            "embedded": false,
        },
        "pageDetails": {
            "title": /.*/,
        }
    },
    productSelectionTablePSI: [
        {
            "itemDefinition": {
                "itemClass": "Page",
                "itemTypeId": "VfUiTargetExtension",
                "disposition": "Existing",
                "embedded": false,
            },
            "pageDetails": {
                "title": /.*/,
            }
        },
        {
            "itemDefinition": {
                "itemClass": "Table",
                "itemTypeId": "SBrickTableLocatorExtension",
                "disposition": "New",
                "embedded": false,
                "pageObjectId": /.*/,
            },
        }
    ],
    iframexpath: "//iframe[@title='Salesforce - Enterprise Edition']",
    addFavIcon: {
        xpath: "//button[@name='Add To Favorites']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "addToFavorites",
        },
        testCaseXML: {
            "name": [
                "UiWithScreen"
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
                                                                                "Click the Add To Favorites button"
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
            ],
         },
        executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingChildPaused",
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": /.*/,
                    "executionStatus": "Executing",
                    "children": [
                        {
                            "name": "UiDoAction",
                            "type": "Icon-Successful",
                            "text": "Click the Add To Favorites button",
                            "executionStatus": "Executed",
                        }
                    ]
                }                
            ]
        }
    },
    favName: {
        xpath: "//*[contains(text(),'Favorite Name')]/following-sibling::input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "favoriteName",
        },
        modificationParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: "Automation API fav"
                }
            }
        },
        testCaseXML: [{
            "title": [
               "Set the Favorite Name field to Automation API fav"
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
                                       "ui:locator?name=favoriteName"
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
                                   "text": "Automation API fav",
                                   "class": [
                                       "value"
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
                                   "text": "Set the Favorite Name field to Automation API fav",
                                   "class": [
                                       "value"
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
            "text": "Set the Favorite Name field to Automation API fav",
            "executionStatus": "Executed",
        }]
    },
    cancelButton: {
        xpath: "//sb-favorite-dialog//footer//paper-button[contains(text(),'Cancel')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "cancel",
        },
    },
    saveButton: {
        xpath: "//sb-favorite-dialog//footer//paper-button/*[contains(text(),'Save')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "save",
        },
        testCaseXML: [{
            "title": [
               "Click the Save button"
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
                                       "ui:locator?name=save"
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
                   ]
               }
           ],
        }],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Save button", 
        }]
    },
    addFavButton: {
        xpath: "//iron-dropdown//paper-item//span[contains(text(),'Add Favorites')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "addFavoritesBtn",
        },
        testCaseXML: [{
            "title": [
               "Click the Add Favorites Btn button"
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
                                       "ui:locator?name=addFavoritesBtn"
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
                                   "text": "Click the Add Favorites Btn button",
                                   "class": [
                                       "value"
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
            "text": "Click the Add Favorites Btn button",
            "executionStatus": "Executed", 
        }]
    },
    selectCheckbox: {
        xpath: "//sb-table-row[1]//paper-checkbox//div/div[@id='checkbox']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "boolean",
            },
            "disposition": "New",
            "fieldName": "checkbox",
        },
        modificationParameters: {
            interactionParameters: {
                id: 'Check',
            }
        },
        testCaseXML: [{
            "title": [
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
                                       "sf:ui:locator:row?table=favoriteLookupLines"
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
                                    "class": [
                                       "value"
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
                       },
                       {
                           "id": [
                               "autoPaginate"
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
                                               "Check the Checkbox field"
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
                                                                       "ui:locator?name=checkbox"
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
                                                                       "ui:interaction?name=check"
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
                                                                   "text": "Check the Checkbox field",
                                                                   "class": [
                                                                       "value"
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
        executionStatus: [{
            "name": "UiWithRow",
            "type": "Icon-ExecutingPaused", 
            "text": /.*/,
            "executionStatus": "Executing",
            "children": [
                {
                    "name": "UiDoAction",
                    "type": "Icon-Successful", 
                    "text": "Check the Checkbox field",
                    "executionStatus": "Executed", 
                }
                ]
        }]
    },
    favNameField: {
        xpath: "//sb-table-row[1]//sb-table-cell[1]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "favoriteName",
        },
        modificationParameters: {
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
                                               "favoriteName"
                                           ],
                                           "fieldLocator": [
                                               {
                                                   "uri": [
                                                       "ui:locator?name=favoriteName"
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
       }],
        executionStatus: [{
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
    },
    description: {
        xpath: "//sb-table-row[1]//sb-table-cell[2]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "description",
        },
        modificationParameters: {
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
                                               "description"
                                           ],
                                           "fieldLocator": [
                                               {
                                                   "uri": [
                                                       "ui:locator?name=description"
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
                   ]
               }
           ]
       }],
        executionStatus: [{
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
    },
    owner: {
        xpath: "//sb-table-row[1]//sb-table-cell[3]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "ownerName",
        },
        modificationParameters: {
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
                                               "ownerName"
                                           ],
                                           "fieldLocator": [
                                               {
                                                   "uri": [
                                                       "ui:locator?name=ownerName"
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
       }],
        executionStatus: [{
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
        }],
    },
    deleteButton: {
        xpath: "//paper-button/*[contains(text(),'Delete')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "delete",
        },
        testCaseXML: [{
            "title": [
                "Click the Delete button"
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
                                        "ui:locator?name=delete"
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
                                    "text": "Click the Delete button",
                                    "class": [
                                        "value"
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
            "text": "Click the Delete button",
            "executionStatus": "Executed", 
        }]
    },
    searchProdIcon: {
        xpath: "//paper-button[@id='addProdFavBtn']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "addProdFavBtn",
        },
        testCaseXML: [{
            "title": [
                "Click the Add Prod Fav Btn button"
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
                                        "ui:locator?name=addProdFavBtn"
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
                                    "text": "Click the Add Prod Fav Btn button",
                                    "class": [
                                        "value"
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
            "text": "Click the Add Prod Fav Btn button",
            "executionStatus": "Executed", 
        }]
    },
    favIcon: {
        xpath: "//paper-button[@id='fav']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "fav",
        },
        testCaseXML: [
            {
                "title": [
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
                                            "ui:locator?name=fav"
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
                                        "text": "Click the Fav button",
                                        "class": [
                                            "value"
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
            },],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful", 
            "text": "Click the Fav button",
            "executionStatus": "Executed", 
        }]
    },
    selectMore: {
        xpath: "//paper-button/*[contains(text(),'Select & Add More')]",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "selectAndAddMore",
        },
        testCaseXML: [{
            "title": [
                "Click the Select And Add More button"
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
                                        "ui:locator?name=selectAndAddMore"
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
                                    "text": "Click the Select And Add More button",
                                    "class": [
                                        "value"
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
        },],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful", 
            "text": "Click the Select And Add More button",
            "executionStatus": "Executed", 
        }]
    },
    cancel: {
        xpath: "//paper-button/*[text()='Cancel']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "cancel",
        },
    },
    select: {
        xpath: "//paper-button/*[text()='Select']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "SteelBrick",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "select",
        },
        testCaseXML: [{
            "title": [
                "Click the Select button"
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
                                        "ui:locator?name=select"
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
                                    "text": "Click the Select button",
                                    "class": [
                                        "value"
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
            "text": "Click the Select button",
            "executionStatus": "Executed", 
        }]
    },
}