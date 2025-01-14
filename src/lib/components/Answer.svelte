<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fly } from 'svelte/transition';

	let { header, explanation, icon, onclick } = $props();
</script>

<div in:fly={{ y: 400, delay: 300 }} out:fly={{ y: -400 }}>
	<img src={`/${icon}.svg`} alt="" class="mx-auto mb-12 h-32 w-32" />
	<h1 class="mx-auto mb-8 max-w-2xl text-balance text-center text-5xl font-medium text-gray-50">
		{header}
	</h1>
	<p class="mx-auto mb-32 max-w-2xl text-2xl text-gray-100">
		{explanation}
	</p>
	<Button class="w-48 px-12" variant="livid" {onclick}>Suivant</Button>
</div>
