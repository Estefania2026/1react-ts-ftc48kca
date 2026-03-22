import React from 'react';
import { motion } from 'framer-motion';

// Exportación nombrada
export const MiniGames = ({ activeGame, onClose }) => {
  const games = {
    'forest': { title: '99 NIGHTS IN THE FOREST', color: 'border-green-500' },
    'fnaf': { title: 'FIVE NIGHTS AT FREDDY\'S', color: 'border-red-600' },
    'spot': { title: 'ENCUENTRA DIFERENCIAS', color: 'border-cyan-400' },
    'prison': { title: 'PRISON LIFE', color: 'border-blue-600' },
    'fisch': { title: 'FISCH', color: 'border-blue-400' },
    'brookhaven': { title: 'ADIVINANZAS', color: 'border-yellow-400' }
  };

  const gameInfo = games[activeGame] || { title: 'CARGANDO...', color: 'border-white' };

  return (
    <div className="fixed inset-0 z- flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`w-full max-w-2xl bg-slate-900 border-2 ${gameInfo.color} rounded-2xl p-8 relative`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 text-2xl">✕</button>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-black italic text-blue-400 uppercase">{gameInfo.title}</h2>
          <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-white/10">
            <p className="text-white/60 italic">"Conectando al servidor... Nivel 12 requerido."</p>
          </div>
          <button onClick={onClose} className="w-full py-4 bg-blue-600 text-white font-black text-xl rounded-xl">
            ¡VOLVER AL MENÚ!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MiniGames; // Exportación por defecto de seguridad