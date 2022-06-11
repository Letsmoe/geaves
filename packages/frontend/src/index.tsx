import { Snowblind, applyState, applyChange } from "@snowblind/core";

const random = (max: number) => Math.round(Math.random() * 1000) % max;

const A = [
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
const C = [
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
const N = [
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

let nextId = 1;

const buildData = (count: number) => {
	const data = new Array(count);

	for (let i = 0; i < count; i++) {
		data[i] = {
			id: nextId++,
			label: `${A[random(A.length)]} ${C[random(C.length)]} ${
				N[random(N.length)]
			}`,
		};
	}

	return data;
};

const initialState = { data: [], selected: 0 };

function Row(props: any) {
	const onSelect = () => {
		const { item, dispatch } = props;

		dispatch({ type: "SELECT", id: item.id });
	};

	const onRemove = () => {
		const { item, dispatch } = props;

		dispatch({ type: "REMOVE", id: item.id });
	};

	const { selected, item } = props;

	return (
		<tr className={selected ? "danger" : ""}>
			<td className="col-md-1">{item.id}</td>
			<td className="col-md-4">
				<a onClick={onSelect}>{item.label}</a>
			</td>
			<td className="col-md-1">
				<a onClick={onRemove}>
					<span
						className="glyphicon glyphicon-remove"
						aria-hidden="true"
					/>
				</a>
			</td>
			<td className="col-md-6" />
		</tr>
	);
}

function Button(props: any) {
	const { id, cb, title } = props;

	return (
		<div className="col-sm-6 smallpad">
			<button
				type="button"
				className="btn btn-primary btn-block"
				id={id}
				onClick={cb}
			>
				{title}
			</button>
		</div>
	);
}

function Jumbotron(props: any) {
	const { dispatch } = props;

	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-md-6">
					<h1>React keyed</h1>
				</div>
				<div className="col-md-6">
					<div className="row">
						<Button
							id="run"
							title="Create 1,000 rows"
							cb={() => dispatch({ type: "RUN" })}
						/>
						<Button
							id="runlots"
							title="Create 10,000 rows"
							cb={() => dispatch({ type: "RUN_LOTS" })}
						/>
						<Button
							id="add"
							title="Append 1,000 rows"
							cb={() => dispatch({ type: "ADD" })}
						/>
						<Button
							id="update"
							title="Update every 10th row"
							cb={() => dispatch({ type: "UPDATE" })}
						/>
						<Button
							id="clear"
							title="Clear"
							cb={() => dispatch({ type: "CLEAR" })}
						/>
						<Button
							id="swaprows"
							title="Swap Rows"
							cb={() => dispatch({ type: "SWAP_ROWS" })}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function Main(props: any) {
	let [data, setState] = applyState(buildData(10000));
	const dispatch = (action: any) => {
		switch (action.type) {
			case "RUN":
				let start = performance.now()
				setState(buildData(10000).map((item) => (
					<Row
						key={item.id}
						item={item}
						dispatch={dispatch}
					/>
				)));
				console.log(performance.now() - start)
		}
	};

	applyChange(() => {
		console.log("did Update")
	})
	

	return (
		<div className="container">
			<Jumbotron dispatch={dispatch} />
			<table className="table table-hover table-striped test-data">
				<tbody>
					{data}
				</tbody>
			</table>
			<span
				className="preloadicon glyphicon glyphicon-remove"
				aria-hidden="true"
			/>
		</div>
	);
}

Snowblind.render(document.body, <Main />);
