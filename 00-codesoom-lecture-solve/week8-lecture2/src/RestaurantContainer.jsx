/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './slice';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          fields={reviewFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}