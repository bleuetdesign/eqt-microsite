<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div>
	<div class="bg-[#F4F3E6]">
		<div class="mx-auto max-w-screen-xl px-8">
			<nav>
				<img src="/equiterre.png" alt="" class="h-24" />
			</nav>

			<!-- hero -->
			<section class="flex flex-col items-center text-balance text-center">
				<h1 class="mb-8 max-w-4xl text-[3.5rem] font-medium leading-[1.2] text-gray-950">
					{@html m.flat_cuddly_alpaca_fond()}
				</h1>
				<p class="mb-12 text-2xl">
					{@html m.quaint_new_panther_beam()}
				</p>
				<img src="/arrow-down.svg" alt="" class="mb-4 h-10 w-10" />
				<hr class="mb-4 mt-8 h-1 w-full border-t border-black" />
			</section>

			<!-- why -->
			<section class="flex">
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500"></div>
				<h2 class="ml-8 max-w-lg text-balance text-4xl font-semibold">
					{m.mad_soft_crocodile_drum()}
				</h2>
				<div class="flex-grow"></div>
				<div class="max-w-lg text-xl text-gray-800">
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

			<!-- newsletter signup -->
			<section class="my-16">
				<h2 class="mb-16 text-balance text-center text-4xl font-semibold">
					{m.shy_same_anteater_comfort()}
				</h2>
				<form action="">
					<div class="flex justify-center gap-x-4">
						<input
							placeholder="Entrez votre courriel"
							type="email"
							required
							autocomplete="email"
							class="rounded-full border-none px-8 text-lg placeholder:text-gray-600"
						/>
						<button
							type="submit"
							class="rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white"
							>Je veux savoir</button
						>
					</div>
				</form>
			</section>
			<hr class="my-4 h-1 w-full border-t border-black" />

			<!-- 3 years from now -->
			<section class="flex pb-16">
				<div class="mt-3 h-5 w-5 shrink-0 rounded-full bg-orange-500"></div>
				<p class="ml-6 max-w-sm text-xl font-semibold">
					<strong class="block text-4xl"> D'ici 3 ans, </strong>
					les gens pourraient être incapables de distinguer ce qui est vrai de ce qui ne l'est pas, selon
					Horizons de politiques Canada.
				</p>
				<div class="flex-grow"></div>
				<div class="max-w-lg text-2xl">
					<p>
						<strong>Bien s'informer est plus important que jamais.</strong>
					</p>
					<p class="mt-6 text-gray-700">
						Que ce soit pour se protéger des belles promesses d'un faux spa ou pour éviter d'être
						manipulé à des fins politiques, apprendre à discerner le vrai du faux est devenu
						primordial.
					</p>
				</div>
			</section>
		</div>
	</div>

	<!-- newsletter signup -->
	<div class="bg-[#1f1f1f]">
		<section class="mx-auto max-w-screen-xl flex-col items-center justify-center gap-y-8 py-48">
			<h2
				class="mb-8 text-balance text-center text-[2.5rem] font-medium leading-tight text-lime-200"
			>
				En vérifiant l'information,<br /> Équiterre vous aide à distinguer le vrai du faux.
			</h2>
			<form action="">
				<div class="flex justify-center gap-x-4">
					<input
						placeholder="Entrez votre courriel"
						type="email"
						required
						autocomplete="email"
						class="rounded-full border-none px-8 text-lg placeholder:text-gray-600"
					/>
					<button
						type="submit"
						class="rounded-full bg-orange-500 px-8 py-4 text-xl font-semibold text-white"
						>Je veux savoir</button
					>
				</div>
				<a
					class="mt-8 block text-center text-lg text-lime-200 underline"
					href="https://www.equiterre.org/">Pour en savoir plus sur Équiterre</a
				>
			</form>
		</section>
	</div>
</div>
