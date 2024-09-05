import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const ProductsView = () => import( '../views/ProductsView.vue')
const ContactView = () => import('../views/ContactView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    props: route => ({
      nombre: route.query.nombre || 'Default Name',
      descripcion: route.query.descripcion || 'Default Description',
      precio: route.query.precio || 'Default Price',
      cantidad: route.query.cantidad || 'Default Quantity'
    })
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
