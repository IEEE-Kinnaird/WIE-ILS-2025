import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // base: '/WIE-ILS-2025/',
   base: '/', //For example,base: '/my-project/'
  plugins: [react()],
})
