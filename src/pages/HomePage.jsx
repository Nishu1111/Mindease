// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import relaxAnimation from "../assets/relax.json"; // downloaded a relaxing animation JSON from lottiefiles

export default function HomePage() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "User";

  const quotes = [
    "You are stronger than you think.",
    "One breath at a time, you’ll find peace.",
    "You are exactly where you need to be.",
    "Healing is not linear, but you're doing great.",
    "Pause. Breathe. Reset. Repeat.",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-indigo-400 flex flex-col justify-center items-center text-white text-center px-4 space-y-6">
      
      {/* Lottie Animation */}
      <Lottie animationData={relaxAnimation} className="w-72 h-72" loop={true} />

      {/* Welcome Message */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        Welcome, {userEmail} 👋
      </motion.h1>

      {/* Random Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg italic max-w-xl"
      >
        {quote}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-md max-w-md"
      >
        This is your safe space to reflect, recharge, and find peace. What would you like to do today?
      </motion.p>

      {/* Emotion Check Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-100 transition"
      >
        Start Emotion Check
      </motion.button>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("isLoggedIn");
          navigate("/login");
        }}
        className="mt-4 underline text-sm hover:text-purple-200"
      >
        Logout
      </button>
      <button
  onClick={() => navigate("/history")}
  className="mt-4 bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-100 transition"
>
  View My History
</button>

    </div>
  );
}


