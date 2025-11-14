import React, { useRef } from "react";
import gsap from "gsap";
import { POEMS } from "../assets/poems";

export default function PoemsPage({ onNext }) {
  const pageRef = useRef(null);

  const handleNext = () => {
    if (pageRef.current) {
      const el = pageRef.current;
      gsap.to(el, { scale: 0.98, duration: 0.12, yoyo: true, repeat: 1 });
      gsap.to(el, {
        opacity: 0,
        y: -8,
        duration: 0.6,
        delay: 0.18,
        onComplete: onNext,
      });
    } else {
      onNext();
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative page-card p-8 mx-2 min-h-[600px] overflow-hidden"
    >
      {/* Falling Roses Background - يبدأ التساقط فوراً */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="falling-rose"
          style={{ animation: "fall 8s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9s linear infinite " }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 11s linear infinite" }}
        >
          🌸
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.5s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.5s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10.5s linear infinite" }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.8s linear infinite" }}
        >
          🌸
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.2s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10.2s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.8s linear infinite" }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.3s linear infinite" }}
        >
          🌸
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200 text-center">
          قصائد الحب
        </h2>

        <div className="w-full space-y-6 mb-8">
          {POEMS.map((line, i) => (
            <div
              key={i}
              className="text-lg md:text-xl leading-relaxed text-gray-200 text-center px-4"
            >
              {line}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-md text-lg hover:from-rose-600 hover:to-rose-500 transition-all"
        >
          التالي →
        </button>
      </div>
    </div>
  );
}
