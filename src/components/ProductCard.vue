<template>
  <div class="card" style="height: 300px;">
    <img
      class="card-img"
      :src="product.images[0]"
      alt="Vans"
    />
    <div class="card-img-overlay d-flex justify-content-end">
      <a href="#" class="card-link text-danger like">
        <i class="fas fa-heart"></i>
      </a>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-center">{{ product.title }}</h5>

      <div class="buy d-flex justify-content-between align-items-center mt-auto">
        <div class="price text-success"><h5 class="mt-4">${{ product.price }}</h5></div>
        <button class="btn btn-danger btn-sm mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../models/product'

defineProps<{ product: Product }>()


</script>

<style scoped></style>
