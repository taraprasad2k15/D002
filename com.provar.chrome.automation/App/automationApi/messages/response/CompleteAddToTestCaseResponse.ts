import { APIResponse } from './APIResponse';
import { RunExecutionStatus } from './RunExecutionStatus';

export class CompleteAddToTestCaseResponse extends APIResponse {
	public runExecutionStatus: RunExecutionStatus;
}