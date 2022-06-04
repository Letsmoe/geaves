import { ActionType } from "./types/class.actiontype.js";
import { NotImplementedError } from "./errors/index.js";

class Action {
	public readonly type: ActionType;

	constructor(type: ActionType) {
		this.type = type;
	}

	public onRun(): void {
		throw new NotImplementedError();
	}
}

export {Action}