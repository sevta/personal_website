<template>
  <div class="scroll-indicator flex items-center">
    <div class="bullet"></div>
    <div class="scroll-text text-xs font-mono capitalize">scroll</div>
  </div>
</template>

<script>
import EventBus from "../utils/eventBus";
import { TweenLite } from "gsap";

export default {
  data: () => ({
    animateBulletToTop: false
  }),
  mounted() {
    this.attachEventBus();
  },
  methods: {
    attachEventBus() {
      EventBus.$on("ON_SCROLL", evt => {
        let y = evt.offset.y;
        let wrapperHeight =
          document.querySelector(".scroll-content").offsetHeight -
          window.innerHeight;
        console.log("y", y, (y / wrapperHeight) * 100);
        this.animateBullet((y / wrapperHeight) * 100);
      });
    },
    animateBullet(y) {
      let bullet = document.querySelector(".bullet");
      let scrollWrapper = document.querySelector(".scroll-indicator");
      console.log(y > 250, y);
      if (y == 0) {
        TweenLite.to(bullet, 0.4, {
          x: "-13vh"
        });
        // TweenLite.to(scrollWrapper, 0.8, {
        //   top: "60%"
        // });
        return;
      } else {
        TweenLite.to(bullet, 0.3, {
          x: 0,
          width: 12,
          left: `${y}%`
        });
        // TweenLite.to(scrollWrapper, 0.8, {
        //   top: "50%"
        // });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-indicator {
  width: 80px;
  background-color: #666;
  border-radius: 3px;
  height: 1px;

  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  z-index: 10;
  .bullet {
    position: absolute;
    top: -6px;
    left: 0px;
    border-radius: 30px;
    width: 12px;
    height: 12px;
    background-color: deeppink;
  }
  .scroll-text {
    transform: rotate(180deg);
    margin-left: -75px;
  }
}
</style>
