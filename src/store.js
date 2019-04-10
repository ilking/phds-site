import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  menuLinks: [
    { path: "/", text: "Home", name: "home" },
    { path: "/about", text: "About", name: "about" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" },
    { path: "/", text: "Home", name: "home" }
  ],
  menu: [
    {
      title: "Navigation",
      header: true
    },
    {
      href: "/",
      title: "Home",
      icon: "fa fa-home"
    },
    {
      href: "/about",
      title: "Why PHDS?",
      icon: "fa fa-info",
      child: [
        { href: "/", title: "Inclusive" },
        { href: "/", title: "Small Classes" },
        { href: "/", title: "Performance" },
        { href: "/", title: "Parent Invlovement" },
        { href: "/", title: "About PHDS" },
        { href: "/", title: "Mission and Goals" },
        { href: "/", title: "Faculty" },
        { href: "/", title: "Testimonials" }
      ]
    },
    {
      href: "/about",
      title: "About",
      icon: "fa fa-info"
    }
  ]
};

const mutations = {};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
