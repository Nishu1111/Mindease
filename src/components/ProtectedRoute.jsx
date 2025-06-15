// src/components/ProtectedRoute.jsx
import { React } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log("Auth status:", isLoggedIn); // ✅ for debugging
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

