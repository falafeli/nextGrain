'use client'

import Link from 'next/link'
import Logo from './components/Logo'

export default function WelcomePage() {
  return (
    <div className="bg-white relative w-full h-screen max-w-md mx-auto" data-name="Start">
      {/* Status Bar */}
      <div className="absolute h-11 left-0 overflow-clip top-0 w-full" data-name="Status Bar">
        <div className="absolute flex flex-row gap-72 items-start justify-start p-0 top-4 left-1/2 transform -translate-x-1/2">
          <div className="h-3 relative shrink-0 w-7" data-name="Left Side">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
          <div className="h-3 relative shrink-0 w-16" data-name="Right Side">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-8 w-full" data-name="Home Indicator">
        <div className="absolute bg-black bottom-2 h-1.5 rounded-full left-1/2 transform -translate-x-1/2 w-40" />
      </div>

      {/* Logo - Above center */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <Logo size={145} />
      </div>

      {/* Welcome Text - Below logo */}
      <div className="absolute font-bold leading-normal text-black text-2xl text-center left-1/2 transform -translate-x-1/2 top-[calc(25%+120px)]">
        <p className="block mb-0">Welcome </p>
        <p className="block">to nextGrain</p>
      </div>

      {/* Description Text - Below welcome text */}
      <div className="absolute font-normal leading-none left-1/2 transform -translate-x-1/2 text-[#201d2f] text-xl text-center top-[calc(25%+200px)] w-80">
        <p className="block leading-normal">
          Grow your potential. <br />
          nextGrain is your starting point.
        </p>
      </div>

      {/* Register Button - At the bottom */}
      <div className="absolute h-14 left-6 bottom-32 w-96" data-name="Register-Button">
        <Link href="/login" className="block w-full h-full">
          <div className="absolute inset-0 bg-[#90b9df] flex flex-row gap-2.5 items-center justify-center p-5 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="font-normal leading-none relative shrink-0 text-white text-xl text-left whitespace-nowrap">
              <p className="block leading-normal whitespace-pre">Register now</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
} 