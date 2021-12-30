<template>
  <div >
      <tab-control  :titles="titles" @titleClick='titleClick'></tab-control>
      <div class="content">{{contents[currentIndex]}}</div>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  components: {
    TabControl,
  },
  props: {},
  data() {
    return {
      content:'',
      currentIndex:0,
      titles: ["鞋子", "袜子", "桌子"],
      contents:["鞋子页面", "袜子页面", "桌子页面"]
    };
  },
  watch: {},
  computed: {},
  methods: {
    titleClick(index){
      this.currentIndex=index
    }
  },
  created() {

  },
  mounted() {}
};
</script>
<style  scoped>
</style>