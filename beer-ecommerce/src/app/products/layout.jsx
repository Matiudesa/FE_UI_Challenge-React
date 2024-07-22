'use client'
import BottomMenu from '../components/BottomMenu'
import { usePathname } from 'next/navigation'

export default function ProductsLayout({ children }) {
  const pathName = usePathname()
  if (pathName === '/products') {
    return (
      <>
        <div className="px-6 pb-20">{children}</div>
        <BottomMenu />
      </>
    )
  } else {
    return (
      <div className="px-6">{children}</div>
    )
  }
}
