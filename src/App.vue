<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    created() {
      this.getLocation();
    },
    methods:{
      getLocation() {
        AMap.plugin('AMap.Geolocation', function() {
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,

          })

          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', onComplete)
          AMap.event.addListener(geolocation, 'error', onError)

          function onComplete (data) {
            // data是具体的定位信息
            console.log(data);
            console.log(this);
          }

          function onError (data) {
            // 定位出错

          }
        })
      }
    }
  }
</script>

<style scoped>
  @import '~assets/css/base.css';

  #app {
    /*width: 100%;*/
    /*height: calc(100% - 49px);*/
    /*font-size: 14px;*/
    /*background-color: #f1f1f1;*/

  }
</style>
