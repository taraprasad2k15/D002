export const Opportunity = {
	opportunityViewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Opportunity&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity View screen',
		},
	},
	opportunityHomePsi: {
		itemDefinition: {
		  itemClass: 'Page',
		  uiTargetUri: 'sf:ui:target?action=ObjectHome&object=Opportunity',
		  itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
		  title: 'Opportunity Home',
		},
	  },
	opportunityViewCXPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Opportunity',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity View screen',
		},
	},
	opportunityNewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Opportunity&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity New screen',
		},
	},
	opportunityEditPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=Opportunity&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity Edit screen',
		},
	},
	selectPricebookPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=choosePB&object=Pricebook2',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Choose/Add PriceBook',
		},
	},
	selectProductPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=addProd&object=OpportunityLineItem',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity Product addProd screen',
		},
	},
	editProductPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=addProd2&object=OpportunityLineItem',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Opportunity Product addProd2 screen',
		},
	},
	invoiceStatementPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Invoice_Statement__c',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Invoice Statement New screen',
		},
	},
	opportunityNameField: {
		disposition: 'Existing',
		text: 'Opportunity Name (Name)',
	},
	closeDateField: {
		disposition: 'Existing',
		text: 'Close Date (CloseDate)',
	},
	stageField: {
		disposition: 'Existing',
		text: 'Stage (StageName)',
	},
	amountField: {
		disposition: 'Existing',
		text: 'Amount (Amount)',
	},
	accountNameField: {
		disposition: 'Existing',
		text: 'Account Name (AccountId)',
	},
	typeField: {
		disposition: 'Existing',
		text: 'Type (Type)',
	},
	descriptionField: {
		disposition: 'Existing',
		text: 'Description (Description)',
	},
	probabilityField: {
		disposition: 'Existing',
		text: 'Probability (%) (Probability)',
	},
	oportunityOwnerField: {
		disposition: 'Existing',
		text: 'Opportunity Owner (OwnerId)',
	},
	leadSourceField: {
		disposition: 'Existing',
		text: 'Lead Source (LeadSource)',
	},
	homeCX:{
		opportunityNameField: {
			disposition: 'Existing',
			text: 'Opportunity Name (OPPORTUNITY_NAME)',
		},
		accountNameField: {
			disposition: 'Existing',
			text: 'Account Name (ACCOUNT_NAME)',
		},
	    closeDateField: {
			disposition: 'Existing',
			text: 'Close Date (OPPORTUNITY_CLOSE_DATE)',
		},
	},
	RLCX: {
		invoiceStatements: {
			newButton: {
				disposition: 'Existing',
				text: 'Invoice Statements New (New)',
			},
			invoiceNumber: {
				disposition: 'Existing',
				text: 'Invoice Number (NAME)',
			},
			editButton: {
				disposition: 'Existing',
				text: 'Invoice Statements Edit (Edit)',
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Invoice Statements Delete (Delete)',
			},
			heading: {
				disposition: 'Existing',
				text: 'Invoice Statements (Invoice_Statements__r)',
			},
		},
	},
};