import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Trophy, Gamepad2, Skull, Zap } from 'lucide-react';

// --- CONFIGURACIÓN DE ESTILO (REGLAS ESTRICTAS) ---
const COLORS = {
  neonGreen: '#39FF14',
  neonBlue: '#00FFFF',
  bg: '#050505',
  slate: '#1e293b'
};

// --- COMPONENTE DE BOTÓN ROBLOX STYLE ---
const RobloxButton = ({ children, onClick, variant = 'blue' }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-black uppercase italic tracking-tighter transition-all active:scale-90 border-b-4 
    ${variant === 'blue' ? 'bg-[#0047AB] border-[#002e6e] text-[#00FFFF]' : 'bg-[#22c55e] border-[#166534] text-[#39FF14]'}`}
  >
    {children}
  </button>
);

export default function App() {
  const [score, setScore] = useState(0);
  const [activeGame, setActiveGame] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  // --- LÓGICA JUEGO: BRAINROT (PATATA ENVENENADA) ---
  const BrainrotGame = () => {
    const [lives, setLives] = useState({ player: 2, ai: 2 });
    const [poisoned, setPoisoned] = useState([]); // Aquí la IA elige 2 y el jugador 2
    
    // Iniciar juego: Se eligen las 4 patatas venenosas de las 9
    const startRound = () => {
      const p = [];
      while(p.length < 4) {
        let r = Math.floor(Math.random() * 9);
        if(!p.includes(r)) p.push(r);
      }
      setPoisoned(p);
    };

    return (
      <div className="p-4 text-center">
        <h3 className="text-neon-green mb-4">LA PATATA ENVENENADA 🥔</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[...Array(9)].map((_, i) => (
            <motion.button 
              whileHover={{ scale: 1.1 }}
              key={i} 
              className="bg-slate-800 h-20 rounded-2xl border-2 border-neon-blue text-4xl"
              onClick={() => {
                if(poisoned.includes(i)) {
                  setLives(l => ({ ...l, player: l.player - 1 }));
                  alert("¡ESTABA ENVENENADA! 💀");
                } else {
                  alert("¡Sano! Estás a salvo...");
                }
              }}
            >
              🥔
            </motion.button>
          ))}
        </div>
        <div className="text-neon-blue font-bold">VIDAS: {lives.player} | IA: {lives.ai}</div>
      </div>
    );
  };

  // --- LÓGICA JUEGO: DUELO NUMÉRICO (1-200) ---
  const NumberDuel = () => {
    const [target] = useState(Math.floor(Math.random() * 200) + 1);
    const [guess, setGuess] = useState('');
    const [hint, setHint] = useState('Introduce un número del 1 al 200');

    const handleGuess = () => {
      const n = parseInt(guess);
      if(n === target) {
        setHint("¡GANASTE! Rizz Infinito 🏆");
        setScore(score + 500);
      } else if(n < target) setHint("MÁS ALTO... ⬆️");
      else setHint("MÁS BAJO... ⬇️");
    };

    return (
      <div className="p-8 space-y-4">
        <h3 className="text-neon-green">ADIVINA EL NÚMERO (IA vs TÚ)</h3>
        <input 
          type="number" 
          className="bg-black border-2 border-neon-blue p-2 w-full text-white" 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)}
        />
        <RobloxButton onClick={handleGuess}>PROBAR SUERTE</RobloxButton>
        <p className="text-white italic">{hint}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      {/* HEADER PREMIUM */}
      <header className="flex flex-col items-center pt-10 gap-6">
        <div className="border-4 border-[#00FFFF] rounded-3xl p-6 bg-slate-900/50">
          <h1 className="text-5xl md:text-7xl font-black text-[#39FF14] italic tracking-tighter drop-shadow-[0_0_15px_#39FF14]">
            ¡FELIZ CUMPLE MARTÍN!
          </h1>
        </div>
        
        {/* HERO ASSET: FREDDY */}
        <motion.img 
          initial={{ scale: 0.5 }} animate={{ scale: 1 }}
          src="https://images2.alphacoders.com/916/916198.jpg" 
          className="w-64 h-64 rounded-3xl border-4 border-neon-blue shadow-[0_0_30px_rgba(0,255,255,0.3)] object-cover"
        />
        <span className="text-neon-blue font-bold tracking-[0.5em]">NOTFOXY</span>
      </header>

      {/* SISTEMA DE MONEDAS */}
      <div className="fixed top-5 left-5 bg-slate-900 border-2 border-neon-green p-3 rounded-full flex items-center gap-2">
        <Zap size={20} className="text-neon-green" />
        <span className="font-bold text-neon-green">{score} ROBUX</span>
      </div>

      {/* MENÚ DE JUEGOS */}
      <main className="max-w-4xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <RobloxButton onClick={() => setActiveGame('brainrot')}>JUGAR BRAINROT 🥔</RobloxButton>
        <RobloxButton onClick={() => setActiveGame('duel')}>DUELO NUMÉRICO 🔢</RobloxButton>
      </main>

      {/* MODAL DE JUEGO ACTIVO */}
      <AnimatePresence>
        {activeGame && (
          <motion.div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="bg-slate-900 border-2 border-neon-blue rounded-[3rem] p-10 relative max-w-2xl w-full">
              <button onClick={() => setActiveGame(null)} className="absolute top-5 right-5 text-neon-blue">CERRAR X</button>
              {activeGame === 'brainrot' ? <BrainrotGame /> : <NumberDuel />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AUDIO PLAYER (SILENCIOSO HASTA CLIC) */}
      <div className="fixed bottom-5 right-5">
        <button onClick={() => setIsMuted(!isMuted)} className="p-4 bg-neon-blue rounded-full text-black">
          {isMuted ? <VolumeX /> : <Volume2 />}
        </button>
        {!isMuted && (
          <iframe width="0" height="0" src="https://www.youtube.com/embed/Vd09-_G_tD0?autoplay=1&loop=1" className="hidden" />
        )}
      </div>
    </div>
  );
}