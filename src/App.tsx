import React from 'react';
import Map from './components/Map';
import Contact from './components/Contact';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-blue-950 text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 animate-gradient bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-cyan-950/30 opacity-50 pointer-events-none" />

      <div className="relative">
        <header className="glass-dark bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-lg border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="animate-float">
                <img
                  src="/assets/images/logo.png"
                  alt="Cabalyze Logo"
                  className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-lg text-cyan-200 italic text-center animate-pulse-slow">
                "Your smart companion for real-time cab price comparison"
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-8">
          <div className="glass-dark bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl shadow-2xl shadow-cyan-500/20 p-6 hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
            <div className="h-[80vh] max-h-[600px] sm:h-[60vh]">
              <Map />
            </div>
          </div>

          <About />
          <HowItWorks />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;