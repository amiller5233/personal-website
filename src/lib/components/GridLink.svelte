<script lang="ts">
	export let label: string;
	export let href: string;
	export let description: string;
</script>

<a href="{href}" class="flex items-top gap-4 rounded-lg border shadow-md p-4 hover:bg-cyan-50">
	<div class="p-2">
		<slot></slot>
	</div>
	<div>
		<p class="font-display text-xl leading-none mb-2">{label}</p>
		<p class="text-md text-gray-500 leading-tight">{description}</p>
	</div>
</a>