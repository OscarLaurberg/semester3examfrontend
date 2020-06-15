import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../noMatch/';
import Home from '../home/';
import ProtectedRoute from './ProtectedRoute.jsx';
import Unauthorized from '../unauthorized/';
import MovieInfo from '../movies/MovieInfo.jsx';
import MovieInfoWRatings from '../movies/MovieInfoWRatings.jsx';
import MovieCount from '../movies/MovieCount.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/movieInfo'>
        <MovieInfo />
      </Route>

      <ProtectedRoute
        authenticatedRoles={['admin', 'user']}
        path='/detailedMovieInfo'
      >
        <MovieInfoWRatings />
      </ProtectedRoute>

      <ProtectedRoute authenticatedRoles={['admin']} path='/movieCount'>
        <MovieCount />
      </ProtectedRoute>

      <Route path='/unauthorized'>
        <Unauthorized />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
