import React, { useState, useRef, useEffect } from 'react';
import Story from './Story';

const users = [];

for (let i = 1; i <= 40; i++) {
  users.push({
    "username": `user${i}`,
    "url": `https://picsum.photos/id/${i*4}/200/300`
  });
}

// Log the users array
console.log(users);


function Stories() {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false); // Set to false initially

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
      <div
        ref={containerRef}
        className='w-full h-24 bg-black py-4 px-2 sm:px-4 md:px-8 lg:flex space-x-2 overflow-hidden overflow-x-scroll flex-nowrap relative'
      >
        {/* Assuming 'users' is defined elsewhere */}
        {users.map((user, index) => (
          <Story key={index} username={user.username} url={user.url} />
        ))}
      </div>
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
