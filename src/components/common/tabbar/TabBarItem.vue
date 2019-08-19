<template>
    <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else ><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:{
        type:String,
      },
      activeColor: {
        type:String,
        default:'red'
      }
    },
    data(){
      return {
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>

  .tabbar-item {
    flex: 1;
    font-size: 12px;
    height: 49px;
    text-align: center;
  }
  .tabbar-item img {
    width: 20px;
    height: 20px;
    margin-top: 7px;
    vertical-align: middle;
  }

  /*.active {*/
    /*color: red;*/
  /*}*/
</style>
