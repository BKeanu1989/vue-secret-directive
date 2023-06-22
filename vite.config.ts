import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['src/plugins/secret-directive'],
      exclude: ['vite.config.ts'],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        }
      }
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/plugins/secret-directive/index.ts',
      // formats: ['es', 'cjs'],
      name: 'SecretDirective',
      fileName: (format) => `secret-directive${format}.js`
      // fileName: (format) => (format === 'es') ? "index.js" : "index.cjs"
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }

  }
})
