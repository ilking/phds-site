<template>
  <sidebar-menu
    :menu="getMenu"
    :showOneChild="true"
    :collapsed="true"
    width="200px"
    theme="white-theme"
  />
</template>

<script>
export default {
  name: "NavMenu",
  computed: {
    getMenu() {
      return this.$store.state.menu;
    }
  }
};
</script>
