import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // Configure for client-side routing (SPA)
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      // Handle client-side routing for development
      server: {
        historyApiFallback: true,
      },
      // Handle client-side routing for preview
      preview: {
        historyApiFallback: true,
      }
    };
});
