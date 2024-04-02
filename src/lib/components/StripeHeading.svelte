<script lang="ts">
	export let label: string;
	export let labelClass: string = '';
</script>

<div class="stripe-heading {labelClass}">
	<div class="stripe"></div>
	<div class="heading">
		<h2 class="label text-5xl font-display uppercase">{label}</h2>
	</div>
	<div class="stripe"></div>
</div>