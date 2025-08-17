'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AllMembershipOptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
  }

  const getPlanStyle = (planName: string) => {
    if (selectedPlan === planName) {
      return 'bg-[#90b9df]' // Blue for selected
    } else if (selectedPlan && selectedPlan !== planName) {
      return 'bg-gray-300' // Grey for unselected when another is selected
    } else {
      return 'bg-[#90b9df]' // Default blue when none selected
    }
  }

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

      {/* Header */}
      <div className="absolute contents left-0 top-16">
        <div className="absolute h-0 left-1/2 top-[109px] translate-x-[-50%] w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        </div>
        <div className="absolute flex flex-row gap-[125px] items-start justify-start p-0 top-16 left-[70px]">
          <div className="flex flex-col font-medium justify-center leading-none relative shrink-0 text-[#201d2f] text-xl text-left whitespace-pre">
            <p className="block leading-normal whitespace-pre">Membership Options</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-bold text-nextgrain-black mb-4">
          Choose Your Plan
        </h1>
        <p className="text-nextgrain-black text-lg opacity-70">
          Select the membership that fits your needs
        </p>
      </div>

      {/* 12 Month Plan - Best Deal */}
      <div 
        className={`absolute ${getPlanStyle('12month')} rounded-[15px] top-[234px] left-6 w-[379px] h-[90px] relative cursor-pointer transition-colors duration-200`}
        onClick={() => handlePlanSelect('12month')}
      >
        {/* Price Circle */}
        <div className="absolute -left-3 top-3 w-16 h-16 bg-white rounded-full border-3 border-[#4ade80] flex flex-col items-center justify-center">
          <div className="text-black font-bold text-xs">€99.99</div>
          <div className="text-black text-[10px]">≈ €8.33/mo</div>
        </div>
        {/* Best Deal Banner */}
        <div className="absolute -left-1 top-1 bg-[#4ade80] text-white text-xs px-2 py-1 rounded-full font-medium">
          Best deal
        </div>
        {/* Plan Title */}
        <div className="absolute left-16 top-3 text-white font-bold text-lg">
          12 month
        </div>
        {/* Features */}
        <div className="absolute left-16 top-8 text-white text-xs space-y-0.5">
          <div>• Personal mentor</div>
          <div>• Access to all content</div>
          <div>• Small and tailored groups</div>
        </div>
      </div>

      {/* 6 Month Plan - Bestseller */}
      <div 
        className={`absolute ${getPlanStyle('6month')} rounded-[15px] top-[264px] left-6 w-[379px] h-[90px] relative cursor-pointer transition-colors duration-200`}
        onClick={() => handlePlanSelect('6month')}
      >
        {/* Price Circle */}
        <div className="absolute -left-3 top-3 w-16 h-16 bg-white rounded-full border-3 border-[#4ade80] flex flex-col items-center justify-center">
          <div className="text-black font-bold text-xs">€59.99</div>
          <div className="text-black text-[10px]">≈ €9.99/mo</div>
        </div>
        {/* Bestseller Banner */}
        <div className="absolute -left-1 top-1 bg-[#4ade80] text-white text-xs px-2 py-1 rounded-full font-medium">
          Bestseller
        </div>
        {/* Plan Title */}
        <div className="absolute left-16 top-3 text-white font-bold text-lg">
          6 month
        </div>
        {/* Features */}
        <div className="absolute left-16 top-8 text-white text-xs space-y-0.5">
          <div>• Personal mentor</div>
          <div>• Access to all content</div>
          <div>• Small and tailored groups</div>
        </div>
      </div>

      {/* 3 Month Plan - Starter */}
      <div 
        className={`absolute ${getPlanStyle('3month')} rounded-[15px] top-[294px] left-6 w-[379px] h-[90px] relative cursor-pointer transition-colors duration-200`}
        onClick={() => handlePlanSelect('3month')}
      >
        {/* Price Circle */}
        <div className="absolute -left-3 top-3 w-16 h-16 bg-white rounded-full border-3 border-[#4ade80] flex flex-col items-center justify-center">
          <div className="text-black font-bold text-xs">€39.99</div>
          <div className="text-black text-[10px]">≈ €13.33/mo</div>
        </div>
        {/* Starter Banner */}
        <div className="absolute -left-1 top-1 bg-[#4ade80] text-white text-xs px-2 py-1 rounded-full font-medium">
          Starter
        </div>
        {/* Plan Title */}
        <div className="absolute left-16 top-3 text-white font-bold text-lg">
          3 month
        </div>
        {/* Features */}
        <div className="absolute left-16 top-8 text-white text-xs space-y-0.5">
          <div>• Personal mentor</div>
          <div>• Access to all content</div>
          <div>• Small and tailored groups</div>
        </div>
      </div>

      {/* Basic Plan - Free */}
      <div 
        className={`absolute ${getPlanStyle('basic')} rounded-[15px] top-[324px] left-6 w-[379px] h-[90px] relative cursor-pointer transition-colors duration-200`}
        onClick={() => handlePlanSelect('basic')}
      >
        {/* Price Circle */}
        <div className="absolute -left-3 top-3 w-16 h-16 bg-white rounded-full border-3 border-gray-500 flex flex-col items-center justify-center">
          <div className="text-gray-700 font-bold text-xs">Free plan</div>
          <div className="text-gray-700 text-[10px]">≈ €0.00/mo</div>
        </div>
        {/* Plan Title */}
        <div className="absolute left-16 top-3 text-white font-bold text-lg">
          Basic
        </div>
        {/* Features */}
        <div className="absolute left-16 top-8 text-white text-xs space-y-0.5">
          <div>• AI chatbot only</div>
          <div>• Restricted Access</div>
          <div>• Peer exchange (30-40 people)</div>
        </div>
      </div>

      {/* Selection Status */}
      {selectedPlan && (
        <div className="absolute top-[420px] left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-nextgrain-blue font-medium text-lg">
            Selected: {selectedPlan === '12month' ? '12 Month Plan' : 
                       selectedPlan === '6month' ? '6 Month Plan' : 
                       selectedPlan === '3month' ? '3 Month Plan' : 'Basic Plan'}
          </p>
        </div>
      )}

      {/* Back Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-14 p-5 rounded-lg top-[780px] w-[134px] border-2 border-gray-300">
        <Link href="/document-upload-information" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-[#545358] text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Go back</p>
          </div>
        </Link>
      </div>

      {/* Next Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[29px] items-center justify-center p-5 rounded-lg top-[780px] w-[134px] left-[60%] transform -translate-x-1/2">
        <Link href="/membership-options-one-picked" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-white text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Next</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 