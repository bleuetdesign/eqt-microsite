<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<nav class="bg-emerald-950 px-8 py-4">
	<div class="mx-auto flex max-w-screen-xl items-center justify-between">
		<div>
			<div class="uppercase text-gray-50">{m.good_warm_jay_hack()}</div>
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
				<h1 class="mb-6 text-5xl text-gray-50">{@html m.hero_title()}</h1>
				<p class="mb-12 max-w-72 text-xl font-medium text-gray-200">
					{m.loose_tidy_panda_praise()}
				</p>
				<Button variant="livid" href="/quizz">{m.strong_tired_insect_pop()}</Button>
			</div>
		</div>
	</section>
	<section class="bg-emerald-200 px-8 py-4">
		<div class="mx-auto max-w-screen-xl rounded-[3rem] border-2 border-emerald-700 p-4">
			<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
				<p class="text-2xl font-medium uppercase text-emerald-800">
					{m.tasty_slow_marmot_absorb()}
				</p>
				<h2 class="mb-6 max-w-xl text-4xl font-bold leading-tight text-emerald-950">
					{m.tiny_born_yak_spin()}
				</h2>
				<Button href="/quizz">{m.awful_wild_flamingo_snip()}</Button>
			</div>
		</div>
	</section>
	<section class="bg-emerald-50 px-8 py-4">
		<div class="mx-auto max-w-screen-xl">
			<div class="my-12 flex items-center">
				<div class="flex flex-col gap-y-8 text-balance">
					<h2 class="mb-6 max-w-2xl text-4xl font-bold leading-tight text-emerald-950">
						{m.ago_ago_bird_grin()}
					</h2>
					<p class="text-lg text-emerald-800">{m.nimble_tangy_marten_persist()}</p>
				</div>
				<img src="/spa.png" alt="" class="m-8 max-w-[24rem]" />
			</div>
			<div class="my-12 flex flex-row-reverse items-center">
				<div class="flex max-w-lg flex-col">
					<h2 class="mb-2 text-4xl font-bold leading-tight text-emerald-950">
						<img src="/principe.svg" alt="" class="mt-[-8px] inline h-12 w-12 p-1" />

						{m.spicy_tangy_bear_grasp()}
					</h2>
					<p class="text-lg text-emerald-800">{m.tame_watery_hornet_prosper()}</p>
					<h2 class="mb-2 mt-16 max-w-lg text-4xl font-bold leading-tight text-emerald-950">
						<img src="/resultat.svg" alt="" class="mt-[-8px] inline h-14 w-14" />
						Le résultat
					</h2>
					<p class="text-lg text-emerald-800">{m.seemly_careful_weasel_reside()}</p>
				</div>
				<img src="/ges.svg" alt="" class="m-8 mr-20 w-[24rem]" />
			</div>
		</div>
	</section>

	<section class="relative z-10 bg-emerald-950 px-8 py-4">
		<div class="mx-auto max-w-screen-xl">
			<div class="my-12 flex items-center">
				<div class="flex flex-col gap-y-8 text-balance text-white">
					<h2 class="max-w-2xl text-4xl font-bold leading-tight">{m.glad_quick_termite_feel()}</h2>
					<p class="text-lg">{m.sad_real_mare_flop()}</p>
					<ul class="flex size-fit flex-col space-y-4 divide-y divide-gray-300">
						<li class="flex items-center gap-x-12 px-8">
							<img src="/thermal.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">{m.weary_dirty_rook_type()}</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/masso.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">{m.tense_fresh_monkey_sail()}</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/soins_corps.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">{m.neat_merry_deer_pick()}</div>
						</li>
						<li class="flex items-center gap-x-12 px-8">
							<img src="/soins_visage.svg" alt="" class="mt-4 h-16 w-16" />
							<div class="pt-4 font-bold">{m.honest_broad_otter_favor()}</div>
						</li>
					</ul>
					<p class="text-lg">{m.candid_any_elephant_pride()}</p>
				</div>
				<img src="/lady.png" alt="" class="m-8 w-[28rem]" />
			</div>
		</div>
	</section>

	<section class="relative bg-emerald-200 px-8 py-4">
		<div class="mx-auto max-w-screen-xl p-4">
			<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
				<h2 class="mb-6 max-w-xl text-4xl font-bold leading-tight text-emerald-950">
					{m.jolly_calm_shrike_devour()}
				</h2>
				<Button href="/quizz">{m.antsy_quaint_hawk_fall()}</Button>
			</div>
		</div>
		<div
			class="absolute bottom-[-2rem] left-[-7rem] h-64 w-64 rounded-full border border-white"
		></div>
		<div
			class="absolute right-[-3rem] top-[-3rem] h-44 w-44 rounded-full border border-white"
		></div>
		<div
			class="absolute bottom-[-6rem] right-[6rem] h-44 w-44 rounded-full border border-white"
		></div>
	</section>

	<footer class="relative z-10 bg-emerald-950 px-8 py-8">
		<div class="mx-auto flex max-w-screen-xl justify-between">
			<img src="/logo.svg" alt="" class="h-16" />
			<div class="flex items-center gap-x-12 text-xs text-gray-300">
				<a href="#">{m.game_deft_crab_forgive()}</a>
				<a href="#">{m.lofty_acidic_seal_pat()}</a>
				<a href="#">{m.lime_dry_alligator_quell()}</a>
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
