import React, { useState } from 'react';

function Page1({ setPage, handleUserData }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePhone = (phone) => {
    // Phone number validation regex pattern
    const pattern = /^[0-9]{10}$/;
    return pattern.test(phone);
  };

  const handleNext = () => {
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }
    if (isValid) {
      handleUserData(`${email},${phone}`);
      setPage(2);
    }
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <div className="error">{emailError}</div>}
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        {phoneError && <div className="error">{phoneError}</div>}
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Page1;
