
<script>
	export let title;
	export let timeRange;
	export let description;
</script>

<div class="mx-auto mb-4" style="max-width:800px;">
	<div class="flex flex-col md:flex-row">
		<h3 class="text-xl text-emphasis hover:text-chromatic">{title}</h3>
		<span class="hidden md:inline-block text-lg mx-3">/</span>
		<p class="text-gray-500">{timeRange}</p>
	</div>
	<p class="ms-4">{description}</p>
</div>