import React, { useState } from 'react';

const OfflineMode = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'scrollable'

  const renderMainView = () => (
    <div className="flex flex-col h-full">
      {/* Offline Status Circle */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Offline Indicator Circle */}
        <div className="relative w-48 h-48 mb-8">
          {/* Outer dashed circle */}
          <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full"></div>
          
          {/* Inner map visualization */}
          <div className="absolute inset-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
            {/* Map grid pattern */}
            <svg viewBox="0 0 120 120" className="w-full h-full opacity-60">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FF8F00" strokeWidth="1" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="120" height="120" fill="url(#grid)" />
              
              {/* Location pins */}
              <circle cx="30" cy="30" r="3" fill="#FF6B35"/>
              <circle cx="60" cy="45" r="3" fill="#FF6B35"/>
              <circle cx="90" cy="70" r="3" fill="#FF6B35"/>
              <circle cx="45" cy="85" r="3" fill="#FF6B35"/>
              
              {/* Navigation arrow */}
              <path d="M60 60 L70 50 L65 55 L75 55 L75 65 L65 65 L70 70 Z" fill="#FF6B35" opacity="0.8"/>
            </svg>
          </div>
          
          {/* Center offline indicator */}
          <div className="absolute inset-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">You are offline.</h2>
          <p className="text-gray-600">Limited features available.</p>
        </div>

        {/* Offline Features */}
        <div className="w-full space-y-4">
          <button className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-semibold text-lg">Offline Maps</span>
          </button>

          <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
            <span className="font-semibold text-lg">Offline Language Guide</span>
          </button>

          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
            </svg>
            <span className="font-semibold text-lg">Important Documents</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderScrollableView = () => (
    <div className="pb-24">
      {/* Offline Status Circle */}
      <div className="flex flex-col items-center justify-center px-8 mb-8">
        {/* Offline Indicator Circle */}
        <div className="relative w-32 h-32 mb-6">
          {/* Outer dashed circle */}
          <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full"></div>
          
          {/* Inner map visualization */}
          <div className="absolute inset-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
            {/* Map grid pattern */}
            <svg viewBox="0 0 80 80" className="w-full h-full opacity-60">
              {/* Grid lines */}
              <defs>
                <pattern id="gridSmall" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#FF8F00" strokeWidth="1" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="80" height="80" fill="url(#gridSmall)" />
              
              {/* Location pins */}
              <circle cx="20" cy="20" r="2" fill="#FF6B35"/>
              <circle cx="40" cy="30" r="2" fill="#FF6B35"/>
              <circle cx="60" cy="45" r="2" fill="#FF6B35"/>
              <circle cx="30" cy="60" r="2" fill="#FF6B35"/>
              
              {/* Navigation arrow */}
              <path d="M40 40 L45 35 L43 37 L48 37 L48 43 L43 43 L45 45 Z" fill="#FF6B35" opacity="0.8"/>
            </svg>
          </div>
          
          {/* Center offline indicator */}
          <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">You are offline.</h2>
          <p className="text-gray-600">Limited features available.</p>
        </div>
      </div>

      {/* Available Offline Features */}
      <div className="space-y-4 px-4">
        
        {/* Emergency SOS */}
        <div className="bg-white rounded-lg p-4 border border-red-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Emergency SOS</h3>
              <p className="text-sm text-red-600">One-Tap Local Alert</p>
            </div>
          </div>
        </div>

        {/* Safety Handbook */}
        <div className="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Safety Handbook</h3>
              <p className="text-sm text-gray-600">Read Guide</p>
            </div>
          </div>
        </div>

        {/* Offline Language Guide */}
        <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Language Guide</h3>
              <p className="text-sm text-gray-600">Read Guide</p>
            </div>
          </div>
        </div>

        {/* My Vitals & Health Info */}
        <div className="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">My Vitals & Health Info</h3>
              <p className="text-sm text-gray-600">Medical Emergency Data</p>
            </div>
          </div>
        </div>

        {/* Offline Maps */}
        <div className="bg-white rounded-lg p-4 border border-orange-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Offline Maps</h3>
              <p className="text-sm text-gray-600">Navigation without internet</p>
            </div>
          </div>
        </div>

        {/* Important Documents */}
        <div className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Important Documents</h3>
              <p className="text-sm text-gray-600">Passport, ID, Tickets</p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center text-sm text-gray-500 mt-8 p-4">
          Connect to internet to access full features and real-time updates
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-white">
      
      {/* Fixed Header */}
      <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] p-4 pt-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div>
              <span className="text-white font-bold text-lg">RAAHI</span>
              <p className="text-white/80 text-sm">Offline Mode</p>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('main')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'main'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Offline Mode - Main Features
          </button>
          <button
            onClick={() => setCurrentView('scrollable')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'scrollable'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Offline Mode - Scrollable Options
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {currentView === 'main' ? renderMainView() : renderScrollableView()}
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] h-[80px] flex justify-around items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default OfflineMode;
