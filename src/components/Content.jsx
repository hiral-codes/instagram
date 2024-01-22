import React, { useState, useEffect } from 'react';
import Stories from './Stories';
import Post from './Post';
import axios from 'axios';
const Content = () => {
  const [userDataArray, setUserDataArray] = useState([]); // Move state declaration inside the component

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 1; i <= 40; i++) {
          const response = await axios.get('https://randomuser.me/api/');
          const user = response.data.results[0];

          const mappedUserData = {
            username: `${user.name.first}_${user.name.last}`.toLowerCase(),
            userProfileImageUrl: user.picture.large,
          };

          fetchedData.push(mappedUserData);
        }

        setUserDataArray(fetchedData);
      } catch (error) {
        console.error('Error fetching data from RandomUser API:', error.message);
      }
    };

    fetchData();
  }, []);

  const post = [];

  for (let i = 1; i <= 40; i++) {
    post.push({
      postImageUrl: `https://picsum.photos/id/${i * 2}/1080/720`,
    });
  }
  return (
    <div className="w-full h-screen flex overflow-y-scroll">
      <div className="posts w-2/3 h-full">
        <div className="story-container w-3/4 mx-auto pt-5">
          <Stories />
          <div className="postcontainer w-full pt-6">
          {userDataArray.map((userData, index) => (
              <Post
                key={index}
                username={userData.username}
                postImageUrl={post[index].postImageUrl} // Use the correct index for postImageUrl
                userProfileImageUrl={userData.userProfileImageUrl}
              />
            ))}
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
