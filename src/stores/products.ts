import { defineStore } from 'pinia'
import type { Product } from '../models/product'
import { getAllProducts } from '../services/products_service'
import { AxiosError } from 'axios'
import { computed, reactive } from 'vue'

export interface ProductStoreState {
  products: Product[]
  loading: boolean
  error?: string | null
}

export const useProductStore = defineStore('products', () => {
  const state = reactive<ProductStoreState>({
    products: [],
    loading: false,
    error: null
  })

  const productsQuantity = computed(() => state.products.length)

  async function getProducts() {
    try {
      state.error = null
      state.loading = true
      state.products = await getAllProducts({ limit: 25, offset: 25 })
      state.loading = false
    } catch (err) {
      if (err instanceof AxiosError) {
        state.error = err.message ?? 'Erro ao buscar os produtos'
      } else {
        state.error = 'Erro ao buscar os produtos'
      }
    }
  }
  return { state, productsQuantity, getProducts }
})
