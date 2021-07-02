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
