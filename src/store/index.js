import Vue from "vue";
import Vuex from "vuex";
import SmoothScrollbar from "smooth-scrollbar";
import EventBus from "../utils/eventBus";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleMenu: false,
    scrollBarInstance: null
  },
  mutations: {
    toggleMenu(state) {
      state.toggleMenu = !state.toggleMenu;
    },
    setSmoothScrollbar(state, el) {
      state.scrollBarInstance = SmoothScrollbar.init(el);
      state.scrollBarInstance.addListener(evt => {
        EventBus.$emit("ON_SCROLL", evt);
      });
    }
  },
  actions: {},
  modules: {}
});
