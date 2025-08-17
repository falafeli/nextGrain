'use client'

import Link from 'next/link'
import Header from '../components/Header'

export default function SurveyQuestion30Page() {
  return (
    <div className="bg-[#f7f7f7] relative w-full h-screen max-w-md mx-auto" data-name="SurveyQuestion30">
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
        <p className="block leading-normal whitespace-pre">Need of support</p>
      </div>

      {/* Description */}
      <div className="absolute font-normal h-[29px] leading-none left-[47px] text-black text-base text-left top-[234px] w-[334px]">
        <p className="block leading-normal">How well does this describe you? Rate from 1 – Doesn't fit at all to 5 – Totally fits</p>
      </div>

      {/* Bold Statement */}
      <div className="absolute font-bold leading-none left-[47px] text-black text-base text-left top-[293px] w-[334px]">
        <p className="block leading-normal">When making career decisions, I feel confident doing things on my own.</p>
      </div>

      {/* Radio Button Options */}
      <div className="absolute left-14 top-[396px] w-[315px] space-y-4">
        {/* Option 1 */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="support"
            value="1"
            className="w-4 h-4 text-nextgrain-blue bg-gray-100 border-gray-300 focus:ring-nextgrain-blue focus:ring-2"
          />
          <label className="text-black text-base">Not at all true</label>
        </div>

        {/* Option 2 */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="support"
            value="2"
            className="w-4 h-4 text-nextgrain-blue bg-gray-100 border-gray-300 focus:ring-nextgrain-blue focus:ring-2"
          />
          <label className="text-black text-base">Fits a little</label>
        </div>

        {/* Option 3 */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="support"
            value="3"
            className="w-4 h-4 text-nextgrain-blue bg-gray-100 border-gray-300 focus:ring-nextgrain-blue focus:ring-2"
          />
          <label className="text-black text-base">Somewhat true</label>
        </div>

        {/* Option 4 */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="support"
            value="4"
            className="w-4 h-4 text-nextgrain-blue bg-gray-100 border-gray-300 focus:ring-nextgrain-blue focus:ring-2"
          />
          <label className="text-black text-base">Mostly true</label>
        </div>

        {/* Option 5 */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="support"
            value="5"
            className="w-4 h-4 text-nextgrain-blue bg-gray-100 border-gray-300 focus:ring-nextgrain-blue focus:ring-2"
          />
          <label className="text-black text-base">Completely true</label>
        </div>
      </div>

      {/* Back Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-14 p-5 rounded-lg top-[600px] w-[134px] border-2 border-gray-300">
        <Link href="/survey-question-15" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-[#545358] text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Go back</p>
          </div>
        </Link>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[29px] items-center justify-center p-5 rounded-lg top-[600px] w-[134px] left-[60%] transform -translate-x-1/2">
        <Link href="/document-upload-information" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-white text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Next</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 