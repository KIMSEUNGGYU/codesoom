import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',

      },
    }));
  });

  it('renders name and address', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');

    // 내가 추가한거
    expect(dispatch).toBeCalled();
  });
});
