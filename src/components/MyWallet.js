// src/components/MyWallet.js - Fixed unused variable
import React, { useState } from 'react';

const MyWallet = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'documents'
  // Removed setDocuments and made documents read-only to fix ESLint error
  const documents = [ // Changed from const [documents, setDocuments] = useState([
    {
      id: 1,
      type: 'passport',
      title: 'Passport',
      subtitle: '5 entities',
      icon: '🛂',
      status: 'verified',
      color: 'from-blue-500 to-blue-600',
      details: {
        number: 'A12345678',
        expiry: '2030-12-31',
        country: 'India'
      }
    },
    {
      id: 2,
      type: 'aadhar',
      title: 'Aadhar Card',
      subtitle: '5 entities',
      icon: '🆔',
      status: 'verified',
      color: 'from-green-500 to-green-600',
      details: {
        number: 'XXXX-XXXX-1234',
        name: 'John Doe'
      }
    },
    {
      id: 3,
      type: 'visa',
      title: 'Visa',
      subtitle: '5 entities',
      icon: '📋',
      status: 'pending',
      color: 'from-orange-500 to-orange-600',
      details: {
        type: 'Tourist Visa',
        country: 'USA',
        validity: '2025-06-30'
      }
    },
    {
      id: 4,
      type: 'insurance',
      title: 'Travel Insurance',
      subtitle: '5 entities',
      icon: '🛡️',
      status: 'verified',
      color: 'from-teal-500 to-teal-600',
      details: {
        policy: 'TI-123456',
        coverage: '$100,000',
        expiry: '2025-12-31'
      }
    },
    {
      id: 5,
      type: 'flight',
      title: 'Flight Insurance',
      subtitle: '5 entities',
      icon: '✈️',
      status: 'verified',
      color: 'from-purple-500 to-purple-600',
      details: {
        flight: 'AI-101',
        date: '2025-01-15',
        coverage: '$50,000'
      }
    },
    {
      id: 6,
      type: 'tickets',
      title: 'Flight Tickets',
      subtitle: '5 entities',
      icon: '🎫',
      status: 'verified',
      color: 'from-indigo-500 to-indigo-600',
      details: {
        from: 'Delhi (DEL)',
        to: 'Mumbai (BOM)',
        date: '2025-01-15'
      }
    },
    {
      id: 7,
      type: 'hotel',
      title: 'Hotel Bookings',
      subtitle: '5 entities',
      icon: '🏨',
      status: 'verified',
      color: 'from-pink-500 to-pink-600',
      details: {
        hotel: 'Taj Hotel',
        checkin: '2025-01-15',
        checkout: '2025-01-20'
      }
    },
    {
      id: 8,
      type: 'other',
      title: 'Other Documents',
      subtitle: '5 entities',
      icon: '📄',
      status: 'pending',
      color: 'from-gray-500 to-gray-600',
      details: {
        count: '12 documents',
        type: 'Various'
      }
    }
  ];

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddDocument = () => {
    setShowAddForm(true);
  };

  const handleViewDocument = (doc) => {
    setSelectedDocument(doc);
  };

  // Rest of the component remains the same...
  const renderMainView = () => (
    <div className="pb-24">
      {/* Important Documents Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Important Documents</h2>
        
        {/* Primary Documents */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {documents.slice(0, 4).map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {doc.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{doc.title}</h3>
                  <p className="text-sm text-gray-600">{doc.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => handleViewDocument(doc)}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Document Button */}
      <div className="mb-6">
        <button 
          onClick={handleAddDocument}
          className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span className="font-semibold">Add New Document</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{documents.filter(d => d.status === 'verified').length}</div>
          <p className="text-sm font-medium text-gray-700">Verified</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">{documents.filter(d => d.status === 'pending').length}</div>
          <p className="text-sm font-medium text-gray-700">Pending</p>
        </div>
      </div>
    </div>
  );

  const renderDocumentsView = () => (
    <div className="pb-24">
      {/* All Documents Grid */}
      <div className="grid grid-cols-1 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {doc.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{doc.title}</h3>
                <p className="text-sm text-gray-600">{doc.subtitle}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${doc.status === 'verified' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                  <span className={`text-xs font-medium ${doc.status === 'verified' ? 'text-green-600' : 'text-orange-600'}`}>
                    {doc.status === 'verified' ? 'Verified' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleViewDocument(doc)}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-200 transition-colors"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Add Document Button */}
      <div className="mt-6">
        <button 
          onClick={handleAddDocument}
          className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <span className="font-semibold">Add New Document</span>
        </button>
      </div>
    </div>
  );

  const renderDocumentViewer = () => (
    <div className="pb-24">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${selectedDocument.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
            {selectedDocument.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{selectedDocument.title}</h2>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${selectedDocument.status === 'verified' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
              <span className={`font-medium ${selectedDocument.status === 'verified' ? 'text-green-600' : 'text-orange-600'}`}>
                {selectedDocument.status === 'verified' ? 'Verified' : 'Pending Verification'}
              </span>
            </div>
          </div>
        </div>

        {/* Document Details */}
        <div className="space-y-4">
          {Object.entries(selectedDocument.details).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600 capitalize">{key}:</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-blue-100 text-blue-800 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
            Download
          </button>
          <button className="flex-1 bg-green-100 text-green-800 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );

  const renderAddForm = () => (
    <div className="pb-24">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Document</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Select document type</option>
              <option>Passport</option>
              <option>Visa</option>
              <option>Driving License</option>
              <option>Insurance</option>
              <option>Tickets</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
            <input 
              type="text" 
              placeholder="Enter document name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <p className="text-gray-600">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={() => setShowAddForm(false)}
              className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Add Document
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] p-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if (selectedDocument) setSelectedDocument(null);
                else if (showAddForm) setShowAddForm(false);
                else onBack();
              }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div className="text-white">
              <h1 className="font-bold text-lg">My Wallet</h1>
              <p className="text-white/80 text-sm">Secure document storage</p>
            </div>
          </div>
        </div>

        {/* View Toggle - Only show when not viewing document or add form */}
        {!selectedDocument && !showAddForm && (
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('main')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'main'
                  ? 'bg-white/25 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Main View
            </button>
            <button
              onClick={() => setCurrentView('documents')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'documents'
                  ? 'bg-white/25 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              All Documents
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {showAddForm ? renderAddForm() : 
         selectedDocument ? renderDocumentViewer() :
         currentView === 'main' ? renderMainView() : renderDocumentsView()}
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
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default MyWallet;
