import { defineConfig } from 'astro/config';
// import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import svgr from 'vite-plugin-svgr';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration';
import sitemap from '@astrojs/sitemap';
import { locales, defaultLocale } from './src/i18n/utils';

// https://astro.build/config
export default defineConfig({
	base: '',
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	output: 'hybrid',
	adapter: vercel(),
	integrations: [
		// react(),
		tailwind(),
		partytown(),
		i18n({
			locales,
			defaultLocale,
		}),
		sitemap({
			i18n: {
				locales,
				defaultLocale,
			},
			filter: filterSitemapByDefaultLocale({ defaultLocale }),
		}),
	],
	redirects: {
		'/en': '/',
	},
	vite: {
		plugins: [
			svgr({
				include: '**/*.svg?react',
				svgrOptions: {
					plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
					svgoConfig: {
						plugins: [
							'preset-default',
							'removeTitle',
							'removeDesc',
							'removeDoctype',
							'cleanupIds',
						],
					},
				},
			}),
		],
	},
});
