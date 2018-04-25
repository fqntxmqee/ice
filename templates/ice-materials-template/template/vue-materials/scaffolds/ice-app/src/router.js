import Vue from 'vue';
import Router from 'vue-router';

// 一下部分是由 Iceworks 相关工具自动生成的路由，请勿随意改变，否则可能会出现一些异常情况
// <!-- auto generated routes start -->
import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import About from './pages/About';

const autoGeneratedRoutes = [
  {
    path: '/',
    childRoutes: [],
    component: BlankLayout,
    indexRoute: {
      component: Home,
    },
  },
  {
    path: '/about',
    childRoutes: [],
    component: BlankLayout,
    indexRoute: {
      component: About,
    },
  },
];

// <!-- auto generated routes end -->

// 将 Iceworks 当前支持的标准 routes 配置转成支持 vue-router 的格式
function vueRoutesAdapter(routeConfig) {
  const routes = [];
  routeConfig.forEach((route) => {
    const tempRoute = {
      path: route.path,
      component: route.component,
      children: [],
    };
    if (route.childRoutes && route.childRoutes.length) {
      tempRoute.children = vueRoutesAdapter(route.childRoutes);
    }
    if (route.indexRoute) {
      tempRoute.children.unshift({
        path: '',
        component: route.indexRoute.component,
      });
    }
    routes.push(tempRoute);
  });

  return {
    routes,
  };
}

const finalRoutes = vueRoutesAdapter(autoGeneratedRoutes);

// 自定义路由，如果 path 相同则会覆盖自动生成部分的路由配置
const customRoutes = {
  routes: [],
};

Vue.use(Router);

export default new Router({
  ...customRoutes,
  routes: [...finalRoutes.routes, ...customRoutes.routes],
});