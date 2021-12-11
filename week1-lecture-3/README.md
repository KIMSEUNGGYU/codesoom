# 1주차 강의 3 - JSX

> 1주차 2강 에서는 Javascript 로 웹을 구현하는 것을 알아봤음.   
> 그래서 JS 문법만 사용했는데, **JS 에서 HTML 태그와 유사한 것을 사용해서 웹을 구현할 수 있음.**  
> JS 만으로도 가능하지만, 좀 더 DSL 적인 것으로 개발하면 더 편하고 익숙?함.  
> => **바벨을 이용해서 해결할 수 있음**

**DSL (Domain Specific Language)**
- 도메인에 특화된 언어
    강의 2 에서는 Javascript 에 특화된 언어로 개발했는데, html 과 유사한 코드로 처리한다면?   
    즉, html 형태의 코드를 js (강의 2에서 생성한 createElement 로 변환시킨다면 해결 가능)
    babel 을 이용해서 트랜스코드(변환) 가능

---
- 바벨 패키지
```sh
npm i -D babel-loader 
# 웹팩에서 바벨을 사용할 수 있도록 도와줌

npm i -D @babel/core
# 바벨 기능

npm i -D @babel/preset-env @babel/preset-react
# 자주 사용하는 바벨 기능 모음집? 사용 
## 바벨에서 기능을 하나씩 추가 가능하지만 자주 사용하는 기능들 모아 놓은 것을 사용
```
---


```sh
npm i -D
```

```sh
npm start
```
