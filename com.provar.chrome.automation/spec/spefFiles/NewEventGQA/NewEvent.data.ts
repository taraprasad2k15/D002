import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import { settings } from 'cluster';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const NewEventData = {
    newEventPSI: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'NewEvent publisher action screen',
        },
    },
    newEventTab: {
        Xpath: "//a[normalize-space(.)='New Event']",
    },
    subject: {
        Xpath: "//label[normalize-space(.)='Subject']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Email",
                    },
                },
            },
        },
        executionStatus: {
            set: [
                {
                    name: 'UiDoAction',
                    type: 'Icon-Successful',
                    text: 'Set the Subject field to Email',
                    executionStatus: 'Executed',
                    successfulCount: 1,
                },
            ],
        },
        testCaseXML: {
            set: [{
                name: ['UiDoAction'],
                title: ['Set the Subject field to Email'],
                arguments: [{
                    argument: comparisonUtils.addCompareOptions(
                        [
                            {
                                id: ['interaction'],
                                value: [{
                                    uri: ['ui:interaction?name=set'],
                                }],
                            }], { partial: true, indexKey: 'id' }),
                }],
            }],
        }
    },
    description: {
        Xpath: "//label[normalize-space(.)='Description']/following-sibling::textarea | //label[(.)='Description']/following-sibling::div/textarea",
        fieldDetails: {
            disposition: "Existing",
            text: "Description (Description)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "Description for the QA via Automation Script",
                    },
                },
            },
        },
        executionStatus: [{
            name: 'UiDoAction',
            type: 'Icon-Successful',
            text: 'Set the Description field to Description for the QA via Automation Script',
            executionStatus: 'Executed',
            successfulCount: 1,
        }],
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Description field to Description for the QA via Automation Script'],
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
    startDate: {
        Xpath: "//legend[normalize-space(.)='*Start']/following-sibling::div//label[normalize-space(.)='Date']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Start (StartDateTime)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "18-Nov-2019 08:00",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: /Set the Start field to.*/,
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: [{
            name: ['UiDoAction'],
            title: [/Set the Start field to.*/],
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
    relatedTo: {
        Xpath: "//span[normalize-space(.)='Related To']/../following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Related To (WhatId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "AutomationAccount",
                    },
                },
            },
        },
        executionStatus: {
            set: [{
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Related To reference to AutomationAccount',
                executionStatus: 'Executed',
                successfulCount: 1,
            }],
        },
        testCaseXML: [{
            name: ['UiDoAction'],
            title: ['Set the Related To reference to AutomationAccount'],
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
    contactName: {
        Xpath: "//span[normalize-space(.)='Name']/../following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Name (WhoId)",
        },
        interactionParameters: {
            set: {
                interactionParameters: {
                    id: "Set",
                    settings: {
                        value: "AutomationAccount",
                    },
                },
            },
        },
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Set the Name reference to AutomationAccount',
                executionStatus: 'Executed',
            },
        ],
        testCaseXML:[{
            name: ['UiDoAction'],
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
    saveButton: {
        Xpath: "//button[contains(@class,'publisherShareButton')]/span[.='Save']",
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
        executionStatus: [
            {
                name: 'UiDoAction',
                type: 'Icon-Successful',
                text: 'Click the Create button',
                executionStatus: 'Executed',
                successfulCount: 1,
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
}