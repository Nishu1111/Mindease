// src/components/SelectEmotion.jsx
import React from "react";

const emotions = [
  { label: "Happy", color: "bg-yellow-300", emoji: "😊" },
  { label: "Sad", color: "bg-blue-300", emoji: "😢" },
  { label: "Angry", color: "bg-red-400", emoji: "😠" },
  { label: "Anxious", color: "bg-purple-300", emoji: "😰" },
  { label: "Relaxed", color: "bg-green-300", emoji: "😌" },
];

const SelectEmotion = ({ selectedEmotion, onSelect }) => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">How are you feeling today?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {emotions.map((emotion) => (
          <button
            key={emotion.label}
            onClick={() => onSelect(emotion.label)}
            className={`p-4 rounded-xl shadow hover:scale-105 transform transition-all duration-200 text-center text-lg ${emotion.color} ${
              selectedEmotion === emotion.label ? "ring-4 ring-black" : ""
            }`}
          >
            <span className="text-3xl block mb-1">{emotion.emoji}</span>
            {emotion.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectEmotion;
