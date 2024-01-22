// UserDataFetcher.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataFetcher = ({ onDataFetched, children }) => {
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 1; i <= 10; i++) {
          const response = await axios.get('https://randomuser.me/api/');
          const user = response.data.results[0];

          const mappedUserData = {
            username: `${user.name.first}_${user.name.last}`.toLowerCase(),
            userProfileImageUrl: user.picture.large,
          };

          fetchedData.push(mappedUserData);
        }

        setUserDataArray(fetchedData);

        // Pass the fetched data to the parent component
        if (onDataFetched) {
          onDataFetched(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching data from RandomUser API:', error.message);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return children(userDataArray); // Render the children component with the fetched data
};

export default UserDataFetcher;
