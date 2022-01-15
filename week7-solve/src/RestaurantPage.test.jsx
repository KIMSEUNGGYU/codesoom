import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [
          {
            id: 1, name: '테스터', description: '맛있어요', score: 1,
          },
        ],
      },
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  it('renders name', () => {
    const params = { id: 1 };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  it('renders review write form', () => {
    const params = { id: 1 };

    const { queryByLabelText } = render((
      <RestaurantPage params={params} />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
  });
});

// Page 에서도   accessToken: given 을 이용해서
// login 된 경우, 아닌 경우를 구분해서 테스트 해도됨. 하지만 해당 테스트는 container 에서 테스트를 했음.
// => 낭비일 수도?? 근데 그건 사람마다  다를 듯
