import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const NewLeadData = {
    NewLeadPSI: {
        itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'NewLead publisher action screen',
		},
    },
    salutation: {
        Xpath: "//a[@class='select']",
        fieldDetails: {
            disposition: "Existing",
            text: "Salutation (Salutation)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Ms.",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Salutation picklist to Ms.',
				executionStatus: 'Executed',
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Salutation picklist to Ms.'],
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
    },
	firstName:{
        Xpath: "//label/span[normalize-space(.)='First Name']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "First Name (FirstName)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Provar",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the First Name field to Provar',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the First Name field to Provar'],
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
	},
	lastName:{
        Xpath: "//label/span[normalize-space(.)='Last Name']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Last Name (LastName)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Testing",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Last Name field to Testing',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Last Name field to Testing'],
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
	},
	email:{
        Xpath: "//label/span[normalize-space(.)='Email']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Email (Email)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "sample@provar.com",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
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
	},
	phone:{
        Xpath: "//label/span[normalize-space(.)='Phone']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Phone (Phone)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "9988776655",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
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
	},
	company:{
        Xpath: "//label/span[normalize-space(.)='Company']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Company (Company)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "ProvarTesting",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
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
	},
	title:{
        Xpath: "//label/span[normalize-space(.)='Title']/../following-sibling::input",
        fieldDetails: {
            disposition: "Existing",
            text: "Title (Title)",
        },
        modificationParameters: {
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "No Title",
                    },
                },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
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
    },
    save: {
		Xpath: "//button[contains(@class,'publisherShareButton')]/span[normalize-space(.)='Save']",
		fieldDetails:{
            disposition: 'Existing',
            text: 'Create (publishersharebutton)', 
        },
        interactionParameters: {
            click:{
                interactionParameters:{
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