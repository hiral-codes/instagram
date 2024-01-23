import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        // Render a preloader while data is being fetched
        <div className="preloader w-screen h-screen flex items-center justify-center">
          <div className='text-center'>
          <div><h1 className='text-2xl'>Loading...</h1></div>
          <p className='opacity-60 text-xs'><i>Fetching Data From Random User API</i></p>
          </div>
          </div>
      ) : (
        // Render the content when data has been fetched
        <div className="flex">
          <Sidebar />
          <Content />
        </div>
      )}
    </>
  );
}

export default App;
