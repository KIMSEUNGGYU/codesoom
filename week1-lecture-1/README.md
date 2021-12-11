# 1주차 강의 1 - 개발 환경 구축

```sh
npm init -y
```
- 패키지 관리 초기화

```sh
npx serve
```
- 간단하게 웹 서버 띄우는 방법
- hot reloading 적용 안됨 (실행만 시키는 것)


---
## webpack 설정

```sh
npm install -D webpack@4.43.0 webpack-cli@3.3.11 webpack-dev-server@3.11.0
```
- 최신 버전은 아님 (그래도 강의 예제와 맞추기 위해 버전 지정함)

```sh
npx webpack-dev-server
```

---

## ESLint

```sh
npm i -D eslint 
```
```sh
npx eslint .
```
- eslint 검사

```sh
npx eslint . --fix
```
- 자동으로 고칠 수 있는 것들을 고쳐줌

```sh
npx eslint --init
# √ How would you like to use ESLint? · style       
# √ What type of modules does your project use? · esm
# √ Which framework does your project use? · react
# √ Does your project use TypeScript? · No / Yes
# √ Where does your code run? · browser
# √ How would you like to define a style for your project? · guide
# √ Which style guide do you want to follow? · airbnb      
# √ What format do you want your config file to be in? · JavaScript
# √ Would you like to install them now with npm? Yes
# ...
```