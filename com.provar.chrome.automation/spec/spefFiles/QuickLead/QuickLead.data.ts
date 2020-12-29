import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const QuickLead = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'QuickLead publisher action screen',
        },
    },
    salutation: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//a[normalize-space(.)='--None--']",
        fieldDetails: {
            disposition: "Existing",
            text: "Salutation (Salutation)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set By Index",
                settings: {
                    value: 3,
                },
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF QuickLead publisher action',
            executionStatus: 'Executing',
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Set By Index the Salutation picklist to 3',
                    executionStatus: 'Executed',
                },
            ],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF QuickLead publisher action'],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set By Index the Salutation picklist to 3'],
                        }],
                    }],
                }],
            }],
        },
    },
    firstName: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='First Name']/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "First Name (FirstName)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send First Name",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the First Name field to Send First Name',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the First Name field to Send First Name'],
        }]
    },
    lastName: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Last Name*']/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Last Name (LastName)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send LastName",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Last Name field to Send LastName',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Last Name field to Send LastName'],
        }]
    },
    company: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Company*']/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Company (Company)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send Company",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Company field to Send Company',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Company field to Send Company'],
        }]
    },
    email: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Email*']/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Email (Email)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send Email",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Email field to Send Email',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Email field to Send Email'],
        }]
    },
    phone: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Phone*']/following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Phone (Phone)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send Phone",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Phone field to Send Phone',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Phone field to Send Phone'],
        }]
    },
    save: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//div/button[normalize-space(.)='Save']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Create (publishersharebutton)',
        },
        interactionParameters: {
            click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Create button',
                executionStatus: 'Executed',
            },
        ],
        testCaseXML: [{
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
    cancel: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//div/button[normalize-space(.)='Cancel']",
        fieldDetails: {
            disposition: 'Existing',
            text: 'Cancel (publisherCancelButton)',
        },
        interactionParameters: {
            click: {
                interactionParameters: {
                    id: 'Click',
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Cancel button',
                executionStatus: 'Executed',
            },
        ],
        testCaseXML: [{
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
    }
}