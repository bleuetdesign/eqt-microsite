<script lang="ts">
	import clsx from 'clsx';
	let { children, variant = 'dark' } = $props();
</script>

<button
	class={clsx(
		'w-fit rounded-full  px-8 py-4 text-2xl font-semibold',
		{ light: 'bg-emerald-200 text-emerald-950', dark: 'bg-emerald-900 text-gray-50' }[variant]
	)}
>
	{@render children?.()}
</button>
