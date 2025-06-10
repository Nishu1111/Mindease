import { useState } from 'react';

const relaxationTips = {
  stress: 'Take a few deep breaths and stretch your body.',
  anxiety: 'Close your eyes and visualize a peaceful place.',
  overthinking: 'Focus on one positive thought and write it down.',
  sadness: 'Listen to calming music or take a short walk.',
};

export default function App() {
  const [selected, setSelected] = useState('');
  const [tip, setTip] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    setTip(relaxationTips[value]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">MindEase</h1>
      <p className="text-lg text-gray-700 mb-4">What are you feeling right now?</p>
      
      <select
        value={selected}
        onChange={handleChange}
        className="p-3 rounded-lg border border-gray-300 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select an emotion</option>
        <option value="stress">Stress</option>
        <option value="anxiety">Anxiety</option>
        <option value="overthinking">Overthinking</option>
        <option value="sadness">Sadness</option>
      </select>

      {tip && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-lg text-blue-800 font-medium max-w-md text-center">
          {tip}
        </div>
      )}
    </div>
  );
}

