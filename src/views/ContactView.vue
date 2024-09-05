<template>
  <div class="container my-5">
    <h2 class="text-center my-5 mb-4">Contáctanos</h2>
    <form @submit.prevent="submitForm" class="mb-4">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <textarea class="form-control" id="message" v-model="form.message" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <div class="text-center">
      <router-link to="/" class="btn btn-link">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert(`Gracias por contactarnos, ${this.form.name}!`)
      // Limpiar formulario
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
