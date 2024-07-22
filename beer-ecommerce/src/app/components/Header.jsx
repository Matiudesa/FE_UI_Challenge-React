import Image from 'next/image'

export default function Header() {
  return (
    <header className='mt-10'>
      <nav className='w-full flex justify-between items-center'>
        <span className='w-10 h-10 bg-white flex justify-center items-center rounded-2xl'>
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
      <h2 className='text-[#646464] mt-6'>Hi Mr. Michael,</h2>
      <h1 className='text-xl font-bold text-[#323232]'>Welcome Back!</h1>
    </header>
  )
}
