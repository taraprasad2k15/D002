export const VFT1Data = {
	PSI: [
		{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfLayoutUiTargetExtension',
			},
			pageDetails: {
				title: 'Contact (Embedded VF) View screen',
			},
		},
		{
			"itemDefinition": {
				"itemClass": "Page",
				"itemTypeId": "VfUiTargetExtension",
				"embedded": true,
				"pageObjectId": /.*/,
			},
			"pageDetails": {
				"title": /.*/,
			}
		},
		{
			"itemDefinition": {
				"itemClass": "Table",
				"itemTypeId": "VfTableLocatorExtension",
				"embedded": false,
				"pageObjectId": /.*/,
			}
		}],
	lastname: {
		xpath: "//span[normalize-space(.)='Contact LN VK']",
		fieldDetails: {
			disposition: 'New',
			fieldName: 'lastName',
		},
		testcaseXML: [
			{
				name: ['UiWithScreen'],
				title: [/.*/],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiWithRow'],
								title: ['With Con rows {1}'],
								clauses: [{
									clause: [{
										steps: [{
											apiCall: [{
												"title": [
													"UI Assert"
												],
											}],
										}],
									}],
								}],
							}],
						}],
					}],
				}],
			}],
		executionStatus: [{
			"name": "UiWithScreen",
			"type": "Icon-ExecutingChildPaused",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiWithRow",
					"type": "Icon-ExecutingPaused",
					"text": "With Con rows {1}",
					"executionStatus": "Executing",
					"children": [
						{
							"name": "UiAssert",
							"type": "Icon-Successful",
							"text": "UI Assert",
							"executionStatus": "Executed",
						}
					]
				}
			]
		}],
	},
	email: {
		xpath: "//a[normalize-space(.)='contactvwv@testemail.com']",
		fieldDetails: {
			disposition: 'New',
			fieldName: 'email',
		}
	},
	phone: {
		xpath: "//span[normalize-space(.)='1234567890']",
		fieldDetails: {
			fieldName: 'mobile',
		},
		columnInteractionParameter: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: "Mobile",
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
	},
	originalVal: {
		xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//td/span[normalize-space(.)='On Hold']",
		fieldDetails: {
			disposition: "Existing",
			fieldName: 'OldValue',
		},
		columnInteractionParameter: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
						columnHeaderText: {
							value: "Original Value",
							caseSensitive: true,
							normalise: true,
						},
						columnVisible: {
							value: true,
						},
					},
				},
			}
		},
	},
	heading: {
		fieldDetails: {
			disposition: 'Existing',
			text: 'Case History (Histories)',
		},
		xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//a[normalize-space(.)='Case History(2)']",
		rowCount: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					assertTableAttributes: true,
					extractTableAttributes: true,
					expectedAttributes: {
						displayRowCount: {
							value: 2,
						},
						totalRowCount: {
							value: 2,
						},
					},
				}
			},
		},
	},
};