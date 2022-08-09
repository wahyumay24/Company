import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'

const { createApp } = Vue
const app = createApp({
    data() {
        return {
            message: "Hello Vue!"
        }
    },
    mounted() {
    },
    methods: {

    }
})

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app')