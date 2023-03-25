import './index.css';
import React, { useState } from 'react';

function Page2({ setPage }) {
  const [otpValue, setOtpValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setOtpValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpValue !== '9999') {
      setError('Incorrect OTP, please try again');
    } else {
      // Move to the next page
      setPage(3);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        OTP:
        <input
          type="text"
          value={otpValue}
          onChange={handleInputChange}
          maxLength={4}
        />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit">Continue</button>
    </form>
  );
}

export default Page2;
