<script>
	import BlockRenderer from '$lib/block-renderer.svelte';

	export let data;
	let homePage = data.page[0];
	const blocks = homePage.attributes.blocks;
</script>

{#each blocks as { __component }, i}
	<BlockRenderer blockType={__component} block={blocks[i]} />
{/each}
