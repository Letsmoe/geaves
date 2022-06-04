"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var index_js_1 = require("./errors/index.js");
var Action = /** @class */ (function () {
    function Action(type) {
        this.type = type;
    }
    Action.prototype.onRun = function () {
        throw new index_js_1.NotImplementedError();
    };
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=index.js.map