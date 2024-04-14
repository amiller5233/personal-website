
<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	onMount(() => {
		// create scene
		const container = document.getElementById('duck-container');

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			container.offsetWidth / container.offsetHeight,
			0.1,
			1000);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		container.appendChild(renderer.domElement);

		// show cube
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		// start render loop
		function animate() {
			requestAnimationFrame(animate);

			// rotate cube
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		}
		animate();
	})

	
	
</script>

<section>
	<div class="mx-4 max-w-screen-md md:mx-auto py-36">
		<h1 class="text-2xl text-emphasis mb-6">Duck</h1>
		<div id="duck-container" class="aspect-square"></div>
	</div>
</section>