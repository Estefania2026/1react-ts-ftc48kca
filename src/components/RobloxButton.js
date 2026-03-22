import React from 'react';
import { motion } from 'framer-motion';

const RobloxButton = ({ robux }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 z-50"
    >
      <div className="bg-slate-900/80 backdrop-blur border border-blue-500/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <div className="w-6 h-6 bg-blue-500 rounded-sm rotate-45 flex items-center justify-center">
          <span className="text-white font-bold -rotate-45 text-xs">R$</span>
        </div>
        <span className="text-blue-400 font-black tracking-wider">ROBUX: {robux}</span>
      </div>
    </motion.div>
  );
};

export default RobloxButton;