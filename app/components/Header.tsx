'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'

interface HeaderProps {
  title?: string
  showMenu?: boolean
}

export default function Header({ title = 'nextGrain', showMenu = true }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <div className="absolute contents left-0 top-16">
        <div className="absolute h-0 left-1/2 top-[109px] translate-x-[-50%] w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        </div>
        <div className="absolute flex flex-row gap-[125px] items-start justify-start p-0 top-16 left-[70px]">
          {showMenu && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg mr-4"
            >
              <svg className="w-6 h-6 text-nextgrain-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div className="flex flex-col font-medium justify-center leading-none relative shrink-0 text-[#201d2f] text-xl text-left text-nowrap">
            <p className="block leading-normal whitespace-pre">{title}</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
} 