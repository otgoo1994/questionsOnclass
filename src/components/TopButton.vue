<template>
  <div>
    <a href="javascript:;" @click="gotop" v-if="top" class="topButton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: false
    }
  },
  created() {
    window.removeEventListener('scroll', this.detect);
    window.addEventListener('scroll', this.detect);
    this.detect();
  },
  methods: {
    detect() {
      if (window.scrollY > 50) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
    gotop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.topButton {
  width: 50px;
  height: 50px;
  background: #000;
  position: fixed;
  right: 100px;
  z-index: 10000;
  bottom: 200px;
  display: flex;
  justify-content: center;
  svg {
    fill: #fff;
    width: 30%;
  }
}

@media only screen and (max-width:720px) {
    .topButton {
      bottom: 100px;
      right: 50px;
    }
  }
</style>