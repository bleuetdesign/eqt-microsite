<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	type Props = { header: string; answers: string[]; onclick: (i: number) => void };
	let { header, answers, onclick }: Props = $props();
</script>

<h1 class="mb-8 max-w-2xl text-5xl font-medium text-gray-50">
	{header}
</h1>
<div class="flex gap-x-8">
	{#each answers as answer, i}
		<Button variant="livid" onclick={() => onclick(i)}>{answer}</Button>
	{/each}
</div>
