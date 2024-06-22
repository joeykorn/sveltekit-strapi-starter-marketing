<script>
	import { Logo } from '$lib/components';
	import IconInstagram from '~icons/simple-icons/instagram';
	import IconFacebook from '~icons/simple-icons/facebook';
	import IconX from '~icons/simple-icons/x';

	/** @type {string} */
	export let logoUrl;
	/** @type {string} */
	export let logoAlt;
	/** @type {string} */
	export let logoText;
	/** @type {string} */
	export let message;
	/** @type {any[]} */
	export let menuLinks;
	/** @type {any[]} */
	export let socialLinks;

	let dateYear = new Date().getFullYear();
</script>

<footer class="bg-gray-100 mt-auto dark:bg-gray-800">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex justify-center text-teal-600">
			<Logo {logoUrl} {logoAlt} {logoText} />
		</div>

		{#if message}
			<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
				{message}
			</p>
		{/if}

		<ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
			{#each menuLinks as link}
				<li>
					<a
						class="text-gray-700 transition hover:text-gray-700/75"
						href={link.url}
						target={link.newTab ? '_blank' : '_self'}
					>
						{link.text}</a
					>
				</li>
			{/each}
		</ul>
		<ul class="mt-12 flex justify-center gap-6 md:gap-8">
			{#each socialLinks as link}
				<li>
					<a
						href={link.url}
						rel="noopener noreferrer"
						target="_blank"
						class="text-gray-700 transition hover:text-gray-700/75 dark:text-white"
					>
						<span class="sr-only">{link.social}</span>
						{#if link.social.toUpperCase() === 'facebook'.toUpperCase()}
							<IconFacebook class="h-6 w-6" />
						{:else if link.social.toUpperCase() === 'instagram'.toUpperCase()}
							<IconInstagram class="h-6 w-6" />
						{:else if link.social.toUpperCase() === 'x'.toUpperCase()}
							<IconX class="h-6 w-6" />
						{/if}
					</a>
				</li>
			{/each}
		</ul>
		<span class="mt-12 flex justify-center text-sm text-gray-500">&copy; {dateYear} Company</span>
	</div>
</footer>
