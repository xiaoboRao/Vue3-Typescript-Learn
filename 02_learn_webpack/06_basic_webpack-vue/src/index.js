
import { sum } from "./js/math";
import { createApp } from 'vue';
const { priceFormate } = require('./js/formate');
import './js/element';

console.log(sum(10, 20));
console.log(priceFormate());

const message = "Hello World";
const names = ["abc", "cba", "nba"];

names.forEach(item => console.log(item));

console.log(message);

//Vue代码
const app = createApp({
  template: "#my-app",
  components: {

  },
  data() {
    return {
      title: "Hello World",
      message: "哈哈哈"
    }
  }
});

app.mount("#app");
