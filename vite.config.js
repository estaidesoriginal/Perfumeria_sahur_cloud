import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No necesitamos la configuración de 'resolve' o 'alias'
export default defineConfig({
  plugins: [react()],
})