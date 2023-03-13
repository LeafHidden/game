<template>
    <!-- 搜索 -->
    <div class=" px-12px py-14px container_bg">
      <div class="flex w-full " >
        <div class="flex w-full w- items-center justify-between">
          <div class="mr-12px">
            <img src="/image/y-logo.png" @click="open()" alt="logo" />
          </div>
          <div class="">
            <div class="flex items-center  reactive" >
              <input  
              class="search_input rd-5px rounded-r-none "
              type="text"
               w="160px"
              
               p="y-6px x-17px"
               outline="none active:none"
               placeholder="搜索..." />
              <button 
              class="rd-6px color_white search_button rounded-l-none"
              type="submit"
              p="y-8.5px x-17px"
              text="14px"
              c="c-white"
              >搜索</button>
            </div>
          </div>
        </div>
   
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router=useRouter()
  const open=()=>{
    router.push('/')
  }
  </script>
  
  <style scoped lang="scss">
  .menu{
      &:hover .drop_menu{
          display: block;
      }
  }
  </style>
  
  