/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': '"Fira Code", monospace',
				'body': ' "PT Sans", sans-serif'
			},
			colors: {
				"primary": '#151515',
				"secondary": '#323232',
			}
		},
	},
	plugins: [],
}
