/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que mire todos nuestros archivos de React
  ],
  theme: {
    extend: {
      // Puedes añadir colores personalizados si quieres, pero por ahora usamos los de Tailwind
      colors: {
        // Ejemplo de cómo añadir un color personalizado:
        // 'oro-sahur': '#FFD700',
      }
    },
  },
  plugins: [
    // Plugin para que los videos de YouTube mantengan la proporción (aspect-ratio)
    require('@tailwindcss/aspect-ratio'),
  ],
}
