var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Snowblind, applyStyles, applyState } from "@snowblind/core";
var lightBlue = "#4361ee";
var white = "#fff";
function App(props) {
    var _a = applyState(0), count = _a[0], setCount = _a[1];
    setInterval(function () {
        setCount(count + 1);
    }, 500);
    return (Snowblind.make("div", null, Array(10000).fill(0).map(function (x) {
        return Snowblind.make("p", null, count);
    })));
}
function Button(props) {
    var children = props.children;
    var styles = applyStyles({
        button: {
            color: white,
            backgroundColor: lightBlue,
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
                backgroundColor: "#4b60d8",
            },
        },
    });
    return (Snowblind.make("button", __assign({ class: styles.button }, props), children));
}
Snowblind.render(document.body, Snowblind.make(App, null));
//# sourceMappingURL=benchmark.js.map