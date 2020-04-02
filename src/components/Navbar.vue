<template>
  <div class="navbar fixed top-0 left-0 w-full py-5 z-30 md:py-10 bg-white md:bg-transparent">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo capitalize font-sans text-sm md:text-xl">S.A saputra</div>
      <div class="navbar_menu_container text-sm md:text-md flex capitalize font-sans">
        <!-- <div class="navlist mr-4 md:mr-8">menu</div>
        <div class="navlist mr-4 md:mr-8">menu</div>-->
        <div class="navlist cursor-pointer" @click="toggleMenu">menu</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>
