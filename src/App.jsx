import React, { useState } from 'react';
import CreditCard from './components/CreditCard';
import CardForm from './components/CardForm';

function App() {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  
  const [isCVVFocused, setIsCVVFocused] = useState(false);

  const handleInputChange = (name, value) => {
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (name) => {
    setIsCVVFocused(name === 'cvv');
  };

  const handleInputBlur = () => {
    setIsCVVFocused(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-0">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">TourCI Pay (VISA Card)</h1>
        <p className="text-center text-gray-600 mb-6 sm:mb-8">
          Secure and easy payment for your TourCI adventures
        </p>
        <CreditCard cardDetails={cardDetails} isCVVFocused={isCVVFocused} />
        <CardForm 
          onInputChange={handleInputChange} 
          onInputFocus={handleInputFocus}
          onInputBlur={handleInputBlur}
          cardDetails={cardDetails} 
        />
      </div>
    </div>
  );
}

export default App;