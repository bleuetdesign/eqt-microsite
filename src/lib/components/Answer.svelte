<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { header, explanation, icon, onclick } = $props();
</script>

<img src={`/${icon}.svg`} alt="" class="mb-12 h-20 w-20" />
<h1 class="mb-8 max-w-2xl text-balance text-center text-5xl font-medium text-gray-50">
	{header}
</h1>
<p class="mb-32 text-2xl text-gray-100">
	{explanation}
</p>
<Button variant="livid" {onclick}>Suivant</Button>
