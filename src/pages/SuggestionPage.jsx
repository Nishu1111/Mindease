// src/pages/SuggestionPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const suggestions = {
  Sad: {
    tip: "Try writing down 3 things you're grateful for today.",
    resource: "https://www.youtube.com/embed/2OEL4P1Rz04", // calming music
  },
  Anxious: {
    tip: "Do a 4-7-8 breathing cycle right now.",
    resource: "https://www.youtube.com/embed/MIr3RsUWrdo", // breathing exercise
  },
  Angry: {
    tip: "Walk away. Cool off. Return with clarity.",
    resource: "https://www.youtube.com/embed/1F5ICcMUNJY", // calming sounds
  },
  Overwhelmed: {
    tip: "Focus on 1 small task. Just one.",
    resource: "https://www.youtube.com/embed/qqXjl7eRQjI", // relax music
  },
  Lonely: {
    tip: "Call a friend or journal a letter to yourself.",
    resource: "https://www.youtube.com/embed/kRzMQZg2hE8", // peaceful ambience
  },
};

export default function SuggestionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const emotion = location.state?.emotion;

  if (!emotion) {
    return (
      <div className="text-center p-10">
        <p className="text-xl font-semibold">No emotion selected.</p>
        <button onClick={() => navigate("/")} className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    );
  }

  const { tip, resource } = suggestions[emotion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 to-purple-400 text-white px-4 text-center space-y-6">
      <h1 className="text-3xl font-bold">You feel {emotion}</h1>
      <p className="text-lg">{tip}</p>
      <div className="w-full max-w-xl">
        <iframe
          className="w-full h-64 rounded-xl shadow-lg"
          src={resource}
          title="Suggested Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button onClick={() => navigate("/")} className="mt-6 bg-white text-indigo-700 px-4 py-2 rounded hover:bg-indigo-100">
        Choose Another Emotion
      </button>
    </div>
  );
}
