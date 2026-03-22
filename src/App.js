import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RobloxButton from "./components/RobloxButton";
import { MiniGames } from "./components/MiniGames";

const ZONES = [
  { id: 'forest', name: '99 Nights in the Forest', color: 'border-green-500', icon: '🌲', message: "¡Feliz cumple, explorador! Que este año sea una aventura épica." },
  { id: 'fnaf', name: 'FNAF', color: 'border-red-600', icon: '🐻', message: "¡Sin sustos hoy! Solo pizza y diversión. ¡Felicidades!" },
  { id: 'spot', name: 'Diferencias', color: 'border-blue-400', icon: '🔍', message: "¡Encuentra la felicidad en cada detalle de tu día!" },
  { id: 'prison', name: 'Prison Life', color: 'border-orange-500', icon: '👮', message: "¡Escapa de lo aburrido y celebra en grande!" },
  { id: 'fisch', name: 'FISCH', color: 'border-cyan-500', icon: '🎣', message: "¡Pesca las mejores oportunidades este año!" },
  { id: 'brookhaven', name: 'Adivinanzas', color: 'border-yellow-400', icon: '🧩', message: "¡Nivel 12 desbloqueado con éxito! 🎂" },
];

export default function App() {
  const [activeZone, setActiveZone] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [viewingMessage, setViewingMessage] = useState(false);

  const handleZoneClick = (zoneId) => {
    setActiveZone(zoneId);
    setShowModal(true);
    setViewingMessage(false);
  };

  const closeAll = () => {
    setShowModal(false);
    setShowGame(false);
    setActiveZone(null);
  };

  const currentZoneData = ZONES.find(z => z.id === activeZone);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white overflow-x-hidden font-sans">
      <RobloxButton robux={score} />

      <header className="relative z-10 pt-20 pb-10 text-center flex flex-col items-center gap-6">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 md:p-6 rounded-2xl border-4 border-blue-500 bg-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          <h1 className="text-3xl md:text-5xl font-black text-green-400 italic tracking-tighter uppercase">
            ¡FELIZ CUMPLE MARTÍN!
          </h1>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale