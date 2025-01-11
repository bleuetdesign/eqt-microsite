<script lang="ts">
	let {
		children,
		class: classes = undefined,
		href = undefined,
		variant = 'dark',
		...props
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={[
		'w-fit rounded-full  px-6 py-6 text-2xl font-semibold',
		{
			livid: 'bg-emerald-50 text-emerald-950',
			light: 'bg-emerald-200 text-emerald-950',
			dark: 'bg-emerald-900 text-emerald-50'
		}[variant],
		classes
	]}
	{href}
	{...props}
>
	{@render children?.()}
</svelte:element>
