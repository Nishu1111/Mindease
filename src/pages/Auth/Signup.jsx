import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(result.detail || "Signup failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold">Create an Account</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
