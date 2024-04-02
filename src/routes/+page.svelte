
<script lang="ts">
	import { onMount } from 'svelte';

	import BlockLink from '$lib/components/BlockLink.svelte';

	onMount(async () => {
		import ('$lib/stripe-heading.js');
		import ('$lib/p5.min.js').then(res => {

			// p5 instance
			const sketch = (p5) => {
				const DOT_SIZE = 8;
				const DOT_GAP = 40;

				const SPRITE_LAG = 15;
				let spriteVector = p5.createVector(0,0);

				// get length from center of canvas to the corner
				let hyp = Math.floor(Math.sqrt(Math.pow(p5.windowWidth,2) + Math.pow(p5.windowHeight,2)));
				// divide by DOT_GAP
				let exact_size = hyp / DOT_GAP;
				// round up to nearest odd number (odd needed for symmetrical shape)
				let rounded_size = 2 * Math.round(Math.ceil(exact_size / 2)) + 1;
				// calculations don't quite add up, add 1.2x
				const SIZE = rounded_size * 1.2;

				let debugMode = false;


				p5.setup = () => {
					p5.createCanvas(p5.windowWidth, p5.windowHeight, document.getElementById('canvas-hero'));
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
			}
			new p5(sketch);
		});
		
	});
</script>

<section class="hero-container">
	<div class="hero-pane brand-pane" style="z-index:1;">
		<div style="width: 100%;">
			<img id="logo" src="logo_full.svg" draggable="false" alt="Adam Miller's logo">
			<h1 style="text-align:center;">Hi, I'm Adam! 👋</h1>
		</div>
	</div>
	<canvas id="canvas-hero" class="hero-pane"></canvas>
</section>

<section>
	<div class="stripe-heading">
		<div class="stripe"></div>
		<div class="heading">
			<h2 class="label">MY PORTFOLIO</h2>
		</div>
		<div class="stripe"></div>
	</div>

	<div style="padding-top:3rem; padding-bottom:3rem;">
		<p>I am a recent graduate of Santa Clara University with a B.S. in Computer Science & Engineering. During my time in college, I learned a lot from programming classes and self-driven projects, and I continue to search for new things to learn about every day.<br><br>I'm currently searching for software engineering and web design related jobs, which will give me the opportunity to jumpstart my career and begin gaining valuable experience in the industry. Check out some of my work below!</p>
		<ul class="grid">
			<BlockLink
				label="Portfolio"
				icon="book"
				href="/portfolio"
				description="View my LinkedIn profile"
				color="purple">
			</BlockLink>
			<BlockLink
				label="LinkedIn"
				icon="linkedin"
				href="https://www.linkedin.com/in/adam-miller-3b2b71127/"
				description="See examples of my work"
				color="blue">
			</BlockLink>
			<BlockLink
				label="Github"
				icon="github"
				href="https://www.github.com/amiller5233"
				description="See my GitHub profile">
			</BlockLink>
			<BlockLink
				label="Resume"
				icon="file-text"
				href="https://drive.google.com/file/d/1Xxjl-RE47PY9QdvvuCfGrUkSaAEktabp/view?usp=sharing"
				description="Check out my resume"
				color="purple">
			</BlockLink>
			<BlockLink
				label="Musescore"
				icon="music"
				href="https://www.musescore.com/babaganoosh76"
				description="Listen to some of my arrangements"
				color="blue">
			</BlockLink>
			<BlockLink
				label="YouTube"
				icon="youtube"
				href="https://www.youtube.com/channel/UC_LIFVAPd40Cv8Hha3nRjuw"
				description="Check out some old vlogs I made"
				color="red">
			</BlockLink>
			<BlockLink
				label="Contact Me"
				icon="envelope"
				href="mailto:amiller5233@gmail.com?subject=Hi Adam, it's great to meet you!"
				description="Reach out to me via email">
			</BlockLink>
		</ul>
	</div>
</section>
