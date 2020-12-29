export const PCO = {
	PCONewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Provar_Custom_Obj__c&recordType=Default+Layout&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj (Default Layout) New screen',
		},
	},
	PCOClonePsi:{
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj (Default Layout) Clone screen',
		},
	},
	PCOviewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Provar_Custom_Obj__c&recordType=Default+Layout&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj (Default Layout) View screen',
		},
	},
	PCOviewPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Provar_Custom_Obj__c&recordType=Default+Layout',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj (Default Layout) View screen',
		},
	},
	PCOEditPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=Provar_Custom_Obj__c&recordType=Default+Layout',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj (Default Layout) Edit screen',
		},
	},
	PCOHomePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=ObjectHome&object=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj Home',
		},
	},
	PCOAllPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=List&listView=All&object=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj List (All)',
		},
	},
	PCOAllPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=List&listView=All&object=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj List (All)',
		},
	},
	PCOLookupPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=a06',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj Lookup Screen',
		},
	},
	PCOCustomListViewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=List&listView=Custom_List_View&object=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj List (Custom List View)',
		},
	},
	PCOCustomListViewConsolePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=List&listView=Custom_List_View&object=Provar_Custom_Obj__c&tab=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj List (Custom List View)',
		},
	},
	PCOAllConsolePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=List&listView=All&object=Provar_Custom_Obj__c&tab=Provar_Custom_Obj__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Provar Custom Obj List (All)',
		},
	},
	caseLookupPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?lookup=Case',
			itemTypeId: 'SfLookupUiTargetExtension',
		},
		pageDetails: {
			title: 'Case Lookup Screen',
		},
	},
	markAsCurrentStatus: {
		disposition: 'Existing',
		text: 'Mark as Current PathStages (PathAssistantStep_MarkAsCurrentPathStages)',
	},
	markAsComplete: {
		disposition: 'Existing',
		text: 'Mark PathStages as Complete (PathAssistantStep_MarkPathStagesAsComplete)',
	},
	linkedCaseLookupField: {
		disposition: 'Existing',
		text: 'Linked Case (Linked_Case__c)',
	},
	caseNumberField: {
		disposition: 'Existing',
		text: 'Case (CaseNumber)',
	},
	testStatusField: {
		disposition: 'Existing',
		text: 'Test Status (Test_Status__c)'
	},
	testDate: {
		disposition: 'Existing',
		text: 'Test Date (Test_Date__c)'
	},
	pathStage: {
		disposition: 'Existing',
		text: 'Path Stages (Path_Stages__c)'
	},
	name: {
		disposition: 'Existing',
		text: 'Provar Custom Obj Name (Name)'
	},
	name2: {
		disposition: 'Existing',
		text: 'Provar Custom Obj Name (PROVAR_CUSTOM_OBJ__C_NAME)'
	},
	shortDescription: {
		disposition: 'Existing',
		text: 'Short Description (Short_Description__c)'
	},
	testPercent: {
		disposition: 'Existing',
		text: 'Test Percent (Test_percent__c)'
	},
	linkedCase: {
		disposition: 'Existing',
		text: 'Linked Case (Linked_Case__c)'
	},
	linkedCase2: {
		disposition: 'Existing',
		text: 'Linked Case (Linked_Case__r_Name)'
	},
	customRichText: {
		disposition: 'Existing',
		text: 'Custom Rich-Text Field (Custom_Rich_Text_Field__c)',
	},
	customPicklistMulti: {
		disposition: 'Existing',
		text: 'Custom Picklist(Multi) (Custom_Picklist_Multi__c)',
	},
	longitude: {
		disposition: 'Existing',
		text: 'Geo Location (Longitude) (Geo_Location__Longitude__s)',
	},
	latitude: {
		disposition: 'Existing',
		text: 'Geo Location (Latitude) (Geo_Location__Latitude__s)',
	},
	RL: {
		Cases: {
			newButton: {
				disposition: 'Existing',
				text: 'Cases New (New)',
			},
			changeOwnerButton: {
				disposition: 'Existing',
				text: 'Cases Change Owner (ChangeOwnerOne)',
			},
			caseNumber: {
				disposition: 'Existing',
				text: 'Case (CASES_CASE_NUMBER)',
			},
			subject: {
				disposition: 'Existing',
				text: 'Subject (CASES_SUBJECT)',
			},
			dateTimeOpened: {
				disposition: 'Existing',
				text: 'Date/Time Opened (CASES_CREATED_DATE)',
			},
			priority: {
				disposition: 'Existing',
				text: 'Priority (CASES_PRIORITY)',
			},
			editButton: {
				disposition: 'Existing',
				text: 'Cases Edit (Edit)',
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Cases Delete (Delete)',
			},
			viewAllButton: {
				disposition: 'Existing',
				text: 'Cases Go To List (GoToList)',
			},
			contactName: {
				disposition: 'Existing',
				text: 'Contact Name (ContactId)',
			},
			status: {
				disposition: 'Existing',
				text: 'Status (CASES_STATUS)',
			},
		},
	},
};