import { defineStore } from 'pinia'
import type { Product } from '../models/product'
import { getAllProducts } from '../services/products_service'
import { AxiosError } from 'axios'
import { computed, ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>()

  const productsQuantity = computed(() => products.value.length)

  async function getProducts() {
    try {
      error.value = null
      loading.value = true
      products.value = await getAllProducts({ limit: 25, offset: 25 })
      loading.value = false
    } catch (err) {
      if (err instanceof AxiosError) {
        error.value = err.message ?? 'Erro ao buscar os produtos'
      } else {
        error.value = 'Erro ao buscar os produtos'
      }
    }
  }
  return { products, loading, error, productsQuantity, getProducts }
})
