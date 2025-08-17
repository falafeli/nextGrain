'use client'

import Link from 'next/link'
import Header from '../components/Header'

export default function DocumentUploadInformationPage() {
  return (
    <div className="bg-[#f7f7f7] relative w-full h-screen max-w-md mx-auto" data-name="DocumentUploadInformation">
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
        <p className="block leading-normal whitespace-pre">Upload your documents</p>
      </div>

      {/* Body Text */}
      <div className="absolute font-normal leading-none left-[47px] text-black text-xs text-left top-[234px] w-[334px]">
        <p className="block leading-normal">
          To give you tailored recommendations, match you with mentors or job opportunities, and help you present yourself effectively, we recommend uploading your key career documents. This allows nextGrain to better understand your experience, strengths, and potential.
          <br /><br />
          You can upload:
          <br />
          • CV / Résumé
          <br />
          • Certificates & transcripts
          <br />
          • Project work or portfolios
          <br />
          • Reference letters or anything that showcases your skills
          <br /><br />
          Your documents stay private unless you choose to share them (e.g. with mentors or employers). You'll also be able to adapt your CV for different applications directly within the platform.
          <br /><br />
          Accepted formats: PDF, DOCX, PNG, JPG
          <br />
          Max. file size per file: 10 MB
        </p>
      </div>

      {/* Upload Button */}
      <div className="absolute bg-[#90b9df] box-border flex flex-row gap-2.5 h-[29px] items-center justify-center left-14 p-5 rounded-lg top-[600px] w-[134px]">
        <Link href="/document-upload" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-white text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Upload</p>
          </div>
        </Link>
      </div>

      {/* Skip Button */}
      <div className="absolute bg-white box-border flex flex-row gap-2.5 h-[29px] items-center justify-center p-5 rounded-lg top-[600px] w-[134px] left-[60%] transform -translate-x-1/2 border-2 border-gray-300">
        <Link href="/all-membership-options" className="w-full text-center">
          <div className="font-normal leading-none relative shrink-0 text-[#545358] text-base text-left whitespace-nowrap">
            <p className="block leading-normal whitespace-pre">Skip for now</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 