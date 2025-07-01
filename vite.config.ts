import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'create-cname-file',
      closeBundle: () => {
        fs.writeFileSync('dist/CNAME', 'andrewhtrantutoring.com');
      },
    },
    {
      name: 'add-nojekyll',
      closeBundle: () => {
        fs.writeFileSync('dist/.nojekyll', '');
      },
    },
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
