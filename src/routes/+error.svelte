
<script>
	import { page } from '$app/stores';

	console.log($page.error)
</script>

<section>
	<div class="mx-4 max-w-screen-lg lg:mx-auto py-36">
		<h1 class="text-3xl text-center">Oops!</h1>
		<p class="text-lg text-center">{$page.error.message}</p>

		<div class="text-center mt-6">
			<a href="/" class="font-bold underline decoration-cyan-500 hover:text-cyan-500 transition-colors">Let's get you home</a>
		</div>
	</div>
</section>