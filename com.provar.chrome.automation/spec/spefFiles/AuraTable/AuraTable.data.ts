export const AuraTableData = {
	PSI: [
		{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfFlexiUiTargetExtension',
			},
			pageDetails: {
				title: /.*/,
			},
		},
		{
			"itemDefinition": {
				"itemClass": "Table",
				"itemTypeId": "LightningComponentTableLocatorExtension",
				"embedded": true,
			},
		},
		{
			"itemDefinition": {
				"itemClass": "Page",
				"itemTypeId": "SfAuraUiTargetExtension",
				"embedded": true,
			}
		}],
	productName: {
		xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//select[@name='Product']",
		fieldDetails: {
			disposition: 'New',
		},
		modificationParameters: {
			// pageStructureParameters:
			// 	[
			// 		{
			// 			level: 1,
			// 			type: 'Page',
			// 			pageLayout: 'SeleniumUiTargetExtension'
			// 		},
			// 	],
			fieldParameters: {
				disposition: 'New',
				fieldName: 'product',
				locator: {
					type: 'By ProvarX™',
				}
			},
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			},
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
};