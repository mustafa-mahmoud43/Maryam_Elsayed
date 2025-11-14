import React, { useEffect, useState } from 'react'

export default function PlayMusicButton(){
  const [playing, setPlaying] = useState(false)
  // TODO: أضف ملف bg-music.wav في public/assets/
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/assets/bg-music.wav') : null)

  useEffect(() => {
    if(audio) {
      audio.loop = true
      audio.volume = 0.5
    }
  }, [audio])

  const toggle = async () =>{
    try{
      if(!playing){
        await audio.play()
        setPlaying(true)
      } else {
        audio.pause()
        audio.currentTime = 0
        setPlaying(false)
      }
    }catch(e){
      console.warn('autoplay blocked, user interaction might be required')
    }
  }

  return (
    <button onClick={toggle} className="px-3 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-200 text-sm hover:bg-gray-700 transition-colors">{playing ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}</button>
  )
}

