//main routing components
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmotionBlobSelection from "./components/EmotionBlobSelection";
import SuggestionPage from "./pages/SuggestionPage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import HomePage from "./pages/HomePage";import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
      <Routes>
  <Route path="/" element={<EmotionBlobSelection />} />
        <Route path="/suggestions" element={<ProtectedRoute><SuggestionPage /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
   <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/suggestions"
        element={
          <ProtectedRoute>
            <SuggestionPage />
          </ProtectedRoute>
        }
        
      />
    </Routes>
  );
}



export default App;
