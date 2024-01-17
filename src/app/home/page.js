"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NetflixData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://netflix-data.p.rapidapi.com/search/',
        params: {
          query: 'stranger',
          offset: '0',
          limit_titles: '50',
          limit_suggestions: '20'
        },
        headers: {
          'X-RapidAPI-Key': '5e1a20f27amshba707c8a3f114a4p175e51jsnde4c3ac75b02',
          'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data.titles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div>
      <h1>Netflix Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((title) => (
            <div key={title.id}>
              <h2>{title.title}</h2>
              <img src={title.logoImage.url} alt={title.title} />
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default NetflixData;
