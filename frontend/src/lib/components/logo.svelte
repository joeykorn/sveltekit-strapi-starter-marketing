<script>
	/** @type {string} */
	export let logoUrl;
	/** @type {string} */
	export let logoAlt;
	/** @type {string} */
	export let logoText;
</script>

<a class="block text-teal-600 dark:text-teal-600" href="/">
	<span class="sr-only">Home</span>
	<img src={logoUrl} alt={logoAlt} class="h-8" />
	{#if logoText}
		<span>{logoText}</span>
	{/if}
</a>
