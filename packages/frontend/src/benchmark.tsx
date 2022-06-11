import { Snowblind, applyStyles, applyState } from "@snowblind/core";

const lightBlue = "#4361ee";
const white = "#fff";

function App(props: any) {
	const [count, setCount] = applyState(0);

	setInterval(() => {
		setCount(count + 1);
	}, 500)

	return (
		<div>
			{
				Array(10000).fill(0).map(x => {
					return <p>{count}</p>
				})
			}
		</div>
	);
}

function Button(props: any) {
	const { children } = props;
	const styles = applyStyles({
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

	return (
		<button class={styles.button} {...props}>
			{children}
		</button>
	);
}

Snowblind.render(document.body, <App />);
