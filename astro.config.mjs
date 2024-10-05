// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

// https://astro.build/config
export default defineConfig({
	site: 'https://hkawa90.github.io/astro-starlight-trial',
	outDir: './docs', // for github pages
	integrations: [
		starlight({
			plugins: [
				// Generate the Obsidian vault pages.
				starlightObsidian({
					vault: '/mnt/c/Users/hideo/Documents/Obsidian/MyDoc/',
				}),
                        ],
			title: 'My Docs',
                        // pagefindで日本語で検索できるようにするためlocaleを設定する
			locales: {
                                 root: {
					label: 'Japanese',
					lang: 'ja',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				// Add the generated sidebar group to the sidebar.
				obsidianSidebarGroup,
			],
		}),
	],
});
