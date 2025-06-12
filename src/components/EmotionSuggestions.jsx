// src/components/EmotionSuggestions.jsx
import React from "react";

const suggestions = {
  Happy: ["Write a gratitude note", "Share a smile", "Capture the moment"],
  Sad: ["Listen to calming music", "Try deep breathing", "Write how you feel"],
  Angry: ["Do a breathing exercise", "Take a short walk", "Listen to mellow tunes"],
  Anxious: ["Practice 4-7-8 breathing", "Try journaling", "Watch calming visuals"],
};

export default function EmotionSuggestions({ emotion }) {
  const tips = suggestions[emotion] || ["Take a moment to breathe", "You are safe"];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Here are some tips for feeling {emotion}:</h2>
      <ul className="list-disc list-inside space-y-1 text-left">
        {tips.map((tip, idx) => (
          <li key={idx} className="text-gray-700">{tip}</li>
        ))}
      </ul>
    </div>
  );
}


