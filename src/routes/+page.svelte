<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<nav class="bg-emerald-950 px-8 py-4">
	<div class="mx-auto flex max-w-screen-xl items-center justify-between">
		<div>
			<div class="uppercase text-gray-50">Réservations</div>
			<div class="text-sm text-gray-200">(À venir)</div>
		</div>
		<img src="/logo.svg" alt="" class="h-16" />
		<div class="font-semibold text-gray-50">
			<a href="#">FR</a>
			<span>&nbsp;|&nbsp;</span>
			<a href="#">EN</a>
		</div>
	</div>
</nav>

<main>
	<section style="background-image: url(/hero.png)" class="relative bg-cover px-8 py-8">
		<img src="/acces_gratuit.png" alt="" class="absolute right-12 top-12" />
		<div class="mx-auto max-w-screen-xl">
			<div class="my-24 flex flex-col">
				<h1 class="mb-6 text-5xl tracking-wide text-gray-50">{@html m.hero_title()}</h1>
				<p class="mb-12 max-w-72 text-lg leading-5 text-gray-200">
					Célèbrez l'ouverture du premier spa qui détoxifie aussi la planète.
				</p>
				<Button variant="livid">Profitez-en vite</Button>
			</div>
		</div>
	</section>
	<section class="bg-emerald-200 px-8 py-4">
		<div class="mx-auto max-w-screen-xl rounded-[3rem] border-2 border-emerald-700 p-4">
			<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
				<p class="text-2xl font-medium uppercase text-emerald-800">
					Offre exclusive de pré-ouverture
				</p>
				<h2 class="mb-6 max-w-xl text-4xl font-bold leading-tight text-emerald-950">
					Un accès gratuit pour 2 personnes à gagner
				</h2>
				<Button>J'en profite !</Button>
			</div>
		</div>
	</section>
	<section class="bg-emerald-50 px-8 py-4">
		<div class="mx-auto max-w-screen-xl">
			<div class="my-12 flex items-center">
				<div class="flex flex-col gap-y-8 text-balance">
					<h2 class="mb-6 max-w-2xl text-4xl font-bold leading-tight text-emerald-950">
						Et si on pouvait faire du bien à la planète tout en prenant soin de soi?
					</h2>
					<p class="text-lg text-emerald-800">
						Après des années de recherche et développement, le tout premier spa éco-conscient au
						monde voit enfin le jour.
					</p>
				</div>
				<img src="/spa.png" alt="" class="m-8 max-w-[24rem]" />
			</div>
			<div class="my-12 flex flex-row-reverse items-center">
				<div class="flex max-w-lg flex-col">
					<h2 class="mb-2 text-4xl font-bold leading-tight text-emerald-950">
						<img src="/principe.svg" alt="" class="mt-[-8px] inline h-12 w-12 p-1" />

						Le principe
					</h2>
					<p class="text-lg text-emerald-800">
						Pura Terra utilise les gaz à effets de serre pour alimenter des installations thermales
						nouvelle génération. Celles-ci agissent à la manière d’un purificateur d’air, relâchant
						dans l’air de la simple vapeur d’eau.
					</p>
					<h2 class="mb-2 mt-16 max-w-lg text-4xl font-bold leading-tight text-emerald-950">
						<img src="/resultat.svg" alt="" class="mt-[-8px] inline h-14 w-14" />
						Le résultat
					</h2>
					<p class="text-lg text-emerald-800">
						L’empreinte carbone de Pura Terra ne se contente pas d’être neutre : elle est négative.
						Nos installations consomment plus de gaz à effet de serre qu’elles n’en rejettent,
						contribuant ainsi à détoxifier la planète, et vous aussi!
					</p>
				</div>
				<img src="/ges.svg" alt="" class="m-8 mr-20 w-[24rem]" />
			</div>
		</div>
	</section>

	<section class="relative z-10 bg-emerald-950 px-8 py-4">
		<div class="mx-auto max-w-screen-xl">
			<div class="my-12 flex items-center">
				<div class="flex flex-col gap-y-8 text-balance text-white">
					<h2 class="max-w-2xl text-4xl font-bold leading-tight">Nos soins</h2>
					<p class="text-lg">
						En plus d’offrir un choix éco-conscient, Pura Terra vous donne accès à un circuit
						thermal au cœur de la nature et à une gamme de soins incluant :
					</p>
					<ul class="flex size-fit flex-col space-y-4 divide-y divide-gray-300">
						<li class="flex items-center gap-x-12 px-8">
							<img src="/thermal.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">Circuit thermal</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/masso.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">Massothérapie</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/soins_corps.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">Soins du corps</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/soins_visage.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">Soins du visage</div>
						</li>
					</ul>
					<p class="text-lg">
						Tous les produits utilisés durant les soins sont 100% bio, vegan et pensés dans une
						optique 0 déchet.
					</p>
				</div>
				<img src="/lady.png" alt="" class="m-8 w-[28rem]" />
			</div>
		</div>
	</section>

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

	<footer class="relative z-10 bg-emerald-950 px-8 py-8">
		<div class="mx-auto flex max-w-screen-xl justify-between">
			<img src="/logo.svg" alt="" class="h-16" />
			<div class="flex items-center gap-x-12 text-xs text-gray-300">
				<a href="#">Politique de confidentialité</a>
				<a href="#">Conditions d'utilisation</a>
				<a href="#">Politique d'utilisation des cookies</a>
			</div>
			<div class="flex items-center gap-x-6">
				<div class="rounded-full border border-white">
					<img src="/instagram.svg" alt="" class="h-10 w-10 p-3" />
				</div>
				<div class="rounded-full border border-white">
					<img src="/facebook.svg" alt="" class="h-10 w-10 p-3" />
				</div>
			</div>
		</div>
	</footer>
</main>
