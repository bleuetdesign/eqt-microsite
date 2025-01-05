<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import Answer from '$lib/components/Answer.svelte';

	type QuestionProps = { header: string; answers: string[] };
	let questions: QuestionProps[] = $state([
		{
			header: "Qu'est-ce qui vous séduit le plus chez Purra Terra?",
			answers: ['La beauté des lieux', "L'engagement environnemental", 'Les soins éco-responsables']
		},
		{
			header: "Pour vous, protéger la planète, c'est:",
			answers: ['Primordial', 'Difficile', 'Pas important']
		},
		{
			header: "Pour vous, le soin beauté idéal, c'est:",
			answers: ['100% naturel', '0 déchet', 'Carboneutre']
		}
	]);

	type AnswerProps = {
		header: string;
		explanation: string;
		icon: 'soins_corps' | 'soins_visage' | 'resultat' | 'ges';
	}[];
	let answers: AnswerProps[] = $state([
		[
			{
				header: 'C’est tellement important pour nous aussi!',
				icon: 'soins_visage',
				explanation:
					'Et grâce à notre innovation unique, nous pouvons contribuer au bien-être de la planète aussi bien qu’à celui des gens.'
			},
			{
				header: 'Nous aussi nous adorons cet endroit!',
				icon: 'soins_visage',
				explanation:
					'Nous n’avons qu’une seule planète, il faut en prendre soin. Et en détoxifiant 2 tonnes de CO2 par jour, Pura Terra vous permet de faire votre part de la façon la plus agréable possible.'
			},
			{
				header: 'Ça tombe bien, vous n’avez pas à vous en préoccuper!',
				icon: 'soins_visage',
				explanation: `Pura Terra s’en occupe à votre place. Tout ce que vous avez à faire, c’est profiter d’un moment de pure détente dans un cadre enchanteur.`
			}
		],
		[
			{
				header: "C'est vrai!",
				icon: 'ges',
				explanation:
					'Comment faire une différence sans pour autant se priver? C’est ce qui a donné vie au concept éco-conscient de Pura Terra. Imaginez-vous : en une journée, Pura Terra détoxifie 2 tonnes de CO2!'
			},
			{
				header: 'Vous avez raison!',
				icon: 'ges',
				explanation:
					'Nous n’avons qu’une seule planète, il faut en prendre soin. Et en détoxifiant 2 tonnes de CO2 par jour, Pura Terra vous permet de faire votre part de la façon la plus agréable possible.'
			},
			{
				header: 'Ça tombe bien, vous n’avez pas à vous en préoccuper!',
				icon: 'ges',
				explanation: `Pura Terra s’en occupe à votre place. Tout ce que vous avez à faire, c’est profiter d’un moment de pure détente dans un cadre enchanteur.`
			}
		]
	]);

	let responses: null | number[] = $state(null);
</script>

<main
	class="relative flex min-h-screen w-screen flex-col items-center justify-center text-balance bg-emerald-950 p-16 text-center"
>
	{#if responses === null}
		<button
			class="max-w-lg text-balance text-center text-3xl text-gray-50"
			onclick={() => (responses = [])}
		>
			Pour vous inscrire au concours, rien de plus simple: il vous suffit de répondre à 4 petites
			questions.
		</button>
	{:else if questions.length >= answers.length}
		<Question {...questions[0]} onclick={(i) => responses!.push(i) && answers.shift()} />
	{:else}
		<Answer {...answers[0][responses.at(-1)!]} onclick={() => answers.shift()} />
	{/if}
</main>
