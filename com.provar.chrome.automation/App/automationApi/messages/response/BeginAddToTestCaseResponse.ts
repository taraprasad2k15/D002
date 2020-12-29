import { APIResponse } from './APIResponse';
import { TestBuilderState } from './TestBuilderState';

export class BeginAddToTestCaseResponse extends APIResponse {
	public testRunId: number;
	public testbuilderState: TestBuilderState;
}