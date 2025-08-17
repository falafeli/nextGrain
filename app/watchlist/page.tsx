'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '../components/BottomNavigation'

interface JobListing {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  postedDate: string
  isSaved: boolean
}

export default function WatchlistPage() {
  const [savedByMeOpen, setSavedByMeOpen] = useState(false)
  const [newFilterOpen, setNewFilterOpen] = useState(false)
  const [selectedSavedFilter, setSelectedSavedFilter] = useState('Saved by me')
  const [selectedNewFilter, setSelectedNewFilter] = useState('New')

  const watchlistJobs: JobListing[] = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Berlin, Germany",
      type: "Full-time",
      salary: "€45,000 - €55,000",
      postedDate: "2 days ago",
      isSaved: true
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Studio Berlin",
      location: "Berlin, Germany",
      type: "Part-time",
      salary: "€35,000 - €45,000",
      postedDate: "1 week ago",
      isSaved: true
    },
    {
      id: 3,
      title: "Marketing Assistant",
      company: "Growth Marketing GmbH",
      location: "Munich, Germany",
      type: "Full-time",
      salary: "€40,000 - €50,000",
      postedDate: "3 days ago",
      isSaved: true
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      company: "Data Insights Co.",
      location: "Hamburg, Germany",
      type: "Internship",
      salary: "€2,500/month",
      postedDate: "5 days ago",
      isSaved: true
    }
  ]

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

      {/* Header */}
      <div className="absolute top-11 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/chatbot" className="text-nextgrain-blue">
            ← Back
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-nextgrain-black">Watchlist</h1>
            <p className="text-sm text-gray-500">{watchlistJobs.length} saved jobs</p>
          </div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Filter Section */}
      <div className="absolute top-28 left-0 right-0 px-4">
        <div className="flex items-center gap-3">
          {/* Add Button */}
          <button className="w-10 h-10 bg-nextgrain-blue text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Saved by me Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => setSavedByMeOpen(!savedByMeOpen)}
              className="w-full bg-white text-nextgrain-black py-2 px-3 rounded-lg text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-between"
            >
              {selectedSavedFilter}
              <svg className={`w-4 h-4 transition-transform ${savedByMeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {savedByMeOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                <button
                  onClick={() => {
                    setSelectedSavedFilter('Saved by me')
                    setSavedByMeOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  Saved by me
                </button>
                <button
                  onClick={() => {
                    setSelectedSavedFilter('Recommended by AI')
                    setSavedByMeOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  Recommended by AI
                </button>
              </div>
            )}
          </div>

          {/* New Filter Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => setNewFilterOpen(!newFilterOpen)}
              className="w-full bg-white text-nextgrain-black py-2 px-3 rounded-lg text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-between"
            >
              {selectedNewFilter}
              <svg className={`w-4 h-4 transition-transform ${newFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {newFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                <button
                  onClick={() => {
                    setSelectedNewFilter('New')
                    setNewFilterOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  New
                </button>
                <button
                  onClick={() => {
                    setSelectedNewFilter('Approaching Deadline')
                    setNewFilterOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  Approaching Deadline
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-44 bottom-24 left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-4 pb-4">
          {watchlistJobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              {/* Job Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-nextgrain-black mb-1">
                    {job.title}
                  </h3>
                  <p className="text-nextgrain-blue font-medium mb-1">
                    {job.company}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012-2h4a2 2 0 012 2v2m-8 0v2a2 2 0 002 2h4a2 2 0 002-2V6" />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>

              {/* Job Details */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-green-600">
                  {job.salary}
                </span>
                <span className="text-xs text-gray-500">
                  {job.postedDate}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-nextgrain-blue text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                  Apply Now
                </button>
                <button className="flex-1 bg-white text-nextgrain-black py-2 px-4 rounded-lg text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}

          {/* Empty State (hidden when jobs exist) */}
          {watchlistJobs.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs yet</h3>
              <p className="text-gray-500 mb-4">Start exploring job opportunities and save the ones you're interested in.</p>
              <Link href="/job-description" className="inline-block bg-nextgrain-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="watchlist" />
    </div>
  )
} 