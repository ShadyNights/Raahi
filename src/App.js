import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Button handlers
  const handlePlannerClick = () => {
    alert('🗓️ Planner: Opening travel planning interface...');
  };

  const handleSOSClick = () => {
    alert('🆘 EMERGENCY SOS ACTIVATED!\nYour location has been shared with emergency contacts.');
  };

  const handleZoneClick = () => {
    alert('📍 Zone: Checking safety zone information...');
  };

  const handleIndiraAIClick = () => {
    alert('🤖 Indira AI: Hello! How can I help you plan your journey today?');
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'home':
        alert('🏠 Home: You are on the home screen');
        break;
      case 'map':
        alert('🗺️ Map: Opening navigation and maps...');
        break;
      case 'wifi':
        alert('📶 WiFi: Searching for nearby hotspots...');
        break;
      case 'profile':
        alert('👤 Profile: Opening user profile settings...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] flex items-center justify-center">
      <div className="w-[390px] h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] relative overflow-hidden shadow-2xl">
        
        {/* Scrollable Content with bottom padding for navbar */}
        <div className="h-full overflow-y-auto pb-[90px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Header Section */}
          <header className="relative h-[350px] bg-gradient-to-b from-[#FFF8E7] via-[#FFF5E1] to-[#FFE8C8] overflow-hidden">
            
            {/* Taj Mahal Silhouette Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,182,146,0.2)] to-[rgba(255,182,146,0.4)]">
              <svg viewBox="0 0 390 350" className="w-full h-full absolute bottom-0">
                <defs>
                  <linearGradient id="palaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#B8860B" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#996515" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                
                {/* Central Taj Mahal */}
                <rect x="155" y="80" width="80" height="270" fill="url(#palaceGradient)" opacity="0.8"/>
                <ellipse cx="195" cy="80" rx="25" ry="35" fill="url(#palaceGradient)" opacity="0.9"/>
                
                {/* Central Minarets */}
                <rect x="140" y="60" width="8" height="290" fill="url(#palaceGradient)" opacity="0.7"/>
                <rect x="242" y="60" width="8" height="290" fill="url(#palaceGradient)" opacity="0.7"/>
                <circle cx="144" cy="60" r="5" fill="url(#palaceGradient)" opacity="0.7"/>
                <circle cx="246" cy="60" r="5" fill="url(#palaceGradient)" opacity="0.7"/>
                
                {/* Side Buildings */}
                <rect x="120" y="120" width="20" height="230" fill="url(#palaceGradient)" opacity="0.6"/>
                <rect x="250" y="120" width="20" height="230" fill="url(#palaceGradient)" opacity="0.6"/>
                
                {/* Left and Right Palace Complexes */}
                <rect x="50" y="140" width="60" height="210" fill="url(#palaceGradient)" opacity="0.6"/>
                <rect x="280" y="140" width="60" height="210" fill="url(#palaceGradient)" opacity="0.6"/>
              </svg>
            </div>

            {/* Top Section - Logo and Controls */}
            <div className="relative z-20 flex justify-between items-start px-5 pt-5">
              <div className="flex items-center gap-3">
                {/* Professional Lotus Logo */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                    <path d="M8.4 7.3c-.8 1.1-2.1 1.8-3.6 1.8s-2.8-.7-3.6-1.8c-.4-.6-.4-1.4 0-2C2 4.2 3.3 3.5 4.8 3.5s2.8.7 3.6 1.8c.4.6.4 1.4 0 2z" opacity="0.8"/>
                    <path d="M15.6 7.3c.8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C22 4.2 20.7 3.5 19.2 3.5s-2.8.7-3.6 1.8c-.4.6-.4 1.4 0 2z" opacity="0.8"/>
                    <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity="0.6"/>
                  </svg>
                </div>
                
                {/* Brand Text */}
                <div className="leading-none">
                  <h1 className="text-[36px] font-black text-[#FF6B35] tracking-[2px] leading-[0.85] mb-1">RAHHI</h1>
                  <p className="text-[11px] font-bold text-[#FF6B35] tracking-[1px] leading-tight">WELCOME TO INDIA</p>
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                {/* Professional Notification Bell */}
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#FF0000] to-[#DC143C] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-[10px] font-bold">1</span>
                  </div>
                </div>
                
                {/* Professional Hamburger Menu */}
                <div className="flex flex-col justify-between w-7 h-5 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                  <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                  <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Indira AI Button */}
            <div 
              onClick={handleIndiraAIClick}
              className="absolute bottom-6 left-5 bg-white/95 backdrop-blur-sm rounded-[25px] px-6 py-3 flex items-center gap-3 shadow-xl border-2 border-[#FF6B35]/30 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold text-[#FF6B35] tracking-wide">indira AI</span>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-5 py-6 bg-gradient-to-b from-white to-[#FFFBF7] relative">
            
            {/* User Greeting */}
            <div className="mb-6">
              <h2 className="text-[32px] font-bold text-gray-800 mb-1 leading-tight">Hello Noone</h2>
              <p className="text-[16px] text-gray-600 font-medium">Travel id - trav2Steel</p>
            </div>

            {/* Fixed Safety Score Position and Alignment */}
            <div className="absolute top-6 right-5 text-center">
              <div className="relative w-[85px] h-[85px] mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 85 85">
                  <circle cx="42.5" cy="42.5" r="33" stroke="#E8E8E8" strokeWidth="7" fill="none"/>
                  <circle 
                    cx="42.5" 
                    cy="42.5" 
                    r="33" 
                    stroke="url(#scoreGradient)" 
                    strokeWidth="7" 
                    fill="none"
                    strokeDasharray={`${50 * 2.07} ${100 * 2.07}`} 
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B35"/>
                      <stop offset="100%" stopColor="#FF8F00"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[18px] font-bold text-gray-800">50%</span>
                </div>
              </div>
              <div className="text-[11px] font-semibold text-[#8B4513] text-center">Safety Score</div>
            </div>

            {/* Feature Buttons - Adjusted Positions */}
            <div className="relative px-6 mb-8 mt-6">
              
              {/* SOS - Positioned Higher (Up) */}
              <div 
                onClick={handleSOSClick}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
              >
                <div className="relative w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#FF0000] to-[#DC143C] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                  {/* Enhanced Pulsing Rings */}
                  <div className="absolute w-[85px] h-[85px] border-4 border-red-300/60 rounded-full animate-ping"></div>
                  <div className="absolute w-[100px] h-[100px] border-3 border-red-200/40 rounded-full animate-ping animation-delay-500"></div>
                  {/* SOS Text */}
                  <span className="text-[16px] font-black text-white z-10 tracking-wider">SOS</span>
                </div>
                <span className="text-[16px] font-bold text-[#FF0000]">SOS</span>
              </div>

              {/* Planner - Positioned Lower Left */}
              <div 
                onClick={handlePlannerClick}
                className="absolute top-24 left-8 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-[65px] h-[65px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <span className="text-[14px] font-semibold text-gray-800">Planner</span>
              </div>

              {/* Zone - Positioned Lower Right */}
              <div 
                onClick={handleZoneClick}
                className="absolute top-24 right-8 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-[65px] h-[65px] rounded-full bg-gradient-to-br from-[#00FF7F] to-[#32CD32] flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" opacity="0.8"/>
                  </svg>
                </div>
                <span className="text-[14px] font-semibold text-gray-800">Zone</span>
              </div>
            </div>

            {/* Add spacing for button layout */}
            <div className="h-32"></div>

            {/* Enhanced Travel History Section */}
            <div className="bg-white rounded-[25px] border-3 border-[#FF6B35] p-6 shadow-lg mb-6">
              <h3 className="text-[20px] font-bold text-gray-800 text-center mb-6">Travel History</h3>
              
              <div className="space-y-5">
                
                {/* Professional Waterfall Entry */}
                <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6s4.63 1.69 5.29 4H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
                      <path d="M10 16l2-3 2 3-2 3z" opacity="0.7"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-gray-800 mb-1">Waterfall</div>
                    <div className="text-[13px] text-gray-500">Beautiful cascade in the mountains</div>
                  </div>
                  <div className="text-[13px] text-gray-600 font-medium">Today - 2:20 PM</div>
                </div>

                {/* Professional Temple Entry */}
                <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 3.5l6 6V19h-2v-6H8v6H6v-8.5l6-6z"/>
                      <circle cx="12" cy="8" r="1.5" fill="white" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-gray-800 mb-1">Temple</div>
                    <div className="text-[13px] text-gray-500">Sacred heritage site visit</div>
                  </div>
                  <div className="text-[13px] text-gray-600 font-medium">July 13 - 2:23 PM</div>
                </div>

                {/* Professional Hotel Entry */}
                <div className="flex items-center py-4 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                      <rect x="14" y="10" width="2" height="2" fill="white" opacity="0.8"/>
                      <rect x="17" y="10" width="2" height="2" fill="white" opacity="0.8"/>
                      <rect x="14" y="13" width="2" height="2" fill="white" opacity="0.8"/>
                      <rect x="17" y="13" width="2" height="2" fill="white" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-gray-800 mb-1">Hotel</div>
                    <div className="text-[13px] text-gray-500">Luxury accommodation stay</div>
                  </div>
                  <div className="text-[13px] text-gray-600 font-medium">July 27 - 9:20 PM</div>
                </div>

                {/* Additional Travel History Entries */}
                <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.5 10.5L12 8l-2.5 2.5L8 9l4-4 4 4-1.5 1.5zM12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-gray-800 mb-1">Monument</div>
                    <div className="text-[13px] text-gray-500">Historic landmark exploration</div>
                  </div>
                  <div className="text-[13px] text-gray-600 font-medium">July 15 - 4:15 PM</div>
                </div>

                <div className="flex items-center py-4 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      <circle cx="12" cy="12" r="3" fill="white" opacity="0.6"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-gray-800 mb-1">Beach</div>
                    <div className="text-[13px] text-gray-500">Coastal relaxation time</div>
                  </div>
                  <div className="text-[13px] text-gray-600 font-medium">July 10 - 6:30 AM</div>
                </div>
              </div>
            </div>

            {/* Additional Content for Scrolling */}
            <div className="bg-white/50 rounded-[20px] p-6 mb-6">
              <h4 className="text-[18px] font-semibold text-gray-800 mb-4">Recent Activities</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-[12px] font-medium text-gray-700">5 Places Visited</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-[12px] font-medium text-gray-700">Safe Journey</p>
                </div>
              </div>
            </div>

            {/* Footer spacing */}
            <div className="h-8"></div>
          </main>
        </div>

        {/* Fixed Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
          
          {/* Home - Active */}
          <div 
            onClick={() => handleNavClick('home')}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all ${
              activeTab === 'home' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'
            }`}
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>

          {/* Map */}
          <div 
            onClick={() => handleNavClick('map')}
            className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              activeTab === 'map' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'
            }`}
          >
            <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          {/* WiFi */}
          <div 
            onClick={() => handleNavClick('wifi')}
            className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              activeTab === 'wifi' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'
            }`}
          >
            <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
          </div>

          {/* Profile */}
          <div 
            onClick={() => handleNavClick('profile')}
            className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              activeTab === 'profile' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'
            }`}
          >
            <svg className="w-7 h-7 text-white/90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;
