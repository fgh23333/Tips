<template>
  <div class="home">
    <el-container>
      <el-header>Tips（持续更新）</el-header>
      <el-container>
        <el-aside width="240px">
          <navMenu></navMenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import navMenu from "../components/navMenu.vue"

export default {
  name: 'HomeView',
  components: {
    navMenu
  }
}
</script>

<style lang="less">
.home {

  .el-header,
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    border-top: #999 1px solid;
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
  }

  .el-main {
    border-left: #999 1px solid;
    border-top: #999 1px solid;
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
    padding: 0;
  }
}
</style>
