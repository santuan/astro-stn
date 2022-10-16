/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			serif: ['Vollkorn', 'serif'],
			sans: ['Fira Sans', 'sans'],
			mono: ['Space Mono', 'mono']
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
