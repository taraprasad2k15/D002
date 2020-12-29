export const Lead = {
  name: {
    disposition: 'Existing',
    text: 'Name (Name)',
  },
  leadHomePsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=ObjectHome&object=Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead Home',
    },
  },
  leadNewPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=New&object=Lead&noOverride=true',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead New screen',
    },
  },
  leadEditPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=Edit&object=Lead&noOverride=true',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead Edit screen',
    },
  },
  leadEditCXPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=Edit&object=Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead Edit screen',
    },
  },
  leadChangeStatusCXPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=2&object=Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead change status screen',
    },
  },
  leadViewPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=View&object=Lead&noOverride=true',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead View screen',
    },
  },
  leadPathPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=PathAssistant&object=Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead Path Assistant screen',
    },
  },
  allOpenLeadsPsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=List&listView=AllOpenLeads&object=Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead List (All Open Leads)',
    },
  },
  allOpenLeadsConsolePsi: {
    itemDefinition: {
      itemClass: 'Page',
      uiTargetUri: 'sf:ui:target?action=List&listView=AllOpenLeads&object=Lead&tab=standard-Lead',
      itemTypeId: 'SfLayoutUiTargetExtension',
    },
    pageDetails: {
      title: 'Lead List (All Open Leads)',
    },
  },
  title: {
    disposition: 'Existing',
    text: 'Title (LEAD_TITLE)',
  },
  state: {
    disposition: 'Existing',
    text: 'State/Province (State)',
  },
  company: {
    disposition: 'Existing',
    text: 'Company (LEAD_COMPANY)',
  },
  company2: {
    disposition: 'Existing',
    text: 'Company (Company)',
  },
  phone: {
    disposition: 'Existing',
    text: 'Phone (LEAD_PHONE)',
  },
  phone2: {
    disposition: 'Existing',
    text: 'Phone (Phone)',
  },
  email: {
    disposition: 'Existing',
    text: 'Email (LEAD_EMAIL)',
  },
  email2: {
    disposition: 'Existing',
    text: 'Email (Email)',
  },
  leadStatus: {
    disposition: 'Existing',
    text: 'Lead Status (LEAD_STATUS)',
  },
  leadStatus2: {
    disposition: 'Existing',
    text: 'Lead Status (Status)',
  },
  ownerAlias: {
    disposition: 'Existing',
    text: 'Owner Alias (CORE_USERS_ALIAS)',
  },
  rating: {
    disposition: 'Existing',
    text: 'Rating (Rating)',
  },
  contactedStage: {
    disposition: 'Existing',
    text: 'Contacted (PathAssistantStep_Contacted)',
  },
  markAsCurrentStatus: {
    disposition: 'Existing',
    text: 'Mark as Current Status (PathAssistantStep_MarkAsCurrentStatus)',
  },
  markAsComplete: {
    disposition: 'Existing',
    text: 'Mark Status as Complete (PathAssistantStep_MarkStatusAsComplete)',
  },
  street: {
    disposition: 'Existing',
    text: 'Street (Street)',
  },
  city: {
    disposition: 'Existing',
    text: 'City (City)',
  },
  zip: {
    disposition: 'Existing',
    text: 'Zip/Postal Code (PostalCode)',
  },
  country: {
    disposition: 'Existing',
    text: 'Country (Country)',
  },
  address: {
    disposition: 'Existing',
    text: 'Address (Address)',
  },
  pageTitle: {
    disposition: 'Existing',
    text: 'Page Title (title)',
  },
  unreadByOwner: {
    disposition: 'Existing',
    text: 'Unread By Owner (IsUnreadByOwner)',
  },
};
