import { Snowblind, applyState, applyChange } from "@snowblind/core";
var random = function (max) { return Math.round(Math.random() * 1000) % max; };
var A = [
    "pretty",
    "large",
    "big",
    "small",
    "tall",
    "short",
    "long",
    "handsome",
    "plain",
    "quaint",
    "clean",
    "elegant",
    "easy",
    "angry",
    "crazy",
    "helpful",
    "mushy",
    "odd",
    "unsightly",
    "adorable",
    "important",
    "inexpensive",
    "cheap",
    "expensive",
    "fancy",
];
var C = [
    "red",
    "yellow",
    "blue",
    "green",
    "pink",
    "brown",
    "purple",
    "brown",
    "white",
    "black",
    "orange",
];
var N = [
    "table",
    "chair",
    "house",
    "bbq",
    "desk",
    "car",
    "pony",
    "cookie",
    "sandwich",
    "burger",
    "pizza",
    "mouse",
    "keyboard",
];
var nextId = 1;
var buildData = function (count) {
    var data = new Array(count);
    for (var i = 0; i < count; i++) {
        data[i] = {
            id: nextId++,
            label: "".concat(A[random(A.length)], " ").concat(C[random(C.length)], " ").concat(N[random(N.length)]),
        };
    }
    return data;
};
var initialState = { data: [], selected: 0 };
function Row(props) {
    var onSelect = function () {
        var item = props.item, dispatch = props.dispatch;
        dispatch({ type: "SELECT", id: item.id });
    };
    var onRemove = function () {
        var item = props.item, dispatch = props.dispatch;
        dispatch({ type: "REMOVE", id: item.id });
    };
    var selected = props.selected, item = props.item;
    return (Snowblind.make("tr", { className: selected ? "danger" : "" },
        Snowblind.make("td", { className: "col-md-1" }, item.id),
        Snowblind.make("td", { className: "col-md-4" },
            Snowblind.make("a", { onClick: onSelect }, item.label)),
        Snowblind.make("td", { className: "col-md-1" },
            Snowblind.make("a", { onClick: onRemove },
                Snowblind.make("span", { className: "glyphicon glyphicon-remove", "aria-hidden": "true" }))),
        Snowblind.make("td", { className: "col-md-6" })));
}
function Button(props) {
    var id = props.id, cb = props.cb, title = props.title;
    return (Snowblind.make("div", { className: "col-sm-6 smallpad" },
        Snowblind.make("button", { type: "button", className: "btn btn-primary btn-block", id: id, onClick: cb }, title)));
}
function Jumbotron(props) {
    var dispatch = props.dispatch;
    return (Snowblind.make("div", { className: "jumbotron" },
        Snowblind.make("div", { className: "row" },
            Snowblind.make("div", { className: "col-md-6" },
                Snowblind.make("h1", null, "React keyed")),
            Snowblind.make("div", { className: "col-md-6" },
                Snowblind.make("div", { className: "row" },
                    Snowblind.make(Button, { id: "run", title: "Create 1,000 rows", cb: function () { return dispatch({ type: "RUN" }); } }),
                    Snowblind.make(Button, { id: "runlots", title: "Create 10,000 rows", cb: function () { return dispatch({ type: "RUN_LOTS" }); } }),
                    Snowblind.make(Button, { id: "add", title: "Append 1,000 rows", cb: function () { return dispatch({ type: "ADD" }); } }),
                    Snowblind.make(Button, { id: "update", title: "Update every 10th row", cb: function () { return dispatch({ type: "UPDATE" }); } }),
                    Snowblind.make(Button, { id: "clear", title: "Clear", cb: function () { return dispatch({ type: "CLEAR" }); } }),
                    Snowblind.make(Button, { id: "swaprows", title: "Swap Rows", cb: function () { return dispatch({ type: "SWAP_ROWS" }); } }))))));
}
function Main(props) {
    var _a = applyState(buildData(10000)), data = _a[0], setState = _a[1];
    var dispatch = function (action) {
        switch (action.type) {
            case "RUN":
                var start = performance.now();
                setState(buildData(10000).map(function (item) { return (Snowblind.make(Row, { key: item.id, item: item, dispatch: dispatch })); }));
                console.log(performance.now() - start);
        }
    };
    applyChange(function () {
        console.log("did Update");
    });
    return (Snowblind.make("div", { className: "container" },
        Snowblind.make(Jumbotron, { dispatch: dispatch }),
        Snowblind.make("table", { className: "table table-hover table-striped test-data" },
            Snowblind.make("tbody", null, data)),
        Snowblind.make("span", { className: "preloadicon glyphicon glyphicon-remove", "aria-hidden": "true" })));
}
Snowblind.render(document.body, Snowblind.make(Main, null));
//# sourceMappingURL=index.js.map