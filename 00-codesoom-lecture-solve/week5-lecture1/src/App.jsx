import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import {
  loadCategories,
  loadRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
