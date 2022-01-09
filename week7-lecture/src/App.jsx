import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  // const { location: { pathname } } = window;

  // const MyComponent = {
  //   '/': HomePage,
  //   '/about': AboutPage,
  //   '/restaurants': RestaurantsPage,
  // }[pathname] || NotFoundPage;

  return (
    <div>
      <header>
        <h1>
          <Link to="/">
            헤더 영역
          </Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  );
}
