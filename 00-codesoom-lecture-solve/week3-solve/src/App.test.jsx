import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성,
  // CodeceptJS => 실제 브라우제어 사용자 테스트 실행 가능.
});

// 사용법을 우선으로하는 테스트 코드를 작성
// 테스트 코드가 어떤 결과를 내는지에 따르는지도 작성하지만,
// 그 전에 사용법? 컴포넌트의 역할을 정의하는 것을 먼저 고려하고 작성
