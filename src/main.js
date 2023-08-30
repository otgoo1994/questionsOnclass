import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/css/style.scss"
import axios from 'axios';
import questions from '@/assets/js/utils';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// const url = 'http://192.168.0.155:5100'

const token = localStorage.getItem('token');

if(token != null) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
}

const DetectUrl = async (method, url, data) => {
  let response = await axios({
      method: method,
      url: url,
      data
  }).then(data => {
    if (data.status === 200) {
      return data;
    } else {
      return 204;
    }
  }).catch(err => {
    console.log(err);
    return false;
  });

  if (!response) {
    return false;
  }

  if (response === 204) {
    return 204;
  }
  
  return response.data.data ? response.data.data : true;
};

// console.log = function() {};
console.warn = function() {};
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$detectUrl = DetectUrl;
Vue.prototype.$questions = questions;
// Vue.use(axios);
Vue.use(ElementUI);
window.Event = new Vue();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
