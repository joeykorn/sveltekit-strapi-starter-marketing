<script>
	import { Dialog } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import IconBars3 from '~icons/heroicons/bars3';
	import IconXMark from '~icons/heroicons/x-mark';
	import { Logo } from '$lib/components';

	/** @type {string} */
	export let logoUrl;
	/** @type {string} */
	export let logoAlt;
	/** @type {string} */
	export let logoText;
	/** @type {any[]} */
	export let links;
</script>

<header class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="md:flex md:items-center md:gap-12">
				<Logo {logoUrl} {logoAlt} {logoText} />
			</div>

			<div class="hidden md:block">
				<nav aria-label="Global">
					<ul class="flex items-center gap-6 text-sm">
						{#each links as link}
							<li>
								<a
									class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
									href={link.url}
									target={link.newTab ? '_blank' : '_self'}
								>
									{link.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<div class="sm:flex sm:gap-4">
					<a
						class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
						href="#"
					>
						Get Started
					</a>
				</div>
				<Dialog.Root>
					<Dialog.Trigger
						class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75
					md:hidden"
					>
						<span class="sr-only">Toggle menu</span>
						<IconBars3 class="h-5 w-5" />
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay
							transition={fade}
							transitionConfig={{ duration: 150 }}
							class="fixed inset-0 z-50 bg-black/80"
						/>
						<Dialog.Content
							transition={flyAndScale}
							class="fixed z-50 left-0 top-0 px-4 py-6 flex w-screen h-screen flex-col border-e bg-white"
						>
							<Dialog.Title
								class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
								>Menu</Dialog.Title
							>
							<Dialog.Description class="text-sm text-foreground-alt">
								<ul>
									<li>
										<a class="flex text-gray-800 px-5 py-3" href="/about">About</a>
									</li>
									<li>
										<a class="flex text-gray-800 px-5 py-3" href="/">Services</a>
									</li>
									<li>
										<a class="flex text-gray-800 px-5 py-3" href="/">Contact</a>
									</li>
								</ul>
							</Dialog.Description>
							<Dialog.Close class="absolute right-5 top-5">
								<div>
									<IconXMark />
									<span class="sr-only">Close</span>
								</div>
							</Dialog.Close>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		</div>
	</div>
</header>
