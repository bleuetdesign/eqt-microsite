<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fly } from 'svelte/transition';

	type Props = { header: string; answers: string[]; onclick: (i: number) => void };
	let { header, answers, onclick }: Props = $props();
</script>

<div in:fly={{ y: 400, delay: 200 }} out:fly={{ y: -400 }}>
	<h1 class="mx-auto mb-8 w-full max-w-2xl text-5xl font-medium text-gray-50">
		{header}
	</h1>
	<div class="flex gap-x-8">
		{#each answers as answer, i}
			<Button variant="livid" onclick={() => onclick(i)}>{answer}</Button>
		{/each}
	</div>
</div>
