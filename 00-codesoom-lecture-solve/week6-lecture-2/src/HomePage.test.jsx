import React from 'react';

// import { BrowserRouter } from "react-router-dom"
import { MemoryRouter } from 'react-router-dom'; // 테스트 에서는 MemoryRouter 를 사용해서 가볍게 사용 가능?

import { render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('react-redux');

test('HomePage', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
});
