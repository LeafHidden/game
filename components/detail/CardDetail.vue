<template>
  <div
    class="card w-25% relative h-fit rounded-5px"
    v-for="item in data"
    :key="item.id"
    @click="open(item,router)"
  >
    <div class="w-full h-201px overflow-hidden" :class="$attrs.className">
      <img :src="item.cover" class="card_img w-full h-full rounded-5px" />
    </div>
    <div class="flex items-center relative p-10px card_text">
      <div class="ml-6px flex w-full items-center justify-between">
        <h3 class="text-16px font-550">{{ item.name }}</h3>
        <button class="text-13px btn">秒玩</button>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
import {Item} from '~/types/data';
import {open} from '~/utils/hooks/jump';
 defineProps({
  data: {
    type: Array<Item>,
    default: [],
  },
});

const router = useRouter();

</script>
  
<style lang="scss"  scoped>
.card {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.09);
  transition: 0.2s linear;
  .card_img {
    cursor: pointer;
    transition: 0.3s linear;
  }
  &:hover {
    .card_img {
      transform: scale(1.4);
    }
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

}
.btn{
    background-image: linear-gradient(95deg, 
		#ff7430 0%, 
		#ff7430 46%, 
		#ffc664 100%, 
		#ffc664 100%);
        box-shadow: 0px 2px 4px 0px 
		rgba(255, 116, 48, 0.2);
	border-radius: 15px;
    outline: none;
}
// 热门

.card_img {
  background: #ccc;
}
</style>