import React, { useState } from "react";

export default function EmotionBlobSelection() {
  const [selected, setSelected] = useState(null);

  const tips = {
    Sad: "It's okay to feel sad. Let it pass gently like the clouds.",
    Anxious: "Inhale... 1, 2, 3. Exhale... You are safe.",
    Angry: "Anger is valid. Step back, breathe, reflect.",
    Overwhelmed: "You don’t have to do it all at once. Prioritize peace.",
    Lonely: "Even in silence, the universe is with you.",
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/home_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

      {/* Card */}
      <div className="z-10 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl text-white text-center max-w-md w-full space-y-4 animate-fade-in shadow-2xl">
        <h2 className="text-3xl font-bold">How Are You Feeling?</h2>

        <div className="space-y-2">
          {["Sad", "Anxious", "Angry", "Overwhelmed", "Lonely"].map((emotion) => (
            <button
              key={emotion}
              onClick={() => setSelected(emotion)}
              className={`w-full py-2 rounded transition font-medium ${
                selected === emotion
                  ? "bg-white/70 text-black font-semibold scale-105"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            >
              {emotion}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-4 px-3 py-2 bg-white/20 rounded text-sm animate-fade-in text-white">
            {tips[selected]}
          </div>
        )}
      </div>
    </div>
  );
}
