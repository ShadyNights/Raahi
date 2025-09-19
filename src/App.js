import React, { useState } from 'react';
import './App.css';
import SOSComponent from './components/SOSComponent';
import IndiraAI from './components/IndiraAI';
import ZoneMap from './components/ZoneMap';
import Settings from './components/Settings';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'sos':
        return <SOSComponent onBack={() => setCurrentPage('home')} />;
      case 'ai':
        return <IndiraAI onBack={() => setCurrentPage('home')} />;
      case 'map':
        return <ZoneMap onBack={() => setCurrentPage('home')} />;
      case 'settings':
        return <Settings onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <div className="h-full overflow-y-auto pb-[90px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Header Section */}
            <header className="relative h-[320px] bg-gradient-to-b from-[#FFF8E7] via-[#FFF5E1] to-[#FFE8C8] overflow-hidden">
              
              {/* Taj Mahal Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,182,146,0.2)] to-[rgba(255,182,146,0.4)]">
                <svg viewBox="0 0 390 320" className="w-full h-full absolute bottom-0">
                  <defs>
                    <linearGradient id="palaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#B8860B" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#996515" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  <rect x="155" y="80" width="80" height="240" fill="url(#palaceGradient)" opacity="0.8"/>
                  <ellipse cx="195" cy="80" rx="25" ry="35" fill="url(#palaceGradient)" opacity="0.9"/>
                  <rect x="140" y="60" width="8" height="260" fill="url(#palaceGradient)" opacity="0.7"/>
                  <rect x="242" y="60" width="8" height="260" fill="url(#palaceGradient)" opacity="0.7"/>
                </svg>
              </div>

              {/* Logo and Controls */}
              <div className="relative z-20 flex justify-between items-start px-5 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                    </svg>
                  </div>
                  <div className="leading-none">
                    <h1 className="text-[36px] font-black text-[#FF6B35] tracking-[2px] leading-[0.85] mb-1">RAHHI</h1>
                    <p className="text-[11px] font-bold text-[#FF6B35] tracking-[1px]">WELCOME TO INDIA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-7 h-5 cursor-pointer" onClick={() => setCurrentPage('settings')}>
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Indira AI Button */}
              <div className="absolute bottom-6 left-5 bg-white/95 backdrop-blur-sm rounded-[25px] px-6 py-3 flex items-center gap-3 shadow-xl border-2 border-[#FF6B35]/30 cursor-pointer"
                   onClick={() => setCurrentPage('ai')}>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                  </svg>
                </div>
                <span className="text-[15px] font-semibold text-[#FF6B35]">indira AI</span>
              </div>
            </header>

            {/* Main Content */}
            <main className="px-5 py-6 bg-white">
              <div className="mb-4">
                <h2 className="text-[32px] font-bold text-gray-800 mb-1">Hello Noone</h2>
                <p className="text-[16px] text-gray-600">Travel id - trav2Steel</p>
              </div>

              {/* Safety Score */}
              <div className="absolute top-4 right-6 text-center">
                <div className="relative w-[90px] h-[90px] mb-2">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
                    <circle cx="45" cy="45" r="35" stroke="#E8E8E8" strokeWidth="8" fill="none"/>
                    <circle cx="45" cy="45" r="35" stroke="url(#scoreGradient)" strokeWidth="8" fill="none"
                            strokeDasharray={`${50 * 2.2} ${100 * 2.2}`} strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B35"/>
                        <stop offset="100%" stopColor="#FF8F00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[20px] font-bold text-gray-800">50%</span>
                  </div>
                </div>
                <div className="text-[12px] font-semibold text-[#8B4513] text-center">Safety Score</div>
              </div>

              {/* Feature Buttons */}
              <div className="flex justify-between items-start px-8 mb-8 mt-8">
                
                {/* Planner */}
                <div className="flex flex-col items-center gap-4 mt-4">
                  <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] flex items-center justify-center shadow-xl">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-gray-800">Planner</span>
                </div>

                {/* SOS */}
                <div className="flex flex-col items-center gap-4 -mt-2 cursor-pointer" onClick={() => setCurrentPage('sos')}>
                  <div className="relative w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#FF0000] to-[#DC143C] flex items-center justify-center shadow-xl">
                    <div className="absolute w-[85px] h-[85px] border-4 border-red-300/60 rounded-full animate-ping"></div>
                    <div className="absolute w-[100px] h-[100px] border-3 border-red-200/40 rounded-full animate-ping animation-delay-500"></div>
                    <span className="text-[16px] font-black text-white z-10">SOS</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#FF0000]">SOS</span>
                </div>

                {/* Zone */}
                <div className="flex flex-col items-center gap-4 mt-4 cursor-pointer" onClick={() => setCurrentPage('map')}>
                  <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00FF7F] to-[#32CD32] flex items-center justify-center shadow-xl">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-gray-800">Zone</span>
                </div>
              </div>

              {/* Travel History */}
              <div className="bg-white rounded-[25px] border-3 border-[#FF6B35] p-6 shadow-lg mb-6">
                <h3 className="text-[20px] font-bold text-gray-800 text-center mb-6">Travel History</h3>
                <div className="space-y-4">
                  <div className="flex items-center py-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[17px] font-semibold text-gray-800">Waterfall</div>
                      <div className="text-[13px] text-gray-500">Beautiful cascade in the mountains</div>
                    </div>
                    <div className="text-[13px] text-gray-600">Today - 2:20 PM</div>
                  </div>
                  <div className="flex items-center py-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[17px] font-semibold text-gray-800">Temple</div>
                      <div className="text-[13px] text-gray-500">Sacred heritage site visit</div>
                    </div>
                    <div className="text-[13px] text-gray-600">July 13 - 2:23 PM</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] flex items-center justify-center">
      <div className="w-[390px] h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] relative overflow-hidden shadow-2xl">
        
        {renderPage()}

        {/* Bottom Navigation */}
        {currentPage === 'home' && (
          <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
            
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all ${activeTab === 'home' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
                 onClick={() => setActiveTab('home')}>
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>

            <div className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all ${activeTab === 'map' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
                 onClick={() => { setActiveTab('map'); setCurrentPage('map'); }}>
              <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </div>

            <div className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/15`}>
              <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9z"/>
              </svg>
            </div>

            <div className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all ${activeTab === 'profile' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
                 onClick={() => { setActiveTab('profile'); setCurrentPage('settings'); }}>
              <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
              </svg>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;
