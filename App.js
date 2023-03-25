import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState('');

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Page1 setPage={setPage} setUserData={setUserData} />;
      case 2:
        return <Page2 setPage={setPage} userData={userData} />;
      case 3:
        return <Page3 userData={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
