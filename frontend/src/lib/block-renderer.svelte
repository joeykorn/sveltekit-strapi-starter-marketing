<script>
	import { Hero } from '$lib/components';
	import { Testimonials } from '$lib/components';
	import { CallToAction } from '$lib/components';
	import { Faq } from '$lib/components';
	import { Features } from '$lib/components';

	/** @type {{ [key: string]: any; }} blocktypes */
	const blockTypes = {
		'blocks.call-to-action': CallToAction,
		'blocks.frequently-asked-questions': Faq,
		'blocks.features': Features,
		'blocks.hero': Hero,
		'blocks.testimonials': Testimonials
	};

	/** @type {string} */
	export let blockType;
	/** @type {Object} */
	export let block;
</script>

<svelte:component this={blockTypes[blockType]} {...block} />
