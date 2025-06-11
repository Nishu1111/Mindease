// src/pages/SuggestionPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmotionSuggestions from "../components/EmotionSuggestions";

export default function SuggestionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { emotion } = location.state || { emotion: "Neutral" };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-md space-y-6 text-center animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-800">You selected: {emotion}</h1>
        <EmotionSuggestions emotion={emotion} />
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition"
        >
          Choose Another Emotion
        </button>
      </div>
    </div>
  );
}
