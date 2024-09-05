<template>
  <div class="home-container">
    //para saber que estamos en el home
    <h1 class="main-title">Bienvenidos a Suricata Colaciones</h1>
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.main-title {
  font-size: 40px;
  color: #e810e8; 
  text-align: center; 
  margin-top: 80px;
  margin-bottom: 20px; 
  letter-spacing: 4px; 
  font-family: 'Arial', sans-serif;
}
</style>
