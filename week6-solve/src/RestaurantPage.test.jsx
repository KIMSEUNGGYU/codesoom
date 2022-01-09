import React from 'react';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  it('renders name', () => {
    const params = { id: 1 };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('Restaurant 1');
  });
});
