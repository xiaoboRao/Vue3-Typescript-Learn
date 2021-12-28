
import { sum } from "./js/math";
import { createApp } from 'vue';
const { priceFormate } = require('./js/formate');
import './js/element';

import App from "../src/vue/App.vue"

console.log(sum(10, 20));
console.log(priceFormate());

const message = "Hello World";
const names = ["abc", "cba", "nba"];

names.forEach(item => console.log(item));

console.log(message);

//Vue代码
// const app = createApp({
//   template: "#my-app",
//   components: {

//   },
//   data() {
//     return {
//       title: "Hello World",
//       message: "哈哈哈"
//     }
//   }
// });
const app = createApp(App);
app.mount("#app");
