module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mainColor: '#89664E',
				bgColor: '#B08060',
				mophColor: '#9E7458',
			},
			backgroundImage: {
				'catImage': "url('/assets/catimage.jpg')",
				'catImage2': "url('/assets/catimage2.jpg')",
				'catImage3': "url('/assets/catimage3.jpg')",
				'cat': "url('/assets/cat_cozy.png')",
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		   require('tailwindcss-neumorphism'),
	],
}
