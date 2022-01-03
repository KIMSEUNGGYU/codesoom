import React from 'react';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return <MyComponent />;
}

/*
// 개념 1
// 컴포넌트를 변수에 할당?
const MyComponent = RestaurantsPage;

return (
  <MyComponent />
);

// 개념 2
// window.locaiont 을 이용하여 커스텀하게 라우팅 하는 방법
if (pathname === '/') {
  return (
    <p>Home</p>
  );
}

return (
  <RestaurantsPage />
);

*/
