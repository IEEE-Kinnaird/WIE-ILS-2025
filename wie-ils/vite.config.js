import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  // base: '/WIE-ILS-2025/',
   base: '/', //For example,base: '/my-project/'
=======
  base: '/WIE/', //For example,base: '/my-project/'
>>>>>>> b68c1d74a85a15ba93953f6c0533fd28c8d4f635
  plugins: [react()],
})
