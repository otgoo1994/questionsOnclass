<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="youtube">
    <a href="https://www.youtube.com/channel/UC8CFyKbS5Vcv0V-cAkpdRFw" target="_blank"><img src="@/assets/image/youtube.png" alt=""></a>
  </div>
</template>

<style lang="scss">
.youtube {
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 50px;
  top: 50%;
  background: rgba(#fff, 0.5);
  cursor: pointer;
  a {
    display: contents;
  }
  
  img {
    width: 115%;
    height: 115%;
    object-fit: cover;
  }
}
</style>