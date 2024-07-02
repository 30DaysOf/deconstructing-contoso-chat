import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://30daysof.github.io',
	base: '/deconstructing-contoso-chat',
	trailingSlash: "always",

	integrations: [

		starlight({
			title: 'Contoso Chat',
			logo: {
				light: './src/assets/logo.png',
				dark: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/30DaysOf/deconstructing-contoso-chat',
				twitter: 'https://twitter.com/azure',
				youtube: 'https://youtube.com/@theaishowlive',
			},
			
			defaultLocale: 'root', // optional
			locales: {
			  root: {
				label: 'English',
				lang: 'en', // lang is required for root locales
			  },
			},

			sidebar: [
				{
					label: 'Build a Retail Copilot E2E',
					link: '/about/',
				},
				{
					label: '1. Design It',
					collapsed: false,
					autogenerate: { directory: '01-design' },
				},
				{
					label: '2. Develop It',
					collapsed: true,
					autogenerate: { directory: '02-develop' },
				},
				{
					label: '3. Evaluate It',
					collapsed: false,
					autogenerate: { directory: '03-evaluate' },
				},
				{
					label: '4. Deploy It',
					collapsed: false,
					autogenerate: { directory: '04-deploy' },
				},
				{
					label: '5. Deliver It',
					collapsed: false,
					autogenerate: { directory: '05-deliver' },
				},
				{
					label: 'Explore: Concepts',
					collapsed: false,
					autogenerate: { directory: '08-concepts' },
				},
				{
					label: 'Explore: Tooling',
					collapsed: false,
					autogenerate: { directory: '09-tools' },
				},
			],
			
		}),

	],
});
