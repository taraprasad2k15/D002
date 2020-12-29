import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiHomeAura = {
    PSI: {
        new: {
            "itemDefinition": {
                "itemClass": "Page",
                "itemTypeId": "SfFlexiUiTargetExtension",
                "disposition": "New",
                "embedded": false,
            },
            "pageDetails": {
                "title": /.*/,
            }
        },
        existing: {
            "itemDefinition": {
                "itemClass": "Page",
                "itemTypeId": "SfFlexiUiTargetExtension",
                "disposition": "Existing",
                "embedded": false,
            },
            "pageDetails": {
                "title": "NewContactLDS",
            }
        },
    },
    firstName: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//label[contains((.),'First Name')]/following-sibling::div/input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Aura",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "firstName",
        },
        interactionParameters: {
            id: 'Set',
            settings: {
                value: 'AutomationFirst',
            },
        },
        executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF NewContactLDS component in Custom Home Page",
            "executionStatus": "Executing",
            "children": [{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set the First Name field to AutomationFirst",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF NewContactLDS component in Custom Home Page'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['target'],
                }], { partial: true, indexKey: 'id' }),
            }],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set the First Name field to AutomationFirst'],
                            arguments: [{
                                argument: comparisonUtils.addCompareOptions([{
                                    id: ['interaction'],
                                    value: [{
                                        uri: ['ui:interaction?name=set'],
                                    }],
                                }], { partial: true, indexKey: 'id' }),
                            }],
                        }],
                    }],
                }],
            }],
        },
    },
    lastName: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//label[contains((.),'Last Name')]/following-sibling::div/input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Aura",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "lastName",
        },
        interactionParameters: {
            id: 'Set',
            settings: {
                value: 'AutomationLast',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Last Name field to AutomationLast",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Last Name field to AutomationLast'],
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
    phone: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//label[contains((.),'Phone Number')]/following-sibling::div/input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Aura",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "phoneNumber",
        },
        interactionParameters: {
            id: 'Set',
            settings: {
                value: '9999009999',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Phone Number field to 9999009999",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Phone Number field to 9999009999'],
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
    title: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//label[contains((.),'Title')]/following-sibling::div/input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Aura",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "title",
        },
        interactionParameters: {
            id: 'Set',
            settings: {
                value: 'AutomationTitle',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Title field to AutomationTitle",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Title field to AutomationTitle'],
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
    email: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//label[contains((.),'Email')]/following-sibling::div/input",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Aura",
                    },
                }
            ],
            "valueType": {
                "id": "text",
            },
            "disposition": "New",
            "fieldName": "email",
        },
        interactionParameters: {
            id: 'Set',
            settings: {
                value: 'automation@email.com',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Email field to automation@email.com",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Email field to automation@email.com'],
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
    save: {
        Xpath: "//h3[(.)='Custom Aura Component']/../../..//button[(.)='Save Contact']",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "XPath",
                    },
                }
            ],
            "valueType": {
                "id": "button",
            },
            "disposition": "New",
            "fieldName": "saveContact",
        },
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Save Contact button",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Save Contact button'],
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
}