import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import legacy from '@vitejs/plugin-legacy'
import compressPlugin from 'vite-plugin-compression'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueSetupExtend(),
      legacy({
        targets: ['defaults', 'not IE 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      compressPlugin({
          verbose: false, // 是否在控制台输出压缩结果
          disable: false, // 是否禁用
          threshold: 10240, // 文件容量大于这个值进行压缩，它将被压缩，单位为b
          algorithm: 'gzip', // 压缩算法 可选 ['gzip','brotliCompress' ,'deflate','deflateRaw']
          ext: '.gz', // 生成的压缩包后缀
      })
  ],
    server: {
        port: 4000, // 服务端口号
        open: true, // 服务启动时是否自动打开浏览器
        cors: true // 允许跨域
    },
    resolve: {
      alias: {
          src: resolve(__dirname, 'src')
      }
    }
})
