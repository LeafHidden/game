<template>
  <!-- 搜索 -->
  <div class="w-full px-12px py-14px container_bg">
    <div class="flex justify-between sm:flex-wrap">
      <div class="flex items-center sm:mb-20px md:mb-0 sm:flex-wrap" >
        <div class="mr-12px">
          <img src="/image/y-logo.png" alt="logo" />
        </div>
        <div class="sm:mt-20px md:mt-0">
          <div class="flex items-center reactive">
            <input
              class="search_input rd-5px 
              rounded-r-none     
              sm:w-200px 
              md:w-268px"
              type="text"
           
          
              p="y-6px x-17px"
              outline="none active:none"
              placeholder="请输入您要搜索的内容..."
              v-model="val"
            />
            <button
              class="rd-6px color_white search_button rounded-l-none"
              type="submit"
              p="y-8.5px x-17px"
              text="14px"
              c="c-white"
              @click="search"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="menu relative flex items-center p-8px rounded-4px">
          <div class="people" w="14px" h="14px"></div>
          <span class="text-12px mx-6px" inline-block>我玩过的</span>
          <div>
            <img src="/image/y_down.png" />
          </div>
          <DropMenu class="drop_menu" v-if="show"> </DropMenu>
        </div>
        <div class="menu relative flex items-center p-8px rounded-4px ml-10px">
          <div class="like" w="13px" h="13px"></div>
          <span class="text-12px mx-6px" inline-block>猜你喜欢</span>
          <div>
            <img src="/image/y_down.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

import {fooKey} from '~/utils/fookey'
const bus = useEventBus(fooKey)
const val=ref('')
const search=()=>{

    
    bus.emit(val.value)
}


const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<style scoped lang="scss">
.menu {
  .people {
    background: url("/image/y_people2.png");
    background-size: 100% 100%;
  }
  .like {
    background: url("/image/y_like2.png");
    background-size: 100% 100%;
  }
  &:hover.menu {
    background-color: rgba(255, 122, 34, 0.12);
    color: #ff7a22;
    .people {
      background: url("/image/y_people.png");
      background-size: 100% 100%;
    }
    .like {
      background: url("/image/y_like.png");
      background-size: 100% 100%;
    }
    .drop_menu {
      display: block;
    }
  }
}
</style>

