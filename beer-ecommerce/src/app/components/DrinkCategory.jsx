import Image from 'next/image'

export default function DrinkCategory() {
  return (
    <section className="w-full mt-8">
      <header className="flex justify-between">
        <h1 className="text-[#323232] font-bold text-[18px]">Drink Category</h1>
        <h2 className="text-[#646464] text-[14px]">See all</h2>
      </header>
      <ul className="flex min-h-12 w-full justify-between mt-4 list-none p-0">
        <li className="rounded-xl bg-white w-[58px] flex justify-center items-center">
          <button
            type="button"
            className="w-full h-full flex justify-center items-center"
          >
            <p>All</p>
          </button>
        </li>
        <li className="bg-[#FF9F24] w-[138px] flex items-center pl-[17px] rounded-xl text-white">
          <button type="button" className="w-full h-full flex items-center">
            <Image src="/icons/Beer.png" alt="beer" width={20} height={20} />
            <p className="pl-3">Beer</p>
          </button>
        </li>
        <li className="rounded-xl bg-white w-[106px] flex pl-[17px] items-center">
          <button type="button" className="w-full h-full flex items-center">
            <Image
              src="/icons/Wine-glass.png"
              alt="wine"
              width={20}
              height={20}
            />
            <p className="pl-3">Wine</p>
          </button>
        </li>
      </ul>
    </section>
  )
}
