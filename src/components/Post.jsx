import React from "react";
import dotsIcon from "../assets/t-dots.svg";
import likeIcon from "../assets/like.svg";
import commentIcon from "../assets/comment.svg";
import shareIcon from "../assets/share.svg";
import saveIcon from "../assets/save.svg";
function Post() {
  return (
    <>
      <div className="post w-full h-[70vh] px-20">
        <div className="w-full flex items-center justify-between pb-4">
          <div className="userprofile flex items-center gap-2">
            <div className="profile w-10 h-10 bg-white rounded-full">
              <img
                src=""
                alt=""
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <div className="username text-sm font-bold">
              hiral_codes{" "}
              <span className="text-sm opacity-50 font-thin">&bull; 1 h</span>
            </div>
          </div>
          <div>
            <img src={dotsIcon} alt="" />
          </div>
        </div>
        <div className="w-full h-[70vh] border-2 border-[#262626]">
          <img
            src="https://images.unsplash.com/photo-1705779235006-4111cb1a889e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="navbuttons w-full flex items-center justify-between pt-2">
          <div className="left flex items-center gap-4">
            <button>
              <img src={likeIcon} alt="" />
            </button>
            <button>
              <img src={commentIcon} alt="" />
            </button>
            <button>
              <img src={shareIcon} alt="" />
            </button>
          </div>
          <div className="right">
            <img src={saveIcon} alt="" />
          </div>
        </div>
        <div className="likes py-2">6,662 Likes</div>
        <div className="username text-sm font-bold">
          hiral_codes{" "}
          <span className="text-sm  font-thin">
            Caption goes here Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </span>
        </div>
        <div className="text-sm font-thin py-2 opacity-60 cursor-pointer">
          View all 69 comments
        </div>
        <input
          type="text"
          className="text-sm font-thin border-none bg-transparent h-3 outline-none"
          placeholder="Add a comment..."
        />
        <div className="w-full h-[1px] opacity-60 my-2 bg-white"></div>
      </div>
    </>
  );
}

export default Post;
