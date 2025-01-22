<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	let curtain = true;
	setTimeout(() => (curtain = false));
</script>

<svelte:head>
	<script
		type="text/javascript"
		id="hs-script-loader"
		async
		defer
		src="//js.hs-scripts.com/21537648.js"
	></script>
	<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
	<script>
		window.hbspt.forms.create({
			target: '#hs-form',
			portalId: '21537648',
			formId: '793bfe68-5ba3-4382-b211-8f4aa30424b8'
		});
	</script>
</svelte:head>

{#if curtain}
	<div
		out:fly={{ y: '100%', opacity: 1, duration: 750, easing: cubicOut }}
		class="-motion-scale-y-in-0 fixed inset-0 top-[50%] z-10 bg-[#1f1f1f]"
	></div>
{/if}
<div>
	<div class="bg-[#F4F3E6]">
		<div class="mx-auto max-w-screen-xl px-8">
			<nav>
				<img
					src="/equiterre.svg"
					alt=""
					class="h-24 motion-opacity-in motion-duration-1000 motion-ease-in-out"
				/>
			</nav>

			<!-- hero -->
			<section class="flex flex-col items-center text-balance text-center">
				<h1
					class="my-8 max-w-4xl text-[3.5rem] font-medium leading-[1.2] text-gray-950 motion-translate-x-in-25 motion-opacity-in motion-duration-1000 motion-ease-in-out max-sm:text-5xl"
				>
					{@html m.flat_cuddly_alpaca_fond()}
				</h1>
				<p
					class="mb-12 max-w-2xl text-2xl motion-translate-y-in-50 motion-opacity-in motion-duration-1000 motion-ease-in-out"
				>
					{@html m.quaint_new_panther_beam()}
				</p>
				<img
					src="/arrow-down.svg"
					alt=""
					class="mb-4 h-10 w-10 motion-translate-y-in-150 motion-opacity-in motion-duration-1000 motion-ease-in-out"
				/>
				<hr
					class="mb-4 mt-8 h-1 w-full border-t border-black motion-translate-y-in-[16rem] motion-duration-1000 motion-ease-in-out"
				/>
			</section>

			<!-- why -->
			<section
				class="flex motion-translate-y-in-100 motion-duration-1000 motion-ease-in-out max-sm:flex-wrap"
			>
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500 max-sm:hidden"></div>
				<h2 class="mb-4 mr-4 max-w-lg text-balance text-4xl font-semibold sm:ml-8">
					{m.mad_soft_crocodile_drum()}
				</h2>
				<div class="flex-grow"></div>
				<div class="flex max-w-lg flex-col gap-y-4 text-xl text-gray-800">
					<p>
						{@html m.arable_such_dolphin_zip()}
					</p>
					<p>
						Avec les nouvelles technologies comme l’intelligence artificielle, il devient à chaque
						jour plus difficile de différencier le vrai du faux. De plus en plus de personnes sont
						exposées et influencées par la désinformation.
					</p>
					<p>Et, en ce moment, cette personne c’est vous.</p>
					<p>
						Cette désinformation est dangereuse, car elle nous pousse à faire des choix néfastes
						pour notre portefeuille, notre sécurité et notre santé, dans le seul but de servir les
						intérêts d’entreprises et d’individus qui s’enrichissent à nos dépends.
					</p>
				</div>
			</section>
			<hr class="my-8 h-1 w-full border-t border-black" />

			<!-- video -->
			<section class="flex max-lg:flex-col-reverse max-lg:flex-wrap">
				<h2 class="mb-8 mr-4 flex text-balance text-4xl font-semibold lg:max-w-md">
					<div class="mr-8 mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500 max-sm:hidden"></div>
					Équiterre vous dévoile comment cette fausse publicité a été créée et vous donne les outils
					pour détecter la désinformation qui s’y cache.
				</h2>
				<div class="grow"></div>
				<video
					controls
					src="/desinformation.webm"
					class="mx-auto mb-4 aspect-video w-[48rem] bg-gray-900 lg:max-w-lg"
				></video>
			</section>
			<hr class="my-8 h-1 w-full border-t border-black" />

			<!-- newsletter signup -->
			<section class="my-16">
				<h2 class="mb-16 text-balance text-center text-4xl font-semibold">
					Remplissez le formulaire pour voir la suite
				</h2>
				<div class="mx-auto max-w-screen-xl p-4" id="hs-form"></div>
			</section>
			<hr class="my-4 h-1 w-full border-t border-black" />

			<!-- 3 years from now -->
			<section class="flex pb-16 max-sm:flex-col">
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500 max-sm:hidden"></div>
				<p class="mr-4 max-w-sm text-xl font-semibold sm:ml-6">
					<strong class="block text-4xl"> D’ici 2 ans, </strong>
					les gens pourraient être incapables de distinguer ce qui est vrai de ce qui ne l'est pas, selon
					Horizons de politiques Canada.
				</p>
				<div class="flex-grow"></div>
				<div class="mt-3 max-w-lg text-xl max-sm:mt-4">
					<p>
						<strong>Bien s’informer est plus important que jamais.</strong>
					</p>
					<p class="mt-6 text-gray-700">
						Que ce soit pour se protéger des belles promesses d’un faux spa ou pour éviter d'être
						manipulé à des fins politiques, apprendre à discerner le vrai du faux est devenu
						primordial.
					</p>
				</div>
			</section>
		</div>
	</div>

	<!-- newsletter signup -->
	<div class="bg-[#1f1f1f]">
		<section
			class="mx-auto max-w-screen-xl flex-col items-center justify-center gap-y-8 px-4 py-48"
		>
			<h2
				class="mb-8 text-balance text-center text-[2.5rem] font-medium leading-tight text-lime-200 max-sm:text-4xl"
			>
				En vérifiant l’information,<br /> Équiterre vous aide à distinguer le vrai du faux.
			</h2>
		</section>
	</div>
</div>

<style lang="postcss">
	:global(.submitted-message) {
		@apply mx-auto;
	}

	:global(form) {
		@apply mx-auto grid max-w-lg grid-cols-2 justify-center gap-3;
	}

	:global(input[type='email']),
	:global(input[type='text']) {
		@apply w-full rounded-xl border-none px-4 text-sm placeholder:text-gray-600;
	}
	:global(.hs-email),
	:global(.legal-consent-container),
	:global(.hs-submit) {
		@apply col-span-full;
	}
	:global(input[type='checkbox']) {
		@apply mr-2 mt-1 h-4 w-4 rounded border-gray-300;
	}
	:global(.hs-submit) {
		@apply mt-4 justify-self-center rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white;
	}

	:global(#hs_show_banner_button) {
		@apply !bg-orange-500 !text-white;
	}
</style>
