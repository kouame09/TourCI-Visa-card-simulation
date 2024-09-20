import React from 'react';

const FormInput = ({ label, name, value, onChange, onFocus, onBlur, placeholder, maxLength, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => onFocus && onFocus(name)}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </div>
  );
};

export default FormInput;