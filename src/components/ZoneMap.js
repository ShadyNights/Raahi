import React, { useState, useEffect } from 'react';

const ZoneMap = ({ onBack }) => {
  const [searchLocation, setSearchLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [zoneFilter, setZoneFilter] = useState('all');

  // Zone data for different regions of India
  const zones = [
    { name: 'Mumbai', type: 'safe', color: '#4CAF50', coords: { lat: 19.0760, lng: 72.8777 } },
    { name: 'Delhi', type: 'caution', color: '#FF9800', coords: { lat: 28.7041, lng: 77.1025 } },
    { name: 'Kashmir', type: 'high-risk', color: '#F44336', coords: { lat: 34.0837, lng: 74.7973 } },
    { name: 'Kerala', type: 'safe', color: '#4CAF50', coords: { lat: 10.8505, lng: 76.2711 } },
    { name: 'Northeast States', type: 'caution', color: '#FF9800', coords: { lat: 26.2006, lng: 92.9376 } },
  ];

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  // Initialize Google Maps (you'll need to add Google Maps API)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] overflow-hidden">
      
      {/* Header */}
      <div className="bg-white p-4 pt-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">RAHI</h1>
              <p className="text-sm text-gray-600">Secure Journeys, Enriched Experiences</p>
            </div>
          </div>
          
          <button 
            className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            onClick={() => setZoneFilter(zoneFilter === 'all' ? 'safe' : 'all')}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"/>
            </svg>
            Zone Filter
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search Location"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Zone Legend */}
      <div className="px-4 py-2 bg-white border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#4CAF50] rounded"></div>
            <span className="text-xs font-medium text-gray-700">Safe Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FF9800] rounded"></div>
            <span className="text-xs font-medium text-gray-700">Caution Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#F44336] rounded"></div>
            <span className="text-xs font-medium text-gray-700">High-Risk Zone</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-gray-100">
        {/* India Map SVG with Zones */}
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* India Outline */}
          <path
            d="M300 100 C350 80, 400 90, 450 120 L480 150 C500 200, 520 250, 500 300 L480 350 C460 400, 400 450, 350 470 L300 480 C250 460, 200 400, 180 350 L160 300 C150 250, 170 200, 200 150 L250 120 C270 110, 285 105, 300 100 Z"
            fill="#E5E7EB"
            stroke="#9CA3AF"
            strokeWidth="2"
          />

          {/* Safe Zones (Green) */}
          <circle cx="200" cy="350" r="40" fill="#4CAF50" opacity="0.7" />
          <circle cx="180" cy="450" r="35" fill="#4CAF50" opacity="0.7" />
          <circle cx="350" cy="300" r="30" fill="#4CAF50" opacity="0.7" />

          {/* Caution Zones (Orange) */}
          <circle cx="320" cy="180" r="45" fill="#FF9800" opacity="0.7" />
          <circle cx="450" cy="200" r="40" fill="#FF9800" opacity="0.7" />
          <circle cx="250" cy="250" r="35" fill="#FF9800" opacity="0.7" />

          {/* High-Risk Zones (Red) */}
          <circle cx="350" cy="120" r="50" fill="#F44336" opacity="0.7" />
          <circle cx="480" cy="160" r="45" fill="#F44336" opacity="0.7" />

          {/* Current Location Marker */}
          {currentLocation && (
            <g>
              <circle cx="320" cy="250" r="8" fill="#FF6B35" stroke="white" strokeWidth="3" />
              <circle cx="320" cy="250" r="15" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {/* Location Labels */}
          <text x="200" y="340" textAnchor="middle" className="fill-white text-xs font-semibold">Safe Zone</text>
          <text x="320" y="170" textAnchor="middle" className="fill-white text-xs font-semibold">Caution Zone</text>
          <text x="350" y="110" textAnchor="middle" className="fill-white text-xs font-semibold">High-Risk Zone</text>
        </svg>

        {/* Location Markers */}
        <div className="absolute top-20 left-16 bg-white rounded-lg p-2 shadow-lg text-xs">
          <div className="font-semibold text-gray-800">Saur Braiter</div>
        </div>

        <div className="absolute bottom-20 left-20 bg-white rounded-lg p-2 shadow-lg text-xs">
          <div className="font-semibold text-gray-800">Stargmonts</div>
        </div>

        <div className="absolute bottom-16 right-16 bg-white rounded-lg p-2 shadow-lg text-xs">
          <div className="font-semibold text-gray-800">Wlaver</div>
        </div>

        {/* Current Location Info */}
        {currentLocation && (
          <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
              <span className="font-semibold text-sm text-gray-800">Current Location</span>
            </div>
            <p className="text-xs text-gray-600">You are in a Caution Zone</p>
            <p className="text-xs text-gray-500 mt-1">Stay alert and follow safety guidelines</p>
          </div>
        )}
      </div>

      {/* Bottom Info Panel */}
      <div className="bg-white p-4 border-t">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#4CAF50] mb-1">5</div>
            <div className="text-xs text-gray-600">Safe Zones Nearby</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#FF9800] mb-1">3</div>
            <div className="text-xs text-gray-600">Caution Areas</div>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          Real-time safety information • Updated 5 min ago
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] h-[80px] flex justify-around items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Offline Mode</span>
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

export default ZoneMap;
