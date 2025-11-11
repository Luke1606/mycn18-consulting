// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const REPO_NAME = 'mycn18-consulting'; 

export default defineConfig({
  base: `/${REPO_NAME}/`, 
  
  output: 'static', 

  site: `https://luke1606.github.io/${REPO_NAME}/`,

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 4321,
    host: true
  }
});