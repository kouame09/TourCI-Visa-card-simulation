import React from 'react';
import FormInput from './FormInput';

const CardForm = ({ onInputChange, onInputFocus, onInputBlur, cardDetails }) => {
  return (
    <form className="w-full max-w-lg mt-6">
      <FormInput
        label="Card Number"
        name="number"
        value={cardDetails.number}
        onChange={onInputChange}
        placeholder="1234 5678 9012 3456"
        maxLength={19}
      />
      <FormInput
        label="Cardholder Name"
        name="name"
        value={cardDetails.name}
        onChange={onInputChange}
        placeholder="Prince Kouamé"
      />
      <div className="flex gap-4">
        <FormInput
          label="Expiry Date"
          name="expiry"
          value={cardDetails.expiry}
          onChange={onInputChange}
          placeholder="MM/YY"
          maxLength={4}
        />
        <FormInput
          label="CVV"
          name="cvv"
          value={cardDetails.cvv}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          placeholder="123"
          maxLength={3}
          type="password"
        />
      </div>
    </form>
  );
};

export default CardForm;