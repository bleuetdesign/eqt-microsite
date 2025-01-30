<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof window === undefined) return;
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-TSKNTT5G');
	});

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

<svelte:head>
	<script type="text/javascript" id="hs-script-loader" async defer src="/21537648.js"></script>
	<script charset="utf-8" type="text/javascript" async defer src="/forms-embed-v2.js"></script>
</svelte:head>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
