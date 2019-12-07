# Destructuring

## Basic

Destructuring target <= Destructuring source

```js
const obj = { name: 'Matias', nick: 'Mati' };
const { name: myName, nick: myNick } = obj;

console.log(myName); // Console output: Matias
console.log(myNick); // Console output: Mati
```

## Simplified

Cuando las propiedades del source y del target coinciden. 

```js
const obj = { name: 'Matias', nick: 'Mati' };
const { name, nick } = obj;

console.log(name); // Console output: Matias
console.log(nick); // Console output: Mati
```

## Arrays

```js
const myArray = ['a', 'b'];
const [x, y] = myArray;

console.log(x); // Console output: a
console.log(y); // Console output: b
```

## No all params

```js
const source = { x: 7, y: 3 };
const { x } = source;

console.log(x); // Console output: 7
```

## Default value

```js
const { x, y = 1 } = {};

console.log(x); // Console output: undefined
console.log(y); // Console output: 1
```

## Elision

```js
const [, , x, y] = ['a', 'b', 'c', 'd'];

console.log(x); // Console output: c
console.log(y); // Console output: d
```

## Rest operator

```js
const [x, ...y] = ['a', 'b', 'c'];

console.log(x); // Console output: a
console.log(y); // Console output: ['b', 'c']
```
