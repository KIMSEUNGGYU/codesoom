# 3주차 강의 테스트
- eslint 에 jest: true 를 주면 test rule 에러 안남

---
**테스트를 하기 위해 설치 패키지 모듈**
```sh
npm i -D jest @types/jest babel-jest
```
- `@types/jest` vscode 에서 jest 자동 완성

```sh
npm i -D @testing-library/react @testing-library/jest-dom
```
- ` @testing-library/jest-dom` DOM matcher 를 확장

--- 
**실행**
```sh
npm i -D

npm start
```

```sh
npx jest --watchAll
```
- 프로젝트에 있는 테스트 파일을 감시함.

---
**Signature**
- 모든 연산은 연산의 이름, 매개변수, 반환값을 명세하는데 이를 Signature 라 함.
- name(add), parameters(x, y), return(result)

**jest 설정 참고**  
- `import '@testing-library/jest-dom';` 와 같이 명시하지 않는 것(render 이런 값을 뽑아오지 않음)은  `jest.config.js` 와 `jest.setup.js` 을 등록하면 앞으로 테스트할 때 해당 구문을 자동으로 import 한 효과를 얻을 수 있음.
- `testEnvironment: 'jsdom'` 을 `jest.config.js` 에 설정하기.  
  test 할 때 기본적으로 node 로 되어 있어 jest-dom? react 를 테스트할 때 필요

**테스트할 때 참고**
- `context` 는 플러그인 설정해야함.
- describe - context - it 
- given
