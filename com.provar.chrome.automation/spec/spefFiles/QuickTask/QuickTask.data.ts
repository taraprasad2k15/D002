import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();

export const QuickTask = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'CustomGlobalAction publisher action screen',
        },
    },
    subject: {
        Xpath: "//label[normalize-space(.)='Subject']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send Quote",
                },
            },
        },
        executionStatus: {
            name: 'UiWithScreen',
            type: 'Icon-ExecutingPaused',
            text: 'On SF CustomGlobalAction publisher action',
            executionStatus: 'Executing',
            children: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Set the Subject field to Send Quote',
                    executionStatus: 'Executed',
                },
            ],
        },
        testCaseXML: {
            name: ['UiWithScreen'],
            title: ['On SF CustomGlobalAction publisher action'],
            clauses: [{
                clause: [{
                    steps: [{
                        apiCall: [{
                            name: ['UiDoAction'],
                            title: ['Set the Subject field to Send Quote'],
                        }],
                    }],
                }],
            }],
        },
    },
    comment: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//textarea",
        fieldDetails: {
            disposition: "Existing",
            text: "Comments (Description)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send comment",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Comments field to Send comment',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Comments field to Send comment'],
        }]
    },
    result: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//section/div/div/div/div/div/div/div/div/div/div/input",
        fieldDetails: {
            disposition: "Existing",
            text: "Call Result (CallDisposition)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send Result",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Call Result field to Send Result',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Call Result field to Send Result'],
        }]
    },
    name: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Name']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send name",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Name reference to Send name',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Name reference to Send name'],
        }]
    },
    relatedTo: {
        Xpath: "//div[contains(@class, 'active') and contains(@class, 'open') and (contains(@class, 'forceModal') or contains(@class, 'uiModal'))][last()]//label[normalize-space(.)='Related To']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Related To (WhatId)",
        },
        modificationParameters: {
            interactionParameters: {
                id: "Set",
                settings: {
                    value: "Send whatId",
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Related To reference to Send whatId',
            executionStatus: 'Executed'
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Related To reference to Send whatId'],
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