<script>
	import { getStrapiURL } from '../strapi';
	/** @type {string} */
	export let heading;
	/** @type {string} */
	export let message;
	/** @type {any} */
	export let features;
</script>

<section class="bg-gray-100 dark:bg-gray-900 dark:text-white">
	<div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
		<div class="max-w-xl mx-auto">
			{#if heading}
				<h2 class="text-3xl font-bold sm:text-4xl text-center">{heading}</h2>
			{/if}
			{#if message}
				<p class="mt-4 dark:text-gray-300 text-center">
					{message}
				</p>
			{/if}
		</div>
		<div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
			{#each features as feature}
				<div class="flex items-start gap-4">
					<span class="shrink-0 rounded-lg dark:bg-gray-800 p-4">
						<img
							class="h-5 w-5"
							src={getStrapiURL(feature.icon.data.attributes.url)}
							alt={feature.icon.data.attributes.alternativeText}
						/>
					</span>
					<div>
						<h2 class="text-lg font-bold">{feature.title}</h2>
						<p class="mt-1 text-sm dark:text-gray-300">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
