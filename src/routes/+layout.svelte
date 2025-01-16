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

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-bottom {
		from {
			transform: translateY(100vh);
		}
	}

	@keyframes slide-to-top {
		to {
			transform: translateY(-100vh);
		}
	}

	:root::view-transition-old(root) {
		animation:
			/* 500ms cubic-bezier(0.4, 0, 1, 1) both fade-out, */ 300ms
			cubic-bezier(0.4, 0, 0.2, 1) both slide-to-top;
	}

	:root::view-transition-new(root) {
		animation:
			/* 210ms cubic-bezier(0, 0, 0.2, 1) 500ms both fade-in, */ 300ms
			cubic-bezier(0.4, 0, 0.2, 1) both slide-from-bottom;
	}
</style>
