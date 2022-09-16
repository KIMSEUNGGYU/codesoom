import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

test('RestaurantsPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { queryByText } = render((
    <RestaurantsPage />
  ));

  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).toBeInTheDocument();
  expect(queryByText('한식')).toBeInTheDocument();
  expect(queryByText('마법사주방')).toBeInTheDocument();
});
