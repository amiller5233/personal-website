
<script lang="ts">
	import StripeHeading from '$lib/components/StripeHeading.svelte';
	import Hexicon from '$lib/components/Hexicon.svelte';

	import { oldPortfolio } from "$lib/old-portfolio.js";
</script>

<section>
	<div class="mx-4 max-w-screen-lg lg:mx-auto pt-36">

		<StripeHeading label="My Portfoio"></StripeHeading>
		
		{#each Object.entries(oldPortfolio) as [slug, project]}
		<a href="/portfolio/{slug}" class="flex flex-col md:flex-row items-center gap-5 rounded-lg border shadow p-4 mb-8 hover:bg-gray-50 hover:shadow-lg transition-all">
			<div class="md:w-1/3">
				<img src="/portfolio/{project.cover_img}" alt="{project.name} screenshot">
			</div>
			<div class="md:w-2/3">
				<h2 class="text-xl md:text-2xl">{project.name}</h2>

				<p class="italic text-gray-400">
					{project.date_start}
					{#if project.date_end}
					- {project.date_end}
					{/if}
				</p>

				<p class="text-lg text-gray-700 mb-8">{project.desc_short}</p>
				<span class="font-bold underline decoration-cyan-500 hover:text-cyan-500 transition-colors">Check it out</span>
			</div>
		</a>
		{/each}
	</div>
</section>