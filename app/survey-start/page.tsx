'use client'

import Link from 'next/link'
import Logo from '../components/Logo'

export default function SurveyStartPage() {
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

      {/* Logo */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <Logo size={80} />
      </div>

      {/* Title */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-bold text-nextgrain-black mb-4">
          Hello Max!
        </h1>
      </div>

      {/* Description */}
      <div className="absolute top-48 left-1/2 transform -translate-x-1/2 text-center w-80">
        <p className="text-nextgrain-black text-lg leading-relaxed">
          Great that you have found your way to us!<br /><br />
          nextGrain will help you find the right career path for you and support you in achieving your personal goals. To help you in the best possible way, we ask you to complete the following questionnaire first.
        </p>
      </div>

      {/* Start Questionnaire Button */}
      <div className="absolute top-[480px] left-1/2 transform -translate-x-1/2 w-80">
        <Link href="/data-protection" className="block w-full">
          <button className="w-full bg-nextgrain-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            Start questionnaire
          </button>
        </Link>
      </div>

      {/* Go Back Button */}
      <div className="absolute top-[540px] left-1/2 transform -translate-x-1/2 w-80">
        <Link href="/login" className="block w-full">
          <button className="w-full bg-white text-nextgrain-black py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 transition-colors">
            Go back
          </button>
        </Link>
      </div>

      {/* Back Link */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Link href="/" className="text-nextgrain-blue hover:underline">
          ← Back to start
        </Link>
      </div>
    </div>
  )
} 