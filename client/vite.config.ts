import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // El puerto en el que Vite estará escuchando
    host: '0.0.0.0',  // Esto hace que sea accesible desde fuera del contenedor Docker
    strictPort: true,  // Esto asegura que Vite no cambie el puerto si 5173 ya está en uso
  },
})
