<script lang="ts">
	let {
		children,
		class: classes = undefined,
		href = undefined,
		variant = 'dark',
		onclick = undefined,
		...props
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={[
		'w-fit rounded-full  px-10 py-6 text-2xl font-semibold',
		{
			livid: 'bg-emerald-50 text-emerald-950',
			light: 'bg-emerald-200 text-emerald-950',
			dark: 'bg-emerald-950 text-emerald-50'
		}[variant],
		classes
	]}
	{href}
	data-sveltekit-preload-data={href && 'hover'}
	{onclick}
	tabindex="0"
	{...props}
>
	{@render children?.()}
</svelte:element>
