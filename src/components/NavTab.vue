<template>
  <div class="navtab" @click="onClick">
    <router-link to="name">{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavTab",
  props: {
    path: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      active: false
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: this.name });
    }
  }
};
</script>

<style lang="less">
.navtab {
  background: transparent url(../assets/menu-text-bg.png) no-repeat center center;
  cursor: pointer;
  width: fit-content;

  a {
    color: #83b3cf !important;
    display: block;
    font-size: 13px;
    font-weight: bold;
    height: 33px;
    line-height: 33px;
    margin: 0px 8px;
    text-align: center;
    min-width: 6vw;
  }

  &:hover {
    background-image: url(../assets/menu-roll-bg.png);

    a {
      color: white !important;
    }
  }
}
</style>
