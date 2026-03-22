import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RobloxButton from "./components/RobloxButton";
import { MiniGames } from "./components/MiniGames";

const ZONES = [
  { id: 'forest', name: '99 Nights in the Forest', color: 'border-green-500', icon: '🌲', message: "¡Feliz cumple! Sobrevive a la diversión." },
  { id: 'fnaf', name: 'FNAF', color: 'border-red-600', icon: '🐻', message: "¡Sin sustos! Solo pizza y fiesta." },
  { id: 'spot', name: 'Diferencias', color: 'border-blue-400', icon: '🔍', message: "¡Encuentra la felicidad hoy!" },
  { id: 'prison', name: 'Prison Life', color: 'border-orange-500', icon: '👮', message: "¡Escapa de lo aburrido!" },
  { id: 'fisch', name: 'FISCH', color: 'border-cyan-500', icon: '🎣', message: "¡Pesca grandes momentos!" },
  { id: 'brookhaven', name: 'Adivinanzas', color: 'border-yellow-400', icon: '🧩', message: "¡Nivel 12 desbloqueado! 🎂" },
];

export default function App() {
  const [gameState, setGameState] = useState({ activeZone: null, score: 0 });
  const [showModal, setShowModal] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [viewingMessage, setViewingMessage] = useState(false);

  const handleZoneClick = (zoneId) => {
    setGameState(prev => ({ ...prev, activeZone: zoneId }));
    setShowModal(true);
    setViewingMessage(false);
  };

  const closeAll = () => {
    setShowModal(false);
    setShowGame(false);
    setGameState(prev => ({ ...prev, activeZone: null }));
  };

  // AQUÍ ESTÁ EL FAMOSO RENDERGAME QUE BUSCABAS:
  const renderGame = () => {
    if (!gameState.activeZone || !showGame) return null;
    return <MiniGames activeGame={gameState.activeZone} onClose={closeAll} />;
  };

  const currentZone = ZONES.find(z => z.id === gameState.activeZone);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white overflow-x-hidden font-sans">
      <RobloxButton robux={gameState.score} />

      <header className="relative z-10 pt-16 text-center flex flex-col items-center gap-6">
        <div className="p-4 rounded-2xl border-4 border-blue-500 bg-slate-900 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <h1 className="text-3xl md:text-5xl font-black text-green-400 italic uppercase">¡FELIZ CUMPLE MARTÍN!</h1>
        </div>
        <div className="w-40 h-40 border-4 border-blue-400 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images2.alphacoders.com/916/916198.jpg" className="w-full h-full object-cover" alt="Avatar" />
        </div>
      </header>

      <main className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 p-6 max-w-4xl mx-auto">
        {ZONES.map((zone) => (
          <button key={zone.id} onClick={() => handleZoneClick(zone.id)} className={`p-6 rounded-2xl bg-slate-900 border-2 ${zone.color} flex flex-col items-center gap-2 hover:scale-105 transition-transform`}>
            <span className="text-4xl">{zone.icon}</span>
            <span className="text-xs font-bold uppercase">{zone.name}</span>
          </button>
        ))}
      </main>

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="bg-slate-900 border-2 border-white/20 p-6 rounded-3xl max-w-sm w-full text-center relative">
              <button onClick={closeAll} className="absolute top-2 right-2 p-2 text-white/50"><X /></button>
              <h2 className="text-xl font-bold text-blue-400 mb-4 uppercase">{currentZone?.name}</h2>
              {viewingMessage ? (
                <div className="space-y-4">
                  <p className="text-slate-300 italic">"{currentZone?.message}"</p>
                  <button onClick={() => setViewingMessage(false)} className="w-full py-2 bg-blue-600 rounded-xl font-bold">VOLVER</button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button onClick={() => setViewingMessage(true)} className="w-full py-3 bg-blue-600 rounded-xl font-bold uppercase">Leer Mensaje</button>
                  <button onClick={() => setShowGame(true)} className="w-full py-3 bg-green-600 rounded-xl font-bold uppercase">Jugar</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {renderGame()}
    </div>
  );
}