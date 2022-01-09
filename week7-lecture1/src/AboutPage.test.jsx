import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

jest.mock('react-redux');

test('AboutPage', () => {
  render(<AboutPage />);
});
