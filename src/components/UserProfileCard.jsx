// UserProfileCard.js

import React from 'react';

const UserProfileCard = ({ username, fullName, imageUrl }) => {
  return (
    <ul className="flex items-center justify-between w-full py-4">
      <li className="flex items-center gap-2">
        <div className="userprofile w-10 h-10 rounded-full bg-white">
            <img src={imageUrl} alt="" className='rounded-full w-full h-full object-cover' />
        </div>
        <div>
          <p className="text-[14px] font-semibold">{username || "hiral_codes"}</p>
          <p className="text-xs opacity-80 font-light">New to Instagram</p>
        </div>
      </li>
      <li className='text-sm text-[#0069ae] cursor-pointer hover:text-white'>
        Follow
      </li>
    </ul>
  );
};

export default UserProfileCard;
