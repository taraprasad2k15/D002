export const Account = {
	accountViewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Account&recordType=Default&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account (Default) View screen',
		},
	},
	customObjViewAllPSI: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Account&recordType=test1&relatedList=CustomObjs__r',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'CustomObjs__r screen for Account object',
		},
	},
	accountViewPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Account&recordType=Default',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account (Default) View screen',
		},
	},
	addTeamMemberPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=AccountTeamMemberMultiAdd&object=AccountTeamMember',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account Team Member',
		},
	},
	addTeamMemberPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=add&object=AccountTeamMember',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account Team Member',
		},
	},
	editTeamMemberPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=AccountTeamMember&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account Team Member Edit screen',
		},
	},
	editTeamMemberPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=AccountTeamMember',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Account Team Member',
		},
	},
	accountOwner: {
		disposition: 'Existing',
		text: 'Account Owner (OwnerId)',
	},
	accountName: {
		disposition: 'Existing',
		text: 'Account Name (Name)',
	},
	parentAccount: {
		disposition: 'Existing',
		text: 'Parent Account (ParentId)',
	},
	billingStreet: {
		disposition: 'Existing',
		text: 'Billing Street (BillingStreet)',
	},
	shippingCountry: {
		disposition: 'Existing',
		text: 'Shipping Country (ShippingCountry)',
	},
	type: {
		disposition: 'Existing',
		text: 'Type (Type)',
	},
	industry: {
		disposition: 'Existing',
		text: 'Industry (Industry)',
	},
	customLinkGoogleSearch:{
		disposition: 'Existing',
		text: 'Google Search (GoogleSearch)',	
	},
	broker: {
		disposition: 'Existing',
		text: 'Broker (Broker__c)',
	},
	customDate: {
		disposition: 'Existing',
		text: 'Custom Date (Custom_Date__c)',
	},
	website: {
		disposition: 'Existing',
		text: 'Website (Website)',
	},
	phone: {
		disposition: 'Existing',
		text: 'Phone (Phone)',
	},
	approved: {
		disposition: 'Existing',
		text: 'Approved (ProvarQS__Approved__c)',
	},
	annualRevenue: {
		disposition: 'Existing',
		text: 'Annual Revenue (AnnualRevenue)',
	},
	description: {
		disposition: 'Existing',
		text: 'Description (Description)',
	},
	billingAddress: {
		disposition: 'Existing',
		text: 'Billing Address (BillingAddress)',
	},
	createdBy: {
		disposition: 'Existing',
		text: 'Created By (CreatedById)',
	},
	googleSearch: {
		disposition: 'Existing',
		text: 'Google Search (GoogleSearch)',
	},
	RL:{
		opportunities:{
			newButton: {
				disposition: 'Existing',
				text: 'Opportunities New (New)'
			},
			oppName: {
				disposition: 'Existing',
				text: 'Opportunity Name (OPPORTUNITY_NAME)'
			},
			stage: {
				disposition: 'Existing',
				text: 'Stage (OPPORTUNITY_STAGE_NAME)'
			},
			amount: {
				disposition: 'Existing',
				text: 'Amount (OPPORTUNITY_AMOUNT)'
			},
			closeDate: {
				disposition: 'Existing',
				text: 'Close Date (OPPORTUNITY_CLOSE_DATE)'
			},
			delete:{
				disposition: 'Existing',
				text: 'Opportunities Delete (Delete)'
			},
			edit:{
				disposition: 'Existing',
				text: 'Opportunities Edit (Edit)'
			},
			heading:{
				disposition: 'Existing',
				text: 'Opportunities (Opportunities)'
			},
			viewAll:{
				disposition: 'Existing',
				text: 'Opportunities Go To List (GoToList)'
			},
		},
		customObj:{
			customObjName: {
				disposition: 'Existing',
				text: 'CustomObj Name (NAME)'
			},
			newButton: {
				disposition: 'Existing',
				text: 'CustomObjs New (New)'
			},
			changeOwner: {
				disposition: 'Existing',
				text: 'CustomObjs Change Owner (ChangeOwnerOne)'
			},
			heading: {
				disposition: 'Existing',
				text: 'CustomObjs (CustomObjs__r)'
			},
			editButton: {
				disposition: 'Existing',
				text: 'CustomObjs Edit (Edit)'
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'CustomObjs Delete (Delete)'
			},

		}
	},
};