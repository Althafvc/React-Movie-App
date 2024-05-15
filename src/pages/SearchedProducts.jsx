import React, { useEffect, useState } from 'react';
import Moviecard from '../components/Moviecard';
import { useMovieContext } from '../Context/Moviecontext';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

function SearchedProducts() {
  const [searchResults, setSearchResults] = useState(null);
  const [aptMovie, setAptMovie] = useState(null);
  const { newmovies, setNewMovie } = useMovieContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get('data');

  useEffect(() => {
    if (data && newmovies) {
      setSearchResults(data);

      const foundMovie = newmovies.find(movie => movie.moviename.toLowerCase().includes(data.toLowerCase()));

      if (foundMovie) {
        setAptMovie(foundMovie);
      }
    }
  }, [data, newmovies]);

  return (
    <>
      <Navbar />
      {aptMovie && (
        <div className='mt-10 ml-10'>
                  <Moviecard name={aptMovie.moviename} id={aptMovie.id} image={aptMovie.image} rating={4.5} style={{marginTop: '100px'}} />

        </div>
      )}
    </>
  );
}

export default SearchedProducts;
