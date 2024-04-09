<script lang="ts">
	export let label: string;
	export let href: string;
	export let description: string;
	export let hoverClass: string = 'hover:bg-cyan-500';
</script>

<a href="{href}" class="flex items-top gap-4 rounded-lg border shadow-md p-4 {hoverClass} hover:bg-opacity-10 transition-colors">
	<div class="p-2">
		<slot></slot>
	</div>
	<div>
		<p class="font-display text-xl text-emphasis leading-none mb-2">{label}</p>
		<p class="text-md leading-tight">{description}</p>
	</div>
</a>