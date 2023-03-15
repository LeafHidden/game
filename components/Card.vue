<template>
  <div class="container 
  sm:flex-basis-48% 
  sm:max-w-48% 
  lg:flex-basis-24%
  
   card relative h-fit rounded-5px"  
   :class="$attrs.className"
   v-for="item in data" :key="item.id" @click="open(item,router)" >  
  
    <div class=" h-160px overflow-hidden"  :class="$attrs.className">
        <img  :src="item.cover" class="card_img  w-full h-full rounded-5px ">
    </div>
    <div class="tags absolute top-10px " v-if="item.tags">
        <img :src="`/image/${imageArray[Number(item.tags)]}.png`">
    </div>
    <div class="flex w-full  items-center relative p-10px card_text ">
        <img :src="item.avatar" class="w-40px h-40px rounded-3px">
        <div class="ml-6px flex flex-col grow overflow-hidden"  >
            <h3 class="text-16px font-550 _text inline-block w-full">{{ item.name }}</h3>
            <span class="text-13px color_text _text inline-block w-full">{{ item.explain }}</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import {Item} from '~/types/data';
import {open} from '~/utils/hooks/jump';
const imageArray:Array<string>=[
    'm',
    'h',
    'j'
]
const router=useRouter()
defineProps({
    data:{
        type:Array<Item>,
        default:[]
    },
    topical:{
        type:Boolean,
        default:false,
    }

})
</script>

<style lang="scss"  scoped>
.card{
  
    box-shadow: 0px 2px 6px 0px 
		rgba(0, 0, 0, 0.09);
        transition: 0.2s linear;
        .card_img{
            cursor: pointer;
    transition:  0.3s linear;
        }
        &:hover{
            .card_img{
                
    transform: scale(1.4);
            }
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        }

}
// 热门

._text{
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card_img{
    background: #ccc;
}

.tags{
    z-index: 1;
    >img{
    transform: scale(0.8);
}
}



</style>