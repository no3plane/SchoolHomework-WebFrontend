import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import * as echarts from "echarts";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import CollapseTransition from "element-plus";
import "./assets/css/global.css";

import store from "./store";
import axios from "axios";

import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import Print from "vue-print-nb";
// fade/zoom 等
import "./plugins/element.js";

// 大屏自适应
import "./util/rem";

const app = createApp(App);

app.component(CollapseTransition.name, CollapseTransition);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(VXETable);
app.use(Print);

app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$axios = axios;

// 百度地图
// import BaiduMap from 'vue-baidu-map'
// app.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: "ym4mXGBQjVAGP3uAYGAqmW5t5OLVNwge",
// });

//
// ------------------------------------------- AXIOS
axios.defaults.baseURL = "http://192.168.2.21:8852/data-farm";
axios.interceptors.request.use((config) => {
  // request中展示进度条
  NProgress.start();
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});
axios.interceptors.response.use((config) => {
  // 响应成功关闭进度条
  NProgress.done();
  return config;
});

app.mount("#app");
