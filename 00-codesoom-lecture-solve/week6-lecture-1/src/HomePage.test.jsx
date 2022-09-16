import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('react-redux');

test('HomePage', () => {
  render(<HomePage />);
});
