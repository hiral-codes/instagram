import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataFetcher = ({ onDataFetched, children }) => {
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = Array.from({ length: 10 }, (_, index) =>
          axios.get('https://randomuser.me/api/')
        );
    
        const responses = await Promise.all(requests);
        const fetchedData = responses.map((response) => {
          const user = response.data.results[0];
          return {
            username: `${user.name.first}_${user.name.last}`.toLowerCase(),
            userProfileImageUrl: user.picture.large,
          };
        });
    
        setUserDataArray(fetchedData);
    
        if (onDataFetched) {
          onDataFetched(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching data from RandomUser API:', error.message);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return children(userDataArray); // Render the children component with the fetched data
};

export default UserDataFetcher;
