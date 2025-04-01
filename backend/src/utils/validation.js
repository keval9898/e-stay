const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
  
  const isCardNumberValid = (cardNumber) => {
    return /^[0-9]{16}$/.test(cardNumber);
  };
  
  module.exports = { isEmailValid, isPasswordValid, isCardNumberValid };
  