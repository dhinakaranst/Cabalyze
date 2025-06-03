import React from 'react';

export default function About() {
  return (
    <div className="glass-dark rounded-xl shadow-2xl shadow-cyan-500/20 p-8 hover:shadow-cyan-500/30 transition-all duration-300">
      <h2 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Cabalyze</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Mission
          </h3>
          <p className="text-gray-200">
            At Cabalyze, our mission is to revolutionize how people book their rides. We've created a platform that 
            makes it easy to compare cab prices in real-time, helping you find the best deals for your journey. 
            Our goal is to make your ride booking experience smarter and more cost-effective.
          </p>
        </div>

        {/* What Makes Us Stand Out */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            What Makes Our Platform Special
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Live price updates from Uber, Ola, and other major cab services
            </li>
            <li className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Smart fare prediction based on time, distance, and demand
            </li>
            <li className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              One-click booking with instant price comparison
            </li>
            <li className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Personalized ride history and favorite locations
            </li>
          </ul>
        </div>

        {/* How We Work */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            How Our Platform Works
          </h3>
          <p className="text-gray-200 mb-4">
            We've built our platform with cutting-edge technology to provide you with the best cab booking experience. Here's how it works:
          </p>
          <ul className="space-y-3">
            {[
              "Advanced API integration with real-time price fetching from multiple cab services",
              "Smart algorithm that analyzes and compares prices instantly",
              "Secure booking system with direct integration to cab service providers",
              "End-to-end encryption for all user data and transactions"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Compliance */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Our Commitment to Security
          </h3>
          <ul className="space-y-3">
            {[
              "Our zero-data collection policy",
              "Our compliance with all relevant regulations",
              "Our transparent information practices",
              "Our regular security updates and audits"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* GitHub Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/dhinakaranst/Cabalyze"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
} 