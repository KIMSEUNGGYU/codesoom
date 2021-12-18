# 3주차 해설 강의 - TodoList 테스트 코드

```sh
npm install

npx jest --watchAll
# npx jest --watchAll --verbose # 테스트의 모든 것을 보여줌 (계증 적으로)

npm start
```
---

## context plugin 추가?
- context 는 jest 에서 기본적으로 제공하지 않음.
- jest-plugins => jest-plugin-context 사용

**설치**
```sh
npm i -D jest-plugin-context
```

**설정**
``` js
// jest.config.js

// ...
setupFilesAfterEnv: [
    'jest-plugin-context/setup',
],
```

```js
// .eslintrc.js

// ...
globals: {
  context: 'readonly',
},

```

## TDD 사이클
- Red - Green - Refactoring

## 테스트 코드구조
- describe - context - it
- describe 는 테스트 주체가 되는 서술 대상
- context 는 따로 비교해줘야할 맥락(상황)이 있을 때만 선택적으로 사용
  - with
  ****- without
  - when
- it 은 실제로 테스트할 내용

```js
describe - List
  conext - with tasks
    - renders tasks...
    - renders "완료" button 
  context - without tasks
    - render no task message.
```
