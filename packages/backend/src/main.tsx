import { Snowblind } from "@snowblind/core";

const someDiv = (opts: {[key: string]: string}) => {
	return <div class={opts.className} click={opts.click}>
		<p>{opts.text}</p>
		<div>
			{opts.children}
		</div>
		<SomeOtherComponent />
	</div>;
};

const SomeOtherComponent = () => {
	return <div>
		<p>Some other component</p>
	</div>;
}