'use client'
import React, { createContext, useState, useEffect, useCallback } from 'react'
import { getStockAndPriceBySKU } from '../API/products/GET'
import { getProducts } from '../API/products/GET'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null)
  const [products, setProducts] = useState([])
  const [skuData, setSkuData] = useState({})

  const fetchProducts = useCallback(async () => {
    await getProducts({ set: setProducts })
  }, [])

  useEffect(() => {
    fetchProducts()
    const interval = setInterval(() => {
      fetchProducts()
    }, 5000)
    return () => clearInterval(interval)
  }, [fetchProducts])

  useEffect(() => {
    const storedProductDetails = localStorage.getItem('productDetails');
    if (storedProductDetails) {
      setProductDetails(JSON.parse(storedProductDetails));
    }
  }, [products]);

  useEffect(() => {
    if (productDetails !== null) {
      localStorage.setItem('productDetails', JSON.stringify(productDetails))
    }
  }, [productDetails, products])

  useEffect(() => {
    const fetchSkuData = async () => {
      const skus = products.flatMap((product) =>
        product.skus.map((sku) => sku.code)
      )
      const newSkuData = {}
      await Promise.all(
        skus.map(async (sku) => {
          await getStockAndPriceBySKU({
            sku,
            set: (res) => {
              newSkuData[sku] = res
            }
          })
        })
      )
      setSkuData(newSkuData)
    }

    if (products.length > 0) {
      fetchSkuData()
    }
  }, [products])

  const finalProducts = products.map((product) => ({
    ...product,
    skus: product.skus.map((sku) => ({
      ...sku,
      ...skuData[sku.code]
    }))
  }))

  return (
    <ProductsContext.Provider value={{ productDetails, setProductDetails, finalProducts, products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
