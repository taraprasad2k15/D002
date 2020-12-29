export const VFT2Data = {
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
		xpath: "(//span[normalize-space(.)='Contact LN VK'])[2]",
		fieldDetails: {
			disposition: 'New',
			fieldName: 'innerColumn1',
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
												name: ['UiWithRow'],
												title: ['With Con 1 rows {1}'],
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
					"type": "Icon-ExecutingChildPaused",
					"text": "With Con rows {1}",
					"executionStatus": "Executing",
					"children": [
						{
							"name": "UiWithRow",
							"type": "Icon-ExecutingPaused",
							"text": "With Con 1 rows {1}",
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
				}
			]
		}],
	},
	email: {
		xpath: "//a[normalize-space(.)='contactvwv@testemail.com']",
		fieldDetails: {
			disposition: 'New',
			fieldName: 'innerColumn2',
		}
	}
};