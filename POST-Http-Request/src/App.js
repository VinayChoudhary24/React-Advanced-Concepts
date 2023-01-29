import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // The URL from Firebase RealTime DB
      // W
      const response = await fetch('https://react-http-project-4aa13-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      // get the Data From FIREBASE DB
      // FB random id's are the Keys
      const storedMovies = [];
      for (const key in data) {
        storedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
      setMovies(storedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  //## This is the POST http requests
  async function addMovieHandler(movie) {
    // Store the Http in Response
    const response = await fetch('https://react-http-project-4aa13-default-rtdb.firebaseio.com/movies.json', {
      // Specify the POST method
      method: 'POST',
      // Creating the RESOURCE
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    });
    // Tranform the Data
    const data = await response.json();
    // console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
