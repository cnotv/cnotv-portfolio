import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
import basicSsl from '@vitejs/plugin-basic-ssl'

// The leading dot allows cnotv.xyz and every subdomain, since a `vite preview` container
// rejects any Host header it does not list.
const allowedHosts = ['.cnotv.xyz']

// The device orientation and fullscreen APIs only work in a secure context, so reaching the
// dev server from a phone over the LAN needs HTTPS. Opt in with VITE_HTTPS=1 (pnpm dev:mobile)
// rather than always, since the self-signed certificate costs a browser warning on every start.
const useHttps = process.env.VITE_HTTPS === '1'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [vue(), wasm(), ...(useHttps ? [basicSsl()] : [])],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
    dedupe: ['three']
  },
  css: {
    preprocessorOptions: {
      // Use Dart Sass's modern compiler API; the default legacy JS API is
      // deprecated (https://sass-lang.com/d/legacy-js-api) and removed in Sass 2.
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    target: 'esnext',
    sourcemap: true
  },
  optimizeDeps: {
    exclude: ['@dimforge/rapier3d-compat']
  },
  server: {
    allowedHosts
  },
  preview: {
    allowedHosts
  }
})
