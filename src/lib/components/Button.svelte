<script lang="ts">
	import clsx from 'clsx';
	let { children, variant = 'dark' } = $props();
</script>

<button
	class={clsx(
		'w-fit rounded-full  px-6 py-4 font-bold',
		{ light: 'bg-emerald-200 text-emerald-950', dark: 'bg-emerald-900 text-gray-50' }[variant]
	)}
>
	{@render children?.()}
</button>
