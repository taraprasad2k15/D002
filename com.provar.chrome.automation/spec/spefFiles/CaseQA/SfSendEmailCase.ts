import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfSendEmailCase = {
    emailPubActionPSI: {
        itemDefinition: {
            itemClass: 'Page',
            uiTargetUri: 'sf:ui:target?action=QuickAction&object=Case&quickAction=Case.SendEmail',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Case.SendEmail publisher action screen',
        },
    },
    feedTab: {
        Xpath: "//span[@class='title' and normalize-space(.)='Feed']|//a[normalize-space(.)='Feed']",//some sf change
    },
    emailTab: {
        Xpath: "//span[@class='title' and normalize-space(.)='Email']",
    },
    from: {
        Xpath: "//span[contains(@class,'uiPicklistLabel') and normalize-space(.)='From']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            text: "From (ValidatedFromAddress)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Ravindra Yadav <ravindra.yadav@provartesting.com>",
                    },
                },
            },
            setByIndex: {
                interactionParameters: {
                    id: "Set By Index",
                    settings: {
                        value: "1",
                    },
                },
            },
        },
        executionStatus: {
            setByIndex: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set By Index the From picklist to 1',
                executionStatus: 'Executed',
                successfulCount: 1,
            },
            ],
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the From picklist to Ravindra Yadav <ravindra.yadav@provartesting.com>',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            setByIndex: [{
                "title": [
                    "Set By Index the From picklist to 1"
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
                                            "ui:locator?name=ValidatedFromAddress&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEmailMessage%26field%3DValidatedFromAddress"
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
                                        "text": "1",
                                        "class": [
                                            "value"
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
                                        "text": "Set By Index the From picklist to 1",
                                        "class": [
                                            "value"
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
            set: [{
                name: ['UiDoAction'],
                title: ['Set the From picklist to Ravindra Yadav <ravindra.yadav@provartesting.com>'],
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
    },
    to: {
        Xpath: "//div[contains(@class,'supportToInputEmailRecipients')]/div//li[contains(@class,'pillContainerListItem')]/input",
        Xpath1: "//div[contains(@class,'supportToInputEmailRecipients')]/div//a/span",
        XpathDelete: "//div[contains(@class,'supportToInputEmailRecipients')]//span[normalize-space(.)='To']/../..//following-sibling::div/div[contains(@class,'emailuiBaseAddressContainer')]//li[@class='pillContainerListItem']//span[@class='deleteIcon']",
        XpathDeleteU: "//label[normalize-space(.)='To']//following-sibling::div//a[normalize-space(.)='Press Delete to Remove' and contains(@class,'deleteAction')]",
        fieldDetails: {
            disposition: "Existing",
            text: "To (ToAddress)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "regtest@provartesting.com",
                    },
                },
            },
            assert: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the To field to regtest@provartesting.com',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert : [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the To field to regtest@provartesting.com'],
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
        testCaseXMLAssert:[{
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
                                                "ToAddress"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=ToAddress&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEmailMessage%26field%3DToAddress"
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
                                                                    "text": "regtest@provartesting.com",
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
            ],
        }],
    },
    bcc: {
        Xpath: "//div[contains(@class, 'supportInputEmailRecipients')]//span[normalize-space(.)='Bcc']/../following-sibling::div//li/input",
        Xpath1 : "//div[contains(@class, 'supportInputEmailRecipients')]//span[normalize-space(.)='Bcc']/../following-sibling::div//a/span",
        XpathDelete: "//div[contains(@class,'supportInputEmailRecipients')]//span[normalize-space(.)='Bcc']/../..//following-sibling::div/div[contains(@class,'emailuiBaseAddressContainer')]//li[@class='pillContainerListItem']//span[@class='deleteIcon']",
        XpathDeleteU: "",
        fieldDetails: {
            disposition: "Existing",
            text: "Bcc (BccAddress)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "admin1@test1.provar.com",
                    },
                },
            },
            assert: {
                interactionParameters: {
                    id: "Read/Assert",
                    settings: {
                        extractValue: true,
                        assertValue: true,
                    },
                },
            }
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Bcc field to admin1@test1.provar.com',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
            assert : [{
                name: 'UiAssert',
                type: 'Icon-Successful',
                text: 'UI Assert',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Bcc field to admin1@test1.provar.com'],
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
        testCaseXMLAssert:[{
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
                                                "BccAddress"
                                            ],
                                            "fieldLocator": [
                                                {
                                                    "uri": [
                                                        "ui:locator?name=BccAddress&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DEmailMessage%26field%3DBccAddress"
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
                    ], { partial: true, indexKey: 'id' }),
                }
            ],
        }],
    },
    cc: {
        Xpath: "//label[normalize-space(.)='Cc']/following-sibling::div//input",
        XpathButton: "//div[@class='expandLinks']/a[normalize-space(.)='Cc']",
        fieldDetails: {
            disposition: "Existing",
            text: "Cc (CcAddress)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "admin1@test1.provar.com.mpintsand",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Cc field to admin1@test1.provar.com.mpintsand',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Cc field to admin1@test1.provar.com.mpintsand'],
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
    },
    subject: {
        Xpath: "//div[contains(@class,'uiInputText')]//span[normalize-space(.)='Subject']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Subject for email via Automation API",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Subject field to Subject for email via Automation API',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Subject field to Subject for email via Automation API'],
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
    },
    htmlBody: {
        Xpath: "//div[@class='cke_contents cke_reset']",
        XpathF: "//div[@class='oneAlohaPage']",
        XpathU: "//body",
        XpathB: "//div[contains(@class,'cke_contents')]",
        fieldDetails: {
            disposition: "Existing",
            text: "HTML Body (HtmlBody)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "HTML Body for the email sent via Automation API scripts",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the HTML Body field to HTML Body for the email sent via Automation API scripts',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the HTML Body field to HTML Body for the email sent via Automation API scripts'],
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
    },
    createButton: {
        Xpath: "//button[contains(@class,'publisherShareButton')]/span",
        fieldDetails: {
            disposition: "Existing",
            text: "Create (publishersharebutton)",
        },
        interactionParameters: {
            click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
        },
        executionStatus: {
            click: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Click the Create button',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        testCaseXML: {
            click: [{
                name: ['UiDoAction'],
                title: ['Click the Create button'],
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
    },
}