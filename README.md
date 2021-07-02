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
