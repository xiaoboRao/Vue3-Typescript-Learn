<template>
  <div class="tab-list">
    <div
      class="tab-list-item"
      v-for="(title, index) in titles"
      :class="{ active: currentIndex === index }"
      @click="tabItemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  
  components: {},
  emits:['titleClick'],
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
     
    };
  },
  watch: {},
  computed: {},
  methods: {
    tabItemClick(index){
        if(this.currentIndex===index) return
      this.currentIndex=index;
      this.$emit('titleClick',index)

    }
  },
  created() {},
  mounted() {},
};
</script>
<style  scoped>
.tab-list {
  display: flex;
}
.tab-list-item {
  flex: 1;
  text-align: center;
}
.tab-list-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>