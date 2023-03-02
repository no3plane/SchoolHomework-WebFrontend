import Vue from 'vue'
// VXETable 表格导入
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// vuex引入
import Vuex from 'vuex'
//Vue2OrgTree  组织架构 引入
import Vue2OrgTree from 'vue2-org-tree'
// 打印机
import Print from 'vue-print-nb';


Vue.use(Vuex)
Vue.use(VXETable)
Vue.use(Vue2OrgTree)
Vue.use(Print);

const store = new Vuex.Store({
  state: {
    isLogin: ""
  },
  mutations: {
    isLogin(state, msg) {
      state.isLogin = msg;
      localStorage.setItem("isLogin", msg)
    }
  },
  getters: {
    isLogin: state => state.isLogin

  }
})
export default store;
