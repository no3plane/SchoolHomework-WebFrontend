import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import qs from 'qs'
//导入nprogress和样式
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import VueClipboard from 'vue-clipboard2'
//大屏自适应
import "./util/rem"
//百度地图
import BaiduMap from 'vue-baidu-map'
//使用echarts
// 引入echarts
import * as echarts from 'echarts';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$echarts = echarts

Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'ym4mXGBQjVAGP3uAYGAqmW5t5OLVNwge'
})


Vue.use(VueClipboard)


Vue.config.productionTip = false
axios.defaults.baseURL = 'http://101.133.168.224:8852/data-farm'
Vue.prototype.$qs = qs
    //添加拦截器校验token是否授权有效
axios.interceptors.request.use(config => {
    //request中展示进度条
    NProgress.start();
    //console.log("config属性："+config);
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
});

axios.interceptors.response.use(config => {
    //响应成功关闭进度条
    NProgress.done();
    return config;
});
//全局处理时间格式类型
Vue.filter('dataFormat', function(oraginValue) {
    if (null != oraginValue) {
        const dt = new Date(oraginValue);
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1 + '').padStart(2, 0);
        const d = (dt.getDate() + '').padStart(2, 0);

        const hh = (dt.getHours() + '').padStart(2, 0);
        const mm = (dt.getMinutes() + '').padStart(2, 0);
        const ss = (dt.getSeconds() + '').padStart(2, 0);
        // return ${y}-${m}-${d} ${hh}:${mm}:${ss};
        return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
    } else {
        return "";
    }
});
//全局处理时间格式类型
Vue.filter('dataFormatDate', function(oraginValue) {
    if (null != oraginValue) {
        const dt = new Date(oraginValue);
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1 + '').padStart(2, 0);
        const d = (dt.getDate() + '').padStart(2, 0);

        const hh = (dt.getHours() + '').padStart(2, 0);
        const mm = (dt.getMinutes() + '').padStart(2, 0);
        const ss = (dt.getSeconds() + '').padStart(2, 0);
        // return ${y}-${m}-${d} ${hh}:${mm}:${ss};
        return y + "-" + m + "-" + d;
    } else {
        return "";
    }
});

//全局过滤器处理后台访问地址<el-upload>使用
Vue.filter('getServerUrl', function(urlValue) {
    if (null != urlValue) {
        const serverUrl = 'http://101.133.168.224:8852/data-farm';
        return serverUrl;
    }
});

Vue.prototype.$axios = axios
    //axios.defaults.headers.post['Content-Type'] = 'application/json';
new Vue({
    router,
    store,
    created() {
        if (localStorage.getItem("isLogin") == null) {
            localStorage.setItem("isLogin", "");
        } else {
            this.$store.state.isLogin = localStorage.getItem("isLogin");
        }
    },
    render: h => h(App)
}).$mount('#app')