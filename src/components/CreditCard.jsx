import React from 'react';
import { motion } from 'framer-motion';
import visaLogo from '../assets/visa-logo.png';
import chipImage from '../assets/chip.png';
import logoCi from '../assets/logo-ci.png';

const CreditCard = ({ cardDetails, isCVVFocused }) => {
  // Fonction pour formater la date d'expiration
  const formatExpiry = (expiry) => {
    if (!expiry) return 'MM/YY';
    if (expiry.includes('/')) return expiry;
    if (expiry.length === 4) return `${expiry.slice(0, 2)}/${expiry.slice(2)}`;
    if (expiry.length === 2) return `${expiry}/XX`;
    return `${expiry.slice(0, 2)}/${expiry.slice(2, 4)}`;
  };

  return (
    <div className="relative w-full max-w-[380px] h-[220px] mx-auto perspective-1000">
      <motion.div 
        className="w-full h-full transition-transform duration-500 transform-style-preserve-3d"
        animate={{ rotateY: isCVVFocused ? 180 : 0 }}
      >
        {/* Face avant de la carte */}
        <motion.div 
          className="absolute w-full h-full backface-hidden"
          initial={false}
          animate={{ opacity: isCVVFocused ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-2xl p-6 text-white">
            <img src={visaLogo} alt="Visa Logo" className="absolute top-4 right-6 w-14" />
            <img src={logoCi} alt="CI Logo" className="absolute top-4 left-4 w-20" />
            <img src={chipImage} alt="Chip" className="absolute top-16 left-6 w-12" />
            <div className="text-xl mt-24 mb-4 font-mono">
              {cardDetails.number || '•••• •••• •••• ••••'}
            </div>
            <div className="flex justify-between items-end mt-4">
              <div className="text-xs uppercase">
                <div className="mb-1">Card Holder</div>
                <div className="font-medium">
                  {cardDetails.name || 'FULL NAME'}
                </div>
              </div>
              <div className="text-xs uppercase">
                <div className="mb-1">Expires</div>
                <div className="font-medium">
                  {formatExpiry(cardDetails.expiry)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Face arrière de la carte */}
        <motion.div 
          className="absolute w-full h-full backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
          initial={false}
          animate={{ opacity: isCVVFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-2xl p-6">
            <div className="w-full h-10 bg-black mt-4"></div>
            <div className="mt-6 px-4">
              <div className="bg-white h-8 flex items-center justify-end pr-4">
                <div className="text-black font-mono">{cardDetails.cvv || ''}</div>
              </div>
              <div className="text-xs text-gray-600 mt-2">CVV</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreditCard;