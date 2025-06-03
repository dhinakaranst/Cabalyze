import React from 'react';

export default function HowItWorks() {
  return (
    <div className="glass-dark bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl shadow-2xl shadow-cyan-500/20 p-8 hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
      <h2 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 mx-auto">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h3 className="text-xl font-semibold text-cyan-300 text-center mb-4">Enter Your Location</h3>
          <p className="text-gray-200 text-center">
            Simply input your pickup and drop-off locations to get started with your price comparison journey.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 mx-auto">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h3 className="text-xl font-semibold text-cyan-300 text-center mb-4">Compare Prices</h3>
          <p className="text-gray-200 text-center">
            View real-time price comparisons across multiple ride-sharing and food delivery services.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 mx-auto">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h3 className="text-xl font-semibold text-cyan-300 text-center mb-4">Choose & Book</h3>
          <p className="text-gray-200 text-center">
            Select your preferred service and book directly through the official platform.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Real-Time Updates
          </h3>
          <p className="text-gray-200">
            Get instant price updates as you adjust your pickup or drop-off locations, ensuring you always have the most current information.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure & Private
          </h3>
          <p className="text-gray-200">
            Your data privacy is our priority. We don't store personal information or payment details, ensuring a secure comparison experience.
          </p>
        </div>
      </div>
    </div>
  );
} 