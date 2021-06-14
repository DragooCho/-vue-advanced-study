<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- 여기서는 케밥케이스 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar, // 파스칼케이스 (컴포넌트 테그)
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
