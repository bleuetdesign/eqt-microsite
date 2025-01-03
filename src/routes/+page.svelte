<script lang="ts">
	import Nav from '$lib/sections/nav.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import ExclusiveOffer from '$lib/sections/exclusive_offer.svelte';
	import TwoSplit from '$lib/sections/two_split.svelte';
	import Services from '$lib/sections/services.svelte';
	import CTA from '$lib/sections/cta.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<Nav />
<main>
	<Hero />
	<ExclusiveOffer />
	<TwoSplit />
	<Services />
	<CTA />
	<Footer />
</main>
