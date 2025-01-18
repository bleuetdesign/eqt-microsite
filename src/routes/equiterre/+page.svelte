<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let curtain = true;
	setTimeout(() => (curtain = false), 0);
</script>

<svelte:head>
	<!-- Start of HubSpot Embed Code -->
	<script
		type="text/javascript"
		id="hs-script-loader"
		async
		defer
		src="//js.hs-scripts.com/21537648.js"
	></script>
	<!-- End of HubSpot Embed Code -->

	<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
	<script>
		hbspt.forms.create({
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
					src="/equiterre.png"
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
					class="mb-12 text-2xl motion-translate-y-in-50 motion-opacity-in motion-duration-1000 motion-ease-in-out"
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
						{m.still_patient_cow_gleam()}
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
			<section class="flex">
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500"></div>
				<h2 class="ml-8 mr-4 max-w-lg text-balance text-4xl font-semibold">
					Équiterre vous dévoile comment cette fausse publicité a été créée et vous donne les outils
					pour détecter la désinformation qui s’y cache.
				</h2>
				<div class="grow">
					<div class="mb-12 aspect-video bg-gray-900"></div>
				</div>
			</section>
			<hr class="my-8 h-1 w-full border-t border-black" />

			<!-- newsletter signup -->
			<section class="my-16">
				<h2 class="mb-16 text-balance text-center text-4xl font-semibold">
					{m.shy_same_anteater_comfort()}
				</h2>
				{@render newsletterForm()}
			</section>
			<hr class="my-4 h-1 w-full border-t border-black" />

			<!-- 3 years from now -->
			<section class="flex pb-16 max-sm:flex-col">
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500 max-sm:hidden"></div>
				<p class="mr-4 max-w-sm text-xl font-semibold sm:ml-6">
					<strong class="block text-4xl"> D’ici 3 ans, </strong>
					les gens pourraient être incapables de distinguer ce qui est vrai de ce qui ne l'est pas, selon
					Horizons de politiques Canada.
				</p>
				<div class="flex-grow"></div>
				<div class="max-w-lg text-2xl max-sm:mt-4">
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
	<div class="bg-dark bg-[#1f1f1f]">
		<section
			class="mx-auto max-w-screen-xl flex-col items-center justify-center gap-y-8 px-4 py-48"
		>
			<h2
				class="mb-8 text-balance text-center text-[2.5rem] font-medium leading-tight text-lime-200 max-sm:text-4xl"
			>
				En vérifiant l’information,<br /> Équiterre vous aide à distinguer le vrai du faux.
			</h2>
			{@render newsletterForm()}
		</section>
	</div>
</div>

{#snippet newsletterForm()}
	<form id="793bfe68-5ba3-4382-b211-8f4aa30424b8">
		<div class="mx-auto grid max-w-xs grid-cols-2 justify-center gap-3">
			<input
				placeholder="Entrez votre courriel"
				type="email"
				name="email"
				required
				autocomplete="email"
				class="col-span-full basis-80 rounded-xl border-none px-4 text-sm placeholder:text-gray-600"
			/>
			<input
				placeholder="Prénom"
				name="firstname"
				required
				autocomplete="given-name"
				class="basis-80 rounded-xl border-none px-4 text-sm placeholder:text-gray-600"
			/>
			<input
				placeholder="Nom de famille"
				name="lastname"
				required
				autocomplete="family-name"
				class="basis-80 rounded-xl border-none px-4 text-sm placeholder:text-gray-600"
			/>
			<div class="col-span-full">
				<label class="flex items-center gap-2">
					<input type="checkbox" required class="h-4 w-4 rounded border-gray-300" />
					<span class="text-sm text-gray-700">Je consens à recevoir des nouvelles d’Équiterre</span>
				</label>
			</div>

			<button
				type="submit"
				class="col-span-full mt-4 justify-self-center rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white"
				>Je veux savoir</button
			>
		</div>
	</form>
{/snippet}

<style lang="postcss">
	:global(.bg-dark) label span {
		@apply text-lime-200;
	}
</style>
