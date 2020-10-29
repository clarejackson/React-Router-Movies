import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        
        .then(response => {
          // console.log(response)
          // console.log(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route exact path="/" render={() => <MovieList movies={movieList}/>} />
        </Switch>
      </div>
    </div>
  );
}
