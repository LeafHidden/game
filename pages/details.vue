<template>
  <div class="detail">
    <div class="header w-full bg">
        <detail-header class="w-1000px m-auto"></detail-header>
    </div>
    <div class="w-1000px m-auto">
     
      <div class=" w-full flex">
        <div class="detail_loading" v-if="!show">
          <div class="loading"></div>
        </div>

        <iframe
          v-show="show"
          ref="commandIframe"
          class="w-full"
          :src="src"
        ></iframe>
      </div>
    </div>
    <div class="footer w-full bg">
        <detail-footer class=""/>
    </div>
  </div>
</template>
  
<script  setup >
import { useRoute } from 'vue-router'
const commandIframe = ref(null);
const show = ref(false);
const route = useRoute()
const src = ref('')
onMounted(() => {
  src.value = route.query.url
  setTimeout(() => {
    if (commandIframe.value) {
      show.value = true;
    }
  }, 800);
});
  </script>
  
  <style lang="scss" scoped>
  .bg{
    background: #fff;
  }

  .detail{
    background: #f6f7fa;

  }
.detail_loading {
  position: absolute;
  display: flex;

  transition: 0.3s linear;
  top: 50%;
  left: 50%;
  z-index: 4;
  height: calc(100%);

  width: 100%;

  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background: #fff;
}
iframe {
  transition: 0.3s linear;
  height: 736px;
  min-width: 414px;
}
</style>