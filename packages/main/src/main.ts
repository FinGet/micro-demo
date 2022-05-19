import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import microApp from '@micro-zoe/micro-app'

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'appname-vue3': [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/)/g, all => {
              return all.replace('/', 'http://localhost:3121/')
            })
          }

          return code
        }
      }]
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
