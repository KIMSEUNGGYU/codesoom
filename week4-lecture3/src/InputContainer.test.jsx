import React from 'react';

import { render, fireEvent } from '@testing-library/react';

// 진짜 react-redux 의 useSelector 를 가져온게 아닌,
// 밑에서 정의한 mock 으로 인해 __mocks__ 에서 정의한 것을 가져옴
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

// import react-redux 형태임.
// react-redux를 찾는데 우리가 만든 react-reudx.js 파일을 읽어옴
jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });
});
