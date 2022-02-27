<!--
 * @Date: 2022-02-27 08:58:38
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 09:39:30
 * @FilePath: /vue3MarkedComponent/src/views/markDownPageList.vue
-->
<template>
  <div>
    <markedPage :markdown="markdown[markdownIndex].doc"></markedPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import markedPage from "@/components/markedPage.vue";
import index from "../assets/index";
export default defineComponent({
  components: {
    markedPage,
  },
  data() {
    return {
      markdownIndex: 0,
      markdown: index.docList,
    };
  },
});
</script>
