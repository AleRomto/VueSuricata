<template>
  <div class="container my-5">

    <ProductCard 
      :name="productName" 
      :description="productDescription" 
      :price="productPrice" 
      :quantity="productQuantity"
      :image="productImage"
    />

    <div class="text-center mt-4">
      <router-link to="/" class="btn btn-link">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/Card.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  props: {
    productName: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    productPrice: {
      type: Number,
      required: true
    },
    productQuantity: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      default: ''
    }
  }
}
</script>
