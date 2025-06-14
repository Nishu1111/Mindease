import React from "react";
import { useNavigate } from "react-router-dom";
const handleEmotionClick = async (emotion) => {
  setSelected(emotion);
  try {
    const response = await fetch("http://127.0.0.1:8000/save-emotion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emotion }),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error("Error saving emotion:", error);
  }
};

export default function EmotionBlobSelection() {
  const navigate = useNavigate();

  const tips = {
    Sad: "It's okay to feel sad. Let it pass gently like the clouds.",
    Anxious: "Inhale... 1, 2, 3. Exhale... You are safe.",
    Angry: "Anger is valid. Step back, breathe, reflect.",
    Overwhelmed: "You don’t have to do it all at once. Prioritize peace.",
    Lonely: "Even in silence, the universe is with you.",
  };

  const handleSelect = (emotion) => {
    navigate("/suggestions", { state: { emotion } });
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
      <div className="z-10 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl text-white text-center max-w-md w-full space-y-4 animate-fade-in shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-300">

        <h2 className="text-4xl font-bold">How Are You Feeling?</h2>

        <div className="space-y-2">
          {Object.keys(tips).map((emotion) => (
            <button
              key={emotion}
              onClick={() => handleSelect(emotion)}
              className="w-full py-2 rounded-lg transition font-semibold bg-white/30 hover:bg-white/60 hover:scale-105 active:scale-95 duration-200 backdrop-blur-md shadow-md"
            >
              {emotion}
            </button>

          ))}
        </div>
      </div>
    </div>
  );
}
