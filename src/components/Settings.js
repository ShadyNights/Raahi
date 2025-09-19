import React, { useState } from 'react';

const Settings = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('settings'); // 'settings' or 'profile'
  const [settings, setSettings] = useState({
    pushNotifications: true,
    soundHaptics: true,
    dataSharing: true,
    linkedAccounts: true,
    receiptsCareSale: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderSettingsPage = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-b from-[#FF8F00] to-[#FF6B35] z-10 p-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg">RAAHI</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('profile')}
              className="text-white/80 hover:text-white text-sm"
            >
              Profile
            </button>
            <div className="flex flex-col justify-between w-6 h-4">
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
      </div>

      {/* Scrollable Settings Content */}
      <div className="bg-white rounded-t-[25px] px-6 pt-6 pb-24 min-h-full">
        
        {/* General Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">General</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
                <span className="font-medium text-gray-800">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">English</span>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Notifications</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
                <span className="font-medium text-gray-800">Push Notifications</span>
              </div>
              <button
                onClick={() => toggleSetting('pushNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.pushNotifications ? 'bg-[#FF6B35]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <span className="font-medium text-gray-800">Sound & Haptics</span>
              </div>
              <button
                onClick={() => toggleSetting('soundHaptics')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.soundHaptics ? 'bg-[#4CAF50]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.soundHaptics ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Privacy</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-medium text-gray-800">Data Sharing</span>
              </div>
              <button
                onClick={() => toggleSetting('dataSharing')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.dataSharing ? 'bg-[#FF6B35]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.dataSharing ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H11V19C11 18.45 11.45 18 12 18S13 18.45 13 19V23H19C20.1 23 21 22.1 21 21V9Z"/>
                </svg>
                <span className="font-medium text-gray-800">Linked Accounts</span>
              </div>
              <button
                onClick={() => toggleSetting('linkedAccounts')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.linkedAccounts ? 'bg-[#4CAF50]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.linkedAccounts ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Account Management */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Account</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span className="font-medium text-gray-800">Manage Profile</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <span className="font-medium text-gray-800">Change Password</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <span className="font-medium text-gray-800">Terms & Conditions</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">About</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">RAAHI Travel App</h3>
              <p className="text-sm text-gray-600 mb-2">Version 1.0.0</p>
              <p className="text-xs text-gray-500">Secure Journeys, Enriched Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">Offline Mode</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );

  const renderProfilePage = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-b from-[#FF8F00] to-[#FF6B35] z-10 p-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg">RAAHI</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('settings')}
              className="text-white/80 hover:text-white text-sm"
            >
              Settings
            </button>
            <button 
              onClick={() => alert('Logout functionality')}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Profile Content */}
      <div className="bg-white rounded-t-[25px] px-6 pt-6 pb-24 min-h-full">
        
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800">Noone</h2>
          <p className="text-gray-600">Travel ID: trav2Steel</p>
        </div>

        {/* Receipts Care Sale */}
        <div className="mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-800">Receipts Cartss Ssale</span>
              <button
                onClick={() => toggleSetting('receiptsCareSale')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.receiptsCareSale ? 'bg-[#4CAF50]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.receiptsCareSale ? 'transform translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Security</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <span className="font-medium text-gray-800">Change Password</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11H16V16H8V11H9.2V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.4 8.7 10.4 10V11H13.6V10C13.6 8.7 12.8 8.2 12 8.2Z"/>
                </svg>
                <span className="font-medium text-gray-800">Two-Factor Authentication</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* App Information Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">App Information</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-medium text-gray-800">Version</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">1.0.0</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <span className="font-medium text-gray-800">Licenses</span>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Travel Statistics */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Travel Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-blue-700">Places Visited</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">50%</div>
              <div className="text-sm text-green-700">Safety Score</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">7</div>
              <div className="text-sm text-purple-700">Days Traveled</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">2</div>
              <div className="text-sm text-orange-700">States Visited</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">Offline Mode</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );

  return currentView === 'settings' ? renderSettingsPage() : renderProfilePage();
};

export default Settings;
