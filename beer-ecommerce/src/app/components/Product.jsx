import Image from 'next/image'

export default function Product({ product, img, price, onClick, onAddToCart }) {
  return (
    <article
      className="w-full bg-white rounded-xl rounded-tr-[32px] relative"
      onClick={onClick}
    >
      <h1 className="text-[#323232] text-center text-md mt-5 font-semibold">
        {product}
      </h1>
      <div className="flex justify-center items-center">
        <Image src={img} alt={`${product}-beer`} width={122} height={122} />
      </div>
      <div className="h-10 flex justify-between items-center">
        <p className="text-[#323232] font-semibold pl-5">${price?.toFixed(2)}</p>
        <button
          onClick={onAddToCart}
          className="bg-[#FF9F24] w-10 h-10 rounded-tl-xl rounded-br-xl flex justify-center items-center text-white text-[24px]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="11" y="5" width="2" height="14" rx="1" fill="white" />
            <rect
              x="5"
              y="13"
              width="2"
              height="14"
              rx="1"
              transform="rotate(-90 5 13)"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}
