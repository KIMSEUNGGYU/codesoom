import React from 'react';

import styled from '@emotion/styled';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header({
  background: '#EEE',
  '& h1': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function App() {
  // const { location: { pathname } } = window;

  // const MyComponent = {
  //   '/': HomePage,
  //   '/about': AboutPage,
  //   '/restaurants': RestaurantsPage,
  // }[pathname] || NotFoundPage;

  const dispatch = useDispatch();

  // TODO: localStorage 에서 accessToken 가져오기
  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">
            EatGo
          </Link>
        </h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>

  );
}
