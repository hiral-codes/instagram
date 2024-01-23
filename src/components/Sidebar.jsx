import React from "react";
import igLogo from "../assets/logo.svg";
import homeLogo from "../assets/home.svg";
import searchLogo from "../assets/search.svg";
import reelsLogo from "../assets/reels.svg";
import messageLogo from "../assets/dm.svg";
import notificationLogo from "../assets/notifications.svg";
import threadsLogo from "../assets/threads.svg";
import moreLogo from "../assets/more.svg";
import exploreLogo from "../assets/explore.svg";
import createLogo from "../assets/create.svg";
function Sidebar() {
  return (
    <>
      <div className="sidebar h-screen w-80 border-r border-[#262626]">
        <div className="logo h-24 px-6 py-9">
          <img
            src={igLogo}
            alt="Logo"
            className="hover:transform hover:scale-105 transition-all ease-in"
          />
        </div>
        <div className="menu height w-full flex flex-col justify-between">
          <ul className="menu mt-3 flex px-3 flex-col gap-4">
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={homeLogo} alt="" />
              </div>
              <div className="navItem font-extrabold text-[16px] leading-6">
                Home
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={searchLogo} alt="" />
              </div>
              <div className="navItem text-[16px] leading-6 font-light">
                Search
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={exploreLogo} alt="" />
              </div>
              <div className="navItem text-[16px] leading-6 font-light">
                Explore
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={reelsLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                Reels
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={messageLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                Messages
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={notificationLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                Notifications
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon">
                <img src={createLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                Create
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 cursor-pointer hover:bg-[#1A1A1A] py-2 rounded-md">
              <div className="--menuicon profile rounded-full bg-white h-6 w-6"></div>
              <div className="navItem font-light text-[16px] leading-6">
                Profile
              </div>
            </li>
          </ul>

          <ul className="flex flex-col px-3 gap-4 mb-10">
            <li className="flex gap-3 items-center px-3 hover:bg-[#1A1A1A] py-2 rounded-md cursor-pointer">
              <div className="--menuicon">
                <img src={threadsLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                Threads
              </div>
            </li>
            <li className="flex gap-3 items-center px-3 hover:bg-[#1A1A1A] py-2 rounded-md cursor-pointer">
              <div className="--menuicon">
                <img src={moreLogo} alt="" />
              </div>
              <div className="navItem font-light text-[16px] leading-6">
                More
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-m fixed bottom-0 left-0 right-0 h-16 flex items-center justify-evenly w-full z-10 bg-black md:hidden lg:hidden">
        <button><img className="w-10" src={homeLogo} alt="" /></button>
        <button><img className="w-10" src={searchLogo} alt="" /></button>
        <button><img className="w-10" src={createLogo} alt="" /></button>
        <button><img className="w-10" src={reelsLogo} alt="" /></button>
        <button className="w-10 h-10 rounded-full bg-white"></button>
      </div>
    </>
  );
}

export default Sidebar;
