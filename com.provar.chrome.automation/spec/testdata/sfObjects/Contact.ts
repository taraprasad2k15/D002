export const Contact = {
	contactViewEmployeePsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Contact&recordType=Employee',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact (Employee) View screen',
		},
	},
	contactViewEmployeePsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Contact&recordType=Employee&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact (Employee) View screen',
		},
	},
	contactViewTest1Psi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Contact&recordType=test1&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contact (test1) View screen',
		},
	},
	contactEditPsi: {
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Contanct Edit screen',
		},
	},
	RL: {
		attachments: {
			uploadFile: {
				disposition: 'Existing',
				text: 'Notes & Attachments Upload Files (NewFile)'
			},
			downloadButton: {
				disposition: 'Existing',
				text: 'Notes & Attachments Download (Download)'
			},
			newNoteButton: {
				disposition: 'Existing',
				text: 'Notes & Attachments New Note (NewNote)'
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Notes & Attachments Del (Delete)'
			},
			deleteButton2: {
				disposition: 'Existing',
				text: 'Notes & Attachments Delete (Delete)'
			},
			title: {
				disposition: 'Existing',
				text: 'File Name (Title)',
			},
			title2: {
				disposition: 'Existing',
				text: 'Title (Title)',
			},
			type: {
				disposition: 'Existing',
				text: 'Type (RecordType)',
			},
			lastModified: {
				disposition: 'Existing',
				text: 'Last Modified (LastModifiedDate)',
			},
			createdBy: {
				disposition: 'Existing',
				text: 'Created By (CreatedById)',
			},
			viewAllLink: {
				disposition: 'Existing',
				text: 'Notes & Attachments View All (viewAll)',
			},
			attachmentHeading: {
				disposition: 'Existing',
				text: 'Notes & Attachments (CombinedAttachments)',
			},
		},
		campaignHistory: {
			addToCampaign: {
				disposition: 'Existing',
				text: 'Campaign History Add to Campaign (AddCampaign)'
			},
			status: {
				disposition: 'Existing',
				text: 'Status (CM_STATUS)'
			},
			campaignName: {
				disposition: 'Existing',
				text: 'Campaign Name (CAMPAIGN_NAME)'
			},
			startDate: {
				disposition: 'Existing',
				text: 'Start Date (CAMPAIGN_START_DATE)'
			},
			type: {
				disposition: 'Existing',
				text: 'Type (CAMPAIGN_CAMPAIGN_TYPE)'
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Campaign History Del (Delete)'
			},
			editButton: {
				disposition: 'Existing',
				text: 'Campaign History Edit (Edit)'
			},
			heading: {
				disposition: 'Existing',
				text: 'Campaign History (CampaignMembers)'
			},
			viewAll: {
				disposition: 'Existing',
				text: 'Campaign History Go To List (GoToList)'
			},
		},
		Account: {
			accountName: {
				disposition: 'Existing',
				text: 'Account Name (ACCOUNT_NAME)'
			},
			billingCity: {
				disposition: 'Existing',
				text: 'Billing City (ACCOUNT_ADDRESS1_CITY)'
			},
			phone: {
				disposition: 'Existing',
				text: 'Phone (ACCOUNT_PHONE1)'
			},
			viewAll: {
				disposition: 'Existing',
				text: 'Accounts Go To List (GoToList)'
			},
			newButton: {
				disposition: 'Existing',
				text: 'Accounts New (New)'
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Accounts Delete (Delete)'
			},
			editButton: {
				disposition: 'Existing',
				text: 'Accounts Edit (Edit)'
			},
			heading: {
				disposition: 'Existing',
				text: 'Accounts (Accounts__r)'
			},
		},
	},
};