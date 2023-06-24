import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router/index'; 
import './style.css'
import 'ant-design-vue/dist/antd.css';
// import AMapLoader from '@alife/amap-jsapi-loader';

// AMapLoader.load().then((AMap)=>{
//     map = new AMap.Map('container');
// }).catch(e=>{
//     console.log(e);
// })
// import './components/map.vue'
// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mock/browser')
//     worker.start()
//   }
const app = createApp(App);
createApp(App).use(router).use(Antd).mount('#app')
// app.use(Antd).mount('#app');
// app.use(router).mount('#app');
