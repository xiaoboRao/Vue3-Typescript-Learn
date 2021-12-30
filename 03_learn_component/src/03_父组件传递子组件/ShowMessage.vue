<template>
  <div>
    <!-- 单独绑定class -->
     <h2 :class="$attrs.class">{{title}}</h2>
     <!-- 绑定所有的属性 -->
    <h2 v-bind="$attrs">{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    // props: ['title', 'content']
    //禁用继承
    inheritAttrs: false,
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "123"
      },
      counter: {
        type: Number
      },
      info: {
        type: Object,
        default() {
          return {name: "why"}
        }
      },
      messageInfo: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>