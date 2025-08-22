import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
    host: '0.0.0.0',  // Isso permite que o Vite aceite conexões externas
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'adrianodev.com.br',  // Adicionando o seu domínio aqui
    ],
}
})


