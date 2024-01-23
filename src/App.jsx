import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import igLogo from '../public/instalogo.png'
import UserDataFetcher from './components/UserDataFetcher';

function App() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  const handleDataFetched = (data) => {
    setUserData(data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        // Loader component while data is being fetched
        <div className="loader-container">
          <div className="">
            <img src={igLogo} alt="" className='w-20 mix-blend-screen'/>
          </div>
        </div>
      ) : (
        // Render your main content once loading is complete
        <div className="flex">
          <Sidebar />
          <Content userData={userData} />
        </div>
      )}
    </>
  );
}

export default App;
