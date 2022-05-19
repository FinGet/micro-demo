import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join,resolve } from 'path'
import { writeFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'http://my-site.com' : ''}/`,
  plugins: [
    vue(),
    (function () {
      let basePath = ''

      return {
        name: "vite:micro-app",
        apply: 'build',
        configResolved(config) {
          console.log(config)
          basePath = `${config.base}${config.build.assetsDir}/`
        },
        writeBundle (options, bundle) {
          for (const chunkName in bundle) {
            if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
              const chunk = bundle[chunkName] as any
              if (chunk.fileName && chunk.fileName.endsWith('.js')) {
                chunk.code = chunk.code.replace(/(from|import\()(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
                  return all.replace($3, new URL($3, basePath))
                })
                const fullPath = join(options.dir, chunk.fileName)
                writeFileSync(fullPath, chunk.code)
              }
            }
          }
        },
      }
    })(),
  ],
  server: {
    port: 3121,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
})
