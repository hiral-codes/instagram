import React from "react";
import Stories from "./Stories";
import Post from "./Post";

const Content = () => {
  return (
    <div className="w-full h-screen flex overflow-y-scroll">
      <div className="posts w-2/3 h-full">
        <div className="story-container w-3/4 mx-auto pt-5">
          <Stories />
          <div className="postcontainer w-full pt-6">
            <Post/>
          </div>
        </div>
      </div>
      <div className="right pt-12 w-full pr-40">
        <ul className="flex items-center justify-between w-full">
          <li className="flex items-center gap-2">
            <div className="userprofile w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-sm font-semibold">hiral_codes</p>
              <p className="text-sm opacity-80 font-light">Hiral Patel</p>
            </div>
          </li>
          <li className="text-sm text-[#0069ae]">Switch</li>
        </ul>

        <ul className="flex items-center justify-between w-full py-8">
          <li className="flex items-center gap-2">
            <div className="text-sm opacity-80">Suggested for you</div>
          </li>
          <li className="text-sm text-white">See All</li>
        </ul>

        <ul className="flex items-center justify-between w-full py-4">
          <li className="flex items-center gap-2">
            <div className="userprofile w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-[14px] font-semibold">hiral_codes</p>
              <p className="text-xs opacity-80 font-light">New to instagram</p>
            </div>
          </li>
          <li className="text-sm text-[#0069ae]">Follow</li>
        </ul>

        <ul className="flex items-center justify-between w-full py-4">
          <li className="flex items-center gap-2">
            <div className="userprofile w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-[14px] font-semibold">hiral_codes</p>
              <p className="text-xs opacity-80 font-light">New to instagram</p>
            </div>
          </li>
          <li className="text-sm text-[#0069ae]">Follow</li>
        </ul>

        <ul className="flex items-center justify-between w-full py-4">
          <li className="flex items-center gap-2">
            <div className="userprofile w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-[14px] font-semibold">hiral_codes</p>
              <p className="text-xs opacity-80 font-light">New to instagram</p>
            </div>
          </li>
          <li className="text-sm text-[#0069ae]">Follow</li>
        </ul>

        <ul className="flex items-center justify-between w-full py-4">
          <li className="flex items-center gap-2">
            <div className="userprofile w-10 h-10 rounded-full bg-white"></div>
            <div>
              <p className="text-[14px] font-semibold">hiral_codes</p>
              <p className="text-xs opacity-80 font-light">New to instagram</p>
            </div>
          </li>
          <li className="text-sm text-[#0069ae]">Follow</li>
        </ul>
        {/* Footer */}
        <div className="footer opacity-50 py-4">
          <div className="text-xs">
            About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull;
            Locations &bull; Language &bull; Meta Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
