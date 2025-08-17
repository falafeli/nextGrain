'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '../components/BottomNavigation'

interface Goal {
  id: number
  title: string
  completed: boolean
  chapter: 'short-term' | 'mid-term' | 'long-term'
}

export default function RoadmapPage() {
  const [goals, setGoals] = useState<Goal[]>([
    // Short-term goals
    { id: 1, title: "Join peer group", completed: true, chapter: 'short-term' },
    { id: 2, title: "Contact mentor", completed: true, chapter: 'short-term' },
    { id: 3, title: "Improve CV", completed: false, chapter: 'short-term' },
    { id: 4, title: "Submit 3 applications", completed: false, chapter: 'short-term' },
    
    // Mid-term goals
    { id: 5, title: "Internship secured", completed: false, chapter: 'mid-term' },
    { id: 6, title: "Modules chosen in alignment with future job profile", completed: false, chapter: 'mid-term' },
    
    // Long-term goals
    { id: 7, title: "Become robotics engineer", completed: false, chapter: 'long-term' },
    { id: 8, title: "Complete dual studies in mechatronics", completed: false, chapter: 'long-term' }
  ])

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ))
  }

  const getChapterTitle = (chapter: string) => {
    switch (chapter) {
      case 'short-term': return 'Short-term Goals'
      case 'mid-term': return 'Mid-term Goals'
      case 'long-term': return 'Long-term Goals'
      default: return chapter
    }
  }

  const getChapterDescription = (chapter: string) => {
    switch (chapter) {
      case 'short-term': return 'Next 4 weeks'
      case 'mid-term': return 'Next 6-12 months'
      case 'long-term': return 'Next 1-3 years'
      default: return ''
    }
  }

  const getChapterIcon = (chapter: string) => {
    switch (chapter) {
      case 'short-term': return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
      case 'mid-term': return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
      case 'long-term': return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
      default: return null
    }
  }

  const chapters = ['short-term', 'mid-term', 'long-term'] as const

  const completedCount = goals.filter(goal => goal.completed).length
  const progressPercentage = Math.round((completedCount / goals.length) * 100)

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
            <h1 className="text-lg font-semibold text-nextgrain-black">Career Roadmap</h1>
            <p className="text-sm text-gray-500">Your journey to success</p>
          </div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="absolute top-28 left-0 right-0 px-4">
        <div className="bg-gradient-to-r from-nextgrain-blue to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Overall Progress</h2>
            <span className="text-2xl font-bold">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm opacity-90">
            {completedCount} of {goals.length} goals completed
          </p>
        </div>
      </div>

      {/* Chapters */}
      <div className="absolute top-44 bottom-24 left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-6 pb-4">
          {chapters.map((chapter) => {
            const chapterGoals = goals.filter(goal => goal.chapter === chapter)
            const chapterCompleted = chapterGoals.filter(goal => goal.completed).length
            const chapterProgress = Math.round((chapterCompleted / chapterGoals.length) * 100)
            
            return (
              <div key={chapter} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                {/* Chapter Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-nextgrain-blue rounded-full flex items-center justify-center text-white">
                    {getChapterIcon(chapter)}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-nextgrain-black">
                      {getChapterTitle(chapter)}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {getChapterDescription(chapter)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-nextgrain-blue">
                      {chapterProgress}%
                    </span>
                  </div>
                </div>

                {/* Chapter Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-nextgrain-blue h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${chapterProgress}%` }}
                  ></div>
                </div>

                {/* Goals List */}
                <div className="space-y-3">
                  {chapterGoals.map((goal) => (
                    <div 
                      key={goal.id} 
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer"
                      onClick={() => toggleGoal(goal.id)}
                    >
                      {/* Checkbox */}
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        goal.completed 
                          ? 'bg-nextgrain-blue border-nextgrain-blue' 
                          : 'border-gray-300'
                      }`}>
                        {goal.completed && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Goal Title */}
                      <span className={`flex-1 text-sm font-medium transition-colors ${
                        goal.completed ? 'text-gray-500 line-through' : 'text-nextgrain-black'
                      }`}>
                        {goal.title}
                      </span>
                      
                      {/* Edit Icon */}
                      <div className="w-5 h-5 text-gray-400 hover:text-nextgrain-blue transition-colors">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="roadmap" />
    </div>
  )
} 