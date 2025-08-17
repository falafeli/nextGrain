'use client'

import BottomNavigation from '../components/BottomNavigation'

export default function SavedPage() {
  return (
    <div className="bg-white relative w-full h-screen max-w-md mx-auto">
      {/* Status Bar */}
      <div className="absolute h-11 left-0 overflow-clip top-0 w-full">
        <div className="absolute flex flex-row gap-72 items-start justify-start p-0 top-4 left-1/2 transform -translate-x-1/2">
          <div className="h-3 relative shrink-0 w-7">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
          <div className="h-3 relative shrink-0 w-16">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-nextgrain-black mb-4">Saved Items</h1>
          <p className="text-nextgrain-black opacity-70">Your saved content will appear here</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="saved" />
    </div>
  )
} 