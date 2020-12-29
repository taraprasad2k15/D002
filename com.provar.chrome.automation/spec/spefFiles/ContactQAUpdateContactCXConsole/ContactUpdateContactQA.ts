import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { Standard } from '../../testdata/sfObjects/Standard';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfConUpdateContactQA = {
    contactViewPsiCx: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?object=Contact&action=QuickAction&quickAction=Contact.UpdateContactAction',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Contact.UpdateContactAction publisher action screen',
        },
    },
    accountLookupPsiCX: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?lookup=001',
            itemTypeId: 'SfLookupUiTargetExtension',
        },
        pageDetails: {
            title: 'Account Lookup Screen',
        },
    },
    countId: {
        Xpath: "//table[@class = 'list']//tbody//tr[2]//th//a",
        interactionParameters: {
            interactionParameters: {
                id: 'Click',
            }
        },
        fieldDetails: {
            disposition:'Existing',
            text:'Account Name (Name)'
        },
        executionStatus: [
            {
                "name": "UiWithScreen",
                "type": "Icon-ExecutingPaused",
                "text": "On SF Account Lookup screen",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": "Click the Description button",
                        "executionStatus": "Executed",
                        "successfulCount": 1,
                    },
                ]
            }
        ],
        testCaseXML:[{
            "title": [
                "On SF Account Lookup screen"
            ],
            "arguments": [
                {
                    argument: comparisonUtils.addCompareOptions( [
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
                                        "sf:ui:target?lookup=Account"
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
                                    "text": "On SF Account Lookup screen",
                                    "class": [
                                        "value"
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
                                "scTabLead Source"
                            ],
                            "value": [
                                {
                                    "text": "None",
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
                                            "title": [
                                                "Click the Description button"
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
                                                                        /ui:locator\?name=Name&path=resultsFrame%2FresultsTable%2FresultsRow&rowLocator=Name.*/
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
                                                                    "text": "Click the Description button",
                                                                    "class": [
                                                                        "value"
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
            ],
        }],
    },
    account:{
        Xpath:"//div[contains(@class,'activeTemplate')]//div[(.) = 'First Name']/following-sibling::div/input[@data-fieldname = 'firstname']",
        fieldDetails:{
            disposition:'Existing',
            text:'First Name (FirstName)'
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'TestAccount'
                    }
                }
            }
        },
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the First Name field to TestAccount",
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
                                                    "Name"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=Name&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DName"
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
                                                                "comparisonLead Source": [
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
                    "Set the First Name field to TestAccount"
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
                                            "ui:locator?name=FirstName&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DFirstName"
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
                                        "text": "TestAccount",
                                        "class": [
                                            "value"
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
                                        "text": "Set the First Name field to TestAccount",
                                        "class": [
                                            "value"
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
    birthDate:{
        Xpath:"//div[contains(@class,'activeTemplate')]//div[(.) = 'Birthdate']/following-sibling::div//span/input",
        fieldDetails:{
            disposition:'Existing',
            text:'Birthdate (Birthdate)'
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'20/12/2021'
                    }
                }
            },
            sfToday:{
                interactionParameters:{
                    id:'SF Today'
                }
            }
        },
        executionStatus:{
            sfToday:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Today link the Birth Date field",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }],
            set:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set the Birthdate field to 2021-12-20",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }]
        },
        testCaseXML:{
            set:[{
                "title": [
                    "Set the Birthdate field to 2021-12-20"
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
                                            "ui:locator?name=Birthdate&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DBirthdate"
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
                                        "text": "1639958400000",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "date"
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
                                        "text": "Set the Birthdate field to 2021-12-20",
                                        "class": [
                                            "value"
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
            sfToday:[{ 
                "title": [
                    "Today link the BirthDate field"
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
                                            "ui:locator?name=Custom_Date__c&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DAccount%26field%3DCustom_Date__c"
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
                                            "ui:interaction?name=sfToday"
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
                                        "text": "Today link the BirthDate field",
                                        "class": [
                                            "value"
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
                ]
            }]
        }
    },
    primaryTab:{
		Xpath:"(//iframe[contains(@name,'ext-comp')])[2]"
	},
    mailingcity:{
        Xpath:"//div[contains(@class,'activeTemplate')]//div[(.) = 'Mailing City']/following-sibling::div/input",
        fieldDetails:{
            disposition:'Existing',
            text:'Mailing City (MailingCity)'
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'Delhi'
                    }
                }
            }
        },
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Mailing City field to Delhi",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML:{
            set:[{
                "title": [
                    "Set the Mailing City field to Delhi"
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
                                            "ui:locator?name=MailingCity&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DMailingCity"
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
                                        "text": "Delhi",
                                        "class": [
                                            "value"
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
                                        "text": "Set the Mailing City field to Delhi",
                                        "class": [
                                            "value"
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
    leadSource: {
        Xpath: "//div[contains(@class,'activeTemplate')]//div[(.) = 'Lead Source']/following-sibling::div//select",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Lead Source (LeadSource)'
        },
        executionStatus: {
            setByIndex:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set By Index the Lead Source picklist to 2",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }],
            setByValue:{
                "name": "UiWithScreen",
                "type": "Icon-ExecutingPaused",
                "text": "On SF Contact Publisher Action UpdateContactAction screen",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": "Set the Lead Source picklist to Other",
                        "executionStatus": "Executed",
                        "successfulCount": 1,
                    }
                ]
            }
        },
        interactionParameters: {   
            setByValue:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'Other'
                    }
                }
            },
            setByIndex:{
                interactionParameters:{
                    id:'Set By Index',
                    settings:{
                        value:'2'
                    }
                }
            },
        },
        testCaseXML:{
            setByIndex:[{
                "title": [
                    "Set By Index the Lead Source picklist to 2"
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
                                            "ui:locator?name=LeadSource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DLeadSource"
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
                                            "ui:interaction?name=setByIndex"
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
                                        "text": "2",
                                        "class": [
                                            "value"
                                        ],
                                        "valueClass": [
                                            "string"
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
                                        "text": "Set By Index the Lead Source picklist to 2",
                                        "class": [
                                            "value"
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
            setByValue:{
                "title": [
                    "On SF Contact Publisher Action UpdateContactAction screen"
                ],
                "arguments": [
                    {
                        argument: comparisonUtils.addCompareOptions( [
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
                                            "sf:ui:target?object=Contact&action=QuickAction&quickAction=Contact.UpdateContactAction"
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
                                        "text": "On SF Contact Publisher Action UpdateContactAction screen",
                                        "class": [
                                            "value"
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
                                    "scTabType"
                                ],
                                "value": [
                                    {
                                        "text": "CurrentTab",
                                        "class": [
                                            "value"
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
                                "name": [
                                    "substeps"
                                ],
                                "steps": [
                                    {
                                        "apiCall": [
                                            {
                                                "title": [
                                                    "Set the Lead Source picklist to Other"
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
                                                                            "ui:locator?name=LeadSource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DLeadSource"
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
                                                                        "text": "Other",
                                                                        "class": [
                                                                            "value"
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
                                                                        "text": "Set the Lead Source picklist to Other",
                                                                        "class": [
                                                                            "value"
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
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },
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
                                                    "LeadSource"
                                                ],
                                                "fieldLocator": [
                                                    {
                                                        "uri": [
                                                            "ui:locator?name=LeadSource&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DLeadSource"
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
                                                                        "text": "Web",
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
        },
    },
    update:{
        Xpath:"//input[@value = 'Update']",
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
                                            "ui:locator?name=publishersharebutton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3Dpublishersharebutton"
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
                                                            "ui:locator?name=publishersharebutton&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26action%3Dpublishersharebutton"
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
                                                                        "text": "Update",
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
    desc:{
        Xpath:"//div[contains(@class,'activeTemplate')]//div[(.) = 'Description']/following-sibling::div/textarea",
        fieldDetails:{
            disposition:'Existing',
            text:'Description (Description)'
        },
        interactionParameters:{
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'TestAccount Description'
                    }
                }
            }
        },
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Description field to TestAccount Description",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML:[{
            "title": [
                "Set the Description field to TestAccount Description"
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
                                        "ui:locator?name=Description&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DDescription"
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
                                    "text": "TestAccount Description",
                                    "class": [
                                        "value"
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
                                    "text": "Set the Description field to TestAccount Description",
                                    "class": [
                                        "value"
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
    accountName: {
        XpathText: "//div[contains(@class,'activeTemplate')]//input[@data-fieldname = 'accountid']",
        XpathLookup:"//div[contains(@class,'activeTemplate')]//input[@data-fieldname = 'accountid']/following-sibling::a/img",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Account Name (AccountId)'
        },
        interactionParameters: {
            set:{
                interactionParameters:{
                    id:'Set',
                    settings:{
                        value:'Test'
                    }
                }
            }
        },
        executionStatus: {
            set:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": 'Set the Account Name reference to Test',
                "executionStatus": "Executed",
                "successfulCount": 1, 
            }],
            lookup:[{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Lookup the Account Name reference",
                "executionStatus": "Executed",
                "successfulCount": 1,  
            }]
        },
        testCaseXML:{
            set: [{
                "title": [
                    "Set the Account Name reference to Test"
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
                                            "ui:locator?name=AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DAccountId"
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
                                        "text": "Set the Account Name reference to Test",
                                        "class": [
                                            "value"
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
            lookup:[{
                "title": [
                    "Lookup the Account Name reference"
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
                                            "ui:locator?name=AccountId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DContact%26field%3DAccountId"
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
                                            "ui:interaction?name=sfLookup"
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
                                        "text": "Lookup the Account Name reference",
                                        "class": [
                                            "value"
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
                ]
            }]
        }
    },
    accountId: {
        Xpath: "//table[@class = 'list']//tbody//tr[2]//th//a",
        interactionParameters: {
            interactionParameters: {
                id: 'Click',
            }
        },
        fieldDetails: {
            disposition:'Existing',
            text:'Account Name (Name)'
        },
        executionStatus: [
            {
                "name": "UiWithScreen",
                "type": "Icon-ExecutingPaused",
                "text": "On SF Account Lookup screen",
                "executionStatus": "Executing",
                "successfulCount": 0,
                "children": [
                    {
                        "name": "UiDoAction",
                        "type": "Icon-Successful",
                        "text": "Click the Account Name button",
                        "executionStatus": "Executed",
                        "successfulCount": 1,
                    },
                ]
            }
        ],
        testCaseXML:[{
            "title": [
                "On SF Account Lookup screen"
            ],
            "arguments": [
                {
                    argument: comparisonUtils.addCompareOptions( [
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
                                        "sf:ui:target?lookup=Account"
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
                                    "text": "On SF Account Lookup screen",
                                    "class": [
                                        "value"
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
                                "scTabType"
                            ],
                            "value": [
                                {
                                    "text": "None",
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
                                            "title": [
                                                "Click the Account Name button"
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
                                                                        "ui:locator?name=Name&path=resultsFrame%2FresultsTable%2FresultsRow&rowLocator=Name+%3D+%27test%27"
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
                                                                    "text": "Click the Account Name button",
                                                                    "class": [
                                                                        "value"
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
            ],
        }],
    },
    uiAssert: {
        value:{
            interactionParameters:{
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
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