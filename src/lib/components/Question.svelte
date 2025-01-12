<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fly } from 'svelte/transition';

	type Props = { header: string; answers: string[]; onclick: (i: number) => void };
	let { header, answers, onclick }: Props = $props();
</script>

<div in:fly={{ y: 400, delay: 400 }} out:fly={{ y: -400 }}>
	<h1 class="mx-auto mb-16 w-full max-w-2xl text-5xl font-medium leading-tight text-gray-50">
		{header}
	</h1>
	<div class="flex justify-center gap-x-8">
		{#each answers as answer, i}
			<Button class="basis-72" variant="livid" onclick={() => onclick(i)}>{answer}</Button>
		{/each}
	</div>
</div>
