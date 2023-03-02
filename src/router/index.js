import { createRouter, createWebHistory } from "vue-router";
//import Login from '../components/Login.vue'
const Login = () =>
  import(
    /* webpackChunkName: "login_home_welecome-" */ "../components/Login.vue"
  );
const Home = () =>
  import(
    /* webpackChunkName: "login_home_welecome-" */ "../components/Home.vue"
  );
const shopRelease = () =>
  import(
    /* webpackChunkName: "login_home_welecome-" */ "../components/shopRelease.vue"
  );
const Shop = () =>
  import(
    /* webpackChunkName: "login_home_welecome-" */ "../components/Shop.vue"
  );

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  //首頁
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
  //商品
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
