# react-study

<br>

## Component
- 작업의 단위
- 코드의 가독성을 높일 수 있다
- 재사용성이 높다
- 유지보수가 편리해진다
- 컴포넌트는 반드시 하나의 최상위 태그로 시작해야 한다

<br>

## 개발환경 구축하기
- 설치 <br>
`npm install -g create-react-app`
- 설치 확인 <br>
`create-react-app -V`
- 프로젝트 생성하기
  1. 빈 폴더를 만든다
  2. 폴더의 경로로 들어가 `create-react-app .` 입력
  3. 프로젝트 생성 완료

<br>

## 실행하기
`npm run start`

<br>

## npm 과 npx의 차이
- npm이 그 프로그램을 설치하는 거라면
- npx는 create-react-app을 한 번만 설치한다.
  - 메모리를 차지하지 않는다.
  - 다운로드 받을 때마다 최신 상태이다.

<br>

## 프로젝트 구조
- public
  - index.html이 들어있다

<br>

## 클래스형 vs. 함수형

<br>

## 배포하기
`npm run build`

<br>

## props
- 사용자가 조작하는 부분
- 사용자가 컴포넌트를 사용하는 입장에서 중요
- 사용자에게 중요한 정보

<br>

## state
- props의 값에 따라 내부의 구현에 필요한 데이터들
- 컴포넌트 내부에서 쓰이는 값
- 실제로 다양한 컴포넌트를 만들 때 필요한 요소

## constructor
- 컴포넌트에 constructor가 있다면 맨 먼저 실행되어 초기화된다
- render가 되기 전에 props의 값을 초기화시킬 수 있다


<br>

## JSX
- JavaScript XML

<br>

## React class vs. function style
### class
- react의 기능을 풀파워로 사용할 수 있다
- class 문법 알아야 되고 장황하다
### function
- 함수의 문법만 알면 사용할 수 있다
- 기능이 부족하다
  - hook
    - 함수 방식에서도 내부적으로 상태를 다룰 수 있게 되었고
    - 컴포넌트의 라이프 사이클에 따른 것을 할 수 있게 되었다

###
- props는 class, function style에서 다 쓸 수 있었지만
- state는 클래스에서만 가능했다

<br>

## react router dom
`npm install react-router-dom`
- 사용자가 주소로 들어왔을 때 그에 맞는 적당한 페이지를 보여준다

<br>

### BrowserRouter
- 리액트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위 컴포넌트를 감싸주는 최상위 컴퍼넌트
### Route
- `<Route path="/"><Component></Component></Route>`
- path에 해당하는 주소로 접근하면 그에 맞는 컴포넌트를 띄워준다
### Switch
### Link
- `<Link to="/">hello</Link>`
- to 뒤에 쓰여진 주소로 이동한다
### HashRouter
- 어떤 path로 들어오건 간에 루트 페이지에 해당하는 html 파일을 서비스할 수 있다면 사용
### NavLink
- `<NavLink to="/">hello</NavLink>`
- 선택된 라우터만 `class="active"` 로 설정된다
- 사용자가 어디에 접근하는지 쉽게 확인할 수 있다