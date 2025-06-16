//history page
import React, { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    async function fetchHistory() {
      const res = await fetch(`http://127.0.0.1:8000/get-history?email=${email}`);
      const data = await res.json();
      setHistory(data);
    }

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Emotion History</h1>
      {history.length === 0 ? (
        <p className="text-center text-gray-600">No history available.</p>
      ) : (
        <div className="space-y-4 max-w-xl mx-auto">
          {history.map((entry, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <p><strong>Emotion:</strong> {entry.emotion}</p>
              <p><strong>Tip:</strong> {entry.suggestion}</p>
              <p className="text-sm text-gray-500"><strong>Time:</strong> {entry.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
