import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineConfig } from 'astro/config'
// import plugin from './tailwind.mjs'

export default defineConfig({
  vite: {
    plugins: [
      // plugin(),
      viteCommonjs(),
    ],
  },
})
