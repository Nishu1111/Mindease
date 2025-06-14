// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  // You can replace this with actual user session from context or localStorage
  const userEmail = localStorage.getItem("userEmail") || "User";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-indigo-400 flex flex-col justify-center items-center text-white text-center px-4 space-y-6">
      <h1 className="text-4xl font-bold">Welcome, {userEmail} 👋</h1>
      <p className="text-lg italic">
        “Every emotion has a story. Let’s understand yours today.”
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-100 transition"
      >
        Start Emotion Check
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("userEmail");
          navigate("/login");
        }}
        className="mt-4 underline text-sm hover:text-purple-200"
      >
        Logout
      </button>
    </div>
  );
}
