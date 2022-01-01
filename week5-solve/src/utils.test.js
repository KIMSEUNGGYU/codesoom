import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  expect(get('name')(state)).toBe('홍길동');
  expect(get('age')(state)).toBeUndefined();

  // 간략 표현
  // const f = get('name');
  // const g = get('age);
  // expect(f(state)).toBe('홍길동');
  // expect(f(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  expect(f(state)).toBeTruthy();

  const g = equal('name', '임꺽정');
  expect(g(state)).toBeFalsy();
});
