<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="mx-auto max-w-screen-xl">
	<div class="bg-yellow-50 px-8">
		<nav>
			<<enhanced:img src="/equiterre.png" alt="" class="h-20" />
		</nav>
		<section class="flex flex-col items-center text-balance text-center">
			<h1 class="mb-8 max-w-2xl text-5xl font-medium leading-snug text-gray-950">
				{@html m.flat_cuddly_alpaca_fond()}
			</h1>
			<p class="mb-12 text-2xl">
				{@html m.quaint_new_panther_beam()}
			</p>
			<<enhanced:img src="/arrow-down.svg" alt="" class="mb-8" />
			<hr class="my-8 h-1 w-full border-t border-black" />
		</section>
		<section class="my-4 flex">
			<div class="mt-1 h-5 w-5 rounded-full bg-orange-500"></div>
			<h2 class="ml-8 max-w-lg text-balance text-3xl font-semibold">
				{m.mad_soft_crocodile_drum()}
			</h2>
			<div class="flex-grow"></div>
			<div class="max-w-md text-lg">
				<p>
					{@html m.arable_such_dolphin_zip()}
				</p>
				<br />
				<p>
					{m.still_patient_cow_gleam()}
				</p>
			</div>
		</section>
		<hr class="my-8 h-1 w-full border-t border-black" />
		<section class="my-16">
			<h2 class="mb-12 text-balance text-center text-3xl font-semibold">
				{m.shy_same_anteater_comfort()}
			</h2>
			<form action="">
				<div class="flex justify-center gap-x-4">
					<input
						placeholder="Entrez votre courriel"
						type="email"
						required
						autocomplete="email"
						class="rounded-full border-none px-8"
					/>
					<button
						type="submit"
						class="rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white"
						>Je veux savoir</button
					>
				</div>
			</form>
		</section>
		<hr class="my-8 h-1 w-full border-t border-black" />
		<section class="mt-4 flex pb-20">
			<div class="mt-3 h-5 w-5 rounded-full bg-orange-500"></div>
			<p class="ml-8 max-w-xs text-xl font-semibold">
				<strong class=" block text-balance text-3xl"> D’ici 3 ans, </strong>
				les gens pourraient être incapables de distinguer ce qui est vrai de ce qui ne l’est pas, selon
				Horizons de politiques Canada.
			</p>
			<div class="flex-grow"></div>
			<div class="max-w-md text-lg">
				<p>
					<strong>Bien s’informer est plus important que jamais.</strong>
				</p>
				<br />
				<p>
					Que ce soit pour se protéger des belles promesses d'un faux spa ou pour éviter d'être
					manipulé à des fins politiques, apprendre à discerner le vrai du faux est devenu
					primordial.
				</p>
			</div>
		</section>
	</div>
	<section class="flex-col items-center justify-center gap-y-8 bg-zinc-900 py-48">
		<h2 class="mb-8 text-balance text-center text-4xl font-semibold text-lime-100">
			En vérifiant l’information, Équiterre vous aide à distinguer le vrai du faux.
		</h2>
		<form action="">
			<div class="flex justify-center gap-x-4">
				<input
					placeholder="Entrez votre courriel"
					type="email"
					required
					autocomplete="email"
					class="rounded-full border-none px-8"
				/>
				<button
					type="submit"
					class="rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white"
					>Je veux savoir</button
				>
			</div>
			<a class="mt-8 block text-center text-lime-200 underline" href=""
				>Pour en savoir plus sur Équiterre</a
			>
		</form>
	</section>
</div>
