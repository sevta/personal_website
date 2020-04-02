<template>
  <div id="app">
    <Navbar />
    <Menu />
    <div ref="scrollWrapper" class="scroll-wrapper fixed top-0 left-0 w-full h-screen">
      <router-view />
      <Footer />
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import EventBus from "./utils/eventBus";
import { mapState } from "vuex";
import SmoothScrollbar from "smooth-scrollbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import Menu from "@/components/Menu";

export default {
  data: () => ({
    smoothScrollbarInstance: null
  }),
  components: {
    Navbar,
    Footer,
    ScrollIndicator,
    Menu
  },
  computed: {
    ...mapState(["toggleMenu", "scrollBarInstance"])
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    initScrollbar() {
      this.$store.commit("setSmoothScrollbar", this.$refs.scrollWrapper);
    }
  }
};
</script>

<style lang="scss">
body {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.scrollbar-track {
  background-color: transparent;
}

.scroll-wrapper {
}

.container {
  padding: 0px 24px;
  @media (max-width: 1366px) {
    padding: 0px 40px;
  }
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
}
</style>
