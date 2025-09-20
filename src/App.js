import React, { useState, useEffect } from 'react';
import './App.css';

// Import components (add your actual paths)
import SOSComponent from './components/SOSComponent';
import IndiraAI from './components/IndiraAI';
import ZoneMap from './components/ZoneMap';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import CommunityNearby from './components/CommunityNearby';
import HelpDeskBlockchain from './components/HelpDeskBlockchain';
import HelpDeskSOS from './components/HelpDeskSOS';
import SafetyScore from './components/SafetyScore';
import HelpDesk from './components/HelpDesk';
import MyPlanner from './components/MyPlanner';
import OfflineMode from './components/OfflineMode';
import MyWallet from './components/MyWallet';
import GettingStarted from './components/GettingStarted';
import WelcomeOnboarding from './components/WelcomeOnboarding';
import SafetyZoneInfo from './components/SafetyZoneInfo';
import CommunityGuidelines from './components/CommunityGuidelines';
import ProfileManagement from './components/ProfileManagement';
import LiveTranslator from './components/LiveTranslator';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [pageHistory, setPageHistory] = useState(['home']);

  // Navigation helper with history support
  const navigateToPage = (page) => {
    if (page !== currentPage) {
      setPageHistory(prev => [...prev, page]);
      setCurrentPage(page);
    }
  };

  // Go back functionality
  const handleBackButton = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop();
      const previousPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(previousPage);
      setActiveTab(previousPage === 'home' ? 'home' : activeTab);
    }
  };

  // Render hamburger menu only on Home page
  const renderHamburgerMenu = () => {
    if (currentPage !== 'home') return null;
    return (
      <div className="absolute top-20 right-5 bg-white shadow-xl rounded-lg border z-30 min-w-[250px]">
        <div className="py-2">
          <button
            onClick={() => navigateToPage('settings')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">⚙️</span>
            <span className="text-gray-700 font-medium">Settings</span>
          </button>
          <button
            onClick={() => navigateToPage('profile-management')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">👤</span>
            <span className="text-gray-700 font-medium">Profile Management</span>
          </button>
          <button
            onClick={() => navigateToPage('notifications')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">🔔</span>
            <span className="text-gray-700 font-medium">Notifications</span>
          </button>
          <button
            onClick={() => navigateToPage('safety-score')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">📊</span>
            <span className="text-gray-700 font-medium">Safety Score</span>
          </button>
          <button
            onClick={() => navigateToPage('help-sos')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">🆘</span>
            <span className="text-gray-700 font-medium">Help - SOS Guide</span>
          </button>
          <button
            onClick={() => navigateToPage('help-blockchain')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">🔐</span>
            <span className="text-gray-700 font-medium">Help - Blockchain Security</span>
          </button>
          <button
            onClick={() => navigateToPage('community-guidelines')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">📋</span>
            <span className="text-gray-700 font-medium">Community Guidelines</span>
          </button>
          <button
            onClick={() => navigateToPage('community')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">👥</span>
            <span className="text-gray-700 font-medium">Community</span>
          </button>
          <button
            onClick={() => navigateToPage('help-desk')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">❓</span>
            <span className="text-gray-700 font-medium">Help Desk</span>
          </button>
          <button
            onClick={() => navigateToPage('getting-started')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">🚀</span>
            <span className="text-gray-700 font-medium">Getting Started</span>
          </button>
          <button
            onClick={() => navigateToPage('welcome')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">👋</span>
            <span className="text-gray-700 font-medium">Welcome Guide</span>
          </button>
          <button
            onClick={() => navigateToPage('safety-zone-info')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">🛡️</span>
            <span className="text-gray-700 font-medium">Safety Zone Info</span>
          </button>
          <button
            onClick={() => alert('About RAAHI App v2.0.0')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">ℹ️</span>
            <span className="text-gray-700 font-medium">About RAAHI</span>
          </button>
          <button
            onClick={() => alert('Contact: support@raahi.com')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-lg">📞</span>
            <span className="text-gray-700 font-medium">Contact Support</span>
          </button>
        </div>
      </div>
    );
  };

  // Render the bottom navigation bar
  const renderUniversalNavbar = () => (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'home' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('home'); navigateToPage('home'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span className="text-white text-xs font-medium">Home</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'community' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('community'); navigateToPage('community'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z" />
        </svg>
        <span className="text-white text-xs font-medium">Community</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'offline' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('offline'); navigateToPage('offline-mode'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
          <circle cx="12" cy="12" r="2" fill="#FF6B35" />
        </svg>
        <span className="text-white text-xs font-medium">Offline</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'wallet' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('wallet'); navigateToPage('my-wallet'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
        <span className="text-white text-xs font-medium">Wallet</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'translator' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('translator'); navigateToPage('live-translator'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
        <span className="text-white text-xs font-medium">Translator</span>
      </div>
    </nav>
  );

  // Page rendering including back buttons and no hamburger on SOS page
  const renderPage = () => {
    switch (currentPage) {
      case 'sos':
        // SOS page without hamburger menu
        return <SOSComponent onBack={handleBackButton} showHamburger={false} />;

      case 'ai':
        return <IndiraAI onBack={handleBackButton} />;

      case 'map':
        return <ZoneMap onBack={handleBackButton} />;

      case 'settings':
        return <Settings onBack={handleBackButton} />;

      case 'notifications':
        return <Notifications onBack={handleBackButton} />;

      case 'community':
        return <CommunityNearby onBack={handleBackButton} />;

      case 'help-blockchain':
        return <HelpDeskBlockchain onBack={handleBackButton} />;

      case 'help-sos':
        return <HelpDeskSOS onBack={handleBackButton} />;

      case 'safety-score':
        return <SafetyScore onBack={handleBackButton} />;

      case 'help-desk':
        return <HelpDesk onBack={handleBackButton} navigateToPage={navigateToPage} />;

      case 'my-planner':
        return <MyPlanner onBack={handleBackButton} />;

      case 'offline-mode':
        return <OfflineMode onBack={handleBackButton} />;

      case 'my-wallet':
        /* Pass download option in MyWallet */
        return <MyWallet onBack={handleBackButton} enableDownload={true} />;

      case 'getting-started':
        return <GettingStarted onBack={handleBackButton} />;

      case 'welcome':
        return <WelcomeOnboarding onBack={handleBackButton} />;

      case 'safety-zone-info':
        return <SafetyZoneInfo onBack={handleBackButton} />;

      case 'community-guidelines':
        return <CommunityGuidelines onBack={handleBackButton} />;

      case 'profile-management':
        return <ProfileManagement onBack={handleBackButton} />;

      case 'live-translator':
        return <LiveTranslator onBack={handleBackButton} />;

      default:
        return <div>Page Not Found</div>;
    }
  };

  // Close hamburger menu if clicked outside - visible only on Home
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (currentPage !== 'home') return;
      if (!e.target.closest('.hamburger-menu')) {
        // Close hamburger menu if exists...
        // Implement hamburger menu toggle state here if needed
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [currentPage]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] flex items-center justify-center">
      <div className="w-[390px] h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] relative overflow-hidden shadow-2xl">
        {renderPage()}
        {renderUniversalNavbar()}
      </div>
    </div>
  );
};

export default App;
