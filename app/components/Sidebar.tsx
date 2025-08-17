'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigationItems = [
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Watch List', href: '/watchlist' },
    { name: 'Job Descriptions', href: '/jobs' },
    { name: 'Settings', href: '/settings' },
    { name: 'Help', href: '/help' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <Logo size={32} />
            </div>
            <span className="text-xl font-bold text-nextgrain-black">nextGrain</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Items */}
        <nav className="mt-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-nextgrain-black hover:bg-nextgrain-light-gray transition-colors"
              onClick={onClose}
            >
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

// Logo component for the sidebar
function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 145 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 120 Q20 80 40 60 Q60 40 80 60 Q100 80 100 120 Q100 140 80 140 Q60 140 40 120 Q20 100 20 120"
        fill="url(#greenGradient)"
      />
      <path
        d="M65 120 Q65 80 85 60 Q105 40 125 60 Q145 80 145 120 Q145 140 125 140 Q105 140 85 120 Q65 100 65 120"
        fill="url(#greenGradient)"
      />
      <circle cx="72.5" cy="40" r="15" fill="url(#greenGradient)" />
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E7D32" />
          <stop offset="50%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#8BC34A" />
        </linearGradient>
      </defs>
    </svg>
  )
} 