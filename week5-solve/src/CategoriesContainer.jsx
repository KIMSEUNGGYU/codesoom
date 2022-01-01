/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = (categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  };

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            )
              : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
