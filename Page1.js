import React, { useState } from 'react';

function Page1({ setPage, setUserData }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(inputValue) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setError('Invalid input format');
    } else {
      // Set the user data
      setUserData(inputValue);
      // Move to the next page
      setPage(2);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mobile Number/Email:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={50}
        />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Continue</button>
    </form>
  );
}

export default Page1;
