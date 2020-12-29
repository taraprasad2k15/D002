export const Angular = {
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
				"title": /.*/,
			}
		}
	},
	firstName: {
		Xpath: "//input[@id='FNAME']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'firstName'
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'set firstName',
				},
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: /.*/,
			executionStatus: 'Executing',
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the First Name field to set firstName',
					executionStatus: 'Executed',
				},
			],
		},
		testCaseXML: {
			name: ['UiWithScreen'],
		title: [/.*/],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the First Name field to set firstName'],
						}],
					}],
				}],
			}],
		},
	},
	lastName: {
		Xpath: "//input[@id='LNAME']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'lastName',
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Send lastName",
				},
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Last Name field to Send lastName',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Last Name field to Send lastName'],
		}]
	},
	mobile: {
		Xpath: "//input[@id='MOBILE']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'mobile',
				
			},
			interactionParameters: {
				id: "Set",
				settings:{
					value: '9988776655'
				}
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Mobile field to 9988776655',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Mobile field to 9988776655'],
		}]
	},
	email:{
		Xpath: "//input[@id='EMAIL']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'email',
				
			},
			interactionParameters: {
				id: "Set",
				settings:{
					value: 'automation@provartesting.com'
				}
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Email field to automation@provartesting.com',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Email field to automation@provartesting.com'],
		}]
	},
	description:{
		Xpath: "//textarea[@id='MOBILEDESC']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'description',
				
			},
			interactionParameters: {
				id: "Set",
				settings:{
					value: 'description of the mobile'
				}
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Description field to description of the mobile',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to description of the mobile'],
		}]
	},
};