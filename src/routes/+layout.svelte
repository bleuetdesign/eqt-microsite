<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

<style lang="postcss">
	:global(:root) :not(p) {
		@apply max-sm:text-[90%];
	}

	:global(#hs_show_banner_button) {
		@apply fixed bottom-8 right-8 z-10 !rounded-full !bg-emerald-950 !text-emerald-50;
	}
</style>
