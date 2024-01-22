import React from "react";

const Story = ({ username, url }) => {
  const truncatedUsername =
    username.length >= 9 ? username.slice(0, 9) + "..." : username;

  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="storybg bg-gradient-to-tr from-pink-500 to-purple-500  p-[3px] rounded-full flex-shrink-0 overflow-hidden">
          <div className="story w-14 h-14 rounded-full bg-black flex-shrink-0 p-[2px]">
            <img
              src={url}
              alt=""
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
        </div>
        <p className="text-xs">{truncatedUsername}</p>
      </div>
    </>
  );
};

export default Story;
