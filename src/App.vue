<!--
 * @Date: 2022-02-27 08:34:43
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 09:44:28
 * @FilePath: /vue3MarkedComponent/src/App.vue
-->
<template>
  <router-view class="wholeScreen" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  padding: 0px;
  margin: 0px;
  top:0px;left: 0px;
  overflow: hidden;
}
*{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
</style>
<style scoped>
.wholeScreen{
  width:90%;
  height: 90%;
}
</style>
