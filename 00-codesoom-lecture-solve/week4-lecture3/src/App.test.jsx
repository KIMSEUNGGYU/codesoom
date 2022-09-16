import React from 'react';

import { render } from '@testing-library/react';

// 진짜 react-redux 의 useSelector 를 가져온게 아닌,
// 밑에서 정의한 mock 으로 인해 __mocks__ 에서 정의한 것을 가져옴
import { useSelector } from 'react-redux';

import App from './App';

// import react-redux 형태임.
// react-redux를 찾는데 우리가 만든 react-reudx.js 파일을 읽어옴
jest.mock('react-redux');

test('App', () => {
// TODO: useSelector 조작
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
});
