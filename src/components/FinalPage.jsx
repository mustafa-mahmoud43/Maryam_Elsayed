import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FINAL_LINE } from '../assets/poems'
import { sendResponseEmail } from '../utils/emailService'

export default function FinalPage({ onResponse }){
  const heartRef = useRef(null)
  const [processingButton, setProcessingButton] = useState(null)

  useEffect(() => {
    if(heartRef.current){
      gsap.fromTo(heartRef.current, {scale:0.6, opacity:0}, {scale:1, opacity:1, duration:0.8, ease:'back.out(1.4)'})
    }
  }, [])

  const handleResponse = async (responseType) => {
    if (processingButton) return
    
    setProcessingButton(responseType)
    
    try {
      const userName = 'مريم'
      const date = new Date().toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      await sendResponseEmail(userName, responseType, date)
      
      if (onResponse) {
        onResponse(responseType)
      }
    } catch (error) {
      console.error('Error handling response:', error)
      if (onResponse) {
        onResponse(responseType)
      }
    } finally {
      setProcessingButton(null)
    }
  }

  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )

  return (
    <div className="page-card p-8 flex flex-col items-center text-center" style={{ opacity: 1, visibility: 'visible' }}>
      <div className="w-full">
        <div className="text-2xl md:text-3xl leading-relaxed font-semibold text-rose-400 mb-6">
          {FINAL_LINE}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
        <div ref={heartRef} className="heart" aria-hidden="true">
          <svg viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M23.6 2c-2.7 0-4.6 2-5.6 3.3-1-1.3-2.9-3.3-5.6-3.3C7 2 3.3 5 3.3 9.3c0 7.1 11.5 12.6 12.8 13.2.4.2 1 .2 1.4 0 1.3-.6 12.8-6.1 12.8-13.2C28.7 5 25 2 23.6 2z" fill="#ff6f91"/>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-2xl justify-center items-center">
          <button 
            onClick={() => handleResponse('accept')}
            disabled={!!processingButton}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white text-sm border border-rose-300/30 hover:from-rose-600 hover:to-rose-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-1 max-w-[200px] shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            {processingButton === 'accept' ? (
              <>
                <LoadingSpinner />
                
              </>
            ) : (
              'قبول؟ 💍'
            )}
          </button>
          <button 
            onClick={() => handleResponse('think')}
            disabled={!!processingButton}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 text-white text-sm border border-purple-200/30 hover:from-purple-500 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-1 max-w-[200px] shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            {processingButton === 'think' ? (
              <>
                <LoadingSpinner />
                
              </>
            ) : (
              'وقت للتفكير ⏰'
            )}
          </button>
          <button 
            onClick={() => handleResponse('reject')}
            disabled={!!processingButton}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 text-white text-sm border border-gray-400/30 hover:from-gray-700 hover:to-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-1 max-w-[200px] shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            {processingButton === 'reject' ? (
              <>
                <LoadingSpinner />
                
              </>
            ) : (
              'رفض 😔'
            )}
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

