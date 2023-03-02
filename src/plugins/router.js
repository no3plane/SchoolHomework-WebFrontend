import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Shop from "../components/Shop.vue";
import shopRelease from "../components/shopRelease.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect: "shopRelease",
    children: [
      {
        path: "/shopRelease",
        component: shopRelease,
      },
    ],
  },
  {
    path: "/home",
    component: Home,
    redirect: "Shop",
    children: [
      {
        path: "/Shop",
        component: Shop,
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
});

//全局路由导航守卫
/* router.beforeEach((to, from, next) => {
  if (to.path == '/comlogin') {
    return next();
  } else if (to.fullPath.indexOf("/ShopGoodShire?goodId=") !== -1) { */
//const result = window.sessionStorage.getItem('token')

// if (null == result || '' == result) {
//   window.sessionStorage.setItem("buyGood", to.fullPath);
//   return next('/comlogin');
// } else {
//   //console.log(to.fullPath);
/*  return next(); */
//}
/* } else if (to.path == '/regist') {
    return next();
  } else {
    const result = window.sessionStorage.getItem('token')

    if (null == result || '' == result) {
      return next('/comlogin');
    } else {
      //console.log(to.fullPath);
      return next();
    }
  }

}) */
export default router;
