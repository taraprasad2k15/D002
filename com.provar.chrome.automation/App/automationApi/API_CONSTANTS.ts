export const API_CONSTANTS = {
	MessageMethod: {
		createSession: 'Provar.createSession',
		createTestCase: 'Provar.createTestCase',
		runTestCase: 'Provar.runTestCase',
		beginAddToTestCase: 'Provar.beginAddToTestCase',
		completeAddToTestCase: 'Provar.completeAddToTestCase',
		modifyAddToTestCase: 'Provar.modifyAddToTestCase',
		getInternalConnectionDetails: 'Provar.getInternalConnectionDetails',
		endTestSession: 'Provar.EndTestSession',
		exportTestRunDetails: 'Provar.exportTestRunDetails',
		getVariableStack: 'Provar.getVariableStack',
	},
	WebSocketMethods: {
		connection: 'connection',
		connect: 'connect'
		, close: 'close'
		, error: 'error'
		, connectFailed: 'connectFailed'
		, message: 'message'
		, open: 'open',
	},
	SocketClientMethods: {
		open: 'OPEN'
		, close: 'CLOSE'
		, error: 'ERROR',
	},
};