import { StartProvar } from '../spefFiles/StartProvar.spec';
import { StopProvar } from '../spefFiles/StopProvar.spec';
import { SfNewCaseSpec } from '../spefFiles/StdObjNew/SfNewCase.spec';
import { SfNewCaseCXSpec } from '../spefFiles/StdObjNewCX/SfNewCaseCX.spec';
import { SfNewPCOSpec } from '../spefFiles/CustObjNew/SfNewPCO.spec';
import { SfLeadHomeSpec } from '../spefFiles/StdObjHome/SfLeadHome.spec';
import { SfLeadHomeCXSpec } from '../spefFiles/StdObjHomeCX/SfLeadHomeCX.spec';
import { SfAllOpenLeadSpec } from '../spefFiles/StdObjListView/SfAllOpenLead.spec';
import { SfPCOHomeSpec } from '../spefFiles/CustObjHome/SfPCOHome.spec';
import { SfPCOAllSpec } from '../spefFiles/CustObjListView/PCOAll.spec';
import { SfPCOAllCXSpec } from '../spefFiles/CustObjListViewCX/PCOAllCX.spec';
import { SfLookupsSpec } from '../spefFiles/StdObjLookups/Lookups.spec';
import { SfCustObjLookupsSpec } from '../spefFiles/CustObjLookups/Lookups.spec';
import { SfCaseViewSpec } from '../spefFiles/StdObjView/SfCaseView.spec';
import { SfCaseRLSpec } from '../spefFiles/CustObjRL/CaseRL.spec';
import { SfCaseCommentRLSpec } from '../spefFiles/StdObjRL/SfCaseCommentRL.spec';
import { SfCaseCommentRLCXSpec } from '../spefFiles/StdObjRLCX/SfCaseCommentRLCX.spec';
import { SfPCOViewSpec } from '../spefFiles/CustObjView/SfPCOView.spec';
import { SfPCOViewCXSpec } from '../spefFiles/CustObjViewCX/SfPCOViewCX.spec';
import { SfNewCaseOppSpec } from '../spefFiles/OppQA/SfNewCaseOpp.spec';
import { SfNewTaskLeadSpec } from '../spefFiles/LeadQA/SfNewTaskLead.spec';
import { SfSendEmailCaseSpec } from '../spefFiles/CaseQA/SfSendEmailCase.spec';
import { SfContactNewEventSpec } from '../spefFiles/ContactQA/SfContactNewEvent.spec';
import { SfAccountLogACallSpec } from '../spefFiles/AccountQA/SfAccountLogACall.spec';
import { SfCaseLogACallCXSpec } from '../spefFiles/CaseQACX/SfCaseLogACallCX.spec';
import { SfNewTaskLeadCXSpec } from '../spefFiles/LeadQACX/SfNewTaskLeadCX.spec';
import { SfNewNoteAccountCXSpec } from '../spefFiles/AccountQACX/SFNewNoteAccountCX.spec';
import { SfNewEventContactCXSpec } from '../spefFiles/ContactQACX/SfNewEventContactCX.spec';
import { SfNewCaseOpportunityCXSpec } from '../spefFiles/OpportunityQACX/SfNewCaseOpportunityCX.spec';
import { VFTestcaseSpec } from '../spefFiles/VFTestCases/VFTestcase.spec';
import { SfStdPathOnLeadsSpec } from '../spefFiles/StdPathOnLeads/SfStdPathOnLeads.spec';
import { SfRecordTypeScreenSpec } from '../spefFiles/RecordTypeScreen/SfRecordTypeScreen.spec';
import { SfAccountTeamSpec } from '../spefFiles/AccountTeam/SfAccountTeam.spec';
import { SfProductsSpec } from '../spefFiles/Products/SfProducts.spec';
import { addressFieldsSpec } from '../spefFiles/AddressFields/AddressFields.spec';
import { SfCloneWithRelatedOppSpec } from '../spefFiles/CloneWithRelatedOpp/SfCloneWithRelatedOpp.spec';
import { SfCloneWithRelatedOppNoneSpec } from '../spefFiles/CloneWithRelatedOppNone/SfCloneWithRelatedOppNone.spec';
import { SfCloneWithRelatedCampSpec } from '../spefFiles/CloneWithRelatedCampaign/SfCloneWithRelatedCamp.spec';
import { SfVfMasterPageSCVSpec } from '../spefFiles/VFMasterPageSCV/SFVfMasterPageSCV.spec';
import { VFInsideIframeTestcaseSpec } from '../spefFiles/VFInsideIframeTestCases/VFTestcase.spec';
import { VFIframeInsideIframeSpec } from '../spefFiles/VF_IframeInsideIframeTestCases/IframeInsideIframe.spec';
import { SfVFMasterPageTablesSpec } from '../spefFiles/VFMasterPageTables/SfVfMasterPageTables.spec';
import { VFInsideIframePageSCVSpec } from '../spefFiles/VFInsideIframePageSCV/VFInsideIframePageSCV.spec';
import { VFIframeInsideIframePageSCVSpec } from '../spefFiles/VF_IframeInsideIframePageSCV/IframeInsideIframePageSCV.spec';
import { VFInsideVFSpec } from '../spefFiles/VFInsideVF/VFTestcase.spec';
import { SfVfInsideVFTablesSpec } from '../spefFiles/VFInsideVFTables/SfVFInsideVFTables.spec';
import { SfVfInsideIframeTablesSpec } from '../spefFiles/VFInsideIframeTables/SfVFInsideIframeTables.spec';
import { SfIframeInsideIframeTablesSpec } from '../spefFiles/VF_IframeInsideIframeTables/SfVFIframeInsideIframe.spec';
import { richTextCustObjSpec } from '../spefFiles/RichTextCustObj/RichTextCustObj.spec';
import { SfFlexiActionsRecommendationSpec } from '../spefFiles/FlexiActionsRecommendation/SfFlexiActionsRecommendation.spec';
import { SfFlexiHomeVFSpec } from '../spefFiles/FlexiHomeVF/SfFlexiHomeVF.spec';
import { SfFlexiHomeAuraSpec } from '../spefFiles/FlexiHomeAura/SfFlexiHomeAura.spec';
import { SfFlexiHomeLVSpec } from '../spefFiles/FlexiHomeLV/SfFlexiHomeLV.spec';
import { SfAddLeadCMRLSearchSpec } from '../spefFiles/AddLeadCMRLSearch/SfAddLeadCMRLSearch.spec';
import { SfAddLeadCMRLSelectSpec } from '../spefFiles/AddLeadCMRLSelect/SfAddLeadCMRLSelect.spec';
import { SfAddContactCMRLSelectSpec } from '../spefFiles/AddContactCMRLSelect/SfAddContactCMRLSelect.spec';
import { SfAddContactCMRLSearchSpec } from '../spefFiles/AddContactCMRLSearch/SfAddContactCMRLSearch.spec';
import { SfConvertLeadNewSpec } from '../spefFiles/ConvertLeadNew/SfConvertLeadNew.spec';
import { FlexiHomeRichTextSpec } from '../spefFiles/FlexiHomePageRichText/FlexiHomeRichText.spec';
import { AuraAppPageSpec } from '../spefFiles/FlexiAuraAppPage/AuraAppPage.spec';
import { FlexiHomeRecentItemsSpec } from '../spefFiles/FlexiHomePageRecentItems/FlexiHomePageRecentItems.spec';
import { FlexiAppHNLRecentItemsSpec } from '../spefFiles/FlexiAppPageHNLRecentItems/FlexiAppHNLRecentItems.spec';
import { SfConvertLeadExistingSpec } from '../spefFiles/ConvertLeadExisting/SfConvertLeadExisting.spec';
import { FlexiAppMCSRecentItemsSpec } from '../spefFiles/FlexiAppPageMCSRecentItems/FlexiAppMCSRecentItems.spec';
import { SfFlexiOneRegionLVSpec } from '../spefFiles/FlexiOneRegionLV/SfFlexiOneRegionLV.spec';
import { SfFlexiThreeRegionLVSpec } from '../spefFiles/FlexiThreeRegionLV/SfFlexiThreeRegionLV.spec';
import { VFRichTextAppPageSpec } from '../spefFiles/FlexiVFRichTextAppPage/VFRichtTextAppPage.spec';
import { GlobalSearchSpec } from '../spefFiles/GlobalSearch/GlobalSearch.spec';
import { SfCaseChangeOwnerSpec } from '../spefFiles/CaseChangeOwner/SfCaseChangeOwner.spec';
import { SfCaseOpenActivitiesRLSpec } from '../spefFiles/OpenActivitiesRL/SfCaseOpenActivitiesRL.spec';
import { Flexi3ColRelatedListSingleSpec } from '../spefFiles/Flexi3ColRelatedListSingle/Flexi3ColRelatedListSingle.spec';
import { SfCaseCommentRLViewAllSpec } from '../spefFiles/StdObjRLViewAll/SfCaseCommentRLViewAll.spec';
import { SfCaseViewSpecLabelAssertion } from '../spefFiles/CaseViewLabelAssertion/SfCaseViewLabelAssertion.spec';
import { SfCaseAttachmentRLSpec } from '../spefFiles/CaseAttachmentRL/SfCaseAttachmentRL.spec';
import { QuickLinkSpec } from '../spefFiles/QuickLink/QuickLink.spec';
import { SfLeadPageTitleSpec } from '../spefFiles/LeadPageTitle/SfLeadPageTitle.spec';
import { FlexiHSRRelatedListSingleSpec } from '../spefFiles/FlexiHSRRelatedListSingle/FlexiHSRRelatedListSingle.spec';
import { QuickLinkHSRSpec } from '../spefFiles/QuickLinkHSR/QuickLinkHSR.spec';
import { QuickLinkH1CSpec } from '../spefFiles/QuickLinkH1C/QuickLinkH1C.spec';
import { FlexiHRRelatedListSingleSpec } from '../spefFiles/FlexiHRRelatedListSingle/FlexiHRRelatedListSingle.spec';
import { RelatedListSpec } from '../spefFiles/RelatedList/RelatedList.spec';
import { RelatedListH1CSpec } from '../spefFiles/RelatedListH1C/RelatedListH1C.spec';
import { RelatedRecordSpec } from '../spefFiles/RelatedRecord/RelatedRecord.spec';
import { RelatedRecordHSSpec } from '../spefFiles/RelatedRecordHS/RelatedRecordHS.spec';
import { Flexi3ColDetailsComponentSpec } from '../spefFiles/FlexiRP3ColDetailsCustomTab/Flexi3ColDetailsComponent.spec';
import { AccordionSpec } from '../spefFiles/Accordion/Accordion.spec';
import { NewEventSpec } from '../spefFiles/NewEventGQA/NewEvent.spec';
import { NewTaskSpec } from '../spefFiles/NewTaskGQA/NewTask.spec';
import { LogACallSpec } from '../spefFiles/LogACallGQA/LogACall.spec';
import { NewLeadSpec } from '../spefFiles/NewLeadGQA/NewLead.spec';
import { SfAccountTeamCXSpec } from '../spefFiles/AccountTeamCX/SfAccountTeam.spec';
import { CustomPathOnPCOSpec } from '../spefFiles/CustomPathPCO/SfCustomPathOnPCO.spec';
import { SfContactAttachmentRLCXSpec } from '../spefFiles/ContactAttachmentRLCX/SfContactAttachmentRLCX.spec';
import { SfCaseCommentRLConsoleSpec } from '../spefFiles/StdObjRLConsole/SfCaseCommentRL.spec';
import { SfNewCaseConsoleSpec } from '../spefFiles/StdObjNewConsole/SfNewCase.spec';
import { SfCaseViewConsoleSpec } from '../spefFiles/StdObjViewConsole/SfCaseView.spec';
import { SfLookupsConsoleSpec } from '../spefFiles/StdObjLookupsConsole/Lookups.spec';
import { SfContactCampaignRLSpec } from '../spefFiles/ContactCampaign RL/SfCampaignRL.spec';
import { SfLeadHomeConsoleSpec } from '../spefFiles/StdObjHomeConsole/SfLeadHomeConsole.spec';
import { RelatedList2Spec } from '../spefFiles/StdObjRL2/RelatedList2.spec';
import { SfVFMasterPageTablesConsoleSpec } from '../spefFiles/VFMasterPageTablesConsole/SfVfMasterPageTablesConsole.spec';
import { SfVfMasterPageSCVConsoleSpec } from '../spefFiles/VFMasterPageSCVConsole/SfVfMasterPageSCVConsole.spec';
import { VFTestcaseConsoleSpec } from '../spefFiles/VFTestCasesConsole/VFTestcase.spec';
import { GlobalSearchConsoleSpec } from '../spefFiles/GlobalSearchConsole/GlobalSearchConsole.spec';
import { SfAccountLogACallConsoleSpec } from '../spefFiles/AccountQAConsole/SfAccountLogACallConsole.spec';
import { LogACallGQAConsoleSpec } from '../spefFiles/LogACallGQAConsole/LogACallGQAConsole.spec';
import { TabSwitchingSpec } from '../spefFiles/TabSwitching/TabSwitching.spec';
import { QuoteHomeSpec } from '../spefFiles/QuotesHome/QuoteHome.spec';
import { QuoteListViewSpec } from '../spefFiles/QuotesListView/QuoteLV.spec';
import { AssetNewSpec } from '../spefFiles/AssetNew/AssetNew.spec';
import { SfCpqQuotesILESpec } from '../spefFiles/CPQQuotesILE/CPQQuotesILE.spec';
import { CampaignHistorySpec } from '../spefFiles/CampaignHistoryRL/CampaignHistory.spec'
import { SfMaintenancePlanAssetRLSpec } from '../spefFiles/FslAssetRL/SfMaintenancePlanAssetRL.spec';
import { QuoteAddProductTabsLayoutSpec } from '../spefFiles/QuoteAddProductTabsLayout/QuoteAddProductTabsLayout.spec';
import { QuoteChoosePriceBookSpec } from '../spefFiles/QuoteChoosePriceBook/QuoteChoosePriceBook.spec';
import { QuoteAddProductSectionsLayoutSpec } from '../spefFiles/QuoteAddProductSectionsLayout/QuoteAddProductSectionsLayout.spec';
import { QuoteAddProductWizardLayoutSpec } from '../spefFiles/QuoteAddProductWizardLayout/QuoteAddProductWizardLayout.spec';
import { QuoteFilterScreenSpec } from '../spefFiles/QuoteAddProductFilterScreen/QuoteFilterScreen.spec';
import { NewContractSpec } from '../spefFiles/ContractNew/ContractNew.spec';
import { ContractViewSpec } from '../spefFiles/ContractView/ContractView.spec';
import { ServiceAppointmentNewSpec } from '../spefFiles/ServiceAppointmentNew/ServiceAppointmentNew.spec';
import { ServiceAppointmentViewSpec } from '../spefFiles/ServiceAppointmentView/ServiceAppointmentView.spec';
import { AssignedResourceRLSpec } from '../spefFiles/ServiceAppointmentAssignedResourceRL/AssignedResourceRL.spec';
import { AddFavoriteProduct } from '../spefFiles/AddFavoriteProduct/AddFavoriteProduct.spec';
import { PriceBookRLSpec } from '../spefFiles/PriceBookRL/PriceBookRL.spec';
import { QuotePageErrorSpec } from '../spefFiles/QuoteAlertAndPageError/QuotePageError.spec';
import { OperatingHoursSpec } from '../spefFiles/FSLOperatingHours/OperatingHours.spec'
import { QuoteEditLineButtonsAndFieldSpec } from '../spefFiles/QuoteEditLineButtonAndFields/QuoteEditLineButtonAndFields.spec';
import { WorkOrderNewSpec } from '../spefFiles/WorkOrderNew/WorkOrderNew.spec';
import { WorkOrderInlineEditSpec } from '../spefFiles/WorkOrderInlineEdit/WorkOrderInlineEdit.spec';
import { FSLBookAppointmentSpec } from '../spefFiles/FSLQuickActions/FSLBookAppointment.spec';
import { FSLCandidatesSpec } from '../spefFiles/FSLQuickActions/FSLCandidates.spec';
import { FSLEmergencySpec } from '../spefFiles/FSLQuickActions/FSLEmergency.spec';
import { TimeSlotsSpec } from '../spefFiles/OperatingHoursTimeSlotsRL/TimeSlots.spec';
import { ServiceTerritoryMembersRLSpec } from '../spefFiles/ServiceTerritoryMembersRL/ServiceTerritoryMembersRL.spec';
import { SkillRequirementsRLSpec } from '../spefFiles/WorkTypeSkillRequirementsRL/SkillRequirementsRL.spec';
import { ServiceAppointmentRLSpec } from '../spefFiles/ServiceResource-ServiceAppointmentRL/ServiceAppointmentRL.spec';
import { ServiceTerritorySpec } from '../spefFiles/FSLServiceTerritory/ServiceTerritory.spec';
import { DispatcherConsoleSpec } from '../spefFiles/FSLDispatcherConsole/DispatcherConsole.spec';
import { AuraUtilityBarSpec } from '../spefFiles/FlexiAuraAppPage/AuraUtilityBar.spec';
import { VFUtilityBarSpec } from '../spefFiles/FlexiVFRichTextAppPage/VFUtilityBar.spec';
import { RecentItemUtillityBarSpec } from '../spefFiles/FlexiHomePageRecentItems/RecentItemUtilityBar.spec';
import { QuickLinkConsoleSpec } from '../spefFiles/QuickLinkHSR/QuickLinkConsole.spec';
import { FlexiRPCP3RDetailsSpec } from '../spefFiles/FlexiRPCP3RDetails/FlexiRPCP3RDetails.spec';
import { SfActionButtonsConsoleSpec } from '../spefFiles/SfActionButtonsConsole/ActionButtonsOnCPH.spec';
import { ServiceResourceLightboxSpec } from '../spefFiles/FSLServiceResourceLighbox/ServiceResourceLightbox.spec';
import { FieldServiceLeftPanelSpec } from '../spefFiles/FSLLeftPanel/FieldServiceLeftPanel.spec';
import { ServiceAppointmentLightboxSpec } from '../spefFiles/FSLServiceAppointmentLighbox/ServiceAppointmentLightbox.spec';
import { FSLPopUpsSpec } from '../spefFiles/FSLPopUps/FSLPopUps.spec';
import { FlexiRPCPLS2RDetailsSpec } from '../spefFiles/FlexiRPCPLS2RDetails/FlexiRPCPLS2RDetailsComponent.spec';
import { QuickTaskSpec } from '../spefFiles/QuickTask/QuickTask.spec';
import { QuickLeadSpec } from '../spefFiles/QuickLead/Quicklead.spec';
import { SfAccountOpportunityRLSpec } from '../spefFiles/Account OpportunityRL/SfOpportunityRL.spec';
import { FlexiHSLAccountTeamRLSpec } from '../spefFiles/FlexiRPHSLAccountTeamRL/FlexiHSLAccountTeamRL.spec';
import { SLDSSpec } from '../spefFiles/SLDS/SLDS.spec';
import { SfPCOCaseRLViewAllSpec } from '../spefFiles/CustomObjRLViewAll/SfPCOCaseRLViewAll.spec';
import { SfContactAccountRLSpec } from '../spefFiles/Contact-AccountRL/SfContactAccountRL.spec';
import { CasesRLViewAllSpec } from '../spefFiles/CasesViewAll/CasesViewAll.spec';
import { SfAccountCustomObjRLViewAllSpec } from '../spefFiles/Account-CustomObjRLViewAll/SfAccountCustomObjRLViewAll.spec';
import { SfOppInvoiceStatementRLSpec } from '../spefFiles/OpportunityInvoiceStatementRL/SfOppInvoiceStatementRL.spec';
import { SfCaseCloneScreenSpec } from '../spefFiles/CaseCloneScreen/SfCaseClone.spec';
import { CustObjCloneSpec } from '../spefFiles/CustObjClone/CustObjClone.spec';
import { FlexiH1RAccountTeamRLSpec } from '../spefFiles/FlexiRPH1RAccountTeamRL/FlexiH1RAccountTeamRL.spec';
import { ProdFeatureViewSpec } from '../spefFiles/ProdFeatureView/ProdFeatureView.spec';
import { SfCustObjAttachmentRLSpec } from '../spefFiles/CustObjAttachmentRL/SfCustObjAttachmentRL.spec';
import { CaseHistoryRLSpec } from '../spefFiles/CaseHistoryRL/CaseHistoryRL.spec';
import { NotesAttachmentViewAllSpec } from '../spefFiles/Note&AttachmentViewAll/Notes&AttachmentViewAll.spec';
import { GlobalSearchConsoleCXSpec } from '../spefFiles/GlobalSearchConsoleCX/GlobalSearchConsoleCX.spec';
import { POVFInsideVFSpec } from '../spefFiles/POVFInsideVF/VFTestcase.spec';
import { VFPOSpec } from '../spefFiles/VFPOTestCases/VFPO.spec';
import { POIframeInsideIframeSpec } from '../spefFiles/POIframeInsideIframe/POIframeInsideIfrane.spec';
import { ServiceContractNewSpec } from '../spefFiles/ServiceContractNew/ServiceContractNew.spec';
import { SLDS_VFSpec } from '../spefFiles/SLDS/SLDS_VF.spec';
import { ServiceContractViewSpec } from '../spefFiles/ServiceContractView/ServiceContractView.spec';
import { PO_VF_SLDSSpec } from '../spefFiles/PO_VF_SLDS/PO_VF_SLDS.spec';
import { NewAccQASpec } from '../spefFiles/NewAccQA/NewAccQA.spec';
import { VFT1Spec } from '../spefFiles/EmbeddedDataTable/VFT1.spec';
import { VFT2Spec } from '../spefFiles/EmbeddedNestedTable/VFT2.spec';
import { Angular_VFSpec } from '../spefFiles/AngularInsideVF/Angular.spec';
import { AuraTableSpec } from '../spefFiles/AuraTable/AuraTable.spec';
import { VfEmbeddedPageBlockTableSpec } from '../spefFiles/VfEmbeddedPageBlockTable/VfEmbeddedPageBlockTable.spec';
import { POCaseInsideVFSpec } from '../spefFiles/POCaseInsideVF/POCaseInsideVF.spec';
import { SfAccountChangeOwnerSpec } from '../spefFiles/AccountChangeOwner/SfAccountOwner.spec';
import { SplitModeViewScreenSpec } from '../spefFiles/SplitModeAccountView/SplitModeViewScreen.spec';
import { SplitModeRelatedListSpec } from '../spefFiles/SplitViewRelatedList/SplitViewRelatedList.spec';
import { SplitModeLVSpec } from '../spefFiles/SplitModeAccountLV/SplitModeLV.spec';
import  {SfNewAccQACXConsoleSpec} from '../spefFiles/OpportunityQANewAccountCXConsole/OppNewAccountQA.spec'
import  {SfContactUpdateContactQACXConsoleSpec} from '../spefFiles/ContactQAUpdateContactCXConsole/ContactUpdateContactQA.spec';
import {SfLeadQAQuickTaskCXSpec} from '../spefFiles/LeadQAQuickTaskCX/LeadQuickTask.spec'
import {SfOppQAUpdateOppCXSpec} from '../spefFiles/OpportunityQAUpdateOpportunityCX/OppUpdateOppQA.spec';
import {SfCaseQACreateAccountSpec} from '../spefFiles/CaseQACreateAccountCX/CaseQACreateAccount.spec';

export const Lightning = [
	/*
	StartProvar,
	SfNewCaseSpec,
	SfNewPCOSpec,
	SfLeadHomeSpec,
	SfAllOpenLeadSpec,
	SfPCOHomeSpec,
	SfPCOAllSpec,
	SfCustObjLookupsSpec,
	SfLookupsSpec,
	SfCaseViewSpec,
	SfCaseRLSpec,
	SfCaseCommentRLSpec,
	SfPCOViewSpec,
	SfNewCaseOppSpec,
	SfNewTaskLeadSpec,
	SfContactNewEventSpec,
	SfRecordTypeScreenSpec,
	SfStdPathOnLeadsSpec,
	SfAccountTeamSpec,
	SfProductsSpec,
	addressFieldsSpec,
	// SfSendEmailCaseSpec,  Not Avaialable on BST : Change when executing on Prod
 	SfCloneWithRelatedOppSpec,
	SfCloneWithRelatedOppNoneSpec,
	SfCloneWithRelatedCampSpec,
	TabSwitchingSpec,
	AssetNewSpec,
	CampaignHistorySpec,
	PriceBookRLSpec,
	SfPCOCaseRLViewAllSpec,
	ProdFeatureViewSpec,
	CaseHistoryRLSpec,
	SfNewCaseCXSpec,
	SfPCOViewCXSpec,
	SfLeadHomeCXSpec,
	SfPCOAllCXSpec,
	SfCaseCommentRLCXSpec,
	SfNewNoteAccountCXSpec,
	SfNewTaskLeadCXSpec,
	SfCaseLogACallCXSpec,
	SfNewEventContactCXSpec,
	SfNewCaseOpportunityCXSpec,
	SfAccountTeamCXSpec,
	SfContactAttachmentRLCXSpec,
	StopProvar
	*/
];
export const Lightning2 = [
	/*
	StartProvar,
	SfAddLeadCMRLSearchSpec,
	SfAddLeadCMRLSelectSpec,
	SfAddContactCMRLSelectSpec,
	SfAddContactCMRLSearchSpec,
	SfConvertLeadNewSpec,
	SfConvertLeadExistingSpec,
	SfCaseChangeOwnerSpec,
	GlobalSearchSpec,
	SfCaseOpenActivitiesRLSpec,
	SfCaseViewSpecLabelAssertion,
	SfCaseCommentRLViewAllSpec,
	SfCaseAttachmentRLSpec,
	SfLeadPageTitleSpec,
	NewEventSpec,
	NewTaskSpec,
	LogACallSpec,
	NewLeadSpec,
	SfCaseCommentRLConsoleSpec,
	SfNewCaseConsoleSpec,
	SfCaseViewConsoleSpec,
	SfLookupsConsoleSpec,
	SfContactCampaignRLSpec,
	SfLeadHomeConsoleSpec,
	RelatedList2Spec,
	GlobalSearchConsoleSpec,
	SfAccountLogACallConsoleSpec,
	LogACallGQAConsoleSpec,
	SfActionButtonsConsoleSpec,
	QuickTaskSpec,
	QuickLeadSpec,
	SfAccountOpportunityRLSpec,
	SfAccountLogACallSpec,
	SfCustObjAttachmentRLSpec,
	SfAccountChangeOwnerSpec,
	SplitModeViewScreenSpec,
	SplitModeRelatedListSpec,
	SplitModeLVSpec,
	StopProvar
	*/
];
export const Classic = [
	/*
	StartProvar,
	//FSL------------------------>>
	NewContractSpec,
	ContractViewSpec,
	ServiceAppointmentNewSpec,
	ServiceAppointmentViewSpec,
	AssignedResourceRLSpec,
	SfMaintenancePlanAssetRLSpec,
	WorkOrderNewSpec,
	WorkOrderInlineEditSpec,
	TimeSlotsSpec,
	ServiceTerritoryMembersRLSpec,
	SkillRequirementsRLSpec,
	ServiceAppointmentRLSpec,
	OperatingHoursSpec,
	FSLBookAppointmentSpec,
	FSLEmergencySpec,
	FSLCandidatesSpec,
	ServiceTerritorySpec,
	FieldServiceLeftPanelSpec,
	ServiceResourceLightboxSpec,
	ServiceAppointmentLightboxSpec,
	FSLPopUpsSpec,
	DispatcherConsoleSpec,
	ServiceContractNewSpec,
	StopProvar
	*/
];
export const VF = [
	/*
	StartProvar,
	VFTestcaseSpec,
	VFInsideIframeTestcaseSpec,
	VFIframeInsideIframeSpec,
	VFInsideVFSpec,
	SfVfMasterPageSCVSpec,
	VFInsideIframePageSCVSpec,
	VFIframeInsideIframePageSCVSpec,
	SfVFMasterPageTablesSpec,
	SfVfInsideVFTablesSpec,
	SfVfInsideIframeTablesSpec,
	SfIframeInsideIframeTablesSpec,
	SfVFMasterPageTablesConsoleSpec,
	SfVfMasterPageSCVConsoleSpec,
	VFTestcaseConsoleSpec,
	CustObjCloneSpec,
	SLDSSpec,
	SfContactAccountRLSpec,
	CasesRLViewAllSpec,
	SfAccountCustomObjRLViewAllSpec,
	SfOppInvoiceStatementRLSpec,
	SfCaseCloneScreenSpec,
	FlexiH1RAccountTeamRLSpec,
	GlobalSearchConsoleCXSpec,
	NotesAttachmentViewAllSpec,
	//PO
	POVFInsideVFSpec,
	VFPOSpec,
	POIframeInsideIframeSpec,
	SLDS_VFSpec,
	PO_VF_SLDSSpec,
	POCaseInsideVFSpec,
	VfEmbeddedPageBlockTableSpec,
	StopProvar
	*/
];
export const CPQ = [
	/*
	StartProvar,
	QuoteHomeSpec,
	QuoteListViewSpec,
	SfCpqQuotesILESpec,
	QuoteAddProductTabsLayoutSpec,
	QuoteChoosePriceBookSpec,
	QuoteAddProductSectionsLayoutSpec,
	QuoteAddProductWizardLayoutSpec,
	QuoteFilterScreenSpec,
	QuotePageErrorSpec,
	AddFavoriteProduct,
	QuoteEditLineButtonsAndFieldSpec,
	StopProvar
	*/
];
export const Flexi = [
	/*
	StartProvar,
	richTextCustObjSpec,
	SfFlexiActionsRecommendationSpec,
	SfFlexiHomeVFSpec,
	SfFlexiHomeAuraSpec,
	SfFlexiHomeLVSpec,
	FlexiHomeRecentItemsSpec,
	FlexiHomeRichTextSpec,
	AuraAppPageSpec,
	FlexiAppMCSRecentItemsSpec,
	FlexiAppHNLRecentItemsSpec,
	SfFlexiOneRegionLVSpec,
	SfFlexiThreeRegionLVSpec,
	VFRichTextAppPageSpec,
	QuickLinkSpec,
	Flexi3ColRelatedListSingleSpec,
	FlexiHSRRelatedListSingleSpec,
	QuickLinkHSRSpec,
	QuickLinkH1CSpec,
	FlexiHRRelatedListSingleSpec,
	RelatedListH1CSpec,
	RelatedListSpec,
	RelatedRecordHSSpec,
	RelatedRecordSpec,
	Flexi3ColDetailsComponentSpec,
	AccordionSpec,
	CustomPathOnPCOSpec,
	//Flexi 2------------------>>
	AuraUtilityBarSpec,
	VFUtilityBarSpec,
	RecentItemUtillityBarSpec,
	QuickLinkConsoleSpec,
	FlexiRPCP3RDetailsSpec,
	FlexiRPCPLS2RDetailsSpec,
	FlexiHSLAccountTeamRLSpec,
	ServiceContractViewSpec,
	StopProvar
	*/
];
export const Default = [
	//CaseHistoryRLSpec
	//SfNewAccQACXConsoleSpec
	//SfContactUpdateContactQACXConsoleSpec
	//SfLeadQAQuickTaskCXSpec
	//SfOppQAUpdateOppCXSpec
	//QuickLeadSpec
	//SfCaseQACreateAccountSpec
	
];
