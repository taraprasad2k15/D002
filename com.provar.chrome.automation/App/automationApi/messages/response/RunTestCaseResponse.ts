import { APIResponse } from './APIResponse';
import { RunExecutionStatus } from './RunExecutionStatus';

export class RunTestCaseResponse extends APIResponse {
	public runId: number;
	public runExecutionStatus: RunExecutionStatus;
}