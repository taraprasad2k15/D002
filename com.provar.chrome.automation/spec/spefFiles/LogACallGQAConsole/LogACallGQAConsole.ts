import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const LogACallConsoleData = {
    NewTaskViewPSI: {
        itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'LogACall publisher action screen',
		},
    },
    subject: {
        Xpath: "//label[normalize-space(.)='Subject']/following-sibling::div//input",
        fieldDetails: {
            disposition: "Existing",
            text: "Subject (Subject)",
        },
        interactionParameters: {
            set:{
                interactionParameters:{
                    id: "Set",
                    settings: {
                        value: "Send Quote",
                    },
                },
            },
        },
        executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Subject field to Send Quote',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
        testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Send Quote'],
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