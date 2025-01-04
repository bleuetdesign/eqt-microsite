<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="relative bg-emerald-200 px-8 py-4">
	<div class="mx-auto max-w-screen-xl p-4">
		<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
			<h2 class="mb-6 max-w-xl text-4xl font-bold leading-tight text-emerald-950">
				Profitez-en avant tout le monde! Un forfait pour 2 à gagner.
			</h2>
			<Button>J'en profite !</Button>
		</div>
	</div>
	<div class="absolute bottom-[-2rem] left-[-7rem] h-64 w-64 rounded-full border border-white" />
	<div class="absolute right-[-3rem] top-[-3rem] h-44 w-44 rounded-full border border-white" />
	<div class="absolute bottom-[-6rem] right-[6rem] h-44 w-44 rounded-full border border-white" />
</section>
