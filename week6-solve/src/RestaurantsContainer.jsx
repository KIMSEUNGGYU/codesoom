/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function Restaurants({ Link }) {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/restaurants/1">
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
