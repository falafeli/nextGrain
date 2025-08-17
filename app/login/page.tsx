'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

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
        <Logo size={100} />
      </div>

      {/* Title */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-bold text-nextgrain-black mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-nextgrain-black opacity-70">
          {isLogin ? 'Sign in to continue your journey' : 'Start growing with nextGrain'}
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-6 py-2 rounded-md transition-colors ${
            isLogin ? 'bg-white text-nextgrain-black shadow-sm' : 'text-gray-600'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-6 py-2 rounded-md transition-colors ${
            !isLogin ? 'bg-white text-nextgrain-black shadow-sm' : 'text-gray-600'
          }`}
        >
          Register
        </button>
      </div>

      {/* Form */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-80">
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nextgrain-blue focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nextgrain-blue focus:border-transparent"
            />
          </div>
          {!isLogin && (
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nextgrain-blue focus:border-transparent"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-nextgrain-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>

      {/* Continue Button */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-80">
        <Link href="/survey-start" className="block w-full">
          <button className="w-full bg-nextgrain-blue text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            Continue
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