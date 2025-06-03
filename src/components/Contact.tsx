import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="glass-dark bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl shadow-2xl shadow-cyan-500/20 p-8 hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-500/20">
      <h2 className="text-3xl font-bold text-white text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg border border-cyan-500/20">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200 placeholder-gray-400 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200 placeholder-gray-400 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200 placeholder-gray-400 transition-all duration-300"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-6 shadow-lg border border-cyan-500/20">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </h3>
              <p className="text-gray-200">dhinakarant104@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </h3>
              <p className="text-gray-200">+91 9361468184</p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/dhinakaran-t-493308259" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/dhinakaranst" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://x.com/Dhina6488254757?t=n03cczdtTV22OykEV73vdw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-cyan-300 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 