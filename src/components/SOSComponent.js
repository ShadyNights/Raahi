import React, { useState, useEffect } from 'react';

const SOSComponent = ({ onBack }) => {
  const [holdTimer, setHoldTimer] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [sosActivated, setSosActivated] = useState(false);
  const [emergencyContacts] = useState([
    { name: 'Family', number: '+91 xxxx', status: 'sent' },
    { name: 'Embassy', number: 'USA Consulate', status: 'sent' },
    { name: 'Local Police', number: 'Karol Bagh PS', status: 'sent' }
  ]);

  useEffect(() => {
    let interval;
    if (isHolding && holdTimer < 3) {
      interval = setInterval(() => {
        setHoldTimer(prev => {
          if (prev >= 2.9) {
            setSosActivated(true);
            setIsHolding(false);
            return 3;
          }
          return prev + 0.1;
        });
      }, 100);
    } else if (!isHolding && holdTimer > 0) {
      setHoldTimer(0);
    }

    return () => clearInterval(interval);
  }, [isHolding, holdTimer]);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  if (sosActivated) {
    return (
      <div className="h-full bg-gradient-to-b from-[#FF4444] to-[#CC2222] text-white overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FF4444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg">RAAHI</span>
          </div>
          <div className="flex flex-col justify-between w-6 h-4">
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
          </div>
        </div>

        {/* Emergency Alert Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-white mb-2">EMERGENCY ALERT SENT</h1>
        </div>

        {/* Notification Section */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span className="text-white font-semibold">Notifying Contacts & Authorities</span>
            </div>

            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">{contact.name}: {contact.number}</span>
                </div>
                <span className="text-green-400 text-xs">sent</span>
              </div>
            ))}
          </div>

          {/* Call Ambulance Button */}
          <div className="bg-green-600 rounded-lg p-4 flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            <span className="text-white font-semibold">CALL LOCAL AMBULANCE</span>
          </div>

          {/* Pre-typed Messages */}
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <h3 className="text-white font-semibold mb-3">Pre-Typed Messages</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <span className="text-white text-sm">Help, I'm at [User] Location!</span>
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center ml-auto">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <span className="text-white text-sm">Medical Emergency - Send help!</span>
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center ml-auto">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
            <span className="text-gray-600">Location Map</span>
          </div>
        </div>

        {/* Bottom Navigation */}
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
            <span className="text-white font-bold">SOS</span>
          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
            </svg>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-[#FF6B35] to-[#FF4500] text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg">RAAHI</span>
        </div>
        <div className="flex flex-col justify-between w-6 h-4">
          <div className="w-full h-[2px] bg-white rounded-full"></div>
          <div className="w-full h-[2px] bg-white rounded-full"></div>
          <div className="w-full h-[2px] bg-white rounded-full"></div>
        </div>
      </div>

      {/* SOS Title */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-white mb-2">SOS - Trigger Emergency</h1>
      </div>

      {/* Hold Button */}
      <div className="flex flex-col items-center py-12">
        <div 
          className="relative w-48 h-48 rounded-full bg-gradient-to-b from-[#FF0000] to-[#CC0000] flex flex-col items-center justify-center shadow-2xl cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {/* Pulse rings */}
          <div className="absolute w-56 h-56 border-4 border-white/30 rounded-full animate-ping"></div>
          <div className="absolute w-64 h-64 border-4 border-white/20 rounded-full animate-ping animation-delay-500"></div>
          
          {/* Bell icon */}
          <svg className="w-12 h-12 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
          
          {/* Hold text */}
          <div className="text-white text-center">
            <div className="text-2xl font-bold">HOLD FOR</div>
            <div className="text-2xl font-bold">{Math.ceil(3 - holdTimer)} SEC</div>
          </div>

          {/* Progress ring */}
          <svg className="absolute w-48 h-48 transform -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
            <circle 
              cx="24" 
              cy="24" 
              r="22" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray={`${(holdTimer/3) * 138.2} 138.2`} 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 space-y-4">
        <button className="w-full bg-[#4FC3F7] rounded-lg p-4 flex items-center justify-center gap-3 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-white font-semibold">Send "I need help, here is my location"</span>
        </button>

        <button className="w-full bg-[#FF5252] rounded-lg p-4 flex items-center justify-center gap-3 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
          </svg>
          <span className="text-white font-semibold">Medical Emergency - Call Ambulance</span>
        </button>
      </div>

      {/* Bottom Navigation */}
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
          <span className="text-white font-bold">SOS</span>
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

export default SOSComponent;
