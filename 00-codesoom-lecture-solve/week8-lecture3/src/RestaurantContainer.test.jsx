import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

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
      accessToken: given.accessToken,
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

  it('renders reviews', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('맛있어요');
  });

  context('without logged-in', () => {
    it('renders no review write form', () => {
      const { queryByLabelText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    // TODO: accessToken 세팅

    it('renders review write form', () => {
      const { queryByLabelText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('listens change events', () => {
      const { getByLabelText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'application/changeReviewField',
          payload: { name, value },
        });
      });
    });

    it('renders "리뷰 남기기" button', () => {
      const { getByText } = render((
        <RestaurantContainer restaurantId="1" />
      ));

      fireEvent.click(getByText('리뷰 남기기'));

      // 로드시 dispath 한 번.
      // submit 날렸을 때 한 번
      // mock-store 사용해서 제대로 테스트할 수 있음?
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
