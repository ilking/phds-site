<template>
  <div class="site-footer">
    <div class="footer-logo">
      <img src="../assets/phds-logo.png" />
    </div>
    <div class="footer-links">
      <router-link v-for="(route, index) in routerLinks" :to="route.path" :key="index">{{ route.text }}</router-link>
      <a href="mailto:webmaster@phds.org">Web Master: Ian King</a>
      <a href="https://www.thinkpodsolutions.com">Think Pod</a>test
    </div>
    <div class="footer-logo right nohover">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    routerLinks() {
      return [
        { path: "/", text: "Home" },
        { path: "/about", text: "About Us" },
        { path: "/", text: "Divisions" },
        { path: "/", text: "News & Events" },
        { path: "/", text: "Admissions" },
        { path: "/", text: "Community" },
        { path: "/", text: "Support Us" }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.site-footer {
  display: flex;
  width: 100%;

  .footer-links {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    justify-content: space-around;

    a {
      font-size: 12px;
    }
  }

  .footer-logo {
    display: flex;
    flex-basis: 20%;
    justify-content: flex-start;

    &.right {
      justify-content: flex-end;
    }

    &:hover {
      filter: grayscale(100%);
    }

    &.nohover:hover {
      filter: none;
    }
    img {
      height: 6vh;
    }
  }
}
</style>
