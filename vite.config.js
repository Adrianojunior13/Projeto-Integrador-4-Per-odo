import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   host: '0.0.0.0',  // Isso faz o Vite aceitar conexões de qualquer IP
    port: 5173,       // Se preferir, pode especificar a porta, mas o padrão é 5173
    strictPort: true,
}
})


