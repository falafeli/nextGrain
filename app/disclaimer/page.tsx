'use client'

import Link from 'next/link'
import Header from '../components/Header'

export default function DisclaimerPage() {
  return (
    <div className="bg-[#f7f7f7] relative w-full h-screen max-w-md mx-auto">
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
        <p className="block leading-normal whitespace-pre">Before you begin</p>
      </div>

      {/* Body Text */}
      <div className="absolute top-56 left-1/2 transform -translate-x-1/2 text-center w-80">
        <p className="text-nextgrain-black text-sm leading-relaxed">
          This short questionnaire is designed to help us understand your interests, values, and goals so we can offer you more personalised guidance, career suggestions, and group recommendations on nextGrain.
          <br /><br />
          It includes 30 questions and will take approximately 10-12 minutes to complete. Your responses will be used only within the platform to support your personal development.
          <br /><br />
          By continuing, you confirm that you understand the purpose of this survey and consent to the use of your answers for personalised matching and guidance.
        </p>
      </div>

      {/* Back Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-14 p-5 rounded-lg top-[600px] w-[134px] border-2 border-gray-300">
        <Link href="/data-protection" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-[#545358] text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Go back</p>
          </div>
        </Link>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[29px] items-center justify-center p-5 rounded-lg top-[600px] w-[134px] left-[60%] transform -translate-x-1/2">
        <Link href="/survey-question-4" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-white text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Next</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 