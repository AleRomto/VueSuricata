<template>
  <navbar>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/products">Productos</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
    </ul>
  </navbar>
  
  <router-view/>
  
  <medios-pago/>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    MediosPago
  }
}
</script>
