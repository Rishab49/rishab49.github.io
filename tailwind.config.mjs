/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': '"IBM Plex Mono", monospace',
				'body': '"Geist", sans-serif'
			},
			colors: {
				"primary": '#0a0a0a',
				"secondary": '#171717',
				"textPrimary":"#ededed",
				"textSecondary":"#a1a1aa"
			},
			fontSize:{
				"1x":"100%",
				"2x":"150%",
				"3x":"200%",
				"4x":"250%",
				"5x":"300%",
				"6x":"350%",
				"1.3x":"130%"
			},

			backgroundImage:{
				"noise-pattern":"url(/grain.svg),linear-gradient(to right, rgba(255, 0, 0, 0.2), rgba(0, 0, 255, 0.2)),linear-gradient(#151515,#151515)"
			}
		},
	},
	plugins: [],
}
