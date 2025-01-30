<script lang="ts">
	import { Button } from '$lib/components';
	import * as m from '$lib/paraglide/messages.js';
</script>

<nav class="bg-emerald-950 px-8 py-4">
	<div class="mx-auto flex max-w-screen-xl items-center justify-between">
		<div>
			<div class="uppercase text-gray-50">{m.good_warm_jay_hack()}</div>
			<div class="text-sm text-gray-200">(À venir)</div>
		</div>
		<img src="/logo.svg" alt="" class="h-16" />
		<div class="font-medium text-gray-50 max-sm:hidden">
			<span>FR</span>
			<span>&nbsp;|&nbsp;</span>
			<span class="font-normal text-gray-300">EN</span>
		</div>
	</div>
</nav>

<main>
	<!-- hero -->
	<section
		style="background: linear-gradient(268.9deg, rgba(0, 0, 0, 0) 31.2%, rgba(0, 0, 0, 0.4) 74.36%), url(/hero.webp) center/cover; background-position: center"
		class="relative px-8 py-8 xl:h-[44rem]"
	>
		<enhanced:img
			src="./acces_gratuit.svg"
			alt=""
			class="absolute right-12 top-12 max-md:hidden xl:right-48"
			fetchpriority="high"
		/>
		<div class="mx-auto max-w-screen-xl">
			<div class="my-24 flex flex-col">
				<h1 class="mb-6 text-5xl text-gray-50">{@html m.hero_title()}</h1>
				<p class="mb-12 max-w-72 text-xl font-medium text-gray-200">
					{m.loose_tidy_panda_praise()}
				</p>
				<Button variant="light" class="px-12" href="/quizz">{m.strong_tired_insect_pop()}</Button>
			</div>
		</div>
	</section>

	<!-- cta -->
	<section class="bg-emerald-200 px-8 py-4">
		<div class="mx-auto max-w-screen-xl rounded-[3rem] border-2 border-emerald-700 p-4">
			<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
				<p class="text-2xl font-medium uppercase text-emerald-800">
					{m.tasty_slow_marmot_absorb()}
				</p>
				<h2 class="mb-6 max-w-xl text-4xl font-bold leading-tight text-emerald-950">
					{m.tiny_born_yak_spin()}
				</h2>
				<Button class="px-12" href="/quizz">{m.awful_wild_flamingo_snip()}</Button>
			</div>
		</div>
	</section>

	<!-- principe / résultat -->
	<section class="bg-emerald-50 px-8 py-12">
		<div class="mx-auto w-full max-w-screen-lg">
			<!-- faire du bien a la planete -->
			<div class="flex items-center justify-between max-lg:justify-center">
				<div class="flex max-w-lg flex-col gap-y-8 text-balance">
					<h2 class="mb-6 max-w-2xl text-[2.75rem] font-medium leading-[1.125] text-emerald-950">
						{m.ago_ago_bird_grin()}
					</h2>
					<p class="max-w-md text-lg text-emerald-900">{m.nimble_tangy_marten_persist()}</p>
				</div>
				<enhanced:img src="./spa.png" alt="" class="w-[30rem] py-8 max-lg:hidden" />
			</div>

			<!-- principe -->
			<div class="flex flex-row-reverse items-center max-lg:flex-col-reverse lg:justify-between">
				<div class="flex max-w-lg flex-col">
					<h2 class="mb-2 text-5xl font-medium leading-tight text-emerald-950">
						<img src="/principe.svg" alt="" class="mt-[-8px] inline h-12 w-12 p-1" />

						{m.spicy_tangy_bear_grasp()}
					</h2>
					<p class="text-lg text-emerald-800">{m.tame_watery_hornet_prosper()}</p>
					<h2 class="mb-2 mt-16 max-w-lg text-5xl font-medium leading-tight text-emerald-950">
						<img src="/resultat.svg" alt="" class="mt-[-8px] inline h-14 w-14" />
						Le résultat
					</h2>
					<p class="text-lg text-emerald-800">{m.seemly_careful_weasel_reside()}</p>
				</div>
				<enhanced:img src="./ges.svg" alt="" class="m-8 w-96 lg:mr-20 lg:w-[30rem]" />
			</div>
		</div>
	</section>

	<!-- nos soins -->
	<section class="relative z-10 bg-emerald-950 px-16 py-4">
		<div class="mx-auto w-full max-w-screen-xl">
			<div
				class="my-12 flex items-center justify-between max-lg:flex-col-reverse max-lg:text-center"
			>
				<div class="flex flex-col gap-y-8 text-balance text-white max-lg:items-center">
					<h2 class="w-fit text-5xl font-medium leading-tight">{m.glad_quick_termite_feel()}</h2>
					<p class="max-w-md text-xl">{m.sad_real_mare_flop()}</p>
					<ul class="flex size-fit flex-col space-y-4 divide-y divide-emerald-50">
						{#each [{ img: '/thermal.svg', text: m.weary_dirty_rook_type() }, { img: '/masso.svg', text: m.tense_fresh_monkey_sail() }, { img: '/soins_corps.svg', text: m.neat_merry_deer_pick() }, { img: '/soins_visage.svg', text: m.honest_broad_otter_favor() }] as { img, text }}
							<li class="flex w-[28rem] items-center gap-x-12 max-lg:justify-center">
								<img src={img} alt="" class="mt-4 h-16 w-16" />
								<p class="pt-4 text-xl font-medium">{text}</p>
							</li>
						{/each}
					</ul>
					<p class="max-w-lg text-lg">{m.candid_any_elephant_pride()}</p>
				</div>
				<enhanced:img
					src="./lady.png"
					alt=""
					class="mx-auto mb-16 block w-96 shrink lg:mx-8 lg:my-16 lg:w-[32rem]"
				/>
			</div>
		</div>
	</section>

	<!-- cta -->
	<section class="relative overflow-hidden bg-emerald-200 px-8 py-4">
		<div class="mx-auto max-w-screen-xl p-4">
			<div class="my-12 flex flex-col items-center gap-y-4 text-balance text-center">
				<h2 class="z-20 mb-6 max-w-3xl text-[2.75rem] font-medium leading-tight text-emerald-950">
					{m.jolly_calm_shrike_devour()}
				</h2>
				<Button class="z-20 px-12" href="/quizz">{m.antsy_quaint_hawk_fall()}</Button>
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

	<footer class="relative z-10 bg-emerald-950 px-8 py-16">
		<div class="mx-auto flex max-w-screen-xl justify-between">
			<img src="/logo.svg" alt="" class="h-16" />
			<div
				class="flex items-center justify-between gap-x-12 px-4 text-center text-xs text-gray-300 max-md:gap-x-4"
			>
				<a href="#">{m.game_deft_crab_forgive()}</a>
				<a href="#">{m.lofty_acidic_seal_pat()}</a>
				<a class="max-sm:hidden" href="#">{m.lime_dry_alligator_quell()}</a>
			</div>
			<div class="flex items-center gap-x-6">
				<a
					target="_blank"
					href="https://www.instagram.com/spapuraterra/"
					class="shrink-0 rounded-full border border-white"
				>
					<img src="/instagram.svg" alt="" class="h-10 w-10 p-3" />
				</a>
				<a
					target="_blank"
					href="https://www.facebook.com/profile.php?id=61569693614614"
					class="shrink-0 rounded-full border border-white"
				>
					<img src="/facebook.svg" alt="" class="h-10 w-10 p-3" />
				</a>
			</div>
		</div>
	</footer>
</main>

<style lang="postcss">
	:global(#hs_show_banner_button) {
		@apply !border-emerald-50;
	}
</style>
