<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue';

  export default {
    setup() {
      const info = reactive({name: "Bob", age: 18});
      // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
      // let { name, age } = toRefs(info);
      //  直接解构会失去响应式
      // let { name , age } = toRefs({name:"Bob",age:12})
      // 2.toRef: 对其中一个属性进行转换ref, 建立链接
      let { name } = info;
      let age = toRef(info, "age");

      const changeAge = () => {
        age.value++;
      }

      return {
        name,
        age,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>