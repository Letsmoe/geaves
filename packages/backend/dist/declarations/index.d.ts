import { ActionType } from "./types/class.actiontype.js";
declare class Action {
    readonly type: ActionType;
    constructor(type: ActionType);
    onRun(): void;
}
export { Action };
//# sourceMappingURL=index.d.ts.map