import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetTomHollandId = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://actor-movie-api1.p.rapidapi.com/getid/Tom%20Holland',
        params: {apiKey: '62ffac58c57333a136053150eaa1b587'},
        headers: {
          'X-RapidAPI-Key': '58e0749ed9msh97cb1b50b4c3c43p19018bjsnb3c79621f670',
          'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map(eachMovie => (
        <ul key={eachMovie.id}>
          <li>{eachMovie.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default GetTomHollandId;