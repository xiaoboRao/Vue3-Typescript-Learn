<script>
  import { h } from 'vue';

  export default {
    render() {
      //h函数返回一个Vnode
      return h("h2", {class: "title"}, "Hello Render")
    }
  }
</script>

<style scoped>

</style>