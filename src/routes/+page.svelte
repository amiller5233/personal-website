
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import P5 from 'p5-svelte';

	import BlockLink from '$lib/components/BlockLink.svelte';
	import GridLink from '$lib/components/GridLink.svelte';
	import StripeHeading from '$lib/components/StripeHeading.svelte';

	// heading animations
	onMount(async () => {
		import ('$lib/stripe-heading.js');
	});

	// hero background
	const sketch = (p5) => {
		let canvasWidth = p5.windowWidth;
		let canvasHeight = p5.windowHeight * 1.1;
		const DOT_SIZE = 8;
		const DOT_GAP = 40;

		const SPRITE_LAG = 12;
		let spriteVector = p5.createVector(0,0);

		const _calc_size = () => {
			// get length from center of canvas to the corner
			let hyp = Math.floor(Math.sqrt(Math.pow(canvasWidth,2) + Math.pow(canvasHeight,2)));
			// divide by DOT_GAP
			let exact_size = hyp / DOT_GAP;
			// round up to nearest odd number (odd needed for symmetrical shape)
			let rounded_size = 2 * Math.round(Math.ceil(exact_size / 2)) + 1;
			// calculations don't quite add up, add 1.2x
			return rounded_size * 1.2;
		}
		let SIZE = _calc_size();

		let debugMode = false;


		p5.setup = () => {
			p5.createCanvas(canvasWidth, canvasHeight);
			p5.fill(0);
			p5.noStroke();

			spriteVector.set(p5.mouseX, p5.mouseY);
		};
		p5.draw = () => {
			let count = 0;

			// 1. draw background
			p5.background(255);

			if (debugMode) {
				p5.fill(180);
				p5.text(`Mouse: ${p5.mouseX},${p5.mouseY}`, p5.windowWidth - 120, p5.windowHeight - 30);
				p5.text(`FPS: ${p5.frameRate().toFixed(1)}`, p5.windowWidth - 120, p5.windowHeight - 15);
			}

			let xOrigin = (p5.windowWidth/2);
			let yOrigin = (p5.windowHeight/2);					

			// 2. update sprite
			spriteVector.add((p5.mouseX - spriteVector.x)/SPRITE_LAG, (p5.mouseY - spriteVector.y)/SPRITE_LAG);
			if (debugMode) {
				p5.fill(255, 200, 200);
				p5.circle(spriteVector.x, spriteVector.y, 24);
			}

			// 3. draw grid
			const _draw_node = (vector) => {
				let x = xOrigin + vector.x;
				let y = yOrigin + vector.y;
				let d = p5.dist(spriteVector.x, spriteVector.y, x, y);
				let d_exp = p5.exp(-0.01 * d);
				let r = DOT_SIZE * (1 + 3*d_exp);
				p5.fill(240 - 30*d_exp);
				p5.circle(x, y, r);
			}

			let num_rows = Math.ceil(SIZE/2)
			for (let j = 0; j < num_rows; j++) {

				let xRow = (DOT_GAP + j * DOT_GAP * 0.5);
				let yRow = (j * DOT_GAP * p5.cos(p5.PI/6));

				let num_dots = SIZE - j;
				for (let i = 0; i < num_dots; i++) {
					let xCol = (i - num_rows) * DOT_GAP + xRow;

					let angle = p5.millis() / 10000;
					_draw_node(p5.createVector(xCol, yRow).rotate(angle));
					_draw_node(p5.createVector(xCol, -yRow).rotate(angle));
				}
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
			SIZE = _calc_size();
		}
	}

	// personality animation
	let styles = [
		`<span class="underline">personality</span>`,
		`<span class="cursor" style="font-family: 'Courier New';">personality</span>`,
		`<span class="font-display uppercase" style="text-shadow:-2px 4px 0 rgb(255, 0, 80);">personality!</span>`,
		`✨<span class="italic">personality</span>✨`,
		`<span class="inline-block bg-green-700 uppercase font-bold text-base text-white border-4 border-double border-white align-middle px-3 rounded-md shadow-lg" style>personality</span>`,
		`<span class="border-b-2 border-dashed border-red-500" style="font-family: 'Georgia', serif;">perosnality</span>`,
		`<span style="font-family: 'Brush Script MT', serif;">personality</span> 💅`,
		`<span class="inline-block leading-none" style="transform: scaleY(-1);">personality</span>`,
	];
	let currentStyleIndex = 0;
	let currentStyle = styles[currentStyleIndex++];
	setInterval(() => {
		currentStyle = styles[currentStyleIndex++];
		if (currentStyleIndex >= styles.length) {
			currentStyleIndex = 0;
		}
	}, 1400);
	
</script>

<section class="hero-container">
	<div class="content-pane">
		<div class="flex flex-col md:flex-row items-center gap-6">
			<img id="logo" src="favicon.png" width="128" height="128" draggable="false" alt="Adam Miller's logo" class="bg-white rounded-3xl shadow-lg p-2">
			<div>
				<div class="stripe-heading" style="margin:0;">
					<div class="heading" style="margin:0;">
						<h1 class="label text-3xl lg:text-5xl font-display">Howdy, I'm Adam ✌️</h1>
					</div>
				</div>
				<p class="text-lg lg:text-2xl">a full-stack developer from California,</p>
				<p class="text-lg lg:text-2xl">who loves building websites with {#key currentStyle}<span in:fade="{{ duration: 300 }}" class="inline-block" style="height:36px; width:180px;">{@html currentStyle}</span>{/key}</p>
			</div>
		</div>
	</div>
	<div class="scroll-pane ">
		<div class="flex flex-col gap-4 text-gray-400 items-center">
			<p class="text-sm uppercase">Scroll for a cookie ;)</p>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
		</div>
	</div>
	<!-- <canvas id="canvas-hero" class="canvas-pane"></canvas> -->
	<P5 {sketch} />
	<div class="canvas-pane-fade"></div>
</section>

<section>
	<div class="lg:container lg:mx-auto mx-4 py-10">
		<StripeHeading label="About Me"></StripeHeading>

		<div class="flex flex-col md:flex-row md:columns-2">
			<div class="w-full">
				<p>Just a sleevgy lil guy. </p>
			</div>
			<div class="w-full">
				<p>pic (felt cute might delete later?)</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="lg:container lg:mx-auto mx-4 py-10">
		<StripeHeading label="My Portfolio"></StripeHeading>

		<p>Look at MY COOL SHIT</p>
		<a href="/portfolio" class="font-bold underline decoration-cyan-500">Portfolio</a>
	</div>
</section>

<section>
	<div class="lg:container lg:mx-auto mx-4 py-10">
		<StripeHeading label="Experience"></StripeHeading>

		<p>Look at MY resume</p>
		<a href="/portfolio" class="font-bold underline decoration-cyan-500">Resume</a>
	</div>
</section>

<section>
	<div class="lg:container lg:mx-auto mx-4 py-10">
		<StripeHeading label="Other Stuff"></StripeHeading>

		<p class="text-center mx-auto my-6" style="max-width:700px;">I have learned a thousand skills across a thousand different lives... Actually, I just do a lot of random stuff. Here's my prized collections of odds and ends.</p>

		<div class="grid md:grid-cols-3 gap-4 my-6">
			<GridLink
				label="Github"
				href="https://www.github.com/amiller5233"
				description="Don't judge my on anything I comitted over 2 years ago">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
			</GridLink>
			<GridLink
				label="Musescore"
				href="https://www.musescore.com/babaganoosh76"
				description="Yes, I am an unapologetic band geek">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/><path fill-rule="evenodd" d="M12 3v10h-1V3z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/></svg>
			</GridLink>
			<GridLink
				label="YouTube"
				href="https://www.youtube.com/channel/UC_LIFVAPd40Cv8Hha3nRjuw"
				description="Trying my best Ryan Trahan impression">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>
			</GridLink>
		</div>
	</div>
</section>
