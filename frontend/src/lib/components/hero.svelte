<script>
	/** @type {string} */
	export let heading;
	/** @type {string} */
	export let text;
	/** @type {string} */
	export let linkPrimary;
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			{#if heading}
				<h1
					class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
				>
					{heading}
				</h1>
			{/if}

			{#if text}
				<p class="mt-4 sm:text-xl/relaxed dark:text-gray-400">
					{text}
				</p>
			{/if}

			{#if linkPrimary}
				<div class="mt-8 flex flex-wrap justify-center gap-4">
					<a class="btn btn-primary" href="/get-started">
						{linkPrimary}
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
