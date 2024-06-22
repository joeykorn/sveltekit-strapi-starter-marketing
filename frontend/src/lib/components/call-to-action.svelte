<script>
	import { getStrapiURL } from '../strapi';
	/** @type {string} */
	export let heading;
	/** @type {string} */
	export let linkPrimary;
	/** @type {string} */
	export let message;
	/** @type {any} */
	export let image;
</script>

<section class="overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="mx-auto max-w-xl text-center ltr:sm:text-left">
			{#if heading}
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
					{heading}
				</h2>
			{/if}

			{#if message}
				<p class="hidden text-gray-500 dark:text-white md:mt-4 md:block">
					{message}
				</p>
			{/if}

			<div class="mt-4 md:mt-8">
				{#if linkPrimary}
					<a href="#" class="btn btn-primary">
						{linkPrimary}
					</a>
				{/if}
			</div>
		</div>
	</div>
	<img
		alt="Student"
		src={getStrapiURL(image.data.attributes.url)}
		class="h-56 w-full object-cover sm:h-full"
	/>
</section>
