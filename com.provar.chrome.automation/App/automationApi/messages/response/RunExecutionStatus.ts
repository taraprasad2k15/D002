export class RunExecutionStatus {
	public executingTestItemId: string;
	public currentTestCase: any;
	public executionStatus: any;

	public canPause: boolean;
	public canStepForwards: boolean;
	public canStepBackwards: boolean;
	public canResume: boolean;
	public canStop: boolean;
	public pauseOnError: boolean;

	public successfulCount: number;
	public failureCount: number;
	public skippedCount: number;
	public executionErrorCount: number;
	public executionWarningCount: number;
	public logInformation: any;
}