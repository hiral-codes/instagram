// Stories.js

import React, { useState, useRef, useEffect } from 'react';
import Story from './Story';
import UserDataFetcher from './UserDataFetcher'; // Import UserDataFetcher component

function Stories() {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScrollLeft = container.scrollLeft;

      setScrollLeft(currentScrollLeft);
      setShowLeftButton(currentScrollLeft > 0);
      setShowRightButton(currentScrollLeft < maxScrollLeft);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLeftButtonClick = () => {
    const newScrollLeft = scrollLeft - 100;
    containerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  const handleRightButtonClick = () => {
    const newScrollLeft = scrollLeft + 100;
    containerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <div className='relative'>
      {/* Use UserDataFetcher and provide a render prop for rendering the fetched data */}
      <UserDataFetcher>
        {(userDataArray) => (
          <div
            ref={containerRef}
            className='w-full h-24 bg-black py-4 px-2 flex space-x-2 overflow-hidden overflow-x-scroll flex-nowrap relative'
          >
            {/* Render Story components using the fetched data */}
            {userDataArray.map((user, index) => (
              <Story key={index} username={user.username} url={user.userProfileImageUrl} />
            ))}
          </div>
        )}
      </UserDataFetcher>

      {showLeftButton && (
        <button
          className='absolute top-0 left-0 h-full bg-none px-2 text-white'
          onClick={handleLeftButtonClick}
        >
          <span className='w-6 h-6 white flex items-center justify-center rounded-full mb-3 text-black'>&lt;</span>
        </button>
      )}
      {showRightButton && (
        <button
          className='absolute top-0 right-0 h-full bg-none px-2 text-white'
          onClick={handleRightButtonClick}
        >
          <span className='w-6 h-6 mb-3 white flex items-center justify-center rounded-full text-black'>&gt;</span>
        </button>
      )}
    </div>
  );
}

export default Stories;
