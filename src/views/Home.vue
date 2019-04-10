<template>
  <div class="home">
    <div class="hero-images">heroimages</div>

    <div class="content-area">content area</div>

    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "home",
  components: {
    SiteFooter
  }
};
</script>

<style lang="less">
.home {
  display: flex;
  flex-flow: column nowrap;

  .hero-images {
    border: 1px solid red;
    width: 100%;
  }
}
</style>
