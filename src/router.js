import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'
import Question from './views/questions.vue'
import TopBar from './layout/topbar.vue'
import Result from './layout/result.vue'

Vue.use(Router)

const route =  new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TopBar,
      children: [
        { 
          path: '', 
          name: 'home', 
          meta: { 
            auth: false,
            title: 'Creative Approach' 
          }, 
          component: Home
        },
        { 
          path: 'research/:id', 
          name: 'research', 
          meta: { 
            auth: false,
            title: 'Creative Approach' 
          }, 
          component: Question
        },
      ]
    },
    {
      path: '/result',
      name: 'result',
      meta: { 
        auth: false,
        title: 'Result' 
      }, 
      component: Result
    }

  ]
});


route.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = to.meta.title;
  let authrequired = false
  if(to && to.meta && to.meta.auth)
		authrequired = true
  
  const tk = auth.loggedIn();
  if(authrequired) {
      tk ? next() : route.push('/');
  } else {
      if (to.name === 'signin') {
        !tk ? next() : route.push('/');
      } else {
        next();
      }
  }
});

const auth = {
  loggedIn() {
    var token = localStorage.getItem("token");
    return token ? true : false;
  }
}

export default route;