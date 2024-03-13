<script>
	export let heading;
	export let linkPrimary;
	export let message;
</script>

<section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="mx-auto max-w-xl text-center ltr:sm:text-left">
			{#if heading}
				<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
					{heading}
				</h2>
			{/if}

			{#if message}
				<p class="hidden text-gray-500 md:mt-4 md:block">
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
		src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
		class="h-56 w-full object-cover sm:h-full"
	/>
</section>
