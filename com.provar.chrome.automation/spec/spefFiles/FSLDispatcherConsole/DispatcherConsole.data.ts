export const DispatcherConsoleData = {
    PSI: {
        itemDefinition: {
            itemClass: 'Page',
            itemTypeId: 'SfLayoutUiTargetExtension',
        },
        pageDetails: {
            title: 'Field Service Dispatcher Console Gantt',
        },
    },
    PSI_Table: {
        "itemDefinition": {
            "itemClass": "Table",
            "itemTypeId": "WithRowTableLocatorExtension",
            "disposition": "Existing",
        },
        "rowLocator": {
            "uiRowLocator": /name =.*/
        },
    },
    inJeopardy: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'IndicatorNumber') and contains(@class, 'JeopardyIndicator')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'inJeopardy',
        },
        testCaseXML: [{
            "title": [
                "UI Assert"
            ],
        }],
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
    },
    violations: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'IndicatorNumber') and contains(@class, 'WarningIndicator')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'violations',
        },
        testCaseXML: [{
            "title": [
                "UI Assert"
            ],
        }],
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
    },
    completedServices: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'IndicatorNumber') and contains(@class, 'CompletedIndicator')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'completedServices',
        },
        testCaseXML: [{
            "title": [
                "UI Assert"
            ],
        }],
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
    },
    averageTravelTime: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'IndicatorNumber') and contains(@class, 'OtherIndicatorKPI') and not(contains(@class, 'scheduledKpi'))]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'averageTravelTime',
        },
        testCaseXML: [{
            "title": [
                "UI Assert"
            ],
        }],
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
    },
    totalScheduleTime: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'IndicatorNumber') and contains(@class, 'scheduledKpi')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'totalScheduleTime',
        },
        testCaseXML: [{
            "title": [
                "UI Assert"
            ],
        }],
        executionStatus: [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		],
    },
    notifications: {
        xpath: "(//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'iconNearTabs')]/*)[1]",
        modificationParameter: {
            interactionParameters: {
                id: 'Click',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'notifications',
        },
        testCaseXML: [{
            "title": [
                "Click the Notifications button"
            ],
        }],
        executionStatus: [
			{
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
    },
    jumpToDate: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GanttMapContainer')]//div[contains(@class, 'dhx_cal_navline')]//div[contains(@id, 'JumpToDate')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Set',
                settings: {
                    value: "{Horizon}",
                }
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'jumpToDate',
        },
        testCaseXML: [{
            "title": [
                "Set the Jump To Date field to {Horizon}"
            ],
        }],
        executionStatus: [
			{
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
    },
    optimizationRequests: {
        xpath: "(//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'ControllersForMapAndGantt')]//div[contains(@class, 'iconNearTabs')]/*)[2]",
        modificationParameter: {
            interactionParameters: {
                id: 'Click',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'optimizationRequests',
        },
        testCaseXML: [{
            "title": [
                "Click the Optimization Requests button"
            ],
        }],
        executionStatus: [
			{
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
    },
    jumpToToday: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GanttMapContainer')]//div[contains(@class, 'dhx_cal_navline')]//div[contains(@class, 'todayButton')]",
        modificationParameter: {
            interactionParameters: {
                id: 'Click',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'jumpToToday',
        },
        testCaseXML: [{
            "title": [
                "Click the Jump To Today button"
            ],
        }],
        executionStatus: [
			{
				type: 'Icon-Successful',
				executionStatus: 'Executed',
			},
		],
    },
    territoryName: {
        xpath: "(//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GanttMapContainer')]//div[contains(@class, 'dhx_timeline_table_wrapper')]//div[contains(@class, 'dhx_timeline_label_row') and contains(@class, 'dhx_row_folder')]//div[contains(@class, 'LocationName')])[1]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            },
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'name',
        },
        testCaseXML: [{
            "title": [
                /With Territories Table {name =.*/
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
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }],
        executionStatus: [],
    },
    territoryTimezone: {
        xpath: "(//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GanttMapContainer')]//div[contains(@class, 'dhx_timeline_table_wrapper')]//div[contains(@class, 'dhx_timeline_label_row') and contains(@class, 'dhx_row_folder')]//div[contains(@class, 'timeZoneFolder')])[1]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            },
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'territoryTimezone',
        },
        testCaseXML: [
            {
                "title": [
                    "UI Assert"
                ],
            }],
        executionStatus: [],
    },
    resourceName: {
        xpath: "(//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GanttMapContainer')]//div[contains(@class, 'dhx_timeline_table_wrapper')]//div[contains(@class, 'dhx_timeline_label_row') and contains(@class, 'dhx_row_item')]//a[contains(@class, 'smallResourceName')])[1]",
        modificationParameter: {
            interactionParameters: {
                id: 'Read/Assert',
                settings: {
                    extractValue: true,
                    assertValue: true,
                },
            },
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'name',
        },
        testCaseXML: [{
            "title": [
                /With Resource Table {name.*/
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
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }],
        executionStatus: [],
    },
    event: {
        xpath: "//div[starts-with(@aria-label,'SA')]/div",
        modificationParameter: {
            reshuffle: {
                interactionParameters: {
                    id: 'Reshuffle',
                }
            },
            flag: {
                interactionParameters: {
                    id: 'Flag Appointment',
                }
            },
            unflag: {
                interactionParameters: {
                    id: 'Unflag Appointment',
                }
            },
            pin: {
                interactionParameters: {
                    id: 'Pin Appointment',
                }
            },
            unpin: {
                interactionParameters: {
                    id: 'Unpin Appointment',
                }
            },
            hover: {
                interactionParameters: {
                    id: 'Hover',
                }
            },
            getCandidates: {
                interactionParameters: {
                    id: 'Get Candidates',
                }
            },

        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: 'event',
        },
        interaction: {
            "id": "open",
        },
        testCaseXML: [
            {
                "title": [
                    "Get Candidates"
                ],
            }],
        executionStatus: [],
    },
    hideSlots: {
        xpath: "//div[contains(@id, 'serviceExpertApp')]//div[contains(@id, 'GetSlotsPanel')]//div[contains(@class, 'clear-slots')]",
        modificationParameter: {
            interactionParameters: {
                id: '',
            }
        },
        fieldDetails: {
            disposition: "Existing",
            fieldName: '',
        },
        testCaseXML: [],
        executionStatus: [],
    },


















}