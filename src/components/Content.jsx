import React from "react";
import Stories from "./Stories";

const Content = () => {
  return (
    <div className="w-full h-screen flex overflow-y-scroll">
      <div className="posts w-2/3 h-full">
        <div className="story-container w-3/4 mx-auto pt-5">
          <Stories />
        </div>
      </div>
      <div className="right">Helo</div>
    </div>
  );
};

export default Content;
