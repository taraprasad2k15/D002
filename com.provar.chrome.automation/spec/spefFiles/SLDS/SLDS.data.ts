export const SLDS = {
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
	textInput: {
		Xpath: "//label[normalize-space(.)='Text Input']/following-sibling::div//input",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textInput',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'set textInput',
				},
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textInput'
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: 'set textInput',
				},
			},
		},
		executionStatus: {
			name: 'UiWithScreen',
			type: 'Icon-ExecutingPaused',
			text: 'On SF VF_LightningDesignSysytem page with pageobject VF_ Lightning Design Sysytem',
			executionStatus: 'Executing',
			children: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Set the Text Input field to set textInput',
					executionStatus: 'Executed',
				},
			],
		},
		testCaseXML: {
			name: ['UiWithScreen'],
			title: ['On SF VF_LightningDesignSysytem page with pageobject VF_ Lightning Design Sysytem'],
			clauses: [{
				clause: [{
					steps: [{
						apiCall: [{
							name: ['UiDoAction'],
							title: ['Set the Text Input field to set textInput'],
						}],
					}],
				}],
			}],
		},
	},
	textarea: {
		Xpath: "//label[normalize-space(.)='Textarea Label']/following-sibling::div//textarea",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textareaLabel',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Send textareaLabel",
				},
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'textareaLabel',
			},
			interactionParameters: {
				id: "Set",
				settings: {
					value: "Send textareaLabel",
				},
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Set the Textarea Label field to Send textareaLabel',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Textarea Label field to Send textareaLabel'],
		}]
	},
	checkbox: {
		Xpath: "//label[normalize-space(.)='Checkbox Label']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkboxLabel',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkboxLabel',
				
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Checkbox Label field',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Checkbox Label field'],
		}]
	},
	monday:{
		Xpath: "//fieldset[1]//label/span[normalize-space(.)='Mon']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'monday',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'monday',
				
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Monday field',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Monday field'],
		}]
	},
	checkbox2:{
		Xpath: "//label[normalize-space(.)='All contacts in the account owned by you']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkbox2',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'checkbox2',
				
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Checkbox 2 field',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Checkbox 2 field'],
		}]
	},
	radio:{
		Xpath: "//label[normalize-space(.)='Radio Label One']/span[1]",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'radio',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'radio',
				
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Radio field',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Radio field'],
		}]
	},
	wed:{
		Xpath: "//fieldset[4]//label/span[normalize-space(.)='Wed']",
		fieldDetails: {
			disposition: "New",
		},
		modificationParameters: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'wed',
				locator: {
					type: 'By SLDS Label'
				}
			},
			interactionParameters: {
				id: "Check",
			},
		},
		modificationParametersVF: {
			fieldParameters: {
				disposition: 'New',
				fieldName: 'wed',
				
			},
			interactionParameters: {
				id: "Check",
			},
		},
		executionStatus: [{
			name: 'UiDoAction',
			type: 'Icon-Successful',
			text: 'Check the Wed field',
			executionStatus: 'Executed'
		}],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Check the Wed field'],
		}]
	},
};