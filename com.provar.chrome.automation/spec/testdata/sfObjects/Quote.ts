export const Quote = {
    quoteNumber: {
        disposition: 'Existing',
        text: 'Quote Number (SBQQ__QUOTE__C_NAME)',
    },
    quoteName: {
        disposition: 'Existing',
        text: 'Quote Number (Name)',
    },
    quoteStatus: {
        disposition: 'Existing',
        text: 'Status (SBQQ__Status__c)',
    },
    additionalDiscount:{
        disposition: 'Existing',
        text: 'Additional Disc. (%) (SBQQ__CustomerDiscount__c)',
    },
    opportunity:{
        disposition: 'Existing',
        text: 'Opportunity (SBQQ__Opportunity2__r_Name)',
    },
    QuoteHomePsi: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Quote Home',
        },
    },
    quoteListViewPSI:{
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Quote List (All)',
        },
    },
    quoteNewPSI:{
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Quote New screen',
        },
    },
}