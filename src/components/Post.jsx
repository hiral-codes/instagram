import React from "react";
import dotsIcon from "../assets/t-dots.svg";
import likeIcon from "../assets/like.svg";
import commentIcon from "../assets/comment.svg";
import shareIcon from "../assets/share.svg";
import saveIcon from "../assets/save.svg";
function Post({ userProfileImageUrl, postImageUrl, username }) {
  return (
    <>
      <div className="post w-full px-20">
        <div className="w-full flex items-center justify-between pb-4">
          <div className="userprofile flex items-center gap-2">
            <div className="profile w-10 h-10 rounded-full">
              <img
                src={userProfileImageUrl}
                alt=""
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <div className="username text-sm font-bold">
              {username || "hiral_codes "}
              <span className="text-sm opacity-50 font-thin">&nbsp;&bull; 1 h</span>
            </div>
          </div>
          <div>
            <img src={dotsIcon} alt="" />
          </div>
        </div>
        <div className="w-full h-[70vh] border-[1px] border-[#262626] rounded-md overflow-hidden">
          <img
            src={postImageUrl}
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
          {username || "hiral_codes "} 
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
        <div className="w-full h-[1px] my-10 bg-[#262626]"></div>
      </div>
    </>
  );
}

export default Post;
