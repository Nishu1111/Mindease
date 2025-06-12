import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-300 to-purple-500 px-4">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-md w-full text-white animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
          />
          <button
            type="submit"
            className="w-full bg-white/80 text-purple-700 font-bold py-2 rounded hover:bg-white transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="underline hover:text-white">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
