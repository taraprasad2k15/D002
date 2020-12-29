import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiOneRegionLV = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: /sf:ui:target\?flexiPath=main.*&flexiPage=Regression_App_Page_1_Column&lightningComponent=flexipage:filterListCard/,
            itemTypeId: 'SfFlexiUiTargetExtension',
        },
        pageDetails: {
            title: 'List View (Case) component in Regression App Page 1 Column',
        },
    },
    editPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Case&noOverride=true&action=Edit',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Case Edit screen',
        },
    },
    changeOwnerPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: "sf:ui:target?object=Case&action=ownershipTransfer",
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Case change owner screen',
        },
    },
    newCase: {
        fieldDetails: {
            disposition: "Existing",
            text: "New Case (NewCase)",
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the New Case button',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the New Case button'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=action'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
    },
    selectRow: {
        Xpath: "(//tr/td//input[@type='checkbox'])[1]",
        interactionParameters: {
            interactionParameters: {
                id: 'Check',
                settings: {
                    value: true,
                },
            }
        },
        executionStatus: [
            {
                "name": "UiWithRow",
                "type": "Icon-ExecutingPaused",
                "executionStatus": "Executing",
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": "Check the Select Row rowSelectionCheckbox",
                        "executionStatus": "Executed",
                    }
                ]
            },
        ],
        testCaseXML: [
            {
                name: ['UiWithRow'],
                arguments: [{
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
                                        "sf:ui:locator:row?table=List%2FlistView%2FlistTable"
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
                                                        "CaseNumber"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "rhs": [
                                        {
                                            "text": /[0-9]{8}/,
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
                    ], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiDoAction'],
                                title: ['Check the Select Row rowSelectionCheckbox'],
                                arguments: [{
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
                                                        "ui:locator?name=SelectRow"
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
                                    ], { partial: true, indexKey: 'id' }),
                                }],
                            },
                            ],
                        }],
                    }],
                }],
            }],
    },
    caseNumber: {
        Xpath: "(//table/tbody/tr/th/span/a)[1]",
        fieldDetails: {
            disposition: "Existing",
            text: "Case (CaseNumber)",
        },
        interactionParameters: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        executionStatusAssert: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=CaseNumber'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: /[0-9]{8}/,
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
        testCaseXMLAssertColumn: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([
                    {
                        "id": [
                            "columnAssertions"
                        ],
                        "value": [
                            {
                                "uiColumnAssertion": [
                                    {
                                        "fieldLocator": [
                                            {
                                                "uri": [
                                                    "ui:locator?name=CaseNumber&path=List%2FlistView%2FlistTable"
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
                                                                "text": "Case Number",
                                                                "class": [
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
    contactName: {
        Xpath: "(//tbody/tr//td/span)[3]",
        fieldDetails: {
            disposition: "Existing",
            text: "Contact Name (ContactId)",
        },
        executionStatusAssert: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=ContactId'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    priority: {
        Xpath: "(//tbody/tr//td/span)[6]",
        fieldDetails: {
            disposition: "Existing",
            text: "Priority (Priority)",
        },
        executionStatusAssert: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXMLAssert: [{
            name: ['UiAssert'],
            title: ['UI Assert'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['fieldAssertions'],
                    value: [{
                        uiFieldAssertion: [{
                            fieldLocator: [{
                                uri: ['ui:locator?name=Priority'],
                            }],
                            attributeAssertions: [{
                                uiAttributeAssertion: [{
                                    attributeName: ['value'],
                                    comparisonType: ['EqualTo'],
                                    normalize: ['true'],
                                    value: [{
                                        text: "High",
                                    }]
                                }]
                            }]
                        }],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    listSearchBox: {
        Xpath: "//input[@type='search' and contains(@name,'search-input')]",
        interactionParameters: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: '{CaseNumber}',
                    pressEnter: true,
                },
            }
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the List Search select to [0-9]{8}/,
                executionStatus: 'Executed',
                successfulCount: 1,
            },
        ],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the List Search select to {CaseNumber}'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=set'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    deleteButton: {
        Xpath: "//a[normalize-space(.)='Delete']",
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF List View (Case) component in Regression App Page 1 Column',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Delete button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF List View (Case) component in Regression App Page 1 Column'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: [/With Case rows {CaseNumber = \"[0-9]{8}\"}/],
                            arguments: [{
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
                                                    "sf:ui:locator:row?table=List%2FlistView%2FlistTable"
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
                                                "text": /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
                                                "class": [
                                                    "value"
                                                ],
                                                "valueClass": [
                                                    "string"
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
                                                                    "CaseNumber"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "rhs": [
                                                    {
                                                        "text": /[0-9]{8}/,
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
                                ], { partial: true, indexKey: 'id' }),
                            }],
                            clauses: [{
                                clause: [{
                                    steps: [{
                                        apiCall: [{
                                            name: ['UiDoAction'],
                                            title: ['Click the Delete button'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([{
                                                    id: ['interaction'],
                                                    value: [{
                                                        uri: ['ui:interaction?name=action'],
                                                    }],
                                                }], { partial: true, indexKey: 'id' }),
                                            }],
                                        }],
                                    }],
                                }],
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
    changeOwnerButton: {
        Xpath: "//div[contains(@class,'uiPopupTarget')]//a[normalize-space(.)='Change Owner']",
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingChildPaused',
            text: 'On SF List View (Case) component in Regression App Page 1 Column',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [{
                name: "UiWithRow",
                type: "Icon-ExecutingPaused",
                text: /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
                executionStatus: "Executing",
                successfulCount: 0,
                children: [{
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Change Owner button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF List View (Case) component in Regression App Page 1 Column'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiWithRow'],
                            title: [/With Case rows {CaseNumber = \"[0-9]{8}\"}/],
                            arguments: [{
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
                                                    "sf:ui:locator:row?table=List%2FlistView%2FlistTable"
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
                                                "text": /With Case rows {CaseNumber = \"[0-9]{8}\"}/,
                                                "class": [
                                                    "value"
                                                ],
                                                "valueClass": [
                                                    "string"
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
                                                                    "CaseNumber"
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "rhs": [
                                                    {
                                                        "text": /[0-9]{8}/,
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
                                ], { partial: true, indexKey: 'id' }),
                            }],
                            clauses: [{
                                clause: [{
                                    steps: [{
                                        apiCall: [{
                                            name: ['UiDoAction'],
                                            title: ['Click the Change Owner button'],
                                            arguments: [{
                                                argument: comparisonUtils.addCompareOptions([{
                                                    id: ['interaction'],
                                                    value: [{
                                                        uri: ['ui:interaction?name=action'],
                                                    }],
                                                }], { partial: true, indexKey: 'id' }),
                                            }],
                                        }],
                                    }],
                                }],
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
    cancelButton: {
        XpathCO: "//div[contains(@class,'modal-footer')]//span[(.)='Submit']/../preceding-sibling::button/span[(.)='Cancel']",
        XpathEdit: "//div[contains(@class,'modal-footer')]//span[(.)='Cancel']|//button[@title='Cancel']//span[(.)='Cancel']",
        executionStatusEdit: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Case Edit screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Cancel button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        executionStatusCO: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF Case Change Owner screen',
            executionStatus: 'Executing',
            successfulCount: 0,
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Cancel button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        testCaseXMLEdit: {
            name: ['UiWithScreen'],
            title: ['On SF Case Edit screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Case&noOverride=true&action=Edit'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Click the Cancel button'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=action'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        },
        testCaseXMLCO: {
            name: ['UiWithScreen'],
            title: ['On SF Case Change Owner screen'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                    value: [{
                        uri: ['sf:ui:target?object=Case&action=ownershipTransfer'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Click the Cancel button'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=action'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
}