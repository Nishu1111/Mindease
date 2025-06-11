// src/App.jsx
import React, { useState } from "react";
import SelectEmotion from "./components/SelectEmotion";

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <SelectEmotion
        selectedEmotion={selectedEmotion}
        onSelect={(emotion) => {
          setSelectedEmotion(emotion);
          console.log("Selected emotion:", emotion); // for testing
        }}
      />

      {selectedEmotion && (
        <div className="mt-6 text-xl text-gray-800">
          You selected: <strong>{selectedEmotion}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
