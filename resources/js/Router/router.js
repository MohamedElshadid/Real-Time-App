
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 import Login from '../components/login/Login';
 import Logout from '../components/login/Logout';
 import SignUp from '../components/login/signup';
 import Forum from '../components/forum/Forum';
 import Read from '../components/forum/read';
 import NewQuestion from '../components/forum/NewQuestion';
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum , name:'forum' },
    { path: '/question/:slug', component: Read , name:'read' },
    { path: '/ask', component: NewQuestion },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history'
})


export default router;