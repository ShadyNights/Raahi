import React, { useState } from 'react';

const MyWallet = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'scrollable'

  const documents = {
    main: [
      { 
        id: 1, 
        name: 'Passport', 
        status: 'S entified', 
        icon: '🛂',
        color: 'bg-blue-500'
      },
      { 
        id: 2, 
        name: 'Aadhar Card', 
        status: 'S entified', 
        icon: '👤',
        color: 'bg-green-500'
      },
      { 
        id: 3, 
        name: 'Aadhar Card', 
        status: 'S entified', 
        icon: '🆔',
        color: 'bg-green-600'
      },
      { 
        id: 4, 
        name: 'Visa', 
        status: 'S entified', 
        icon: '📋',
        color: 'bg-orange-500'
      }
    ],
    scrollable: [
      { 
        id: 1, 
        name: 'Travel Insurance', 
        status: 'S entified', 
        icon: '📄',
        color: 'bg-blue-500'
      },
      { 
        id: 2, 
        name: 'Flight Insurance', 
        status: 'S entified', 
        icon: '🛡️',
        color: 'bg-green-500'
      },
      { 
        id: 3, 
        name: 'Flight Tickets', 
        status: 'S entified', 
        icon: '✈️',
        color: 'bg-blue-600'
      },
      { 
        id: 4, 
        name: 'Hotel Bookings', 
        status: 'S entified', 
        icon: '🏨',
        color: 'bg-purple-500'
      },
      { 
        id: 5, 
        name: 'Other Documents', 
        status: 'S entified', 
        icon: '📋',
        color: 'bg-gray-500'
      }
    ]
  };

  const renderMainView = () => (
    <div className="pb-24">
      {/* Important Documents Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Important Documents</h2>
        
        <div className="space-y-3">
          {documents.main.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center text-white`}>
                  {doc.name === 'Passport' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  )}
                  {doc.name === 'Aadhar Card' && doc.id === 2 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                    </svg>
                  )}
                  {doc.name === 'Aadhar Card' && doc.id === 3 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12M12,14C9.33,14 4,15.33 4,18V20H20V18C20,15.33 14.67,14 12,14Z"/>
                    </svg>
                  )}
                  {doc.name === 'Visa' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.status}</p>
                </div>
              </div>
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Document Button */}
      <div className="mb-6">
        <button className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
          </svg>
          <span className="font-semibold">Add New Document</span>
        </button>
      </div>
    </div>
  );

  const renderScrollableView = () => (
    <div className="pb-24">
      {/* Important Documents Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Important Documents</h2>
        
        <div className="space-y-3">
          {documents.scrollable.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center text-white`}>
                  {doc.name === 'Travel Insurance' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  )}
                  {doc.name === 'Flight Insurance' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                    </svg>
                  )}
                  {doc.name === 'Flight Tickets' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
                    </svg>
                  )}
                  {doc.name === 'Hotel Bookings' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V8H19V19M16 10V12H14V10H16M12 10V12H10V10H12M16 13V15H14V13H16M12 13V15H10V13H12"/>
                    </svg>
                  )}
                  {doc.name === 'Other Documents' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.status}</p>
                </div>
              </div>
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">🔐 Secure Storage</h3>
          <p className="text-sm text-blue-700">All documents are encrypted and stored securely on blockchain technology.</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">📱 Offline Access</h3>
          <p className="text-sm text-green-700">Access your important documents even without internet connection.</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">🌍 Global Recognition</h3>
          <p className="text-sm text-orange-700">Digital documents accepted at major airports and government offices.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] z-10 p-4 pt-6">
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
              <p className="text-white/80 text-sm">My Wallet</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-white">₹</div>
            <div className="flex flex-col justify-between w-6 h-4">
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
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
            My Wallet (Main View)
          </button>
          <button
            onClick={() => setCurrentView('scrollable')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'scrollable'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            My Wallet (Scrollable View)
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-t-[25px] px-4 pt-6 min-h-full">
        {currentView === 'main' ? renderMainView() : renderScrollableView()}
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
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
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

export default MyWallet;
