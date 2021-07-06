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
