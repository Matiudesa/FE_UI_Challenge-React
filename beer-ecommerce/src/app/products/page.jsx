'use client'
import Product from '../components/Product'
import { getProducts, getStockAndPriceBySKU } from '../API/products/GET'
import { useEffect, useState, useCallback, useContext } from 'react'
import { useRouter } from 'next/navigation'
import SearchInput from '../components/SearchInput'
import ProductsContext from '../context/ProductsContext'
import DrinkCategory from '../components/DrinkCategory'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mt-10">
      <nav className="w-full flex justify-between items-center">
        <span className="w-10 h-10 bg-white flex justify-center items-center rounded-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="1.5"
              rx="0.75"
              fill="#0F0D23"
            />
            <rect
              x="4"
              y="11"
              width="10"
              height="1.5"
              rx="0.75"
              fill="#0F0D23"
            />
            <rect
              x="4"
              y="17"
              width="16"
              height="1.5"
              rx="0.75"
              fill="#0F0D23"
            />
          </svg>
        </span>
        <Image
          src="/icons/profile.jpg"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </nav>
      <h2 className="text-[#646464] mt-6">Hi Mr. Michael,</h2>
      <h1 className="text-xl font-bold text-[#323232]">Welcome Back!</h1>
    </header>
  )
}

export default function Products() {
  const router = useRouter()
  const { setProductDetails, finalProducts } = useContext(ProductsContext)

  const pushToProductDetail = (id, product) => {
    setProductDetails(product)
    router.push(`/products/${id}`)
  }

  const formatBrand = (brand) => {
    return brand.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <>
      <Header />
      <SearchInput placeHolder={'Search burger, pizza, drink or etc...'} />
      <DrinkCategory />
      <section className="mt-8">
        <header className="flex justify-between">
          <h1 className="text-[#323232] font-bold text-[18px]">Popular</h1>
          <a href="#" className="text-[#646464] text-[14px]">
            See all
          </a>
        </header>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 justify-items-center mt-4 w-full gap-3">
            {finalProducts.map((product, index) => (
              <Product
                key={index}
                product={product.brand}
                img={product.image}
                price={product.skus[0]?.price}
                onClick={() =>
                  pushToProductDetail(
                    `${product.id}-${formatBrand(product.brand)}`,
                    product
                  )
                }
                onAddToCart={() =>
                  window.alert(`${product.brand} added to cart`)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
