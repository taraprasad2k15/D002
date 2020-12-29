import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
const comparisonUtils: ExpectedResultSupport = new ExpectedResultSupport();
export const SfNewCaseCX = {

	caseType: {
		caseTypeXpath: "//span[text()='Type']/ancestor::div[1]//a | //table//tr/td[contains(@class,'labelCol') and  ( .//text() = 'Type' )]/following-sibling::td[1]/span/select",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Feature Request',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Type picklist to Feature Request',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Type picklist to Feature Request'],
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
	caseOrigin: {
		caseOriginXpath: "//span[text()='Case Origin']/ancestor::div[1]//a | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Case Origin' )]/following-sibling::td[1]//span/select",
		interactionParameters: {
			interactionParameters: {
				id: 'Set By Index',
				settings: {
					value: 4,
				},
			}
		},
		interactionParametersAssert: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractMessage: true,
					assertMessage: true,
					extractLabel: true,
					assertLabel: true,
					expectedMessage: {
						value: 'Error: You must enter a value',
						caseSensitive: true,
						normalise: true,
					},
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set By Index the Case Origin picklist to 4',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set By Index the Case Origin picklist to 4'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=setByIndex'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
		executionStatusAssert: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXMLAssert: [{
			name: ['UiAssert'],
			title: ['UI Assert'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['fieldAssertions'],
					value: [{
						uiFieldAssertion: [{
							fieldLocator: [{
								uri: ['ui:locator?name=Origin&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DOrigin'],
							}],
							attributeAssertions: [{
								uiAttributeAssertion: [{
									attributeName: ['value'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: '--None--',
									}]
								},
								{
									attributeName: ['message'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Error: You must enter a value',
									}]
								},
								{
									attributeName: ['label'],
									comparisonType: ['EqualTo'],
									normalize: ['true'],
									value: [{
										text: 'Case Origin',
									}]
								}]
							}]
						}],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	subject: {
		Xpath: "//label[normalize-space(.)='Subject']/following-sibling::input | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Subject' )]/following-sibling::td[1]/input",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Test Case New screen via automation script',
				},
			}
		},
		interactionParameters2: {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractLabel: true,
					assertLabel: true,
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Subject field to Test Case New screen via automation script',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Subject field to Test Case New screen via automation script'],
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
	description: {
		Xpath: "//label[normalize-space(.)='Description']/following-sibling::textarea | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Description' )]/following-sibling::td[1]/textarea",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Short description',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Description field to Short description',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Description field to Short description'],
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
	customCheckbox: {
		Xpath: "//label[normalize-space(.)='Custom Checkbox']/following-sibling::input | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Custom Checkbox' )]/following-sibling::td[1]/input[@type='checkbox']",
		interactionParameters: {
			check: {
				interactionParameters: {
					id: 'Check',
				}
			},
			uncheck: {
				interactionParameters: {
					id: 'Uncheck',
				}
			},
			toggle: {
				interactionParameters: {
					id: 'Toggle',
				}
			},
		},
		executionStatus: {
			check: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Check the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			uncheck: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Uncheck the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
			toggle: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Toggle the Custom Checkbox field',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: {
			check: [{
				name: ['UiDoAction'],
				title: ['Check the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=check'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			uncheck: [{
				name: ['UiDoAction'],
				title: ['Uncheck the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=uncheck'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
			toggle: [{
				name: ['UiDoAction'],
				title: ['Toggle the Custom Checkbox field'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['interaction'],
						value: [{
							uri: ['ui:interaction?name=toggle'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
		},
	},
	customTime: {
		Xpath: "//label[normalize-space(.)='Custom Time Field']/following-sibling::div//input | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Custom Time Field' )]/following-sibling::td[1]/span/input",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: '23:30',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Time Field field to 23:30',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Time Field field to 23:30'],
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
	customDate:{
		Xpath: "(//a[contains(normalize-space(.),'12/2020')])[2]",
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Today link the Custom Date-Time Field field',
				executionStatus: 'Executed',
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Today link the Custom Date-Time Field field'],
		}],
	},
	customRichText: {
		Xpath: "//span[text()='Custom Rich-Text Field']/ancestor::div[1]//p | //table//tr/td[contains(@class,'labelCol') and (.//text() = 'Custom Rich-Text Field' )]/following-sibling::td[1]//div/iframe",
		interactionParameters: {
			interactionParameters: {
				id: 'Set',
				settings: {
					value: 'Adding text into Rich-Text field',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Set the Custom Rich-Text Field field to Adding text into Rich-Text field',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Set the Custom Rich-Text Field field to Adding text into Rich-Text field'],
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
	customPicklistSelect: {
		Xpath: "//ul[contains(@id,'source-list')]/li/div[.='Green'] | //select/optgroup[contains(@label,'Available')]/option[.='Green']",
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Select',
				settings: {
					value: 'Green',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Select the Custom Picklist(Multi) field to Green',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Multi-Select the Custom Picklist(Multi) field to Green'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfSelect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	customPicklistDeselect: {
		Xpath: "//ul[contains(@id,'selected-list')]/li/div[.='Orange'] | //select[contains(@title,'Chosen')]//option[.='Orange']",
		interactionParameters: {
			interactionParameters: {
				id: 'SF Multi Deselect',
				settings: {
					value: 'Orange',
				},
			}
		},
		executionStatus: [
			{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Multi-Deselect the Custom Picklist(Multi) field to Orange',
				executionStatus: 'Executed',
				successfulCount: 1,
			},
		],
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Multi-Deselect the Custom Picklist(Multi) field to Orange'],
			arguments: [{
				argument: comparisonUtils.addCompareOptions([{
					id: ['interaction'],
					value: [{
						uri: ['ui:interaction?name=sfDeselect'],
					}],
				}], { partial: true, indexKey: 'id' }),
			}],
		}],
	},
	provarCustObj: {
		Xpath: "//table//tr/td[contains(@class,'labelCol') and  ( .//text() = 'Provar_Custom_Obj' )]/following-sibling::td[1]/span/a/img",
		interactionParameters: {
			lookup: {
				interactionParameters: {
					id: 'SF Lookup',
					settings: {
						value: '{CaseNumber}',
					},
				},
			},
		},
		executionStatus: {
			lookup: [
				{
					name: 'UiDoAction',
					type: 'Icon-Successful',
					text: 'Lookup the Provar_Custom_Obj reference',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
			assert: [
				{
					name: 'UiAssert',
					type: 'Icon-Successful',
					text: 'UI Assert',
					executionStatus: 'Executed',
					successfulCount: 1,
				},
			],
		},
		testCaseXML: {
			lookup: [
				{
					name: ['UiDoAction'],
					title: ['Lookup the Provar_Custom_Obj reference'],
					arguments: [{
						argument: comparisonUtils.addCompareOptions([{
							id: ['interaction'],
							value: [{
								uri: ['ui:interaction?name=sfLookup'],
							}],
						}], { partial: true, indexKey: 'id' }),
					}],
				},
			],
			assert: [{
				name: ['UiAssert'],
				title: ['UI Assert'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['fieldAssertions'],
						value: [{
							uiFieldAssertion: [{
								fieldLocator: [{
									uri: ['ui:locator?name=ParentId&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DCase%26field%3DParentId'],
								}],
								attributeAssertions: [{
									uiAttributeAssertion: [{
										attributeName: ['value'],
										comparisonType: ['EqualTo'],
										normalize: ['true'],
									},
									{
										attributeName: ['label'],
										comparisonType: ['EqualTo'],
										normalize: ['true'],
										value: [{
											text: 'Parent Case',
										}]
									}]
								}]
							}],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
			}],
		},
	},
	searchText: {
		Xpath: "//label[@class='assistiveText']/following-sibling::input[@type='text']",
		fieldDetails: {
			disposition: "Existing",
			text: "Search (SearchName)",
		},
		interactionParameters: {
			set: {
				interactionParameters: {
					id: "Set",
					settings: {
						value: "{PCOName}",
					},
				},
			},
		},
		executionStatus: {
			set: [{
				name: 'UiWithScreen',
				type: 'Icon-ExecutingPaused',
				text: 'On SF Provar Custom Obj Lookup screen',
				executionStatus: 'Executing',
				successfulCount: 0,
				children: [
					{
						name: 'UiDoAction',
						type: 'Icon-Successful',
						text: /Set the Search text to.*Automation.*/,
						executionStatus: 'Executed',
						successfulCount: 1,
					},
				],
			}],
		},
		testCaseXML: {
			set: [{
				name: ['UiWithScreen'],
				title: ['On SF Provar Custom Obj Lookup screen'],
				arguments: [{
					argument: comparisonUtils.addCompareOptions([{
						id: ['target'],
						value: [{
							uri: ['sf:ui:target?lookup=Provar_Custom_Obj__c'],
						}],
					}], { partial: true, indexKey: 'id' }),
				}],
				clauses: [{
					clause: [{
						steps: [{
							apiCall: [{
								name: ['UiDoAction'],
								title: ['Set the Search text to {PCOName}'],
								arguments: [{
									argument: comparisonUtils.addCompareOptions([{
										id: ['interaction'],
										value: [{
											uri: ['ui:interaction?name=set'],
										}],
									}], { partial: true, indexKey: 'id' }),
								}],
							}],
						}],
					}],
				}],
			}],
		},
	},
	go: {
		Xpath: "//label[@class='assistiveText']/following-sibling::input[@value=' Go! ' and @class='btn']",
		fieldDetails: {
			disposition: "Existing",
			text: "Go! (go)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Go! button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}]
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Go! button'],
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
	PCOName: {
		Xpath: "//div[@class='srch']/following-sibling::div[contains(@class, 'lookupBlock')]//table//tr[2]//a",
		fieldDetails: {
			disposition: "Existing",
			text: "Provar Custom Obj Name (Name)",
		},
		executionStatus: {
			click: [{
				name: 'UiDoAction',
				type: 'Icon-Successful',
				text: 'Click the Provar Custom Obj Name button',
				executionStatus: 'Executed',
				successfulCount: 1,
			}],
		},
		testCaseXML: [{
			name: ['UiDoAction'],
			title: ['Click the Provar Custom Obj Name button'],
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
};