import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "../web_modules/svelte/internal.js";

import TailwindStyles from "./TailwindStyles.js";

function create_fragment(ctx) {
	let div;
	let header;
	let img;
	let img_src_value;
	let t0;
	let p;
	let t4;
	let a;

	return {
		c() {
			div = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			p = element("p");
			p.innerHTML = `Edit <code>src/App.svelte</code> and save to reload.`;
			t4 = space();
			a = element("a");
			a.textContent = `${message}`;
			if (img.src !== (img_src_value = "/logo.svg")) attr(img, "src", img_src_value);
			attr(img, "class", "App-logo pointer-events-none m-4 h-64 svelte-6pbrz2");
			attr(img, "alt", "logo");
			attr(p, "class", "bg-green-100 dark:bg-green-800");
			attr(a, "class", "text-orange-500");
			attr(a, "href", "https://svelte.dev");
			attr(a, "target", "_blank");
			attr(a, "rel", "noopener noreferrer");
			attr(header, "class", "bg-gray-100 h-screen flex justify-center items-center flex-col text-3xl");
			attr(div, "class", "text-center font-serif");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(header, img);
			append(header, t0);
			append(header, p);
			append(header, t4);
			append(header, a);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

const message = "Learn Svelte";

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;