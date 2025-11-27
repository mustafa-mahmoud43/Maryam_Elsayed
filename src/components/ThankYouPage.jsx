import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ThankYouPage({ responseType }) {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const getMessage = () => {
    switch (responseType) {
      case "accept":
        return {
          title: "شكراً يا مريم على قبولك! 💍",
          message:
            "أنا سعيد جداً بدا. وانا هعمل كل حاجه اقدرعليها عشان تكوني سعيده. أتمني اشوفك قريباً❤️",
          emoji: "💍",
        };
      case "think":
        return {
          title: "شكراً يا مريم على وقتك ⏰",
          message: "أتمنى أن تفكري بهدوء. سأنتظر ردك بصبر.",
          emoji: "🤔",
        };
      case "reject":
        return {
          title: "شكراً يا مريم على وقتك وصراحتك 😔",
          message: "أتمنى لك كل السعادة.",
          emoji: "😔",
        };
      default:
        return {
          title: "شكراً يا مريم على وقتك",
          message: "أقدر وقتك الذي قضيته هنا.",
          emoji: "💙",
        };
    }
  };

  const { title, message, emoji } = getMessage();

  return (
    <div
      ref={pageRef}
      className="relative page-card p-8 flex flex-col items-center text-center overflow-hidden"
      style={{ opacity: 1, visibility: "visible" }}
    >
      {/* Falling Roses عند القبول */}
      {responseType === "accept" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="falling-rose"
            style={{
              left: "10%",
              top: "-50px",
              animation: "fall 8s linear infinite",
            }}
          >
            🌹
          </div>
          <div
            className="falling-rose"
            style={{
              left: "20%",
              top: "-150px",
              animation: "fall 10s linear infinite",
            }}
          >
            🌷
          </div>
          <div
            className="falling-rose"
            style={{
              left: "30%",
              top: "-80px",
              animation: "fall 9s linear infinite ",
            }}
          >
            🌺
          </div>
          <div
            className="falling-rose"
            style={{
              left: "40%",
              top: "-200px",
              animation: "fall 11s linear infinite ",
            }}
          >
            🌸
          </div>
          <div
            className="falling-rose"
            style={{
              left: "50%",
              top: "-120px",
              animation: "fall 8.5s linear infinite ",
            }}
          >
            🌹
          </div>
          <div
            className="falling-rose"
            style={{
              left: "60%",
              top: "-180px",
              animation: "fall 9.5s linear infinite ",
            }}
          >
            🌷
          </div>
          <div
            className="falling-rose"
            style={{
              left: "70%",
              top: "-90px",
              animation: "fall 10.5s linear infinite ",
            }}
          >
            🌺
          </div>
          <div
            className="falling-rose"
            style={{
              left: "80%",
              top: "-220px",
              animation: "fall 8.8s linear infinite ",
            }}
          >
            🌸
          </div>
          <div
            className="falling-rose"
            style={{
              left: "90%",
              top: "-60px",
              animation: "fall 9.2s linear infinite ",
            }}
          >
            🌹
          </div>
          <div
            className="falling-rose"
            style={{
              left: "15%",
              top: "-170px",
              animation: "fall 10.2s linear infinite ",
            }}
          >
            🌷
          </div>
          <div
            className="falling-rose"
            style={{
              left: "25%",
              top: "-110px",
              animation: "fall 9.8s linear infinite ",
            }}
          >
            🌺
          </div>
          <div
            className="falling-rose"
            style={{
              left: "35%",
              top: "-190px",
              animation: "fall 8.3s linear infinite ",
            }}
          >
            🌸
          </div>
          <div
            className="falling-rose"
            style={{
              left: "45%",
              top: "-70px",
              animation: "fall 9.7s linear infinite ",
            }}
          >
            🌹
          </div>
          <div
            className="falling-rose"
            style={{
              left: "55%",
              top: "-160px",
              animation: "fall 10.3s linear infinite ",
            }}
          >
            🌷
          </div>
          <div
            className="falling-rose"
            style={{
              left: "65%",
              top: "-130px",
              animation: "fall 8.7s linear infinite ",
            }}
          >
            🌺
          </div>
          <div
            className="falling-rose"
            style={{
              left: "75%",
              top: "-210px",
              animation: "fall 9.3s linear infinite ",
            }}
          >
            🌸
          </div>
          <div
            className="falling-rose"
            style={{
              left: "5%",
              top: "-100px",
              animation: "fall 10.1s linear infinite ",
            }}
          >
            🌹
          </div>
          <div
            className="falling-rose"
            style={{
              left: "85%",
              top: "-140px",
              animation: "fall 8.9s linear infinite ",
            }}
          >
            🌷
          </div>
        </div>
      )}

      <div className="relative z-10 w-full">
        <div className="text-4xl mb-6" role="img" aria-label={emoji}>
          {emoji}
        </div>
        <div className="text-2xl md:text-3xl leading-relaxed font-semibold text-rose-400 mb-4">
          {title}
        </div>
        <div className="text-lg text-gray-300 mb-6">{message}</div>
      </div>
    </div>
  );
}
