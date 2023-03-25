import './index.css';
import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState('');

  const handleUserData = (data) => {
    setUserData(data);
    setPage(2);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      {page === 1 && <Page1 setPage={handlePageChange} handleUserData={handleUserData} />}
      {page === 2 && <Page2 setPage={handlePageChange} />}
      {page === 3 && <Page3 userData={userData} setPage={handlePageChange} />}
    </div>
  );
}

export default App;
