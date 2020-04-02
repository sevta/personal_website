<template>
  <footer class="footer py-10 text-white w-full bg-gray-900">
    <div class="container mx-auto h-full">
      <div class="row h-full flex justify-end items-end">
        <div class="footer-text font-sans">
          Footer
          <span>.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 400px;

  @media (max-width: 1024px) {
    height: 250px;
  }
  .footer-text {
    position: relative;
    font-size: 90px;

    @media (max-width: 1024px) {
      font-size: 30px;
    }

    &::before {
      content: "";
      width: 15px;
      height: 60%;
      position: absolute;
      left: -40px;
      top: 42%;
      transform: translateY(-50%);
      background-color: deeppink;
    }
    span {
      display: none;
      color: deeppink;
    }
  }
}
</style>
