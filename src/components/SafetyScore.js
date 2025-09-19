import React, { useState } from 'react';

const SafetyScore = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('overview'); // 'overview' or 'history'
  
  const scoreHistory = [
    { date: 'Jul 10 (80%)', score: 80, x: 30, y: 70 },
    { date: 'Aug 24 (90%)', score: 90, x: 150, y: 30 },
    { date: 'Aug 1 (85%)', score: 85, x: 270, y: 20 },
  ];

  const activityLog = [
    { 
      type: 'positive', 
      text: 'Completed Safety Tutorial', 
      change: '+10%',
      icon: '✓'
    },
    { 
      type: 'negative', 
      text: 'Entered High-Risk Zone', 
      change: '-5%',
      icon: '⚠️'
    },
    { 
      type: 'positive', 
      text: 'Completed Safety Tutorial', 
      change: '+10%',
      icon: '✓'
    },
  ];

  const renderOverview = () => (
    <div className="pb-24">
      {/* Safety Score Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
            <circle 
              cx="24" 
              cy="24" 
              r="20" 
              stroke="#E5E7EB" 
              strokeWidth="4" 
              fill="none"
            />
            <circle 
              cx="24" 
              cy="24" 
              r="20" 
              stroke="url(#safetyGradient)" 
              strokeWidth="4" 
              fill="none"
              strokeDasharray={`${85 * 1.25} ${100 * 1.25}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="safetyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8F00"/>
                <stop offset="50%" stopColor="#FF6B35"/>
                <stop offset="100%" stopColor="#FF4500"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-gray-800 mb-2">85%</span>
            <span className="text-gray-600 font-medium">Safety Score</span>
          </div>
        </div>
      </div>

      {/* Score Status */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Your score is high!</h2>
        <p className="text-gray-600">Keep up safe habits.</p>
      </div>

      {/* Safe Traveler Level */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-green-800">Safe Traveler Level</h3>
          <p className="text-sm text-green-600">Excellent safety practices maintained</p>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Tips to Improve Score</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">🎯 Complete Safety Training</h4>
          <p className="text-sm text-blue-700">Finish all safety modules to boost your score by 15%</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h4 className="font-semibold text-orange-800 mb-2">📱 Enable All Notifications</h4>
          <p className="text-sm text-orange-700">Stay updated with safety alerts and zone changes</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">🤝 Connect Emergency Contacts</h4>
          <p className="text-sm text-green-700">Add at least 3 emergency contacts for better safety</p>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="pb-24">
      {/* Score History Chart */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Score History</h3>
        <div className="relative h-32">
          {/* Chart using scoreHistory data */}
          <svg className="w-full h-full" viewBox="0 0 300 100">
            <polyline
              points={scoreHistory.map(point => `${point.x},${point.y}`).join(' ')}
              stroke="#FF6B35"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Data points */}
            {scoreHistory.map((point, index) => (
              <circle key={index} cx={point.x} cy={point.y} r="4" fill="#FF6B35"/>
            ))}
          </svg>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>90%</span>
            <span>75%</span>
            <span>60%</span>
            <span>0</span>
          </div>
          
          {/* X-axis labels using scoreHistory */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 mt-2">
            {scoreHistory.map((point, index) => (
              <span key={index}>{point.date}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Activity Log</h3>
        <div className="space-y-3">
          {activityLog.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  activity.type === 'positive' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {activity.icon}
                </div>
                <span className="text-gray-800">{activity.text}</span>
              </div>
              <span className={`text-sm font-semibold ${
                activity.type === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {activity.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800 mb-4">Score Breakdown</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Safety Training Completed</span>
            <span className="font-semibold text-green-600">+25 points</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Emergency Contacts Added</span>
            <span className="font-semibold text-green-600">+20 points</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Safe Zone Visits</span>
            <span className="font-semibold text-green-600">+15 points</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-700">High-Risk Zone Entries</span>
            <span className="font-semibold text-red-600">-10 points</span>
          </div>
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
            </div>
          </div>
          <div className="flex flex-col justify-between w-6 h-4">
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('overview')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'overview'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Safety Score (Overview)
          </button>
          <button
            onClick={() => setCurrentView('history')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'history'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Score History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-orange-50 to-white rounded-t-[25px] px-6 pt-8 min-h-full">
        {currentView === 'overview' ? renderOverview() : renderHistory()}
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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

export default SafetyScore;
