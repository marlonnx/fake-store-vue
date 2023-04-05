<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/products'

const errorImage =
  'https://uploads.sitepoint.com/wp-content/uploads/2015/12/1450973046wordpress-errors.png'

const productStore = useProductStore()

const { state } = storeToRefs(productStore)

productStore.getProducts()
</script>

<template>
  <div v-if="state.loading" class="d-flex" style="height: 35rem">
    <div class="spinner-border m-auto text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else-if="state.error" class="d-flex" style="height: 35rem">
    <div class="card m-auto" style="width: 18rem">
      <img :src="errorImage" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Ops</h5>
        <p class="card-text">
          {{ state.error }}
        </p>
        <button @click="($event) => productStore.getProducts()" class="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>
  </div>

  <div v-else class="row">
    <div
      v-for="item in state.products"
      :key="item.id"
      class="col-sm-12 col-md-4 col-lg-3 col-xl-2 mb-4"
    >
      <ProductCard />
    </div>
  </div>
</template>
