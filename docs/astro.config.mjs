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
				github: 'https://github.com/nitya',
				linkedin: 'https://www.linkedin.com/in/nityan',
				twitter: 'https://twitter.com/nitya',
				youtube: 'https://youtube.com/@nityanarasimhan',
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
					label: 'Concepts',
					items: [
						{ label: 'Learn Fundamentals', link: '/concepts/example/' },
					],
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
		}),

	],
});
