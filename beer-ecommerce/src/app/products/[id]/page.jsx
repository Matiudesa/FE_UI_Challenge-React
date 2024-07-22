'use client'
import Image from 'next/image'
import { useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import ProductsContext from '@/app/context/ProductsContext'
import ReadMore from '@/app/components/ReadMore'

export const Header = () => {
  const router = useRouter()
  return (
    <header className="w-full flex justify-between items-center mt-12">
      <div
        className="w-10 h-10 bg-white flex justify-center items-center rounded-2xl"
        onClick={() => router.push('/products')}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="11" width="15" height="1.5" fill="#323232" />
          <path
            d="M11 5.20001L4 11.7L11 18.2"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h1 className="text-[#323232] font-bold">Detail</h1>
      <div className="w-10 h-10 bg-white flex justify-center items-center rounded-2xl">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="11.5" r="1.5" fill="#323232" />
          <circle cx="12.5" cy="11.5" r="1.5" fill="#323232" />
          <circle cx="19.5" cy="11.5" r="1.5" fill="#323232" />
        </svg>
      </div>
    </header>
  )
}

const ProductDetail = ({ params }) => {
  const { productDetails, finalProducts } = useContext(ProductsContext)
  const [skuSelected, setSkuSelected] = useState(null)
  const [productId, setProductId] = useState(null)

  useEffect(() => {
    if (productId) {
      setSkuSelected(productId?.skus[0])
    }
  }, [])

  const extractBrandName = (idBrandString) => {
    const parts = idBrandString.split('-')
    parts.shift()
    return parts.join('-')
  }

  const extractId = (idBrandString) => {
    const parts = idBrandString.split('-')
    return parts[0]
  }

  const findProductById = useCallback(() => {
    if (params && params.id) {
      return finalProducts.find(
        (product) => product.id === Number(extractId(params.id))
      )
    }
  }, [finalProducts, params.id])

  useEffect(() => {
    const product = findProductById()
    setProductId(product)
  }, [params.id, finalProducts])

  const filterText = useCallback((input) => {
    const regex = /[\d-]+|oz/gi
    const matches = input.match(regex)
    const containsOnlyLetters = /^[a-zA-Z\s]+$/.test(input)
    if (matches && !containsOnlyLetters) {
      return matches.join(' ')
    }
    return input
  }, [])

  const memoizedSkuList = useMemo(() => {
    if (!productId) return null
    return productId?.skus.map((sku) => (
      <>
        {skuSelected ? (
          <div
            key={sku.code}
            onClick={() => setSkuSelected(sku)}
            className={
              sku.name === skuSelected?.name
                ? 'rounded-full border border-[#FF9F24] text-[#FF9F24] text-sm w-fit py-2 px-4'
                : 'rounded-full border border-[#969696] text-[#969696] text-sm w-fit py-2 px-4'
            }
          >
            <h1>{filterText(sku.name)}</h1>
          </div>
        ) : (
          <div
            key={sku.code}
            onClick={() => setSkuSelected(sku)}
            className={
              sku.name === productId?.skus[0].name
                ? 'rounded-full border border-[#FF9F24] text-[#FF9F24] text-sm w-fit py-2 px-4'
                : 'rounded-full border border-[#969696] text-[#969696] text-sm w-fit py-2 px-4'
            }
          >
            <h1>{filterText(sku.name)}</h1>
          </div>
        )}
      </>
    ))
  }, [productDetails, skuSelected, filterText])

  return (
    <div>
      <Header />
      {productId && (
        <>
          <Image
            src={productId?.image}
            alt={extractBrandName(params.id)}
            width={240}
            height={240}
            className="m-auto"
          />
          <div className="absolute bg-white rounded-t-[45px] bottom-[-20px] left-0 pb-10 px-6">
            <div className="mt-11">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl front-bold text-[#0F0D23]">
                  {productId?.brand}
                </h1>
                <h1 className="text-[#FF9F24] text-2xl font-bold">
                  $
                  {skuSelected
                    ? skuSelected?.price.toFixed(2)
                    : productId?.skus[0].price.toFixed(2)}
                </h1>
              </div>
              <h2 className="text-[#969696] text-sm">
                Origin: {productId?.origin} | Stock:{' '}
                {skuSelected ? skuSelected?.stock : productId?.skus[0].stock}
              </h2>
            </div>
            <div className="mt-7">
              <h1 className="text-2xl front-bold text-[#0F0D23]">
                Description
              </h1>
              <ReadMore
                text={productId?.information}
                readMoreColor={'#FF9F24'}
              />
            </div>
            <div className="mt-8">
              <h1 className="text-2xl front-bold text-[#0F0D23]">Size</h1>
              <div className="w-full flex justify-between mt-3">
                {!memoizedSkuList ? (
                  <div className="w-full flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                ) : (
                  memoizedSkuList
                )}
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <button className="rounded-xl border border-[#FF9F24] p-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="6"
                    r="4.25"
                    stroke="#FF9F24"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689Z"
                    fill="white"
                    stroke="#FF9F24"
                    strokeWidth="1.5"
                  />
                  <circle cx="9.75" cy="10.75" r="0.75" fill="#FF9F24" />
                  <circle cx="13.75" cy="10.75" r="0.75" fill="#FF9F24" />
                </svg>
              </button>
              <button className="rounded-xl text-white bg-[#FF9F24] py-5 w-[247px]">
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetail
