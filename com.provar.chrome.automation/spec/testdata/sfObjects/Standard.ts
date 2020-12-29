export const Standard = {
	interactionold: {
		click: {
			id: 'ActionFieldInteractionExtension',
		},
		sfLookup: {
			id: 'SfLookupFieldInteractionExtension',
		},
		newInSfLookup: {
			id: 'NewInSfLookupFieldInteractionExtension',
		},
		set: {
			id: 'SetFieldInteractionExtension',
		},
		sfSelect: {
			id: 'SfSelectFieldInteractionExtension',
		},
		sfDeselect: {
			id: 'SfDeselectFieldInteractionExtension',
		},
		sfReferenceType: {
			id: 'SfReftypeFieldInteractionExtension',
		},
		readAssert: {
			"id": "ReadFieldInteractionExtension",
		},
		check: {
			id: 'CheckFieldInteractionExtension',
		},
		hover: {
			id: 'HoverFieldInteractionExtension',
		},
		sfToday: {
			id: 'SfTodayFieldInteractionExtension',
		},
		sfCombo: {
			id: 'SfComboFieldInteractionExtension',
		},
	},
	interaction: {
		click: {
			id: 'action',
		},
		sfLookup: {
			id: 'sfLookup',
		},
		newInSfLookup: {
			id: 'newInSfLookup',
		},
		set: {
			id: 'set',
		},
		sfSelect: {
			id: 'sfSelect',
		},
		sfDeselect: {
			id: 'sfDeselect',
		},
		sfReferenceType: {
			id: 'sfReftype',
		},
		readAssert: {
			"id": "assert",
		},
		check: {
			id: 'check',
		},
		uncheck: {
			id: 'uncheck',
		},
		hover: {
			id: 'hover',
		},
		sfToday: {
			id: 'sfToday',
		},
		sfCombo: {
			id: 'sfCombo',
		},
		chooseFile: {
			id: 'file',
		},
		sfChange:{
			id: 'sfChange',
		},
		clear:{
			id: 'clear',
		}
	},
	applicableInteractions: {
		Text: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			readMode1: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
			enterableMode2: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"]
		},
		Textarea: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"]
		},
		Picklist: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "Clear"]
		},
		Richtext: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
			enterableMode1: [ "Read/Assert", "Set Source", "Set", "Clear"],
			enterableMode2: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Insert Image", "Clear"],
		},
		MultiPicklist: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "SF Multi Deselect", "Start Inline Edit", "SF Multi Select", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "SF Multi Deselect", "SF Multi Select", "Clear"]
		},
		Checkbox: {
			readMode: ["Check", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Start Inline Edit", "Toggle", "Uncheck"],
			enterableMode: ["Check", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Toggle", "Uncheck"]
		},
		Button: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Download", "Drag", "Drop", "Hover", "Read/Assert"],
		ButtonCX: ["Click", "Click and Cancel", "Click and Confirm", "Choose File", "Context Menu", "Double Click", "Download", "Drag", "Drop", "Hover", "Read/Assert"],
		Date: {
			readMode: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"]
		},
		Time: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "Clear"]
		},
		TimeCX: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"]
		},
		DateTime: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Set Time", "Set Date", "Clear"]
		},
		DateTimeCX: {
			readMode: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "SF Today", "Clear"],
			enterableMode1: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "SF Today", "Clear"]
		},
		Lookup: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			readMode1: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Start Inline Edit", "Clear"],
			readMode2: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Start Inline Edit"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "New In SF Lookup", "Read/Assert", "Set", "SF Lookup", "Clear"]
		},
		Lookup1: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "SF Lookup", "Clear"],
		LookupCX: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear",],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "SF Lookup", "Clear"]
		},
		LookupQACX: {
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set By Index", "Set", "SF Lookup", "Clear"]
		},
		Reference: {
			readMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Start Inline Edit", "Clear"],
			enterableMode: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "New In SF Lookup", "Read/Assert", "Set", "SF Lookup", "SF Reference Type", "Clear"],
			enterableMode2: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "New In SF Lookup", "Read/Assert", "SF Lookup", "SF Reference Type", "Clear"]
		},
		ReadOnly: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Clear"],
		ReadOnly2: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Clear"],
		ReadOnly3: ["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert"],
		ReadOnlyLink:["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Download", "Drag", "Drop", "Hover", "Read/Assert" ],
		ReadOnlyLinkCX:["Click", "Click and Cancel", "Click and Confirm", "Context Menu", "Double Click", "Download", "Drag", "Drop", "Hover", "Read/Assert","Start Inline Edit"],
		PageError:["Context Menu", "Double Click","Drag","Drop","Hover","Read/Assert"],
		RadioButton:["Click", "Click and Cancel", "Click and Confirm", "Check", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Set", "Uncheck", "Clear"],
		RadioButton2:["Check", "Context Menu", "Double Click", "Drag", "Drop", "Hover", "Read/Assert", "Toggle", "Uncheck"],
	},
	CurrentTabPsi: {
		itemDefinition: {
			itemClass: 'Scaffold',
			itemLabel: 'SF Lightning Console Application',
			properties: [
				{
					name: 'sfConsoleTabType',
					value: 'CurrentTab'
				},
			],
		},
	},
	CurrentTabCXPsi: {
		itemDefinition: {
			itemClass: 'Scaffold',
			itemLabel: 'SF Console Application',
			properties: [
				{
					name: 'sfConsoleTabType',
					value: 'CurrentTab'
				},
			],
		},
	},
	notInAConsoleTabPsi: {
		itemDefinition: {
			itemClass: 'Scaffold',
			itemLabel: 'SF Lightning Console Application',
			properties: [
				{
					name: 'sfConsoleTabType',
					value: 'None'
				},
			],
		},
	},
	notInAConsoleTabCXPsi: {
		itemDefinition: {
			itemClass: 'Scaffold',
			itemLabel: 'SF Console Application',
			properties: [
				{
					name: 'sfConsoleTabType',
					value: 'None'
				},
			],
		},
	},
	homeTabPsi: {
		itemDefinition: {
			itemClass: 'Scaffold',
			itemLabel: 'SF Lightning Console Application',
			properties: [
				{
					name: 'sfConsoleTabType',
					value: 'HomeTab'
				},
			],
		},
	},
	recordTypePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: /sf:ui:target.*&action=recordTypeNew&object=.*/,
			itemTypeId: 'SfRecordTypeUiTargetExtension',
		},
		pageDetails: {
			title: 'Record Type selection screen',
		},
	},
	saveButtonField: {
		disposition: 'Existing',
		text: 'Save (save)',
	},
	saveAndNewButton: {
		disposition: 'Existing',
		text: 'Save & New (save_new)',
	},
	saveAndNewButton2: {
		disposition: 'Existing',
		text: 'Save and New (save_new)',
	},
	cancelButton: {
		disposition: 'Existing',
		text: 'Cancel (cancel)',
	},
	pageError: {
		disposition: 'Existing',
		text: 'pageErrors',
	},
	newButton: {
		disposition: 'Existing',
		text: 'New (New)',
	},
	importButton: {
		disposition: 'Existing',
		text: 'Import (Import)',
	},
	addToCampaignButton: {
		disposition: 'Existing',
		text: 'Add to Campaign (MassAddToCampaign)',
	},
	changeStatusButton: {
		disposition: 'Existing',
		text: 'Change Status (2)',
	},
	changeOwnerButton: {
		disposition: 'Existing',
		text: 'Change Owner (ChangeOwnerOne)',
	},
	sendListEmailButton: {
		disposition: 'Existing',
		text: 'Send List Email (SendListEmailAction)',
	},
	listSearchBox: {
		disposition: 'Existing',
		text: 'List Search (listSearch)',
	},
	searchType: {
		disposition: 'Existing',
		text: 'Search Type (searchType)',
	},
	selectRow: {
		disposition: 'Existing',
		text: 'Select Row (SelectRow)',
	},
	editActionButton: {
		disposition: 'Existing',
		text: 'Edit (Edit)',
	},
	deleteActionButton: {
		disposition: 'Existing',
		text: 'Delete (Delete)',
	},
	changeOwnerActionButton: {
		disposition: 'Existing',
		text: 'Change Owner (ChangeOwnerOne_action)',
	},
	saveEditButton: {
		disposition: 'Existing',
		text: 'Save (SaveEdit)',
	},
	saveEditButton1: {
		disposition: 'Existing',
		text: 'SaveEdit (SaveEdit)',
	},
	cancelEditButton: {
		disposition: 'Existing',
		text: 'Cancel (CancelEdit)',
	},
	editButton: {
		disposition: 'Existing',
		text: 'Edit (Edit)',
	},
	searchBoxLookup: {
		disposition: 'Existing',
		text: 'Search (SearchName)',
	},
	goButtonLookup: {
		disposition: 'Existing',
		text: 'Go! (go)'
	},
	recordTypeDescription: {
		disposition: 'Existing',
		text: 'Description (recordTypeDescription)'
	},
	recordTypeRdBt: {
		disposition: 'Existing',
		text: 'Record Type (RecordType)'
	},
	nextBt: {
		disposition: 'Existing',
		text: 'Continue (save)'
	},
};
