import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/* export default defineConfig({
  plugins: [react()],
}) */

export default defineConfig({
  base: "/BuilDoR-Project/", // Replace with your actual GitHub repo name
  plugins: [react()],
});

