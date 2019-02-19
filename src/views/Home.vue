<template>
  <div class="home">
    <NavMenu />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    NavMenu,
    HelloWorld
  }
};
</script>
