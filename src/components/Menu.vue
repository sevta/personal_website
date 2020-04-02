<template>
  <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
    <div
      v-if="toggleMenu"
      class="menu fixed w-full bg-gray-900 text-white p-10 h-screen fixed top-0 left-0 z-50"
    >
      <div class="close-container w-full fixed top-0 left-0 px-20 pt-10 flex justify-end">
        <div class="text-sm font-bold capitalize cursor-pointer text-white" @click="closeMenu">close</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import { TweenLite, TimelineMax } from "gsap";
export default {
  computed: {
    ...mapState(["toggleMenu"])
  },
  methods: {
    closeMenu() {
      this.$store.commit("toggleMenu");
    },
    beforeEnter(el) {
      TweenLite.set(el, {
        scale: 0.5,
        rotate: 20,
        autoAlpha: 0
      });
    },
    enter(el, done) {
      TweenLite.to(el, 0.2, {
        scale: 1,
        rotate: 0,
        autoAlpha: 1,
        onComplete() {
          done();
        }
      });
    },
    leave(el, done) {
      let tl = new TimelineMax({
        onComplete() {
          done();
        }
      });
      tl.to(el, 0.3, {
        width: "40vw",
        height: "40vw",
        borderRadius: "50%"
      }).to(el, 0.4, {
        x: "150%",
        Y: "-20%",
        scale: 0.5,
        autoAlpha: 0
      });
    }
  }
};
</script>