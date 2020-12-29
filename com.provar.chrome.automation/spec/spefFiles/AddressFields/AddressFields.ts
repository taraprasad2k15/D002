import { ExpectedResultSupport } from '../../support/ExpectedResultSupport';
import {ScreenType, FieldType, MiscUtils} from '../../support/MiscUtil';
const miscUtilsObj: MiscUtils = new MiscUtils();

export const addressFieldsData = {
    street:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Street", FieldType.Textarea),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "13"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the Street field to 13"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=Street&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DStreet"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "13",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the Street field to 13",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Street field to 13",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    city:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "City", FieldType.Text),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "Delhi"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the City field to Delhi"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=City&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DCity"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the City field to Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the City field to Delhi",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    state:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "State/Province", FieldType.Text),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "Delhi"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the State/Province field to Delhi"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=State&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DState"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the State/Province field to Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the State/Province field to Delhi",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    zip:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Zip/Postal Code", FieldType.Text),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "132241"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the Zip/Postal Code field to 132241"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=PostalCode&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DPostalCode"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "132241",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the Zip/Postal Code field to 132241",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Zip/Postal Code field to 132241",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    country:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.New, "Country", FieldType.Text),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "India"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the Country field to India"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=Country&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DCountry"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "India",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the Country field to India",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Country field to India",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    address:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Address", FieldType.Link),
        modificationParameter:{
            interactionParameters: {
                id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
					extractLabel: true,
					assertLabel: true,
				},
            }
        },
        testCaseXML:{
            "title": [
                "On SF Lead View screen"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "uiConnectionName"
                            ],
                            "value": [
                                {
                                    "text": "Regmain",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "target"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiTarget"
                                    ],
                                    "uri": [
                                        "sf:ui:target?object=Lead&action=View&noOverride=true"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "navigate"
                            ],
                            "value": [
                                {
                                    "text": "Dont",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "targetDescription"
                            ],
                            "value": [
                                {
                                    "text": "On SF Lead View screen",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "windowSelection"
                            ],
                            "value": [
                                {
                                    "text": "Default",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "windowSize"
                            ],
                            "value": [
                                {
                                    "text": "Default",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "closeWindow"
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "sfUiTargetObjectId"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "clauses": [
                {
                    "clause": [
                        {
                            "steps": [
                                {
                                    "apiCall": [
                                        {
                                            "title": [
                                                "UI Assert"
                                            ],
                                            "arguments": [
                                                {
                                                    "argument": [
                                                        {
                                                            "id": [
                                                                "resultName"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "Values",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "string"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "resultScope"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "Test",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "string"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "fieldAssertions"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "class": [
                                                                        "valueList"
                                                                    ],
                                                                    "mutable": [
                                                                        "Mutable"
                                                                    ],
                                                                    "uiFieldAssertion": [
                                                                        {
                                                                            "resultName": [
                                                                                "Address"
                                                                            ],
                                                                            "fieldLocator": [
                                                                                {
                                                                                    "uri": [
                                                                                        "ui:locator?name=Address&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DAddress"
                                                                                    ]
                                                                                }
                                                                            ],
                                                                            "attributeAssertions": [
                                                                                {
                                                                                    "uiAttributeAssertion": [
                                                                                        {
                                                                                            "attributeName": [
                                                                                                "value"
                                                                                            ],
                                                                                            "comparisonType": [
                                                                                                "EqualTo"
                                                                                            ],
                                                                                            "normalize": [
                                                                                                "true"
                                                                                            ],
                                                                                            "value": [
                                                                                                {
                                                                                                    "text": "13DelhiDelhi132241India",
                                                                                                    "class": [
                                                                                                        "value"
                                                                                                    ],
                                                                                                    "valueClass": [
                                                                                                        "string"
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            "attributeName": [
                                                                                                "label"
                                                                                            ],
                                                                                            "comparisonType": [
                                                                                                "EqualTo"
                                                                                            ],
                                                                                            "normalize": [
                                                                                                "true"
                                                                                            ],
                                                                                            "value": [
                                                                                                {
                                                                                                    "text": "Address",
                                                                                                    "class": [
                                                                                                        "value"
                                                                                                    ],
                                                                                                    "valueClass": [
                                                                                                        "string"
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "captureAfter"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "text": "false",
                                                                    "class": [
                                                                        "value"
                                                                    ],
                                                                    "valueClass": [
                                                                        "string"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "columnAssertions"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "class": [
                                                                        "valueList"
                                                                    ],
                                                                    "mutable": [
                                                                        "Mutable"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "pageAssertions"
                                                            ],
                                                            "value": [
                                                                {
                                                                    "class": [
                                                                        "valueList"
                                                                    ],
                                                                    "mutable": [
                                                                        "Mutable"
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "beforeWait"
                                                            ]
                                                        },
                                                        {
                                                            "id": [
                                                                "autoRetry"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
        },
        executionStatus:{
            "name": "UiWithScreen",
            "type": "Icon-ExecutingPaused",
            "text": "On SF Lead View screen",
            "executionStatus": "Executing",
            "successfulCount": 0,
            "children": [
                {
                    "name": "UiAssert",
                    "type": "Icon-Successful",
                    "text": "UI Assert",
                    "executionStatus": "Executed",
                    "successfulCount": 1,
                }
            ]
        },
    },
    addressInlineEdit:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.View, "Address", FieldType.Link),
        modificationParameter:{
            interactionParameters: {
                id: 'Start Inline Edit'
            }
        },
        testCaseXML:[{
            "title": [
                "Activate inline edit the Address field"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=Address&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DAddress"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=sfIleActivate"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Activate inline edit the Address field",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ]
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Activate inline edit the Address field",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    streetInlineEdit:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "Street", FieldType.Textarea),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "13"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the Street field to 13"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=Street&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DStreet"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "13",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the Street field to 13",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the Street field to 13",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
    cityInlineEdit:{
        xpath: miscUtilsObj.getFieldXpathLightning(ScreenType.InlineEdit, "City", FieldType.Text),
        modificationParameter:{
            interactionParameters: {
                id: 'Set',
                settings:{
                    value: "Delhi"
                }
            }
        },
        testCaseXML:[{
            "title": [
                "Set the City field to Delhi"
            ],
            "arguments": [
                {
                    "argument": [
                        {
                            "id": [
                                "locator"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiLocator"
                                    ],
                                    "uri": [
                                        "ui:locator?name=City&binding=sf%3Aui%3Abinding%3Aobject%3Fobject%3DLead%26field%3DCity"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interaction"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiInteraction"
                                    ],
                                    "uri": [
                                        "ui:interaction?name=set"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "value"
                            ],
                            "value": [
                                {
                                    "text": "Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "blur"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "pressEnter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "boolean"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureBefore"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "captureAfter"
                            ],
                            "value": [
                                {
                                    "text": "false",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "beforeWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "afterWait"
                            ],
                            "value": [
                                {
                                    "class": [
                                        "uiWait"
                                    ],
                                    "uri": [
                                        "default"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "interactionDescription"
                            ],
                            "value": [
                                {
                                    "text": "Set the City field to Delhi",
                                    "class": [
                                        "value"
                                    ],
                                    "valueClass": [
                                        "string"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": [
                                "autoRetry"
                            ]
                        }
                    ]
                }
            ],
        }],
        executionStatus:[{
            "name": "UiDoAction",
            "type": "Icon-Successful",
            "text": "Set the City field to Delhi",
            "executionStatus": "Executed",
            "successfulCount": 1,
        }],
    },
};