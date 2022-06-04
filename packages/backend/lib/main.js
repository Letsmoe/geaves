"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@snowblind/core");
var someDiv = function (opts) {
    return core_1.Snowblind.make("div", { class: opts.className, click: opts.click },
        core_1.Snowblind.make("p", null, opts.text),
        core_1.Snowblind.make("div", null, opts.children),
        core_1.Snowblind.make(SomeOtherComponent, null));
};
var SomeOtherComponent = function () {
    return core_1.Snowblind.make("div", null,
        core_1.Snowblind.make("p", null, "Some other component"));
};
//# sourceMappingURL=main.js.map