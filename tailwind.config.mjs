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
			},
			fontSize:{
				"1x":"100%",
				"2x":"150%",
				"3x":"200%",
				"4x":"250%",
				"5x":"300%",
				"6x":"350%",
				"1.3x":"130%"
			}
		},
	},
	plugins: [],
}
