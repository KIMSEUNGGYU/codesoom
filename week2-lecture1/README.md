# 2주차 강의 1 - React

> 1주차는 내가 커스텀한 createElement 로 DOM 을 생성했다면,  
> react 를 사용하면 react 에서 사용하는 기능을 이용해서 DOM 을 생성함.  
> 2주차는 리액트를 활용하는 방법에 대해 학습


```sh
npm i react react-dom
# react 
# react-dom 실제 화면 그리는 기능
```

---

```sh
npm i -D
```

```sh
npm start
```

---

## react - Components & Props
- react 는 react core 기능 (JSX?)
- react-dom 은 react 코드를 실제를 이용해서 DOM 관리 기능 (virtual-dom 및 그리는 기능 ?)  
  React에서 DOM에 특화된 메서드를 사용할 수 있도록 API를 제공
- 컴포넌트도 자바스크립트 함수  
  그래서 함수처럼 input/output 이 존재하는데   
  입력값을 props 로 부르고  
  반환 값은 화면에 어떤 엘리먼트를 보여줄지 결정

<details>
<summary><b>리액트 기본 사용법</b></summary>
<div markdown="1">

```jsx
/* @jsx React.createElement */

import React from 'react';
import ReactDOM from 'react-dom';

const Button = function ({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
};

const Buttons = function () {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
};

const App = function () {
  return (
    <div>
      <p>Hello, world!</p>
      <p>HI!!</p>
      <Buttons />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
```

</div>
</details>

## 리액트 hooks & state
- Hook 함수는 React state 와 생명 주기 기능을 연동(hook into) 할 수 있게 해주는 함수
-  일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

- 리액트는 개발자가 모든 작업을 직접 지정하는 게 아닌, 개발자가 생각하는 UI 대로 컴포넌트들을 구성하면 그려주는 것은 리액트가 직접 처리하는 방식!  
그래서 편함

<details>
<summary><b>render 를 직접하는 방법?</b></summary>
<div markdown="1">

```jsx
/* @jsx React.createElement */

import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

function handleClick() {
  count += 1;
  render();
}

const Counter = function () {
  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
};

const App = function () {
  return (
    <div>
      <p>Hello, world!</p>
      <p>HI!!</p>
      <Counter />
    </div>
  );
};

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
}

render();
```

</div>
</details>

- 상태를 직접 변경할 때마다 `ReactDOM.render()` 를 직접 호출 해야함.


<details>
<summary><b>React 가 직접 렌더를 해주는 방식 - hooks </b></summary>
<div markdown="1">

```jsx
/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = function () {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
};

const App = function () {
  return (
    <div>
      <p>Hello, world!</p>
      <p>HI!!</p>
      <Counter />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
```

</div>
</details>

- useState 라는 훅을 사용하면 상태가 변경되면 리액트가 직접 렌더링 해줌  
  그렇지 않으면 개발자가 redner를 직접해줘야함.

## 관심사의 분리
- 기존의 웹 개발 방식은 관심사의 분리보단 마크업, 디자인, 로직을 분리하는 기술의 분리에 가까웠습니다. 반면 리액트는 컴포넌트별로 관심사를 분리하여 재사용성과 확장성을 높여서 개발을 더 쉽게 해줍니다
- 컴포넌트도 비즈니스 로직이 있는 것과 UI 만 담당하는 부분으로 분리할지 말지 고려해서 관심사를 분리해야함
- 각 컴포넌트는 props로 전달 받은 인자들이 어떻게 동작하는지 관심없고 해당 컴포넌트에서 어떻게 보여줄지만 고려!  
  - Counter 컴포넌트는 전달 받은 props 의 내부 동작 방식보다 어떻게 보여줄지만 신경쓰기 (Counter 부분을 어떻게 보여줄지에 관심)
  - App 컴포넌트(로직 담당?)는 Page 컴포넌트가 어떻게 보여줄지는 관심 없고 어떤 데이터를 어떻게 상태를 관리할지만 관심(카운트값이 어떻게 변하는지만 관심)  
  - Page 컴포넌트도 전달 받은 props 의 내부 동작 방식보다 어떻게 보여줄지만 신경쓰기  


=> 이런 것을 관심사의 분리라함