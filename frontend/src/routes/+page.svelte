<script>
	export let data;
	let home = data.home.attributes;
</script>

{#if home.hero.heading}
	<h1>
		{home.hero.heading}
	</h1>
{/if}
