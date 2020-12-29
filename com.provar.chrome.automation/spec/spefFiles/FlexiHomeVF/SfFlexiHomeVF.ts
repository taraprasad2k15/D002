import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfFlexiHomeVF = {
    PSI: {
        new: {
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
        existing: {
            "itemDefinition": {
                "itemClass": "Page",
                "itemTypeId": "VfUiTargetExtension",
                "disposition": "Existing",
                "embedded": false,
            },
            "pageDetails": {
                "title": "VF_ Account_ Page",
            }
        },
    },
    accountName: {
        Xpath: "//label[contains((.),'Account Name')]/../following-sibling::td//input",
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
            id: 'Set',
            settings: {
                value: 'AutomationAccount',
            },
        },
        executionStatus: {
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Visualforce Page (VF_Account_Page) component in Custom Home Page",
            "executionStatus": "Executing",
            "children": [{
                "name": "UiDoAction",
                "type": "Icon-Successful",
                "text": "Set the Account Name field to AutomationAccount",
                "executionStatus": "Executed",
                "successfulCount": 1,
            }],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF Visualforce Page (VF_Account_Page) component in Custom Home Page'],
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
                            title: ['Set the Account Name field to AutomationAccount'],
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
    type: {
        Xpath: "//label[(.)='Type']/../following-sibling::td//select",
        fieldDetails: {
            "platformElementLocators": [
                {
                    "elementLocator": {
                        "locatorType": "Vf",
                    },
                }
            ],
            "valueType": {
                "id": "choice",
            },
            "disposition": "New",
            "fieldName": "type",
        },
        interactionParameters: {
            id: 'Set By Index',
            settings: {
                value: '5',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set By Index the Type picklist to 5",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set By Index the Type picklist to 5'],
            arguments: [{
                argument: comparisonUtils.addCompareOptions([{
                    id: ['interaction'],
                    value: [{
                        uri: ['ui:interaction?name=setByIndex'],
                    }],
                }], { partial: true, indexKey: 'id' }),
            }],
        }],
    },
    phone: {
        Xpath: "//label[(.)='Phone']/../following-sibling::td//input",
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
        interactionParameters: {
            id: 'Set',
            settings: {
                value: '9999009999',
            },
        },
        executionStatus: [{
            name: "UiDoAction",
            type: "Icon-Successful",
            text: "Set the Phone field to 9999009999",
            executionStatus: "Executed",
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Phone field to 9999009999'],
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
        Xpath: "//input[@class='btn' and @value='Save']",
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
            "fieldName": "save",
        },
        executionStatus: [{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Click the Save button",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Click the Save button'],
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
    iframe: {
        Xpath: "//iframe[contains(@name,'vfFrameId')]",
    },
    link: {
        Xpath: "//span[(.)='Visual force Component']",
    },
}