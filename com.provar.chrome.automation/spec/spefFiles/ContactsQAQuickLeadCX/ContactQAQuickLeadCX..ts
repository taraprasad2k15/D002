import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfQuickLeadQA = {
    contactViewPsiCX: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=QuickAction&object=Contact&quickAction=QuickLead',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact QuickLead publisher action screen',
        },
    },
    firstName:{
        Xpath:"//div[contains(@class,'activeTemplate')]//input[@data-fieldname='firstname']",
        fieldDetails:{
            disposition:'Existing',
            text:'First Name (FirstName)'
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'AutoLead{UniqueId(4)}'
                    }
                }
            }
        },
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": /Set the First Name field to Auto.*/,
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML:{
            assert:[{
                "title": [
                    "UI Assert"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                                    "FirstName"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=FirstName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DFirstName"
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
                        ], { partial: true, indexKey: 'id' }),
                    }
                ]
            }],
            set:[{
                "title": [
                    "Set the First Name field to AutoLead{UniqueId(4)}"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                            "ui:locator?name=FirstName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DFirstName"
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
                                            "compound"
                                        ],
                                        "parts": [
                                            {
                                                "value": [
                                                    {
                                                        "text": "AutoLead",
                                                        "valueClass": [
                                                            "string"
                                                        ]
                                                    }
                                                ],
                                                "funcCall": [
                                                    {
                                                        "id": [
                                                            "UniqueId"
                                                        ],
                                                         "argument": [
                                                            {
                                                                "id": [
                                                                    "length"
                                                                ],
                                                                "value": [
                                                                    {
                                                                        "text": "4",
                                                                        "class": [
                                                                            "value"
                                                                        ],
                                                                        "valueClass": [
                                                                            "decimal"
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
                                        "text": "Set the First Name field to AutoLead{UniqueId(4)}",
                                        "class": [
                                            "value"
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
            }]
        }
    },
    company: {
        Xpath: "//div[contains(@class,'activeTemplate')]//input[@data-fieldname='company']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Company (Company)'
        },
        executionStatus: {
            set:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set the Company field to Automation Company",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }]
        },
        interactionParameters: {
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'Automation Company'
                    }
                }
            }
        },
        testCaseXML: {
            set:[{
                "title": [
                    "Set the Company field to Automation Company"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                            "ui:locator?name=Company&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DCompany"
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
                                        "text": "Automation Company",
                                        "class": [
                                            "value"
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
                                        "text": "Set the Company field to Automation Company",
                                        "class": [
                                            "value"
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
            }]
        },
    },
    salutationPicklist: {
        Xpath: "//div[contains(@class,'activeTemplate')]//select[@data-fieldname='salutation']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Salutation (Salutation)'
        },
        executionStatus: {
            setByValue:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set the Salutation picklist to Dr.",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }],
        },
        interactionParameters: {   
            setByValue:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'Dr.'
                    }
                }
            },
        },
        testCaseXML:{
            uiAssert:[{
                "title": [
                    "UI Assert"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                                    "Salutation"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Salutation&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DSalutation"
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
                                                                        "text": "Dr.",
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
            }],
            setByValue:[{
                "title": [
                    "Set the Salutation picklist to Dr."
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                            "ui:locator?name=Salutation&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DSalutation"
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
                                        "text": "Dr.",
                                        "class": [
                                            "value"
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
                                        "text": "Set the Salutation picklist to Dr.",
                                        "class": [
                                            "value"
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
            }],
        },
    },
    create:{
        Xpath:"//input[@value = 'Create']",
        fieldDetails:{
            disposition:'Existing',
            text:'Create (publishersharebutton)'
        },
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Create button",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML:{
            click:[{
                "title": [
                    "Click the Create button"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                            "ui:locator?name=publishersharebutton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26action%3Dpublishersharebutton"
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
                                        "text": "Click the Create button",
                                        "class": [
                                            "value"
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
            }],
            assert:[{
                "title": [
                    "UI Assert"
                ],
                "arguments": [
                    {
                         argument: comparisonUtils.addCompareOptions( [
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
                                                    "publishersharebutton"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=publishersharebutton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26action%3Dpublishersharebutton"
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
                                                                        "text": "Create",
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
            }]
        }
    },
    uiAssert: {
        value:{
            interactionParameters:{
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                }
            },
        },
        valueandlabel:{
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                    assertLabel: true,
                    extractLabel: true,
                }
            }
        },
        executionStatus: [{
            name: 'UiAssert',
            type: 'Icon-Successful',
            text: 'UI Assert',
            executionStatus: 'Executed',
            successfulCount: 1,
        }]
    },
}