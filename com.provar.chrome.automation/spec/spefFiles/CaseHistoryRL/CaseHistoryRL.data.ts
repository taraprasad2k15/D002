export const CaseHistoryRLData = {
	PSI:{
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case View screen',
		},
	},
	date: {
		testcaseXML:[{
			"name": [
				"UiWithRow"
			],
			"clauses": [
				{
					"clause": [
						{
							"name": [
								"substeps"
							],
							"steps": [
								{
									"apiCall": [
										{
											"title": [
												"UI Assert"
											],
										}
									]
								}
							]
						}
					]
				}
			]
		}],
		executionStatus:[{
			"name": "UiWithRow",
			"type": "Icon-ExecutingPaused",
			"executionStatus": "Executing",
			"children": [
				{
					"name": "UiAssert",
					"type": "Icon-Successful",
					"text": "UI Assert",
					"executionStatus": "Executed",
				}
			]
		}],
		fieldDetails:{
			disposition: 'Existing',
			text: 'Date (CreatedDate)',
		},
		xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//tr[1]//span[contains(normalize-space(.),'2020')]/div/*/*",
	},
	field:{
		fieldDetails:{
			disposition: 'Existing',
			text: 'Field (Field)',
		},
		xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//td/span[normalize-space(.)='Status']|//h2//span[contains(text(),'Case History')]/ancestor::article//td//span/*[normalize-space()='Status']/*/*",
	},
    user:{
        xpath: "//div[contains(@class,'active') and contains(@class,'oneContent')]//td/a|//h2//span[contains(text(),'Case History')]/ancestor::article//tr[1]//td//a",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'CreatedById',
        },
    },
    originalVal:{
        xpath:"//div[contains(@class,'active') and contains(@class,'oneContent')]//td/span[normalize-space(.)='On Hold']|//h2//span[contains(text(),'Case History')]/ancestor::article//td//span/*[normalize-space()='On Hold']/*/*",
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
		fieldDetails:{
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