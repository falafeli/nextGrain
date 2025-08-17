'use client'

import Link from 'next/link'
import Logo from '../components/Logo'

export default function MembershipOptionsOnePickedPage() {
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

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-8 w-full">
        <div className="absolute bg-black bottom-2 h-1.5 rounded-full left-1/2 transform -translate-x-1/2 w-40" />
      </div>

      {/* Logo */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <Logo size={80} />
      </div>

      {/* Main Content Card */}
      <div className="absolute bg-white h-[400px] left-6 rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[140px] w-[379px] border border-gray-200">
        {/* Headline */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold text-nextgrain-black mb-6">
            Done!
          </h1>
        </div>

        {/* Completion Message */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center w-80">
          <p className="text-nextgrain-black text-xl font-bold leading-relaxed">
            Thanks! You're all set.<br />
            Ready to shape your future?
          </p>
        </div>

        {/* Let's Go Button */}
        <div className="absolute top-56 left-1/2 transform -translate-x-1/2 w-80">
          <Link href="/chatbot" className="block w-full">
            <button className="w-full bg-nextgrain-blue text-white py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-lg">
              Let's go!
            </button>
          </Link>
        </div>

        {/* Back to Menu Button */}
        <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-80">
          <Link href="/all-membership-options" className="block w-full">
            <button className="w-full bg-white text-nextgrain-black py-4 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg shadow-sm">
              Back to menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
} 