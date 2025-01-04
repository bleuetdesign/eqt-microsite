<script>
	let { children } = $props();
</script>

<main
	class="relative flex min-h-screen w-screen flex-col items-center justify-center text-balance bg-emerald-950 p-16 text-center"
>
	{@render children()}
</main>
