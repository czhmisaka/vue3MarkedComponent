<!--
 * @Date: 2022-02-27 08:58:38
 * @LastEditors: CZH
 * @LastEditTime: 2022-03-31 15:57:06
 * @FilePath: /vue3MarkedComponent/example/views/markDownPageList.vue
-->
<template>
  <div>
    <div class="header">
      <el-menu
        mode="horizontal"
        background-color="black"
        text-color="#ded"
        active-text-color="#fff"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, index) in markdown" :key="index" :index="index">
          <h3>{{ item.name }}</h3>
        </el-menu-item>
      </el-menu>
    </div>
    <markedPage
      :markdown="markdown[markdownIndex].doc"
      class="mark_body"
      :style="'opacity:' + (visible ? 1 : 0)"
    ></markedPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import index from "../assets/index";
export default defineComponent({
  name: "createMarkDom",
  data() {
    return {
      markdownIndex: 0,
      markdown: index.docList,
      visible: true,
    };
  },
  methods: {
    async handleSelect(e: any) {
      const that = this;
      if (typeof e == "number") {
        this.visible = false;
        setTimeout(() => {
          that.visible = true;
          that.markdownIndex = e;
        }, 300);
      }
    },
  },
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: black;
}
.mark_body {
  height: calc(100vh - 60px);
  transition: all 0.3s;
}
</style>
