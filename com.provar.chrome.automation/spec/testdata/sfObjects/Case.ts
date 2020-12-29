export const Case = {
	caseNewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Case&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case New screen',
		},
	},
	caseNewPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=New&object=Case',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case New screen',
		},
	},
	caseEditPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=Edit&object=Case&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case Edit screen',
		},
	},
	caseCommentViewAllPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?object=Case&relatedList=CaseComments',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'CaseComments screen for Case object',
		},
	},
	caseViewPsi: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Case&noOverride=true',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case View screen',
		},
	},
	caseViewPsiCX: {
		itemDefinition: {
			itemClass: 'Page',
			uiTargetUri: 'sf:ui:target?action=View&object=Case',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Case View screen',
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
	parentCaseLookupField: {
		disposition: 'Existing',
		text: 'Parent Case (ParentId)',
	},
	caseNumberField: {
		disposition: 'Existing',
		text: 'Case (CaseNumber)',
	},
	caseTypeField: {
		disposition: 'Existing',
		text: 'Type (Type)',
	},
	caseOriginField: {
		disposition: 'Existing',
		text: 'Case Origin (Origin)',
	},
	testDateField: {
		disposition: 'Existing',
		text: 'TestDate (TestDate__c)',
	},
	subject: {
		disposition: 'Existing',
		text: 'Subject (Subject)',
	},
	testMulti: {
		disposition: 'Existing',
		text: 'TestMulti (TestMulti__c)',
	},
	testRichText: {
		disposition: 'Existing',
		text: 'TestRichText (TestRichText__c)',
	},
	webMail: {
		disposition: 'Existing',
		text: 'Email Address (SuppliedEmail)',
	},
	webPhone: {
		disposition: 'Existing',
		text: 'Web Phone (SuppliedPhone)',
	},
	description: {
		disposition: 'Existing',
		text: 'Description (Description)',
	},
	customCheckbox: {
		disposition: 'Existing',
		text: 'Custom Checkbox (Custom_Checkbox__c)',
	},
	customTime: {
		disposition: 'Existing',
		text: 'Custom Time Field (Custom_Time_Field__c)',
	},
	customDate: {
		disposition: 'Existing',
		text: 'Custom Date Field (Custom_Date_Field__c)',
	},
	customDateTime: {
		disposition: 'Existing',
		text: 'Custom Date-Time Field (Custom_Date_Time_Field__c)',
	},
	customRichText: {
		disposition: 'Existing',
		text: 'Custom Rich-Text Field (Custom_Rich_text_Field__c)',
	},
	customPicklistMulti: {
		disposition: 'Existing',
		text: 'Custom Picklist(Multi) (Custom_Picklist_Multi__c)',
	},
	provarCustObj: {
		disposition: 'Existing',
		text: 'Provar_Custom_Obj (Provar_Custom_Obj__c)',
	},
	status: {
		disposition: 'Existing',
		text: 'Status (Status)',
	},
	caseNumber:{
		disposition: 'Existing',
		text: 'Case Number (CaseNumber)',
	},
	caseOwner:{
		disposition: 'Existing',
		text: 'Case Owner (OwnerId)',
	},
	RL:{
		caseComment: {
			commentNewPsi: {
				itemDefinition: {
					itemClass: 'Page',
					uiTargetUri: 'sf:ui:target?action=New&object=CaseComment&noOverride=true',
					itemTypeId: 'SfLayoutUiTargetExtension',
				},
				pageDetails: {
					title: 'Case Comment New',
				},
			},
			commentNewPsiCX: {
				itemDefinition: {
					itemClass: 'Page',
					uiTargetUri: 'sf:ui:target?action=New&object=CaseComment',
					itemTypeId: 'SfLayoutUiTargetExtension',
				},
				pageDetails: {
					title: 'Case Comment New',
				},
			},
			commentEditPsi: {
				itemDefinition: {
					itemClass: 'Page',
					uiTargetUri: 'sf:ui:target?action=Edit&object=CaseComment&noOverride=true',
					itemTypeId: 'SfLayoutUiTargetExtension',
				},
				pageDetails: {
					title: 'Case Comment Edit',
				},
			},
			commentEditPsiCX: {
				itemDefinition: {
					itemClass: 'Page',
					uiTargetUri: 'sf:ui:target?action=Edit&object=CaseComment',
					itemTypeId: 'SfLayoutUiTargetExtension',
				},
				pageDetails: {
					title: 'Case Comment Edit',
				},
			},
			newButton: {
				disposition: 'Existing',
				text: 'Case Comments New (New)',
			},
			newButtonCX: {
				disposition: 'Existing',
				text: 'Case Comments New (newComment)',
			},
			body:{
				disposition: 'Existing',
				text: 'Body (body)'
			},
			commentCX:{
				disposition: 'Existing',
				text: 'Comment (comment)'
			},
			saveButton: {
				disposition: 'Existing',
				text: 'Save Button (saveButton)',
			},
			user: {
				disposition: 'Existing',
				text: 'User (CreatedById)',
			},
			public: {
				disposition: 'Existing',
				text: 'Public (IsPublished)',
			},
			createdDate:{
				disposition: 'Existing',
				text: 'Created Date (CreatedDate)',
			},
			comment:{
				disposition: 'Existing',
				text: 'Comment (CommentBody)',
			},
			editButton: {
				disposition: 'Existing',
				text: 'Case Comments Edit (Edit)',
			},
			cancelButton: {
				disposition: 'Existing',
				text: 'Cancel Button (cancelButton)',
			},
			deleteButton: {
				disposition: 'Existing',
				text: 'Case Comments Del (Delete)',
			},
			viewAllButton: {
				disposition: 'Existing',
				text: 'Case Comments Go To List (GoToList)',
			},
		},
		caseAttachments: {
			uploadFile: {
				disposition: 'Existing',
				text: 'Attachments Attach File (AttachFile)'
			},
			fileName:{
				disposition: 'Existing',
				text: 'File Name (Title)'
			},
			fileLastModified: {
				disposition: 'Existing',
				text: 'Last Modified (LastModifiedDate)'
			},
			fileSize: {
				disposition: 'Existing',
				text: 'Size (ContentSize)'
			},
			fileExtension: {
				disposition: 'Existing',
				text: 'File Extension (FileExtension)'
			},
			viewAllLink: {
				disposition: 'Existing',
				text: 'Attachments Go To List (GoToList)',
			},
			attachmentHeading: {
				disposition: 'Existing',
				text: 'Attachments (CombinedAttachments)',
			},
		},
	},
};