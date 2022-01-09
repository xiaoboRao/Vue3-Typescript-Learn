<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin';

  export default {
    mixins: [demoMixin],
    data() {
      //data保留自身数据
      return {
        title: "Hello World",
        message: "Hello App"
      }
    },
    methods: {
      foo() {
        console.log("app foo");
      }
    },
    computed: {

    },
    watch: {

    },
    //钩子函数：重名都会调用
    created() {
      console.log("App created 执行");
    }
  }
</script>

<style scoped>

</style>