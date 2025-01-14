<script lang="ts">
	import { fly } from 'svelte/transition';
	import Question from '$lib/components/Question.svelte';
	import Answer from '$lib/components/Answer.svelte';

	type QuestionProps = { header: string; answers: string[] };
	let questions: QuestionProps[] = $state([
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
		}
	]);

	type AnswerProps = {
		header: string;
		explanation: string;
		icon: 'soins_corps' | 'soins_visage' | 'resultat' | 'thermal';
	}[];
	let answers: AnswerProps[] = $state([
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

	let responses: undefined | null | number[] = $state();
	$inspect(responses);

	setTimeout(() => {
		responses = null;
	});
	setTimeout(() => {
		responses = [];
	}, 3000);
</script>

<main
	class="relative flex min-h-screen w-screen flex-col items-center justify-center text-balance bg-emerald-950 p-16 text-center"
>
	{#if responses === undefined}
		<!-- trigger fly in -->
	{:else if responses === null}
		<button
			in:fly={{ y: 400 }}
			out:fly={{ y: -400 }}
			class="motion-preset-fade-lg text-balance text-center text-3xl text-gray-50 motion-translate-y-in-150"
			onclick={() => (responses = [])}
		>
			Pour vous inscrire au concours, rien de plus simple: il vous suffit de répondre à 4 petites
			questions.
		</button>
	{:else if questions.length >= answers.length}
		<Question {...questions[0]} onclick={(i) => responses!.push(i) && questions.shift()} />
	{:else}
		<Answer
			{...answers[0][answers[0].length === 1 ? 0 : responses.at(-1)!]}
			onclick={() => answers.shift() && responses?.length === 3 && (location.href = '/equiterre')}
		/>
	{/if}
</main>
