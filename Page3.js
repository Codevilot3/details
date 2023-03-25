import './index.css';

import React, { useState } from 'react';

function Page3({ userData, setPage }) {
  const [data, setData] = useState(
    userData.split(',').map((item, index) => ({ id: index, value: item }))
  );

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleBack = () => {
    setPage(1);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Your login information is:</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Value</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.value}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Page3;
