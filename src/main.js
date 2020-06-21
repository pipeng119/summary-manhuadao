import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button
} from 'ant-design-vue'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.component(Button.name, Button)

// 引入样式
import '@/styles/common/reset.styl';
import '@/styles/common/global.styl';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')