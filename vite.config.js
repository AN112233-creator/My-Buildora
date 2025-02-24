/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' */

// https://vite.dev/config/
/* export default defineConfig({
  plugins: [react()],
}) */
/* 
export default defineConfig({
  base: "/My-Buildora/",          // Replace with your actual GitHub repo name
  plugins: [react()],
}); */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/an112233-creator.github.io/", // Set this to your repository name
});


