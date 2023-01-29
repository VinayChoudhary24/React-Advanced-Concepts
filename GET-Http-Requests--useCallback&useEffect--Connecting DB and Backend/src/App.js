import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import LoadindSpinner from './components/Loading-Spinner/LoadindSpinner';

function App() {
  // Store Movie Data i.e State
  const [movies, setMovies] = useState([]);

  // To Store the State of Loading Spinner
  const [isLoading, setIsLoading] = useState(false);
  
  // To Store the Errors State
  const [error, setError] = useState(null);

  // Store the FetchFn inside useCallback to pass the Dependency in useEffect
  // Create a Function for Http GEt Requets -- Using Asych and Await
  // make Function Async
  const fetchMoviesHandler = useCallback( async () => {
    // To Start the Loading Spinner before Fetching
    setIsLoading(true);

    // Clear PreviousErrors
    setError(null);

    // Using Try{} & catch{} to hadle Errors
    try{
      // https://swapi.py4e.com/api/ -This isthe BASE_URL
    // films/ -- is the ENDPOINT
    const response = await fetch('https://swapi.py4e.com/api/films/', 
    // {
      // OPTIONS --includes BODY, HEADERS, METHOD etc..
      // We Dont Specify GET because its the Default METHOD as the Name Goes FETCH
    // }
    );
    // To Check For Errors and Throw error
    if (!response.ok) {
      throw new Error('An error Occured');
    }

      // This is the Response - it includes BODY, HEADERS, json, ok etc...
      // Access the json data - This is the translate the JSON data to REAL JS Object DATA
      const data = await response.json();
      // Access the API Object Data
      // console.log(data); // Check the OBJECT STRUCTURE
      // transform the Data
      const transformMovies = data.results.map( movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformMovies);
      // To Stop the Loading Spinner after Fetching
      setIsLoading(false);
    } catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

   // Fetching Data with useEffect() -- Handling Side-Effects
   useEffect( () => {
    fetchMoviesHandler();
    // With the Help of useCallback we can pass the Dependency Here 
  }, [fetchMoviesHandler]);


  // Create a Function for Http GET Requests -- Using .then().catch()
  // function fetchMoviesHandler() {
  //   // https://swapi.py4e.com/api/ -This isthe BASE_URL
  //   // films/ -- is the ENDPOINT
  //   fetch('https://swapi.py4e.com/api/films/', 
  //   // {
  //     // OPTIONS --includes BODY, HEADERS, METHOD etc..
  //     // We Dont Specify GET because its the Default METHOD as the Name Goes FETCH
  //   // }
  //   ).then( response => {
  //     // This is the Response - it includes BODY, HEADERS, json, ok etc...
  //     // Access the json data - This is the translate the JSON data to REAL JS Object DATA
  //     return response.json();
  //   }).then( data => {
  //     // Access the API Object Data
  //     console.log(data); // Check the OBJECT STRUCTURE
  //     // transform the Data
  //     const transformMovies = data.results.map( movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //       }
  //     })
  //     setMovies(transformMovies);
  //   })
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} disabled={isLoading}>Fetch Movies</button>
      </section>
      <section>
        {/* To Check and Show Loading Spinner on Page */}
        {isLoading ? <LoadindSpinner /> : <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no Movies to Fetch...</p>}
        {/* To Show the Error on the Page */}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
