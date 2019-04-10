<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

=======
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

>>>>>>> huge-commit
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  background-color: white;
  padding: 15px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.vsm-collapsed {
  .vsm-dropdown {
    width: fit-content;
=======
  padding: 15px;
  background: url(/body-bg.jpg);

  .content-area {
    background-color: white;
    padding: 10px 15px;
    padding-top: 30px;
>>>>>>> huge-commit
  }
}
</style>
