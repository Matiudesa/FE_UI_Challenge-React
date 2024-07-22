'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <button
        className="bg-[#FF9F24] p-5 rounded-2xl text-white"
        onClick={() => router.push('/products')}
      >
        Go to /products section
      </button>
    </main>
  )
}
