import React from "react";

const Story = ({ username, url }) => {
  const truncatedUsername =
    username.length >= 9 ? username.slice(0, 9) + "..." : username;

  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="storybg bg-gradient-to-b from-[#DE00AE] via-[#F38D00] to-[#E09000]  p-[2.5px] rounded-full flex-shrink-0 overflow-hidden">
          <div className="story w-16 h-16 rounded-full bg-black flex-shrink-0 p-[2px]">
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
