import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { Standard } from '../../testdata/sfObjects/Standard';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfVfMasterPageTablesConsole = {
    masterPagePSI: {
        pageBlockTable: {
            new: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "New",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ],
            existing: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ]
        },
        dataTable: {
            new: [
                Standard.homeTabPsi, 
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "New",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "New",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ],
            existing: [Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ]
        },
        nestedTable: {
            newOuter: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "New",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ],
            existingOuter: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ],
            newInner: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "New",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ],
            existingInner: [
                Standard.homeTabPsi,
                {
                    "itemDefinition": {
                        "itemClass": "Page",
                        "itemTypeId": "VfUiTargetExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
                    },
                    "pageDetails": {
                        "title": /.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
                {
                    "itemDefinition": {
                        "itemClass": "Table",
                        "itemTypeId": "VfTableLocatorExtension",
                        "disposition": "Existing",
                        "embedded": false,
                        "pageObjectId": /.*/,
                        // "uiTargetUri": /sf:ui:target\?page=TestMasterDetail&pageObject=.*/,
                    }
                },
            ]
        },
        existing: {
            "itemDefinition": {
                "itemClass": "Page",
                "itemTypeId": "VfUiTargetExtension",
                "disposition": "Existing",
                "embedded": false,
                "pageObjectId": /.*/,
                // "uiTargetUri": /sf:ui:target.*pageObject=.*&page=TestMasterDetail/,
            },
            "pageDetails": {
                "title": /.*/,
            }
        },
    },
    pageBlockTable: {
        caseNumber: {
            Xpath: "//h2[(.)='Cases Page Block Table']/../../../../../following-sibling::div/table/tbody/tr/td/span[(.)='00002617']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "caseNumber",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "caseNumber",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Case Number',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
            },
            executionStatus: [{
                "name": "UiWithRow",
                "type": "Icon-ExecutingPaused",
                "text": "With Cases rows {1}",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [{
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
            executionStatusColumn: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            testCaseXML: [{
                name: ['UiWithRow'],
                title: ['With Cases rows {1}'],
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
                                        "sf:ui:locator:row?table=cases"
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
                                    "text": "With Cases rows {1}",
                                    "class": [
                                        "value"
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
                                        "value"
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
                                                                    "caseNumber"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=caseNumber"
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
                                                                                        "text": "00002617",
                                                                                        "class": [
                                                                                            "value"
                                                                                        ],
                                                                                        "valueClass": [
                                                                                            "string"
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
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
                        }],
                    }],
                }],
            }],
            testCaseXMLColumn: [{
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
                                                    "caseNumber"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=caseNumber&path=cases"
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
                        ]
                    }
                ]
            }],
        },
        accountName: {
            Xpath: "//h2[(.)='Cases Page Block Table']/../../../../../following-sibling::div/table/tbody/tr/td/span[(.)='1 Col Layout']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "accountName",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "accountName",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Account Name',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "accountName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=accountName"
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
                                                                        "text": "1 Col Layout",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "accountName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=accountName&path=cases"
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
                                                                        "text": "Account Name",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        subject: {
            Xpath: "//h2[(.)='Cases Page Block Table']/../../../../../following-sibling::div/table/thead//div[(.)='Subject']/../../../following-sibling::tbody/tr/td[(.)='1 Col Layout']/following-sibling::td/span",
            XpathU: "//h2[(.)='Cases Page Block Table']/../../../../../following-sibling::div/table/tbody/tr/td/span",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "subject",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "subject",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Subject',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "subject"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=subject"
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
                                                                        "text": "Sample Case for Automation Testing 1",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "subject"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=subject&path=cases"
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
                                                                        "text": "Subject",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        actions: {
            Xpath: "//h2[(.)='Cases Page Block Table']/../../../../../following-sibling::div/table/tbody/tr[contains(@class,'first')]/td/input",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "button",
                },
                "disposition": "New",
                "fieldName": "actions",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "actions",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Actions',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "actions"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=actions"
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
                                                                        "text": "Select",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "actions"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=actions&path=cases"
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
                                                                        "text": "Actions",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        }
    },
    dataTable: {
        accountName: {
            Xpath: "//div[(.)='Account Name']/../../../following-sibling::tbody/tr/td/span[(.)='Make Positive']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "accountName",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "accountName",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Account Name',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
            },
            executionStatus: {
                name: 'UiWithScreen',
                type: 'Icon-ExecutingChildPaused',
                text: 'On SF VF Test Master tab',
                executionStatus: 'Executing',
                successfulCount: 0,
                children: [{
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": "With Accounts rows {1}",
                    "executionStatus": "Executing",
                    "successfulCount": 0,
                    "children": [{
                        name: 'UiAssert',
                        type: 'Icon-Successful',
                        text: 'UI Assert',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    }],
                }],
            },
            executionStatusColumn: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            testCaseXML: {
                name: ['UiWithScreen'],
                title: ['On SF VF Test Master tab'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions([{
                        id: ['target'],
                        value: [{}],
                    }], { partial: true, indexKey: 'id' }),
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiWithRow'],
                                title: ['With Accounts rows {1}'],
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
                                                        "sf:ui:locator:row?table=accounts"
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
                                                    "text": "With Accounts rows {1}",
                                                    "class": [
                                                        "value"
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
                                                        "value"
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
                                                                                    "accountName"
                                                                                ],
                                                                                "fieldLocator": [
                                                                                    {
                                                                                        "uri": [
                                                                                            "ui:locator?name=accountName"
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
                                                                                                        "text": "Make Positive",
                                                                                                        "class": [
                                                                                                            "value"
                                                                                                        ],
                                                                                                        "valueClass": [
                                                                                                            "string"
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            },
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
                                        }],
                                    }],
                                }],
                            }],
                        }],
                    }],
                }],
            },
            testCaseXMLColumn: [{
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
                                                    "accountName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=accountName&path=accounts"
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
                                                                        "text": "Account Name",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        owner: {
            Xpath: "//div[(.)='Account Name']/../../../following-sibling::tbody/tr/td/span[(.)='Richard Clark']",
            Xpath1: "//div[(.)='Account Name']/../../../following-sibling::tbody/tr/td/span/a[(.)]",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "link",
                },
                "disposition": "New",
                "fieldName": "owner",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "owner",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Owner',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "owner"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=owner"
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
            testCaseXMLColumn: [{
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
                                                    "owner"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=owner&path=accounts"
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
                                                                        "text": "Owner",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        actions: {
            Xpath: "(//span[(.)]/../following-sibling::td/input)[last()-1]",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "button",
                },
                "disposition": "New",
                "fieldName": "actions",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    "disposition": "Existing",
                    "fieldName": "actions",
                }
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Actions',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "actions"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=actions"
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
                                                                        "text": "Select",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "actions"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=actions&path=accounts"
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
                                                                        "text": "Actions",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
    },
    nestedTable: {
        caseNumber: {
            Xpath: "//h2[(.)='Cases Nested Table']/../../../../../following-sibling::div/table/tbody/tr/td/span[(.)='00002617']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "caseNumber",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "caseNumber",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Case Number',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
            },
            executionStatus: [{
                "name": "UiWithRow",
                "type": "Icon-ExecutingPaused",
                "text": "With Cases Table rows {1}",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [{
                    name: 'UiAssert',
                    type: 'Icon-Successful',
                    text: 'UI Assert',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                }],
            }],
            executionStatusColumn: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            testCaseXML: [{
                name: ['UiWithRow'],
                title: ['With Cases Table rows {1}'],
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
                                        "sf:ui:locator:row?table=casesTable"
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
                                    "text": "With Cases Table rows {1}",
                                    "class": [
                                        "value"
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
                                        "value"
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
                                                                    "caseNumber"
                                                                ],
                                                                "fieldLocator": [
                                                                    {
                                                                        "uri": [
                                                                            "ui:locator?name=caseNumber"
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
                                                                                        "text": "00002617",
                                                                                        "class": [
                                                                                            "value"
                                                                                        ],
                                                                                        "valueClass": [
                                                                                            "string"
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
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
                        }],
                    }],
                }],
            }],
            testCaseXMLColumn: [{
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
                                                    "caseNumber"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=caseNumber&path=casesTable"
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
                        ]
                    }
                ]
            }],
        },
        date: {
            Xpath: "(//h2[(.)='Cases Nested Table']/../../../../../following-sibling::div/table/thead//div[(.)='Date']/../../../following-sibling::tbody/tr/td/span[(.)='00002617']/../following-sibling::td/span)[1]",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "date",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "date",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Date',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "date"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=date"
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
                                                                        "text": "28/03/2020",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "date"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=date&path=casesTable"
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
                                                                        "text": "Date",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        email: {
            Xpath: "//h2[(.)='Cases Nested Table']/../../../../../following-sibling::div/table/thead//div[(.)='Date']/../../../following-sibling::tbody/tr/td/span[(.)='00002617']/../following-sibling::td/span/a",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "link",
                },
                "disposition": "New",
                "fieldName": "email",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "email",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Email',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "email"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=email"
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
                                                                        "text": "a@bc.com12",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
            testCaseXMLColumn: [{
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
                                                    "email"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=email&path=casesTable"
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
                                                                        "text": "Email",
                                                                        "class": [
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
                        ]
                    }
                ]
            }],
        },
        name: {
            Xpath: "//tr[contains(@class, 'last')]/td/table/tbody/tr[contains(@class,'first')]/td/span[(.)='Make Positive']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "name",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "name",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Name',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
            },
            executionStatus: [{
                "name": "UiWithRow",
                "type": "Icon-ExecutingChildPaused",
                "text": "With Cases Table rows {1}",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [{
                    "name": "UiWithRow",
                    "type": "Icon-ExecutingPaused",
                    "text": "With accountsTable {1}",
                    "executionStatus": "Executing",
                    "successfulCount": 0,
                    "children": [{
                        name: 'UiAssert',
                        type: 'Icon-Successful',
                        text: 'UI Assert',
                        executionStatus: 'Executed',
                        successfulCount: 1,
                    }],
                }],
            }],
            executionStatusColumn: [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            testCaseXML: [{
                name: ['UiWithRow'],
                title: ['With Cases Table rows {1}'],
                arguments: [{
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
                                            "sf:ui:locator:row?table=casesTable"
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
                                        "text": "With Cases Table rows {1}",
                                        "class": [
                                            "value"
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
                }],
                clauses: [{
                    clause: [{
                        steps: [{
                            apiCall: [{
                                name: ['UiWithRow'],
                                title: ['With accountsTable {1}'],
                                arguments: [{
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
                                                        "sf:ui:locator:row?table=accountsTable"
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
                                                    "text": "With accountsTable {1}",
                                                    "class": [
                                                        "value"
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
                                }],
                                clauses: [{
                                    clause: [{
                                        steps: [{
                                            apiCall: [{
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
                                                                                    "name"
                                                                                ],
                                                                                "fieldLocator": [
                                                                                    {
                                                                                        "uri": [
                                                                                            "ui:locator?name=name"
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
                                                                                                        "text": "Make Positive",
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
                                        }],
                                    }],
                                }],
                            }],
                        }],
                    }],
                }],
            }],
            testCaseXMLColumn: [{
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
                                                    "caseNumber"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=caseNumber"
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
                                                                        "text": "00002617",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
        phone: {
            Xpath: "//tr[contains(@class, 'last')]/td/table/tbody/tr[contains(@class,'first')]/td/span[(.)='22011990']",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "text",
                },
                "disposition": "New",
                "fieldName": "phone",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "phone",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Phone',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "phone"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=phone"
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
                                                                        "text": "22011990",
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
            testCaseXMLColumn: [{
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
                                                    "caseNumber"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=caseNumber"
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
                                                                        "text": "00002617",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
        emailInner: {
            Xpath: "//tr[contains(@class, 'last')]/td/table/tbody/tr[contains(@class,'first')]/td/span/a[contains((.),'http://web@site.com')]",
            fieldDetails: {
                "platformElementLocators": [
                    {
                        "elementLocator": {
                            "locatorType": "Vf",
                        },
                    }
                ],
                "valueType": {
                    "id": "link",
                },
                "disposition": "New",
                "fieldName": "email",
            },
            fieldDetailsExisting: {
                fieldDetails: {
                    disposition: "Existing",
                    text: "email",
                },
            },
            interactionParameters: {
                readAssertRow: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: true,
                            assertValue: true,
                        },
                    },
                },
                readAssertColumn: {
                    interactionParameters: {
                        id: 'Read/Assert',
                        settings: {
                            extractValue: false,
                            extractColumnAttributes: true,
                            assertColumnAttributes: true,
                            expectedAttributes: {
                                columnVisible: {
                                    value: true,
                                },
                                columnHeaderText: {
                                    value: 'Date',
                                    caseSensitive: true,
                                    normalise: true,
                                },
                            },
                        },
                    },
                },
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
                                                    "email"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=email"
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
                                                                        "text": "http://web@site.comSfdc.onload(function() {    blankshield(document.getElementById('rtp_BBgSSY').parentElement);});",
                                                                        "class": [
                                                                            "invalid"
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
            testCaseXMLColumn: [{
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
                                                    "caseNumber"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=caseNumber"
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
                                                                        "text": "00002617",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "string"
                                                                        ]
                                                                    }
                                                                ]
                                                            },
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
    },
    iframe: {
        Xpath: "//div[@class='oneAlohaPage']//iframe",
    },
    accountName: {
        Xpath: "//input[@value='Make Positive']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "accountName",
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
                                                "caseNumber"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=caseNumber"
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
                                                                    "text": "00002617",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "string"
                                                                    ]
                                                                }
                                                            ]
                                                        },
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
}