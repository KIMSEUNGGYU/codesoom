import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

jest.mock('react-redux');

test('NotFoundPage', () => {
  render(<NotFoundPage />);
});
