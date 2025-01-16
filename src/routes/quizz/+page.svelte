<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/components';
	import { goto } from '$app/navigation';

	type Question = { header: string; answers: string[] };
	let questions: Question[] = $state([
		{
			header: 'Qu’est-ce qui vous séduit le plus chez Pura Terra?',
			answers: ['La beauté des lieux', 'L’engagement environnemental', 'Les soins éco-responsables']
		},
		{
			header: 'Pour vous, protéger la planète, c’est:',
			answers: ['Primordial', 'Difficile', 'Pas important']
		},
		{
			header: 'Pour vous, le soin beauté idéal, c’est:',
			answers: ['100% naturel', '0 déchet', 'Carboneutre']
		},
		{
			header: 'Est-ce que Pura Terra vous semble un peu trop beau pour être vrai?',
			answers: ['Oui', 'Juste un peu, mettons', 'Maintenant que vous le dites...']
		}
	]);

	type Answer = {
		header: string;
		explanation: string;
		icon: 'soins_corps' | 'soins_visage' | 'resultat' | 'thermal';
	};
	let answers: Answer[][] = $state([
		[
			{
				header: 'Nous aussi nous adorons cet endroit!',
				icon: 'soins_corps',
				explanation:
					'C’est pourquoi nous avons opté pour une éco-architecture unique au Québec, parfaitement intégrée à la beauté naturelle de cette réserve protégée.'
			},
			{
				header: 'C’est tellement important pour nous aussi!',
				icon: 'soins_corps',
				explanation:
					'Et grâce à notre innovation unique, nous pouvons contribuer au bien-être de la planète aussi bien qu’à celui des gens.'
			},
			{
				header: 'Pour nous aussi, c’était une évidence!',
				icon: 'soins_corps',
				explanation: `Et avec son concept unique, Pura Terra va encore plus loin. On ne se contente pas de minimiser notre impact: on purifie littéralement la planète!`
			}
		],
		[
			{
				header: 'Vous avez raison!',
				icon: 'thermal',
				explanation:
					'Nous n’avons qu’une seule planète, il faut en prendre soin. Et en détoxifiant 2 tonnes de CO2 par jour, Pura Terra vous permet de faire votre part de la façon la plus agréable possible.'
			},
			{
				header: "C'est vrai!",
				icon: 'thermal',
				explanation:
					'Comment faire une différence sans pour autant se priver? C’est ce qui a donné vie au concept éco-conscient de Pura Terra. Imaginez-vous : en une journée, Pura Terra détoxifie 2 tonnes de CO2!'
			},
			{
				header: 'Ça tombe bien, vous n’avez pas à vous en préoccuper!',
				icon: 'thermal',
				explanation: `Pura Terra s’en occupe à votre place. Tout ce que vous avez à faire, c’est profiter d’un moment de pure détente dans un cadre enchanteur.`
			}
		],
		[
			{
				header: 'Bonne nouvelle, les soins chez Pura Terra sont tout ça à la fois!',
				icon: 'soins_visage',
				explanation:
					'Bio, vegan, et 100% naturels, ils sont aussi stockés dans des contenants réutilisables, remplis directement chez nos producteurs locaux et n’émettent aucun GES.'
			}
		]
	]);

	let questionData = $derived(questions[0]);
	let answerIdx = $state(-1);
	let answerData = $derived(answers[0][answerIdx % answers[0].length]);

	setTimeout(() => (answerIdx = -1));
	setTimeout(() => answerIdx < 0 && (answerIdx = 0), 5000);
</script>

<main
	class="relative flex min-h-screen w-screen flex-col items-center justify-center text-balance bg-emerald-950 p-16 text-center"
>
	{#if answerIdx === -1}
		<div
			class="motion-duration-250 flex flex-col items-center gap-y-4 motion-translate-y-in-150 motion-opacity-in"
			out:fly={{ y: -400 }}
		>
			<button
				class="text-balance text-center text-3xl text-gray-50"
				onclick={() => (answerIdx = -1)}
			>
				Pour vous inscrire au concours, rien de plus simple: il vous suffit de répondre à 4 petites
				questions.
			</button>
			<Button variant="livid" onclick={() => (answerIdx = 0)} class="mt-12">Suivant</Button>
		</div>
	{:else if questions.length > answers.length}
		{@render question(questionData)}
	{:else}
		{@render answer(answerData)}
	{/if}
</main>

{#snippet question(q: Question)}
	<div in:fly={{ y: 400, delay: 400 }} out:fly={{ y: -400 }}>
		<h1 class="mx-auto mb-16 w-full max-w-2xl text-5xl font-medium leading-tight text-gray-50">
			{q.header}
		</h1>
		<div class="flex justify-center gap-x-8">
			{#each q.answers as answer, i}
				<Button
					class="basis-72"
					variant="livid"
					onclick={() => {
						if (!answers.length) {
							goto('/equiterre');
						} else {
							questions.shift();
							answerIdx = i;
						}
					}}>{answer}</Button
				>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet answer(a: Answer)}
	<div in:fly={{ y: 400, delay: 300 }} out:fly={{ y: -400 }}>
		<img src={`/${a.icon}.svg`} alt="" class="mx-auto mb-12 h-32 w-32" />
		<h1 class="mx-auto mb-8 max-w-2xl text-balance text-center text-5xl font-medium text-gray-50">
			{a.header}
		</h1>
		<p class="mx-auto mb-32 max-w-2xl text-2xl text-gray-100">
			{a.explanation}
		</p>
		<Button class="w-48 px-12" variant="livid" onclick={() => answers.shift()}>Suivant</Button>
	</div>
{/snippet}
