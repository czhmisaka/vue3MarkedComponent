<!--
 * @Date: 2022-02-27 08:58:38
 * @LastEditors: CZH
 * @LastEditTime: 2022-03-31 16:17:22
 * @FilePath: /vue3MarkedComponent/example/views/markDownPageList.vue
-->
<template>
  <div>
    <div class="header">
      <div class="tabbed round">
        <div class="tabbedBg"></div>
        <ul>
          <li v-for="(item, index) in tabNameList" :key="index" class="li">
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- <el-menu
        mode="horizontal"
        background-color="black"
        text-color="#ded"
        active-text-color="#fff"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, index) in markdown" :key="index" :index="index">
          <h3>{{ item.name }}</h3>
        </el-menu-item>
      </el-menu> -->
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
      tabNameList: ["标题1", "标题2", "标题3", "标题4"],
    };
  },
  onShow() {},
  methods: {
    async handleSelect(e: any) {
      console.log(this);
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
  /* background-color: black; */
}
.mark_body {
  height: calc(100vh - 60px);
  transition: all 0.3s;
}

/* Tabbed Styles */
.tabbed {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 68px;
  overflow: hidden;
  transition: border 250ms ease;
  height: 80px;
  padding-top: 20px;
}
.tabbed .tabbedBg {
  position: absolute;
  top: 10px;
  width: 90%;
  height: 60px;
  background: #ccc;
  padding: 0px;
  left: 20px;
  border-radius: 8px 8px 0 0;
}
.tabbed ul {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  float: left;
  padding-left: 48px;
  list-style-type: none;
}
.tabbed ul * {
  margin: 0px;
  padding: 0px;
}
.tabbed ul .li {
  display: block;
  float: right;
  padding: 10px 24px 8px;
  background-color: #fff;
  margin-right: 46px;
  margin-left: 18px;
  z-index: 2;
  position: relative;
  cursor: pointer;
  color: #777;
  transition: all 250ms ease;
}
.li:before,
.li:after {
  display: block;
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 44px;
  background-color: #fff;
  transition: all 250ms ease;
}
.li:before {
  right: -24px;
  transform: skew(30deg, 0deg);
  box-shadow: rgba(0, 0, 0, 0.1) 3px 2px 5px, inset rgba(255, 255, 255, 0.09) -1px 0;
  border-radius: 0 8px 0 0;
}
.li:after {
  left: -24px;
  transform: skew(-30deg, 0deg);
  box-shadow: rgba(0, 0, 0, 0.1) -3px 2px 5px, inset rgba(255, 255, 255, 0.09) 1px 0;
  border-radius: 8px 0 0 0;
}
.li {
  border-radius: 8px 8px 0 0;
}
.tabbedBg:after,
.tabbedBg:before {
  display: block;
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 44px;
  background-color: #ccc;
  transition: all 250ms ease;
}
.tabbedBg:before {
  right: -24px;
  transform: skew(30deg, 0deg);
  box-shadow: rgba(0, 0, 0, 0.1) 3px 2px 5px, inset rgba(255, 255, 255, 0.09) -1px 0;
  border-radius: 0 8px 0 0;
}
.tabbedBg:after {
  left: -24px;
  transform: skew(-30deg, 0deg);
  box-shadow: rgba(0, 0, 0, 0.1) -3px 2px 5px, inset rgba(255, 255, 255, 0.09) 1px 0;
  border-radius: 8px 0 0 0;
}
</style>
