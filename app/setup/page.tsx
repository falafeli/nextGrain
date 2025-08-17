'use client'

import Link from 'next/link'
import Header from '../components/Header'
import BottomNavigation from '../components/BottomNavigation'

export default function SetupPage() {
  return (
    <div className="bg-[#f7f7f7] relative w-full h-screen max-w-md mx-auto" data-name="AllSetUp">
      {/* Status Bar */}
      <div className="absolute h-12 left-1/2 overflow-clip top-0 translate-x-[-50%] w-full">
        <div className="absolute flex flex-row gap-72 items-start justify-start p-0 top-4 left-1/2 transform -translate-x-1/2">
          <div className="h-3 relative shrink-0 w-7">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
          <div className="h-3 relative shrink-0 w-16">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header title="nextGrain" />

      {/* Main Content Card */}
      <div className="absolute bg-white h-[712px] left-6 rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[123px] w-[379px]" />

      {/* Done! Text */}
      <div className="absolute font-bold leading-none left-[86px] text-black text-2xl text-center whitespace-pre top-[171px] translate-x-[-50%]">
        <p className="block leading-normal whitespace-pre">Done!</p>
      </div>

      {/* Thanks Text */}
      <div className="absolute font-bold h-[66px] leading-none left-[214px] text-black text-xl text-center top-[296px] translate-x-[-50%] w-[334px]">
        <p className="block leading-normal">
          Thanks! You're all set. <br />
          Ready to shape your future?
        </p>
      </div>

      {/* Back to Menu Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-16 p-5 rounded-lg top-[449px] w-[300px]">
        <Link href="/chatbot" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-black text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Back to menu</p>
          </div>
        </Link>
      </div>

      {/* Let's Go Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[38px] items-center justify-center left-16 p-5 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-96 w-[300px]">
        <Link href="/chatbot" className="w-full text-center">
          <div className="font-semibold leading-none relative shrink-0 text-white text-xl text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Let's go!</p>
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="chatbot" />
    </div>
  )
} 