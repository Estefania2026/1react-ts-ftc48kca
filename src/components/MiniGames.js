import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MiniGames = ({ activeGame, onClose }) => {
  const [gameStep, setGameStep] = useState(0);

  const games = {
    '99-nights': { title: '99 NIGHTS IN THE FOREST', color: 'border-green-500' },
    'fnaf': { title: 'FIVE NIGHTS AT FREDDY\'S', color: 'border-red-600' },
    'diferencias': { title: 'ENCUENTRA DIFERENCIAS', color: 'border-cyan-400' },
    'prison': { title: 'PRISON LIFE', color: 'border-blue-600' },
    'fisch': { title: 'FISCH', color: 'border-blue-400' },
    'brainrot': { title: 'BRAINROT ADVENTURE', color: 'border-purple-500' }
  };

  const gameInfo = games[activeGame];

  return (
    <div className="fixed inset-0 z- flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`w-full max-w-2xl bg-slate-900 border-2 ${gameInfo.color} rounded-2xl p-8 relative overflow-hidden`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white text-2xl">✕</button>
        
        <div className="text-center space-y-6">
          <h2 className={`text-3xl font-black italic tracking-tighter ${gameInfo.color.replace('border-', 'text-')}`}>
            {gameInfo.title}
          </h2>

          <div className="aspect-video bg-slate-800 rounded-lg border border-white/10 flex items-center justify-center">
             <p className="text-white/60 italic text-center px-10">
               "Cargando servidor de Roblox... <br/> Nivel 12 requerido para entrar."
             </p>
          </div>

          <button 
            onClick={() => alert('¡Nivel 12 desbloqueado! Accediendo...')}
            className="w-full py-4 bg-white text-black font-black text-xl rounded-xl hover:bg-gray-200 transition-colors"
          >
            JUGAR AHORA 🎮
          </button>
        </div>
      </motion.div>
    </div>
  );
};