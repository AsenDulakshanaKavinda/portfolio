import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

import DarkVeil from './components/Backgrounds/DarkVeil'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* The Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil 
          speed={0.5} 
          noiseIntensity={0.1} 
        />
      </div>

      {/* Your Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-white">
          Hello World
        </h1>
      </main>
    </div>
  );
}

export default App
