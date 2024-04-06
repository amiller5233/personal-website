
<script lang="ts">
	export let iconName: string;
	export let colorClass: string = 'bg-red-500';
</script>

<div class="hexicon {colorClass}">
	<img src="/icons/{iconName}" alt="iconName" width="42" height="42">
</div>