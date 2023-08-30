<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="header">
      <div class="title">
        CHECK UP YOUR <span>KT&G WAY</span>
      </div>
      <div class="content">
        <img src="@/assets/image/bluepop.png" alt="kt&g">
        <i class="el-icon-arrow-down"></i>
        <div class="research-title">
          Proper Critical Mind
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import Footer from '@/layout/footer.vue';
export default {
}
</script>

<style lang="scss" scoped>
.topbar {
  .sign-in {
    svg {
      border-left: 1px solid rgba(#fff, .5);
      fill: #fff;
      margin-top: 3px;
      margin-left: 5px;
      padding-left: 10px;
      display: block;
      width: 20px;
      height: 20px;
    }
  }
}

.topbar.white {
  .sign-in {
    svg {
      border-left: 1px solid rgba(#4d4d4d, .3);
      fill: #4d4d4d;
    }
  }
}
</style>