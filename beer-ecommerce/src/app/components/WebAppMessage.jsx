'use client'
import React, { useState, useEffect } from 'react'

function WebAppMessage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <div className="bg-white fixed top-0 w-full h-full z-50">
      <div className='flex justify-center items-center h-full'>
        <p>It's only mobile version avaiable</p>
      </div>
    </div>
  )
}

export default WebAppMessage
