# 3주차 해설 강의 - TodoList 테스트 코드


```sh
npm i

npm start
```
---

## 리덕스 추가

**설치**
```sh
npm i redux react-redux
```

## 관심사의 분리
- 관심사의 분리! 
```js
// 기능 정의는 화면에 어떻게 보이는지 몰라도 됨
// 즉, 서로 역할만 알면됨!

// App 은 기능들이 어떻게 동작하는지 모름
// => 상관없음. App 은 화면에 화면에 어떻게 보이는지만 집중하기
// App은 정의한 기능과 연결하는 역할도 있지만, 어떻게 동작하는지는 모름
// 내요들이 어떻게 만들어지는데 모름
// 관심사의 분리!!

// 즉, 컴포넌트끼리 관심사를 분리했듯이 비즈니스 로직과 App 컴포넌트도 마찬가지로 관심사를 분리할 수 있음.
// App 은 로직과 UI 간의 연결하는 기능을 하지만 해당 로직이 어떻게 구성되어 있는지 알 필요가 없음!

// 리덕스를 사용하지  않을 때는 기능 정의에서 함수의 인자로 state 를 받아 처리했지만,
// redux 를 사용함으로서, 업데이트 기능도 분리시켜서 처리 가능
```

## 리덕스 간단 테스트
- 리덕스를 이용해서 관심사의 분리를 할 수 있음.
- `__mocks__` 폴더에 사용하는 함수를 mock 해서 가짜 기능을 정의할 수 있음.
  - `react-redux` 의 `useSelector` 기능을 사용하기 위해서  
react-redux 파일을 만들고
```js
export const useDispatch = jest.fn();

// export const useSelector = jest.fn((selector) => selector({}));
export const useSelector = jest.fn();
```
이렇게 만들면 `useSelector` 와 `useDispatch` 는 mock 으로 가짜 함수가 정의됨.  

사용하는 곳에서 아래와 같이 사용하면 됨.
```jsx
import { useSelector } from 'react-redux';

jest.mock('react-redux');

test('App', () => {
// TODO: useSelector 조작
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
// ...
});
```
- `react-redux` 를 직접 import 했지만, `__mocks__` 에 해당 라이브러리 파일을 만들었기 때문에 test 할 때 자동으로 `__mocks__` 의 `react-redux.js` 파일에서 정의한 것을 사용 가능.  
=> 우리가 만든 mock 함수들을 사용할 수 있음.