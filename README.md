# react-for-beginners

## Fundamentals

| React 개발자가 알아두면 편리한 것들

1. Arrow function (ES6)
2. Template Literals
3. Spread operator
4. Classes
5. Array operations

### Arrow function

```javascript
function sayHello(name = "Doyeon") {
  return "Hello " + name;
}

const doyeon = sayHello("doyeon");
console.log(doyeon);

// Array function
const sayHello = (name = "Doyeon") => "hello " + name;

button.addEventListener("click", sayHello);
button.addEventListener("click", function (event) {
  return "hello " + name;
});
button.addEventListener("click", (name) => "hello " + name);
```

- `=>` 이후에 중괄호를 하지 않는 것은 그 자체로 `return` 한다는 의미를 함축하고 있다. 만약 `=>` 이후의 코드에 중괄호를 친다면 이후 어딘가에서 `return`을 하겠다는 의미이다.
- 매개변수가 들어오지 않았을 경우를 대비해서 `name="Doyeon"` 같은 방식으로 넣어줄 수 있다. 매개변수를 이렇게 작성할 경우 매개변수가 들어오지 않으면 기본값으로 설정된 값을 사용하여 연산을 수행한다.

- Arrow function에서 매개변수가 1개일 경우에는 `()`를 쓰지 않아도 된다.

### Template Literals

Template, Variable, String을 다루기에 가장 좋은 방법

```javascript
const sayHello = (name = "Human") => `Hello ${name}`;

const doyeon = sayHello();

console.log(doyeon);
```

### Object Structuring

```javascript
const human = {
  name: "doyeon",
  lastName: "kim",
  nationality: "Korean",
  favFood: {
    breakfast: "Sam",
    lunch: "Doncas",
    dinner: "Sam + Doncas",
  },
};

// 비효율적
// const name = human.name;
// const lastName = human.lastName;
// const difName = human.nationality;
const {
  name,
  lastName,
  nationality: difName,
  favFood: { dinner, breakfast, lunch },
} = human;

console.log(name, lastName, dinner, breakfast, lunch);
```

- 객체 안에 있는 값을 변수로 가져올 때, 같은 이름을 두번 쓰지 않고 한번에, 여러 변수를 할당할 수 있다.
- 객체가 가지고 있는 key값을 변수명으로 사용하고 싶지 않을 경우에는 `key: 원하는이름`의 형식으로 작성하면 된다.
- 객체 안의 객체가 가지고 있는 값을 변수로 가져오고 싶을 때는 `key: {변수, 변수...}` 의 형식으로 작성하면 된다.

### Spread Operator

```javascript
const days = ["Mon", "Tues", "Web"];
const otherDays = ["Thu", "Fri", "Sat"];

// const allDays = days + otherDays;

// console.log(allDays); // Mon,Tues,WebThu,Fri,Sat

const allDays = [...days, ...otherDays, "Sun"];
console.log(allDays); // ["Mon", "Tues", "Web", "Thu", "Fri", "Sat", "Sun"]

const a = {
  first: "hi",
  second: "hello",
};
const b = {
  third: "bye bye",
};

const two = { ...a, ...b };

console.log(two); // {first: "hi", second: "hello", third: "bye bye"}

const hi = (something, args) => console.log(...args);
```

- `...배열`은 배열을 unpack해서 element들만을 전달함
- 객체도 가능함
- function도 가능

### Classes

```javascript
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const doyeon = new Human("Doyeon", "Kim");

console.log(doyeon);

class Baby extends Human {
  cry() {
    console.log("Waaaaaa");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("mini", "me");

console.log(myBaby);
myBaby.cry();
myBaby.sayName();
```

- class는 청사진같은 것
- 내부의 변수를 사용할 때는 `this`를 사용해야함
- `extends`: class를 확장, 부모 클래스의 변수와 function을 그대로 사용할 수 있음

### Array map

```javascript
const days = ["Mon", "Tues", "Web", "Thu", "Fri"];

const smilingDays = days.map((day, index) => `😁 ${index + 1} ${day}`);

console.log(smilingDays);
```

`Array.map()`: 배열의 element에 모두 동일한 동작을 하고, 그걸 배열로 반환받고 싶을 때 사용함

- `(element, index)`의 순서로 인자를 받아올 수 있음

### Array filter

```javascript
const numbers = [1, 33, 44, 22, 65, 87, 345, 867, 445, 221, 33, 76, 882, 48];

const biggerThan15 = numbers.filter((number) => number > 15);

console.log(biggerThan15);

let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter((post) => post !== "Bye");

console.log(posts);
```

- 배열을 하나씩 확인해서 조건에 맞는 element들을 뽑아 새로운 배열로 만들어줌

### forEach includes push

```javascript
let posts = ["Hi", "Hello", "Bye"];

// forEach
posts.forEach((post) => console.log(post));

// push
posts.push("new");

console.log(posts);

// includes
let greetings = ["Hi", "Howdy", "Suup"];
if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}
console.log(greetings);
```

- `forEach`는 새로운 배열을 return하지 않는다는 점에서 `map`, `filter`와 차이가 있다.
- `push`: 새로운 element를 배열에 추가
- `includes`: 배열에 element가 들어있는지 확인

## PROJECT SETUP

### #2.0 Setting Up the Project

```console
npm i npx -g
npx create-react-app nomflix
```

- `npx`: 프로그램을 최신 버전으로 설치하고 폴더가 생성되면 프로그램을 삭제함 (여기서는 `create-react-app`이 삭제됨)
- 사용하지 않는 오래된 버전의 것들을 컴퓨터에 저장하지 않게 해주는 것

```console
npm i prop-types
```

- `prop-types`: 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기를 내보냄

### #2.1 React Router Part One

- `App.js`를 `Components` 폴더로 옮기고, `index.js`에서의 경로를 `Components/App`으로 수정해줌
- `jsconfig.json` 파일 덕분에 `src`는 경로에 입력하지 않아도 됨

---

- `Routes` 폴더를 생성하고 그 안에 페이지별로 파일을 만들어줌
- [React Router](https://github.com/ReactTraining/react-router)는 React에서 거의 유일한 Routing 패키지
- 여기서는 [react-router-dom](https://reactrouter.com/web/guides/quick-start)만 씀
- React Router는 간단한 컴포넌트 묶음이다.
- `Routes` 폴더에 사용할 페이지 컴포넌트들을 만들어 놓고(TV,TV, Home, Search, Detail), `Components` 폴더 안에 `Router.js` 파일을 만들어서 `HashRouter` 로 묶어준다. 그리고 `App.js`에 `Router.js` 컴포넌트 하나만 넣어줌

### #2.2 React Router part Two

- `HashRouter`로 인한 `/#/`가 거슬린다면 `BrowserRouter`를 사용하면 다른 사이트와 비슷하게 나온다.
- `HashRouter`: 간단하지만 웹 페이지를 사용하고 있다는 기분은 들지 않는다. 내 페이지의 Hash를 사용한다.
- `BrowserRouter`: HTML history API를 사용한다.
  어떤 걸 사용하든 상관 없음, 기능은 같음
- Composition.은 두 개 이상의 Route를 동시에 랜더링하는 방식

```js
<Route path="/tv" component="{TV}" />
<Route path="/tv/popular" render={() =>
<h1>popular</h1>
} />
```

- 위와 같이 작성할 경우 `/tv/popular`를 부를 경우 `/tv`도 같이 출력된다. `/tv/popular`가 `/tv`을 포함하고 있기 때문에 찾으려는 path에 맞는 모든 path들을 랜더링 하는 것이다.

```js
<Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
</Router>
```

- 동시에 랜더링 되는 문제점을 해결하기 위해서는 `Route` 안에 무조건 같은 path인 경우에만 이동하게 하는 exact를 넣어주어도 되지만, 만약 Route 안에 Route가 있는 경우를 만날 경우 작동하지 않기 때문에 다른 해결책을 사용해야 한다.
- 일단 url이 잘못 입력된 경우 Home으로 이동하게 해주는 `Redirect` 를 넣어주었다. 이 경우에도 모든 잘못된 url을 이동시켜야 하기 때문에 `from`을 `"*"`로 설정해주어야 하는데, 이 `"*"`이 우리가 설정한 모든 url에도 적용이 되기 때문에 무조건 리다이렉트가 실행되게 된다.
- 여기서 `react-router-dom`의 `Switch`를 사용해주면 한번에 하나의 url만 랜더링 되도록 바뀌기 때문에 위의 모든 문제를 해결할 수 있다.

## STYLES

### #3.0 CSS in React part One

- 헤더를 만듦
- 각 컴포넌트끼리 파일을 분리 (css, index.js, 컴포넌트 js파일)
  - css는 className이 겹칠 경우의 혼란을 방지하기 위해 분리
  - index.js는 App.js에서 일정한 패턴으로 import하기 위해 Header만을 위한 파일을 생성

### #3.1 CSS in React part Two

- CSS 모듈
  - css가 global이 아니라 local이 되게 함
- css 파일을 `Header.module.css`으로 변경한 후 Header.js에서 class처럼 import해서 사용

```js
import React from "react";
import styles from "./Header.module.css";

const header = () => (
  <header>
    <ul className={styles.navList}>
      <li>
      ...
```

- 랜더링된 html을 확인해보면 임의의 문자가 붙어있는 것을 확인할 수 있다.
- `react-router-dom` 덕분에 `.module.css`를 사용할 수 있다.

### #3.2 CSS in React part Three

```js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: beige;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

const header = () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

export default header;
```

- `styled-components`를 사용해서 css를 js 파일 안에서 설정할 수 있도록 만듦(설치해야함)
- css 파일을 모듈화해서 사용할 때와는 다르게 className을 기억할 필요가 없음
- 태그 자체에 css 속성을 부여할 수 있다.
- html 함수은 `styled.###`, react 함수는 `styled(###)`으로 표현함

### #3.3 GlobalStyles and Header

- `styled-reset` 설치 - styled-components에서 사용하는 css reset
- [createGlobalStyle](createGlobalStyle)

  - global 속성을 적용하기 위해 사용
  - rest, a 태그의 스타일 초기화, `boxing-size`, body 기본 css 설정
  - 적용할 Components와 함께 import 하여 적용

- Header CSS

  ```js
  const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  `;

  const List = styled.ul`
    display: flex;
  `;

  const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
  `;

  const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  ```

  ### #3.4 Location Aware Header

  - 현재 보고 있는 페이지를 header에 밑줄로 표시
  - 현재 path를 header component에 전달하기 위해서 header component를 다른 Router로 감싸야 한다. -> 이 때 사용하는 것이 `withRouter(function)`

  ```js
  const header = ({ location: { pathname } }) => (
    <Header>
      {console.log(pathname)}
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
  export default withRouter(header);
  ```

  - `withRouter`는 실행될 function에게 랜더링 된 페이지의 정보를 전달하게 됨
  - 이 정보들 중에서 현재 페이지 정보를 가지고 있는 location 안에 pathname을 이용해 해당하는 header 링크의 아래에 표시를 해줌
  - 임의의 `current`라는 속성을 만들어주고 현재 랜더링된 페이지의 pathname에 따라 true, false가 들어가도록 만듦

  ```js
  const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${(props) =>
        props.current ? "#e67e22" : "transeparent"};
    transition: border-bottom 0.5s ease-in-out;
  `;
  ```

  - css에서는 `current`에 들어간 boolean 값에 따라 스타일을 적용여부를 확인하여 밑줄을 넣어준다.

## NETWORKING

### #4.0 Introduction to The Movie DB API

[https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
db는 위의 사이트의 api를 사용한다. 인기 많은 영화, tv프로그램 얻기 등등 기능이 있음

### #4.1 Sexy Networking with Axios Instances

[https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

- axios 사용 ([axios docs](https://github.com/axios/axios))
- axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다. 쉽게 말해서 백엔드와 프론트엔드의 통신을 쉽게 하기 위해서 사용하는 것으로, Ajax와 더불어 사용한다.

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "65f2de2554cb18d6592aae5c0810ac0c",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
```

### #4.2 API Verbs part One ~ #4.3 API Verbs part Two

```md
- [x] Now Playing (Movie)
- [x] Upcoming (Movie)
- [x] Top Rated (TV)
- [x] Popular (TV, Movie)
- [x] Airing Today (TV)
- [x] TV show Detail
- [x] Movie Detail
- [x] Search (Movie, TV)
```

```js
export const MovieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const TVApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
```

- checkList에 적어놓은 목록들을 구현하기 위한 api를 api.js에서 정리하여 호출함

## CONTAINERS

### #5.0 Container Presenter Pattern part One

- API verbs, function 들을 화면 안에 넣기
- container presenter pattern
  - container: data와 state를 가지고, api를 불러와서 로직을 처리함
  - presenter: 데이터를 보여주는 역할, state를 가지고 있지 않음 api, class 도 없는 그냥 함수형 컴포넌트임
  - presenter는 스타일이고 container는 데이터
- MVC 패턴과 유사함
- 각각의 기능 별로 index가 나누어져 있고, Container와 Presenter를 나누어 생성함

### #5.1 Container Presenter Pattern part Two

- 전 강의에서는 Home을 container presenter pattern으로 바꾸었고, 이번 강의에서는 전 강의에 이어서 TV, Search, Detail을 container presenter pattern으로 파일을 생성해줌
- container는 화면에 보여줄 때 필요한 데이터
- presenter는 container에서 받은 데이터를 어떻게 보여줄지

### #5.2 Home Container

```js
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
```

<details>
<summary>componentDidMount()</summary>
<div markdown="1">
컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다. DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다. 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치입니다.
이 메서드는 데이터 구독을 설정하기 좋은 위치입니다. 데이터 구독이 이루어졌다면, componentWillUnmount()에서 구독 해제 작업을 반드시 수행하기 바랍니다.
`componentDidMount()`에서 즉시 `setState()`를 호출하는 경우도 있습니다. 이로 인하여 추가적인 렌더링이 발생하지만, 브라우저가 화면을 갱신하기 전에 이루어질 것입니다. 이 경우 `render()`가 두 번 호출되지만, 사용자는 그 중간 과정을 볼 수 없을 것입니다. 이런 사용 방식은 성능 문제로 이어지기 쉬우므로 주의가 필요합니다. 대부분의 경우 앞의 방식을 대신해 `constructor()` 메서드에서 초기 state를 할당할 수 있습니다. 하지만 모달(Modal) 또는 툴팁과 같이 랜더링에 앞서 DOM 노드의 크기나 위치를 먼저 측정해야 하는 경우 이러한 방식이 필요할 수 있습니다.
</div>
</details>

`componentDidMount()`에서 setState()를 사용하여 api에서 받아온 값들을 설정해주었다. JS는 api로 값을 가져오는 것을 기다리지 않고 다음 코드로 넘어가는 특징을 가지고 있기 때문에 api로 값을 가져오는 것을 기다려 주기 위해서 async await를 사용하여 값을 비동기 방식으로 가져오게 했다.
가져온 값은 비구조화 할당을 사용하여 변수에 넣어주었고, 가져온 값을 setState를 사용하여 state를 변경해주었다. state가 변경되면 리랜더링 되기 때문에 render가 실행된다. 위 코드에서는 맨처음, api에서 가져온 값이 변경될 때(에러가 발생하지 않은 경우), finally에서 loading의 값이 변경될 때 해서 총 세번 render가 실행된다.

### #5.3 TV Container

- 위와 동일

### #5.4 Search Container

```js
class Search extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
```

- SearchContainer에 위와 동일하게 setState를 해주는데, search 로직을 추가함
- `handleSubmit()` searchTerm(검색어)가 비어있지 않을 경우에만 searchByTerm을 실행해서 결과를 받아와 setState를 할 수 있게 함
- searchContainer에서 searchPresenter에 handleSubmit을 넘겨주어서 submit이 발생했을 경우 handleSubmit이 실행되게 할 예정

```js
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
```

- Detail 페이지로 이동할 수 있게 Router.js에 Route를 추가
- `:id`는 이 자리에 값이 동적으로 할당될 수 있다는 의미

### #5.5 Detail Container part One

```js
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
  }
```

- Router는 Route에게 `prop`을 같이 보내준다. `prop`을 사용하면 현재 url의 parameter 찾기, 앞으로가기, 뒤로가기, 특정url로 이동하기 등등의 동작을 할 수 있다.
- `prop`을 이용해서 Detail 페이지에서 보여주고자 하는 콘텐츠의 id를 받았다. 또, id가 원하는 형태가 아닐 경우 `push()`를 사용하여 함수 실행을 중단하고(`return`) 홈화면으로 이동하도록 만들었다.
- 숫자가 아닌 문자열에 `parseInt()`를 사용할 경우 `NaN`이 반환된다. 결과값이 `NaN`인지 확인하기 위해서는 `===`보다는 `isNaN()`함수를 사용하는 것이 좋다.
