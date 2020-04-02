<template>
  <div class="home">
    <div class="header w-full">
      <div class="container mx-auto">
        <div class="heading-text">Believes in perfection by design and performance by default.</div>
        <div class="heading-img-container">
          <div class="heading-img heading-img-1">
            <img :src="headingImg[0]" />
          </div>
          <div class="heading-img heading-img-2">
            <img :src="headingImg[1]" />
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <div class="container flex justify-center mx-auto">
        <div class="row w-full flex flex-col md:flex-row justify-center">
          <div class="col w-full md:w-1/5 p-3">
            <div class="font-mono mb-6">Skills</div>
            <div
              class="font-sans text-2xl capitalize"
              v-for="(skill, i) in skills"
              :key="i"
            >{{ skill }}</div>
          </div>
          <div class="col w-full md:w-1/3 p-3">
            <div class="font-mono mb-6">About Me</div>
            <div>
              Rezo Zero is a graphic and digital studio that designs and
              develops unique brand identities and tailor-made digital
              solutions. At the heart of its approach is the constant search for
              the juncture between aesthetic beauty and technical performance.
              Rezo Zero envisions each of its creations as a singular piece at
              the service of each client’s communication strategy while
              introducing elements of the avant-garde.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, TimelineMax } from "gsap";
import EventBus from "../utils/eventBus";

export default {
  name: "Home",
  data: () => ({
    headingImg: [
      "https://images.pexels.com/photos/2315712/pexels-photo-2315712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    skills: ["javascript", "SCSS", "Sleep", "React Js", "Vue Js", "Node Js"]
  }),
  mounted() {
    this.attachEventBus();
    this.runMountAnimation();
  },
  methods: {
    runParallax(ref, y, val) {
      ref.style.transform = `translate3d(0, ${y * val}px, 0)`;
    },
    attachEventBus() {
      EventBus.$on("ON_SCROLL", evt => {
        let y = evt.offset.y;
        let img1wrapper = document.querySelector(".heading-img-1");
        let img1 = document.querySelector(".heading-img-1 img");
        let img2wrapper = document.querySelector(".heading-img-2");
        let img2 = document.querySelector(".heading-img-2 img");
        // this.runParallax(img1wrapper, y, -0.05);
        this.runParallax(img1, y, 0.2);
        // this.runParallax(img2wrapper, y, -0.05);
        this.runParallax(img2, y, 0.2);
      });
    },
    runMountAnimation() {
      let tlMenu = new TimelineMax();
      let tlImg = new TimelineMax();
      let navList = document.querySelectorAll(".navlist");
      let logo = document.querySelector(".logo");
      let img = document.querySelectorAll(".heading-img");
      TweenLite.set(navList, {
        y: 30,
        autoAlpha: 0
      });

      TweenLite.set(img, { autoAlpha: 1 });
      TweenLite.set(logo, { autoAlpha: 0, y: 30 });

      tlImg.staggerFrom(
        img,
        1.1,
        {
          height: 0,
          autoAlpha: 0
        },
        0.3
      );

      TweenLite.to(logo, 0.7, {
        autoAlpha: 1,
        y: 0
      });

      tlMenu.staggerTo(
        navList,
        0.7,
        {
          y: 0,
          autoAlpha: 1
        },
        0.1
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../node_modules/mymixins/index";
.home {
  /* height: 300vh; */
  padding-top: 200px;
  padding-bottom: 100px;
  .heading-text {
    position: relative;
    width: 100%;
    max-width: 65vw;
    font-size: 140px;
    line-height: 135px;
    z-index: 4;
    @include breakpoint(phone) {
      font-size: 40px;
      line-height: 45px;
    }
  }
  .heading-img-container {
    .heading-img {
      position: absolute;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      &-1 {
        @include size(800px, 600px);
        top: 90vh;
        left: 5vw;
        @include breakpoint(phone) {
          top: 80vh;
        }
      }
      &-2 {
        @include size(520px, 400px);
        top: 60vh;
        right: 0;
      }
      @include breakpoint(phone) {
        width: 40vw;
      }
    }
  }

  .section-2 {
    padding-top: 50vh;

    @include breakpoint(phone) {
      padding-top: 112vh;
    }
  }
}
</style>
