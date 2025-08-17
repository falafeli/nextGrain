'use client'

import Link from 'next/link'

interface BottomNavigationProps {
  activeTab?: 'home' | 'forum' | 'roadmap' | 'watchlist'
}

export default function BottomNavigation({ activeTab = 'home' }: BottomNavigationProps) {
  const getTabStyle = (tab: string) => {
    return activeTab === tab ? 'text-nextgrain-blue' : 'text-gray-500 hover:text-nextgrain-blue'
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-3">
        <Link href="/" className={`flex flex-col items-center ${getTabStyle('home')}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </Link>
        
        <Link href="/forum" className={`flex flex-col items-center ${getTabStyle('forum')}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          <span className="text-xs">Forum</span>
        </Link>
        
        <Link href="/roadmap" className={`flex flex-col items-center ${getTabStyle('roadmap')}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-xs">Roadmap</span>
        </Link>
        
        <Link href="/watchlist" className={`flex flex-col items-center ${getTabStyle('watchlist')}`}>
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs">Watchlist</span>
        </Link>
      </div>
    </div>
  )
} 