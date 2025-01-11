/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'sans-serif'],
				mono: ['Azeret Mono', 'monospace'],
			},

			screens: {
				sm: '501px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},

			grayscale: {
				70: '70%',
			},
		},
	},
	plugins: [],
};
