<script>
	import { Accordion } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import IconChevronDown from '~icons/heroicons/chevron-down';

	/** @type {string} */
	export let heading;
	/** @type {any} */
	export let faqs;
</script>

<section class="dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		{#if heading}
			<h2 class="text-3xl font-bold sm:text-4xl text-center dark:text-white">
				{heading}
			</h2>
		{/if}
		<Accordion.Root class="w-full sm:max-w-[70%] mx-auto mt-8" multiple>
			{#each faqs as faq, i}
				<Accordion.Item value="${i}" class="group border-b border-dark-10 px-1.5">
					<Accordion.Header>
						<Accordion.Trigger
							class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180 dark:text-white"
						>
							{faq.question}
							<span
								class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
							>
								<IconChevronDown
									class="h-5 w-5 shrink-0 transition duration-200 group-open:-rotate-180"
								/>
							</span>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						transition={slide}
						transitionConfig={{ duration: 200 }}
						class="pb-[25px] text-sm tracking-[-0.01em] dark:text-gray-200"
					>
						{faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
