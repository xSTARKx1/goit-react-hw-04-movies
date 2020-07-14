import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFound from './views/NotFound';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /*webpackChunkName: "homePage"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /*webpackChunkName: "moviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /*webpackChunkName: "movieDetailsPage"*/
  ),
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
