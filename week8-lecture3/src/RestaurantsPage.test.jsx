import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn(); // it 이 여러 개 있을 때, 어떤 것이 먼저 실행될지 몰라 초기화 필수

  beforeEach(() => {
    dispatch.mockClear();

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
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).toBeInTheDocument();
    expect(queryByText('한식')).toBeInTheDocument();
    expect(queryByText('마법사주방')).toBeInTheDocument();
  });

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});
