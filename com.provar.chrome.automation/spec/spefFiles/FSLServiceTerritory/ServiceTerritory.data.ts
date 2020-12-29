import { MiscUtils, FieldType, ScreenType, } from '../../support/MiscUtil';
const miscUtilObj = new MiscUtils();

export const ServiceTerritoryData = {
    PSIView: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Service Territory View screen',
        },
    },
    name: {
        xpathView: "//div[normalize-space(.)='Name']/following-sibling::div/span/span",
        xpathIE: "//label[contains(normalize-space(.),'Name')]/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'Name',
        },
        set: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: 'AutomationAPI'
                }
            }
        },
        testCaseXML: [{
            "title": [
                "Set the Name field to AutomationAPI"
            ],
            "arguments": [
                {
                    "argument": [
                        
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
                                    "text": "AutomationAPI",
                                    "class": [
                                        "value"
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
                                    "text": "Set the Name field to AutomationAPI",
                                    "class": [
                                        "value"
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
            "text": "Set the Name field to AutomationAPI",
            "executionStatus": "Executed",
        }],
        assert: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                    extractMessage: true,
                    assertMessage: true,
                    extractLabel: true,
                    assertLabel: true,
                    expectedMessage: {
                        value: 'Complete this field.',
                        caseSensitive: true,
                        normalise: true,
                    },
                },
            }
        },
        executionStatusAssert: [
            {
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: [{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: [],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],

                                },
                                {
                                    attributeName: ['message'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: 'Complete this field.',
                                    }]
                                },
                                {
                                    attributeName: ['label'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: 'Name',
                                    }]
                                }]
                            }]
                        }],
                    }],
                }],
            }],
        }],
        inlineEdit: {
            interactionParameters: {
                id: 'Start Inline Edit',
            }
        },
        executionStatusInlineEdit: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Activate inline edit the Name field",
            "executionStatus": "Executed",
        }],
        testCaseXMLInlineEdit: [{
            "title": [
                "Activate inline edit the Name field"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Activate inline edit the Name field",
                                }
                            ]
                        }
                    ]
                }
            ]
        }]
    },
    active: {
        xpathView: "//div[normalize-space(.)='Active']/following-sibling::div//span",
        xpathIE: miscUtilObj.getFieldXpathLightning(ScreenType.InlineEdit, 'Active', FieldType.Checkbox),
        modificationParameter: {
            interactionParameters: {
                id: 'Check',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'IsActive',
        },
        testCaseXML: [{
            "title": [
                "Check the Active field"
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
                                    "text": "Check the Active field",
                                    "class": [
                                        "value"
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
            "text": "Check the Active field",
            "executionStatus": "Executed"
        }],
    },
    address: {
        xpathView: "//div[normalize-space(.)='Address']/following-sibling::div//a",
        xpathIE: "//label/span[text()='Address']/parent::label/following-sibling::textarea",
        modificationParameter: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: 'address for automation API'
                }
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'Address',
        },
        testCaseXML: [{
            "title": [
                "Set the Address field to address for automation API"
            ],
        }],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Address field to address for automation API",
            "executionStatus": "Executed",
        }],
    },
    createdDate: {
        xpath: "//div[.='Created By']/following-sibling::div//*[contains(@class,'uiOutputDateTime')]",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'CreatedDate',
        },
    },
    lastModifiedBy: {
        xpath: "//div[.='Last Modified By']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'LastModifiedById',
        },
    },
    delete: {
        xpath: "(//*[normalize-space(.)='Delete'])[last()]",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'Delete',
        },
        modificationParameter: {
            interactionParameters: {
                id: 'Click and Confirm',
            }
        },
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click and Confirm the Delete button",
            "executionStatus": "Executed",
        }],
    },
    OperatingHours: {
        xpathIE:"//label/span[normalize-space(.)='Operating Hours']/../following-sibling::div//a//span[@class='pillText']",
        modificationParameter: {
            interactionParameters: {
                id: '',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'OperatingHoursId',
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
                                                "OperatingHoursId"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
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
                                                                    "text": /.*/,
                                                                    "class": [
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
                                                                "label"
                                                            ],
                                                            "comparisonType": [
                                                                "EqualTo"
                                                            ],
                                                            "normalize": [
                                                                "true"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "Operating Hours",
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
    },
    parentTerritory: {
        Xpath: {
			input: miscUtilObj.getFieldXpathLightning(ScreenType.New, 'Parent Territory', FieldType.Lookup),
            lookup: miscUtilObj.getFieldXpathLightning(ScreenType.New, 'Parent Territory', FieldType.LookupSearch),
            view: miscUtilObj.getFieldXpathLightning(ScreenType.View, 'Parent Territory', FieldType.Lookup),
        },
        interactionParameters: {
            lookup: {
                interactionParameters: {
                    id: 'SF Lookup',
                    settings: {
                        value: 'AutomationAPI',
                    },
                },
            },
            assert: {
                interactionParameters: {
                    id: 'Read/Assert',
                    settings: {
                        extractValue: true,
                        assertValue: true,
                        extractLabel: true,
                        assertLabel: true,
                    },
                },
            }
        },
        executionStatus: {
            lookup: [
                {
                    name: 'UiDoAction',
                    text: /Lookup the Parent Territory reference to.*/,
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
                {
                    name: 'UiWithScreen',
                    type: 'Icon-ExecutingPaused',
                    text: 'On SF Service Territory Lookup screen',
                    executionStatus: 'Executing',
                    children: [
                        {
                            name: 'UiDoAction',
                            type: 'Icon-Successful',
                            text: /Set the Search text to.*/,
                            executionStatus: 'Executed',
                        },
                        {
                            name: 'UiDoAction',
                            type: 'Icon-Successful',
                            text: 'Click the Go! button',
                            executionStatus: 'Executed',
                        },
                    ],
                },
            ],
            assert: [
                {
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ]
        },
        testCaseXML: {
            lookup: [
                {
                    "title": [
                        "Lookup the Parent Territory reference to AutomationAPI"
                    ],
                },
                {
                    "title": [
                        "On SF Service Territory Lookup screen"
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
                                                        "Set the Search text to AutomationAPI"
                                                    ],
                                                },
                                                {
                                                    "title": [
                                                        "Click the Go! button"
                                                    ],
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }],
            assert: [{
                name: ['UiAssert'],
                title: ['UI Assert'],
                arguments: [{
                    argument: [{
                        id: ['fieldAssertions'],
                        value: [{
                            uiFieldAssertion: [{
                                fieldLocator: [{
                                    uri: ['ui:locator?name=Linked_Case__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DProvar_Custom_Obj__c%26field%3DLinked_Case__c'],
                                }],
                                attributeAssertions: [{
                                    uiAttributeAssertion: [{
                                        attributeName: ['value'],
                                        comparisonType: ['EqualTo'],
                                        normalize: ['true'],
                                    },
                                    {
                                        attributeName: ['label'],
                                        comparisonType: ['EqualTo'],
                                        normalize: ['true'],
                                        value: [{
                                            text: 'Linked Case',
                                        }]
                                    }]
                                }]
                            }],
                        }],
                    }],
                }],
            }]
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'ParentTerritoryId',
        },
    },
    territoryName:{
        xpath: "//div[contains(@class,'forceSearchResultsGridView')]//table[contains(@class, 'forceRecordLayout')]/tbody/tr[1]/td[1]/a",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'Name',
        },
        testCaseXML: [
            {
                "title": [
                    "Click the Name button"
                ],
            }],
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Name button",
            "executionStatus": "Executed",
        }],
    },
    saveEditButton: {
		Xpath: "//button[@title='Save'] | //input[@title='Save']",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the SaveEdit button',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the SaveEdit button'],
			arguments: [{
				argument:[{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}],
			}],
		}],
	},
}