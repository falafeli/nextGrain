'use client'

import Link from 'next/link'
import Header from '../components/Header'

export default function SurveyQuestion4Page() {
  return (
    <div className="bg-[#f7f7f7] relative w-full h-screen max-w-md mx-auto" data-name="SurveyQuestion4">
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
      <div className="absolute bg-white h-[545px] left-6 rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[123px] w-[379px]" />

      {/* Title */}
      <div className="absolute font-bold leading-none left-[49px] text-black text-2xl text-left text-nowrap top-[174px]">
        <p className="block leading-normal whitespace-pre">Favorite subjects</p>
      </div>

      {/* Question */}
      <div className="absolute font-normal h-[29px] leading-none left-[47px] text-black text-base text-left top-[234px] w-[334px]">
        <p className="block leading-normal">What were your favorite subjects in school?</p>
      </div>

      {/* Subject 1 Label */}
      <div className="absolute font-normal leading-none left-14 text-black text-base text-left top-[293px] w-[335px]">
        <p className="block leading-normal">Subject 1</p>
      </div>

      {/* Subject 1 Input */}
      <div className="absolute h-[37px] left-14 top-[323px] w-[315px]">
        <input
          type="text"
          placeholder="Enter a subject"
          className="w-full h-full bg-neutral-100 rounded-[10px] px-4 text-[#545358] text-base focus:outline-none focus:ring-2 focus:ring-nextgrain-blue"
        />
      </div>

      {/* Subject 2 Label */}
      <div className="absolute font-normal leading-none left-14 text-black text-base text-left top-[389px] w-[335px]">
        <p className="block leading-normal">Subject 2</p>
      </div>

      {/* Subject 2 Input */}
      <div className="absolute h-[37px] left-14 top-[419px] w-[315px]">
        <input
          type="text"
          placeholder="Enter a subject"
          className="w-full h-full bg-neutral-100 rounded-[10px] px-4 text-[#545358] text-base focus:outline-none focus:ring-2 focus:ring-nextgrain-blue"
        />
      </div>

      {/* Subject 3 Label */}
      <div className="absolute font-normal leading-none left-14 text-black text-base text-left top-[495px] w-[335px]">
        <p className="block leading-normal">Subject 3</p>
      </div>

      {/* Subject 3 Input */}
      <div className="absolute h-[37px] left-14 top-[525px] w-[315px]">
        <input
          type="text"
          placeholder="Enter a subject"
          className="w-full h-full bg-neutral-100 rounded-[10px] px-4 text-[#545358] text-base focus:outline-none focus:ring-2 focus:ring-nextgrain-blue"
        />
      </div>

      {/* Back Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-14 p-5 rounded-lg top-[600px] w-[134px] border-2 border-gray-300">
        <Link href="/disclaimer" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-[#545358] text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Go back</p>
          </div>
        </Link>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[29px] items-center justify-center p-5 rounded-lg top-[600px] w-[134px] left-[60%] transform -translate-x-1/2">
        <Link href="/survey-question-15" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-white text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Next</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 