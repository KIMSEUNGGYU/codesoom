import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const { container, getByText } = render((
    <CategoriesContainer />
  ));

  expect(container).toHaveTextContent('한식');

  fireEvent.click(getByText('한식'));

  expect(dispatch).toBeCalled();
});
