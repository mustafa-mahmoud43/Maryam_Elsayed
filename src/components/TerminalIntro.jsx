import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sendWelcomeEmail } from "../utils/emailService";

export default function TerminalIntro({ onStart }) {
  const boxRef = useRef(null);
  const [audio] = useState(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio("/Maryam_Elsayed/music.wav");
      audioElement.loop = true;
      audioElement.volume = 0.5;
      audioElement.preload = "auto";

      // إضافة event listeners للتتبع
      audioElement.addEventListener("loadeddata", () => {
        console.log("Audio file loaded successfully");
      });

      audioElement.addEventListener("error", (e) => {
        console.error("Audio loading error:", e);
        console.error("Audio error details:", audioElement.error);
      });

      audioElement.addEventListener("play", () => {
        console.log("Audio started playing");
      });

      audioElement.addEventListener("pause", () => {
        console.log("Audio paused");
      });

      return audioElement;
    }
    return null;
  });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const start = async () => {
    let isPlaying = false;

    if (audio) {
      try {
        console.log("Attempting to play audio...", {
          readyState: audio.readyState,
          paused: audio.paused,
          src: audio.src,
        });

        audio.currentTime = 0;

        const playPromise = audio.play();

        if (playPromise !== undefined) {
          await playPromise;
          console.log("Audio playing successfully");
          setPlaying(true);
          isPlaying = true;
        } else {
          setPlaying(true);
          isPlaying = true;
        }
      } catch (e) {
        console.error("Error playing audio:", e);
        console.error("Error name:", e.name);
        console.error("Error message:", e.message);

        try {
          audio.currentTime = 0;
          const retryPromise = audio.play();
          if (retryPromise !== undefined) {
            await retryPromise;
          }
          console.log("Audio playing on second attempt");
          setPlaying(true);
          isPlaying = true;
        } catch (err) {
          console.error("Failed to play audio after retry:", err);
        }
      }
    } else {
      console.warn("Audio element is null");
    }

    const el = boxRef.current;
    gsap.to(el, { scale: 0.98, duration: 0.12, yoyo: true, repeat: 1 });
    gsap.to(el, {
      opacity: 0,
      y: -8,
      duration: 0.6,
      delay: 0.18,
      onComplete: () => onStart(audio, isPlaying),
    });

    sendWelcomeEmail();
  };

  return (
    <div
      ref={boxRef}
      className="page-card p-6 md:p-10 text-center w-full flex items-center justify-center min-h-[70vh] mx-auto"
    >
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">
          ازيك يا مريم❤️
        </h2>
        <button
          onClick={start}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg text-base md:text-lg font-semibold hover:from-rose-600 hover:to-rose-500 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform"
        >
          لنكتشف معاً
        </button>
      </div>
    </div>
  );
}
