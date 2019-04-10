<template>
  <div class="topnavbar">
    <div class="nav-logo"><img src="../assets/phds-logo.png" />test</div>
    <div class="nav-list">
      <NavTab v-for="(route, index) in this.$store.state.menuLinks" :key="index" :path="route.path" :name="route.name" :text="route.text" />
    </div>
  </div>
</template>

<script>
import NavTab from "@/components/NavTab.vue";

export default {
  name: "NavigationBar",
  components: {
    NavTab
  }
};
</script>

<style lang="less">
.topnavbar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;

  .nav-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    background: #fafafa;
    padding: 15px 10px 5px;
    border-radius: 0px 8px 8px 8px;
    border: 2px solid #ddd;
  }

  .nav-logo {
    width: 259px;
    background: transparent url(../assets/logo-bg.png) no-repeat center bottom;

    &:hover {
      filter: grayscale(100%);
    }
    img {
      height: 82px;
    }
  }
}
</style>
