// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// import defaultTheme from 'tailwindcss/defaultTheme';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         green: {
//           custom: '#00FF00', // Define your custom green color
//         },
//       },
//       textDecorationColor: theme => ({
//         ...theme('colors'),
//         green: theme('colors.green.custom'),
//       }),
//     },
//   },
//   plugins: [],
// }












