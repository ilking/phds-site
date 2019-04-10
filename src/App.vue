<template>
  <div id="app">
    <NavigationBar />
    <div class="content-area">
      getting real testy
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 15px;
  background: url(/body-bg.jpg);

  .content-area {
    background-color: white;
    padding: 10px 15px;
    padding-top: 30px;
  }
}
</style>
