import React from 'react'
import PoemsPage from './PoemsPage'

export default function FlipPages({ onFinalPage }){
  const handleNext = () => {
    if (onFinalPage) {
      onFinalPage(true)
    }
  }

  return (
    <div className="relative w-full">
      <PoemsPage onNext={handleNext} />
    </div>
  )
}

