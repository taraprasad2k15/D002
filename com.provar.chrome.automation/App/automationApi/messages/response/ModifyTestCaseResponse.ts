import { APIResponse } from './APIResponse';
import { TestBuilderState } from './TestBuilderState';

export class ModifyTestCaseResponse extends APIResponse {
	public testRunId: number;
	public testbuilderState: TestBuilderState;
}