/**import { motion } from "framer-motion";

<motion.div
  className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <SelectEmotion
    selectedEmotion={selectedEmotion}
    onSelect={handleSelect}
  />
</motion.div>
// App.jsx or Routes.jsx**/

import React from "react";
import EmotionBlobSelection from "./components/EmotionBlobSelection";

function App() {
  return <EmotionBlobSelection />;
}

export default App;
