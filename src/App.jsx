import React, { useEffect } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EmotionBlobSelection from "./components/EmotionBlobSelection";
import SuggestionPage from "./pages/SuggestionPage";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
      <Routes>
  <Route path="/" element={<EmotionBlobSelection />} />
        <Route path="/suggestions" element={<SuggestionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
</Routes>
  )
}

export default App;







