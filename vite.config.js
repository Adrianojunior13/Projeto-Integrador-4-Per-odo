import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0',  // Permite conexões externas, mas deve aceitar também localhost
    port: 5173,       // A porta padrão
    strictPort: true, // Garante que a porta será usada
    allowedHosts: [
      'localhost',        // Permitir localhost
      '192.168.0.113',    // Permitir IP específico
      'adrianodev.com.br' // Caso você precise usar o seu domínio
    ]
}
})


