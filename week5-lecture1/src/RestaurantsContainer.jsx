import React from 'react';
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  // const { restaurants } = useSelector((state) => ({
  //   restaurants: state.restaurants,
  // }));
  const { restaurants } = useSelector((state) => state);
  // const restaurants = useSelector((state) => state.restaurants);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
