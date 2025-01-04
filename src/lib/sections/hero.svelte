<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<section style="background-image: url(/hero.png)" class="relative bg-gray-700 bg-cover px-8 py-8">
	<img src="/acces_gratuit.png" alt="" class="absolute right-12 top-12" />
	<div class="mx-auto max-w-screen-xl">
		<div class="my-24 flex flex-col gap-y-8">
			<h1 class="text-5xl leading-tight tracking-wide text-gray-50">{@html m.hero_title()}</h1>
			<p class="max-w-72 text-lg leading-5 text-gray-200">
				Célèbrez l'ouverture du premier spa qui détoxifie aussi la planète.
			</p>
			<Button variant="light">Profitez-en vite</Button>
		</div>
	</div>
</section>
