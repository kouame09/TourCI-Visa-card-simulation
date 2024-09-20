export const validateCardNumber = (number) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(number.replace(/\s/g, ''));
  };
  
  export const validateExpiry = (expiry) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return regex.test(expiry);
  };
  
  export const validateCVV = (cvv) => {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
  };