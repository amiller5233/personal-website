<script lang="ts">
	export let label: string;
	export let icon: string;
	export let href: string;
	export let description: string ;
	export let color: string | undefiend;
</script>

<li class="b1-wrap">
	<a href="{ href }" target="">
		<div>
			<h2>{ label }</h2>
		</div>
		<div class="b1-icon">
			<span class="{ color ?? 'grey' }"></span>
			<i class="fa fa-{ icon }"></i>
		</div>
		<p>{ description }</p>
	</a>
</li>