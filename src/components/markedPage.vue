<!--
 * @Date: 2022-01-10 14:43:36
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 09:41:59
 * @FilePath: /vue3MarkedComponent/src/components/markedPage.vue
-->
<template>
  <div class="post">
    <el-container style="height:100%">
      <el-aside :trigger="null" collapsible class="aside">
        <el-tree
          class="tree"
          :data="title"
          :props="defaultProps"
          @node-click="nodeClick"
        ></el-tree>
      </el-aside>
      <el-main class="container" id="markdown-body">
        <div class="markdown-body body">
          <div v-html="compileMarkdown"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import {
  marked as Marked
} from "marked";
// 这里引入想要的样式
// 后期修改为自定义接入
import "github-markdown-css/github-markdown-light.css";
let renderMd = new Marked.Renderer();
Marked.setOptions({
  renderer: renderMd,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

function findChildren(node, index, arr) {
  arr.map((item, i) => {
    if (i > index) {
      if (node.level >= item.level) {
        index = Infinity;
      } else {
        node.children.push(item);
      }
    }
  });
  return node;
}

function getChildren(arr, level) {
  let back = [];
  arr.map((x) => {
    if (x.level == level) {
      if (x.children && x.children.length > 0) {
        x.children = getChildren(x.children, level + 1);
      }
      back.push(x);
    }
  });
  return back;
}
export default {
  name: "markDownViewer",
  components: {},
  props: {
    markdown: {
      type: String,
      default: "# Hello world",
    },
    needAside: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    compileMarkdown() {
      let index = 0;
      renderMd.heading = function (text, level) {
        return `<h${level} id="${index++}" class="jump" >${text}</h${level}>`;
      };
      return Marked(this.markdown);
    },
    title() {
      return this.getTitle(this.markdown);
    },
  },
  data() {
    return {
      highlightIndex: "",
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  methods: {
    // 解析markdown文件,判断title层级
    getTitle(content) {
      let tempArr = [];
      let index = 0;
        content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function (match, m1) {
          if (match.replace("\n", "").split("# ").length >= 2) {
            let title = match.replace("\n", "").replace(/<\/?.+?>/gi, '');
            let level = m1.length;
            tempArr.push({
              title: title.replace(/^#+/, "").replace(/\([^)]*?\)/, ""),
              level: level,
              children: [],
              index: index++,
            });
          }
        });

        tempArr.map((x, index) => {
          x = findChildren(x, index, tempArr);
        });

        return getChildren(tempArr, 1);
    },
    nodeClick(item) {
      let dom = document.getElementById(item.index);
      dom.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.aside {
  width: 303px;
  height: 100%;
  background: #f8f9fb;
  padding: 10px;
}

.tree {
  background: #f8f9fb;
}

.body {
  width: calc(100% - 40px);
  margin: 20px;
  max-width: 800px;
  font-size: 14px;
  padding: 10px;
  padding-bottom: 30px;
}

.post {
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
}

.post .title {
  margin-top: 50px;
  text-align: center;
  font-size: 24;
}

.container {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  text-align: left;
}

.nav-list {
  text-align: left;
}
</style>
