'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import BottomNavigation from '../components/BottomNavigation'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey Max, I'm looking forward to supporting you on your career path from now on! Thank you for answering the questionnaire and uploading your documents. Before I suggest someone to support you on your path, let me ask you one or two more things to get a clearer picture. Is that okay?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "Yes",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 3,
      text: "Great! What kind of working environment do you feel most comfortable in?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 4,
      text: "I think I work best in a calm environment where I can focus without too much pressure. I like having clear tasks and some flexibility, but I also appreciate structure and direct feedback when I get stuck.",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 5,
      text: "Got it! One last question: What kind of support do you feel you need most right now? (more structure, motivation, real-life insights, or someone to talk to?)",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 6,
      text: "Definitely more structure and motivation. Real-life insights sounds also good.",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 7,
      text: "All right. Based on your answers, I think Mia Dolan could be a great match for you. Would you like to schedule a first session with them?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 8,
      text: "Yes please",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 9,
      text: "All right! Does one of the following three dates suit you or should I look for other options?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 10,
      text: "Option 1: Thursday, July 19 at 4:30 PM\nOption 2: Monday, July 21 at 9:30 AM\nOption 3: Tuesday, July 22 at 1:30 PM",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 11,
      text: "Option 2",
      isUser: true,
      timestamp: new Date()
    },
    {
      id: 12,
      text: "Perfect! I've booked the slot and pinned the meeting invitation to the top of the chat.",
      isUser: false,
      timestamp: new Date()
    }
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
          <Link href="/membership-options-one-picked" className="text-nextgrain-blue">
            ← Back
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-nextgrain-black">AI Chatbot</h1>
          </div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="absolute top-24 bottom-24 left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-nextgrain-blue text-white rounded-br-md'
                    : 'bg-gray-100 text-nextgrain-black rounded-bl-md'
                }`}
              >
                <div className="whitespace-pre-line text-sm leading-relaxed">
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-2 ${
                    message.isUser ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" />
    </div>
  )
} 