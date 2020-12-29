import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const ProdFeatureViewData = {
	PSI:{
		itemDefinition: {
			itemClass: 'Page',
			itemTypeId: 'SfLayoutUiTargetExtension',
		},
		pageDetails: {
			title: 'Product Feature View screen',
		},
	},
	featureName: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Feature Name (Name)',
		},
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Feature Name", FieldType.Text),
	},
	configuredSku:{
		fieldDetails:{
			disposition: 'Existing',
			text: 'Configured SKU (SBQQ__ConfiguredSKU__c)',
		},
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Configured SKU", FieldType.Link),
	},
    createdBy:{
        xpath: "//div[.='Created By']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'CreatedById',
        },
    },
    lastModifiedBy:{
        xpath:"//div[.='Last Modified By']/following-sibling::div//a",
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'LastModifiedById',
        },
    },
	number: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Number (SBQQ__Number__c)',
		},
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Number", FieldType.Number),
	},
	category: {
		fieldDetails:{
			disposition: 'Existing',
			text: 'Category (SBQQ__Category__c)',
		},
		xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Category", FieldType.Text),
	},
};