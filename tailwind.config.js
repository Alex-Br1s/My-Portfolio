/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '640px', // Ejemplo de breakpoint para dispositivos móviles
        'md': '768px', // Ejemplo de breakpoint para tablets
        'lg': '1024px', // Ejemplo de breakpoint para pantallas grandes
      },
      colors: {
        violetmorelow: '#7781B2',
        violetlow: '#4c5270',
        violethard: '#353b57',
        violetname: '#6681FE',
        celestelastname:'#8DCDEE',
        button: '#79B2D0',
        textcolor: '#85B3CB',
        prueba: '#3E445F'
      }
    },
  },
  plugins: [],
}
