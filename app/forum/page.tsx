'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '../components/BottomNavigation'

interface ForumPost {
  id: number
  author: string
  title: string
  content: string
  timestamp: string
  replies: number
  likes: number
  isLiked: boolean
  category: string
}

interface ForumReply {
  id: number
  author: string
  content: string
  timestamp: string
  isMentor: boolean
  likes: number
  isLiked: boolean
}

export default function ForumPage() {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: 1,
      author: "Max M.",
      title: "Does anyone have experience at BMW in the engineering field?",
      content: "Hey everyone, I'm 19 and recently dropped out of a mechanical engineering degree after two semesters – uni just wasn't the right fit. I'm now thinking about doing something more hands-on and was considering applying for an internship at BMW, maybe in the engineering or robotics department. Has anyone here done a technical internship there? What was it like? And do you have any tips for the application or interview process? I'm especially wondering how to address the dropout without sounding like I gave up. Appreciate any honest input!",
      timestamp: "2 hours ago",
      replies: 2,
      likes: 7,
      isLiked: false,
      category: "Career Advice"
    }
  ])

  const [replies, setReplies] = useState<ForumReply[]>([
    {
      id: 1,
      author: "Sarah K.",
      content: "Hi, I wasn't at BMW, but I did an internship in robot engineering at VW last year. I imagine the processes are quite similar, so feel free to write to me privately if you'd like me to answer a few questions.",
      timestamp: "1 hour ago",
      isMentor: false,
      likes: 3,
      isLiked: false
    },
    {
      id: 2,
      author: "Dr. Michael Chen",
      content: "Good evening Max, I can recommend you to contact **Joshua Smith** on LinkedIn. He's a good friend of mine and even though he doesn't work in engineering, he works in the HR department at BMW and can therefore give you some good tips for the application process 😊",
      timestamp: "30 minutes ago",
      isMentor: true,
      likes: 5,
      isLiked: false
    }
  ])

  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null)

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const toggleReplyLike = (replyId: number) => {
    setReplies(replies.map(reply => 
      reply.id === replyId 
        ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
        : reply
    ))
  }

  const handlePostClick = (post: ForumPost) => {
    setSelectedPost(post)
  }

  const closePost = () => {
    setSelectedPost(null)
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

      {/* Header */}
      <div className="absolute top-11 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/chatbot" className="text-nextgrain-blue">
            ← Back
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-nextgrain-black">Community Forum</h1>
            <p className="text-sm text-gray-500">Connect with peers</p>
          </div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Forum Posts */}
      <div className="absolute top-28 bottom-24 left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-4 pb-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              {/* Post Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-nextgrain-blue rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-nextgrain-black mb-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="font-medium text-nextgrain-blue">{post.author}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Post Content Preview */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {post.content}
              </p>

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button 
                    className="flex items-center gap-2 text-gray-500 hover:text-nextgrain-blue transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(post.id)
                    }}
                  >
                    <svg className={`w-5 h-5 ${post.isLiked ? 'text-nextgrain-blue fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm">{post.replies}</span>
                  </div>
                </div>
                
                <button className="text-nextgrain-blue text-sm font-medium hover:text-blue-600 transition-colors">
                  View Discussion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-nextgrain-black">Forum Post</h2>
              <button 
                onClick={closePost}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Post Content */}
            <div className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-nextgrain-blue rounded-full flex items-center justify-center text-white font-semibold">
                  {selectedPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-nextgrain-black mb-2">
                    {selectedPost.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="font-medium text-nextgrain-blue">{selectedPost.author}</span>
                    <span>•</span>
                    <span>{selectedPost.timestamp}</span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                      {selectedPost.category}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {selectedPost.content}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button 
                  className="flex-1 bg-nextgrain-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  onClick={() => toggleLike(selectedPost.id)}
                >
                  <svg className={`w-5 h-5 ${selectedPost.isLiked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  {selectedPost.isLiked ? 'Liked' : 'Like'} ({selectedPost.likes})
                </button>
                
                <button className="flex-1 bg-white text-nextgrain-black py-3 px-4 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Reply ({selectedPost.replies})
                </button>
              </div>

              {/* Replies Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-nextgrain-black mb-4">Replies ({replies.length})</h3>
                
                <div className="space-y-4">
                  {replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                      {/* Reply Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                          reply.isMentor ? 'bg-green-600' : 'bg-gray-500'
                        }`}>
                          {reply.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-nextgrain-black">{reply.author}</span>
                            {reply.isMentor && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Mentor
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{reply.timestamp}</span>
                        </div>
                      </div>

                      {/* Reply Content */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {reply.content.split('**').map((part, index) => {
                          if (index % 2 === 1) {
                            // This is the text between ** (Joshua Smith)
                            return (
                              <button
                                key={index}
                                className="font-bold text-nextgrain-blue hover:text-blue-600 underline cursor-pointer"
                                onClick={() => {
                                  if (confirm('Would you like to go to Joshua Smith\'s LinkedIn profile?')) {
                                    // In a real app, this would open LinkedIn
                                    alert('Opening LinkedIn profile for Joshua Smith...');
                                  }
                                }}
                              >
                                {part}
                              </button>
                            );
                          }
                          return part;
                        })}
                      </p>

                      {/* Reply Actions */}
                      <div className="flex items-center justify-between">
                        <button 
                          className="flex items-center gap-2 text-gray-500 hover:text-nextgrain-blue transition-colors"
                          onClick={() => toggleReplyLike(reply.id)}
                        >
                          <svg className={`w-4 h-4 ${reply.isLiked ? 'text-nextgrain-blue fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span className="text-sm">{reply.likes}</span>
                        </button>
                        
                        <button className="text-nextgrain-blue text-sm font-medium hover:text-blue-600 transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="forum" />
    </div>
  )
} 