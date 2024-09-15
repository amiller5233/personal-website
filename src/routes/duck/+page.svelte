
<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

	onMount(() => {

		let mouseX = 0, mouseY = 0;
		let windowHalfX = window.innerWidth / 2;
		let windowHalfY = window.innerHeight / 2;
		
		const container = document.getElementById('duck-container');

		const renderer = new THREE.WebGLRenderer({alpha: true});
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		container.appendChild(renderer.domElement);

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 0.1, 1000);
		// rotate init camera position
		camera.position.set(0, 0, 1);

		const gui = new GUI();

		const cameraFolder = gui.addFolder('Camera');
		cameraFolder.add(camera.position, 'x', -2.0, 2.0);
		cameraFolder.add(camera.position, 'y', -2.0, 2.0);
		cameraFolder.add(camera.position, 'z', -2.0, 2.0);

		const light = new THREE.AmbientLight(0xffffff, Math.PI*0.8);
		scene.add(light);

		const loader = new GLTFLoader();
		loader.load('models/google_rubber_duck.glb', (gltf) => {

			console.log(gltf);

			const model = gltf.scene;
			// model.position.set(0, 0.5, 0);
			model.scale.set(0.05, 0.05, 0.05);
			const geometry = model.children[0].geometry.translate(0, -2, 0);
			
			scene.add(model);

			const duckFolder = gui.addFolder('Duck');
			duckFolder.add(model.position, 'x', -2.0, 2.0);
			duckFolder.add(model.position, 'y', -2.0, 2.0);
			duckFolder.add(model.position, 'z', -2.0, 2.0);

			duckFolder.add(model.rotation, 'x', -Math.PI, Math.PI);
			duckFolder.add(model.rotation, 'y', -Math.PI, Math.PI);
			duckFolder.add(model.rotation, 'z', -Math.PI, Math.PI);

			animate();

		}, undefined, (error) => {

			console.error(error);

		});

		document.addEventListener('mousemove', event => {
			// mouseX/Y will be a number between [-1, 1]
			mouseX = (event.clientX - windowHalfX) / windowHalfX;
			mouseY = (event.clientY - windowHalfY) / windowHalfY;
		})

		window.addEventListener('resize', event => {
			windowHalfX = (window.innerWidth / 2);
			windowHalfY = (window.innerHeight / 2);
		})

		// start render loop
		function animate() {
			requestAnimationFrame(animate);

			camera.position.x += (mouseX - camera.position.x) * 0.05;
			camera.position.y += (-mouseY - camera.position.y) * 0.05;
			camera.lookAt( scene.position );

			renderer.render(scene, camera);
		}
		animate();
	})

	
	
</script>

<section>
	<div class="mx-4 max-w-screen-md md:mx-auto py-36">
		<h1 class="text-2xl text-emphasis mb-6">Duck</h1>
		<div id="duck-container" class="aspect-square border"></div>
	</div>
</section>