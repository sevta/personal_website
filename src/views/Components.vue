<template>
  <div class="components-wrapper">
    <div class="container mx-auto">
      <div class="text-2xl uppercase font-bold">components</div>
      <div class="gallery-container w-full">
        <div class="row">
          <div
            v-for="(item, index) in 12"
            :key="index"
            @click="onItemClick($event)"
            class="gallery-item"
          >
            item {{ index }}
            <div class="cursor-pointer" @click.stop="onItemClose">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    target: null
  }),
  computed: {
    ...mapState(["scrollBarInstance"])
  },
  mounted() {},
  methods: {
    onItemClose() {
      document.querySelector(".scroll-wrapper").style.zIndex = "auto";
      document.body.style.overflow = "";

      this.target.style.transform = `translate(0, 0)`;
      this.target.style.borderRadius = "30px";
      this.target.style.position = "";
      this.target.style.top = 0 + "px";
      this.target.style.left = 0 + "px";
      this.target.style.margin = "0px 0px 30px 30px";
      this.target.style.width = "";
      this.target.style.height = "";
      this.target.style.zIndex = "";
    },
    onItemClick(event) {
      let el = event.target;
      this.target = el;
      let pos = {
        y: el.getBoundingClientRect().y,
        x: el.getBoundingClientRect().x
      };

      document.querySelector(".scroll-wrapper").style.zIndex = 200;
      document.body.style.overflow = "hidden";

      this.target.style.transform = `translate(${pos.x * -1}px, ${pos.y *
        -1}px)`;
      this.target.style.position = "fixed";
      this.target.style.borderRadius = "0px";
      this.target.style.top = pos.y + "px";
      this.target.style.left = pos.x + "px";
      this.target.style.margin = 0 + "px";
      this.target.style.width = "100vw";
      this.target.style.height = "100vh";
      this.target.style.zIndex = "200";
      this.scrollBarInstance.scrollTo(0, 0, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/mymixins/index";
.components-wrapper {
  padding-top: 100px;
  width: 100%;

  .gallery-container {
    width: 100%;
    --gutter: 30px;
    margin-top: 30px;
    .row {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
      .gallery-item {
        @include flex-center(column);
        border-radius: 30px;
        flex: 0 0 calc(33.3% - var(--gutter));
        height: 200px;
        background-color: tomato;
        margin: 0 0 var(--gutter) var(--gutter);
        cursor: pointer;
        transition: all 0.6s ease;

        @media (max-width: 1024px) {
          flex: 0 0 100%;
        }
      }
    }
  }
}
</style>