
import { sum } from "./js/math";
const { priceFormate } = require('./js/formate');
import './js/element';

console.log(sum(10, 20));
console.log(priceFormate());

const message = "Hello World";
const names = ["abc", "cba", "nba"];

names.forEach(item => console.log(item));

console.log(message);
