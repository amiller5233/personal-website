
<script lang="ts">
	import { scale } from 'svelte/transition';
	import IconSun from '$lib/components/icons/IconSun.svelte';
	import IconMoonStars from '$lib/components/icons/IconMoonStars.svelte';
	import IconDisplay from '$lib/components/icons/IconDisplay.svelte';
	
	const themes = {
		default: {
			icon: IconSun
		},
		dark: {
			icon: IconMoonStars
		}
	}

	const transitionScaleIn = { duration: 100, start: 0.95 };
	const transitionScaleOut = { duration: 100, start: 0.95 };

	let open = false;
	let selectedThemeKey: 'default' | 'dark' | 'system' = 'default';

	function onSelectTheme(theme) {
		// this function is kept in app.html
		setTheme(theme)
		open = false;
	}
</script>

<div class="relative inline-block text-left">
	<div>
		<button on:click={() => (open = !open)} class="text-emphasis rounded-md px-3 py-2" id="menu-button" type="button" aria-expanded="true" aria-haspopup="true">
			<svelte:component this={themes[selectedThemeKey].icon} />
		</button>
	</div>

	<!--
		Dropdown menu, show/hide based on menu state.

		Entering: "transition ease-out duration-100"
			From: "transform opacity-0 scale-95"
			To: "transform opacity-100 scale-100"
		Leaving: "transition ease-in duration-75"
			From: "transform opacity-100 scale-100"
			To: "transform opacity-0 scale-95"
	-->
	{#if open}
	<div in:scale={transitionScaleIn} out:scale={transitionScaleOut} class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
		<div class="py-1" role="none">
			<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
			<button on:click={() => onSelectTheme('light')} class="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-start leading-none w-full px-4 py-2" type="button" role="menuitem" tabindex="-1" id="menu-item-0">
				<IconSun></IconSun>
				Light
			</button>
			<button on:click={() => onSelectTheme('dark')} class="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-start leading-none w-full px-4 py-2" type="button" role="menuitem" tabindex="-1" id="menu-item-1">
				<IconMoonStars></IconMoonStars>
				Dark
			</button>
			<button on:click={() => onSelectTheme('auto')} class="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-start leading-none w-full px-4 py-2" type="button" role="menuitem" tabindex="-1" id="menu-item-2">
				<IconDisplay></IconDisplay>
				System
			</button>
		</div>
	</div>
	{/if}
</div>
