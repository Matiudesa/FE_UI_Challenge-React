import { client } from '@/app/config/cfg'

export const getProducts = async ({ set = () => {} }) => {
  try {
    const response = await client.get('/api/products')
    set(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    window.alert('Error fetching products: ' + error.message)
  }
}

export const getStockAndPriceBySKU = async ({ sku, set = () => {} }) => {
  try {
    const response = await client.get(`/api/stock-price/${sku}`)
    set(response.data)
    return response.data
  } catch (error) {
    console.error(`Error fetching stock and price for SKU ${sku}:`, error)
    window.alert(`Error fetching stock and price for SKU ${sku}: ` + error.message)
  }
}
