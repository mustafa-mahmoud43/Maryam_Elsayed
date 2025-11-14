import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function TerminalIntro({ onStart }){
  const boxRef = useRef(null)
  // TODO: أضف ملف bg-music.mp3 في src/assets/ أو public/assets/
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/assets/bg-music.wav') : null)
  const [playing, setPlaying] = useState(false)

  useEffect(() =>{
    const el = boxRef.current
    gsap.fromTo(el, {y:20, opacity:0}, {y:0, opacity:1, duration:0.8, ease: 'power2.out'})
    if(audio) {
      audio.loop = true
    }
  },[audio])

  const start = async () => {
    let isPlaying = playing
    try{
      if(audio && !playing){
        await audio.play()
        setPlaying(true)
        isPlaying = true
      } else if(audio && playing) {
        isPlaying = true
      }
    }catch(e){ 
      console.warn('autoplay blocked, user gesture required', e)
      setTimeout(async () => {
        try {
          if(audio && !playing) {
            await audio.play()
            setPlaying(true)
            isPlaying = true
          }
        } catch(err) {
          console.warn('Second attempt failed', err)
        }
      }, 100)
    }
    const el = boxRef.current
    gsap.to(el, {scale:0.98, duration:0.12, yoyo:true, repeat:1})
    gsap.to(el, {opacity:0, y:-8, duration:0.6, delay:0.18, onComplete: () => onStart(audio, isPlaying)})
  }

  return (
    <div ref={boxRef} className="page-card p-8 md:p-12 text-center mx-2 w-full flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">ازيك يا مريم🌷</h2>
          
        </div>
        <button 
          onClick={start} 
          className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg text-base md:text-lg font-semibold hover:from-rose-600 hover:to-rose-500 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform"
        >
         بدا الرحلة
        </button>
      </div>
    </div>
  )
}

