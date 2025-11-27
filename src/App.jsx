import React, { useState, useEffect } from "react";
import TerminalIntro from "./components/TerminalIntro";
import FlipPages from "./components/FlipPages";
import FinalPage from "./components/FinalPage";
import ThankYouPage from "./components/ThankYouPage";

export default function App() {
  const [started, setStarted] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [isFinalPage, setIsFinalPage] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [responseType, setResponseType] = useState(null);

  useEffect(() => {
    if (audio && playing && started) {
      if (audio.paused) {
        audio
          .play()
          .catch((err) => console.warn("Failed to resume audio", err));
      }
      audio.loop = true;
    }
  }, [audio, playing, started]);

  const handleStart = (audioRef, isPlaying) => {
    setAudio(audioRef);
    setPlaying(isPlaying);
    setStarted(true);
    if (audioRef && isPlaying && audioRef.paused) {
      audioRef
        .play()
        .catch((err) => console.warn("Failed to play audio on start", err));
    }
  };

  const handleResponse = (type) => {
    setResponseType(type);
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0f0f1e]">
      <div className="w-full max-w-3xl">
        {!started ? (
          <TerminalIntro onStart={handleStart} />
        ) : showThankYou ? (
          <ThankYouPage responseType={responseType} />
        ) : isFinalPage ? (
          <FinalPage onResponse={handleResponse} />
        ) : (
          <>
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-200">
                رسالة خاصة
              </h1>
            </div>
            <FlipPages onFinalPage={setIsFinalPage} />
          </>
        )}
      </div>
    </div>
  );
}
