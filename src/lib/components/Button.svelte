<script lang="ts">
	import clsx from 'clsx';
	let { children, class: classes, href, variant = 'dark', ...props } = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="{clsx(
		'w-fit rounded-full  px-8 py-4 text-2xl font-semibold',
		{
			livid: 'bg-emerald-50 text-emerald-950',
			light: 'bg-emerald-200 text-emerald-950',
			dark: 'bg-emerald-900 text-gray-50'
		}[variant],
		classes
	)},"
	{...props}
>
	{@render children?.()}
</svelte:element>
