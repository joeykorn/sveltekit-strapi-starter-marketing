<script>
	export let logoUrl;
	export let logoAlt;
</script>

<a class="block text-teal-600 dark:text-teal-600" href="#">
	<span class="sr-only">Home</span>

	<img src={logoUrl} alt={logoAlt} class="h-8" />
</a>
