<template>
  <div class="absolute w-230px py-10px left--50%  top-30px z-11 drop_menu rounded-4px">
    <div>
      <div class="pt-8px flex px-10px">
        <span class="loves inline-block w-3px mr-5px h-12px relative top-1px">
        </span>
        <div class="text-12px love font-600 leading-none ">我玩过的</div>
      </div>
      <div class="wraper">
        <div
          class="flex min-h-291px overflow-hidden child px-10px"
          ref="wraperChild"
          :style="{ width: `calc(${tuples.length * 100 + '%'} + 0px)` }"
        >
          <div
            class="grid flex-1 w-full py-8px grid-cols-3 gap-10px text-center"
            :class="state.data.length > 9 ? 'p-r-10px ' : ''"
            v-for="(item, index) in tuples"
            :key="item"
          >
            <div class="item" @click="open(itemChild,router)" v-for="itemChild in item" :key="itemChild.index">
              <img :src="itemChild.avatar" class="h-60px w-full rounded-8px" alt="" />
              <div class="text_">
                <span class="text-11px"> {{ itemChild.name }} </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img src="/image/left.png" class="mr-5px" @click="clear" />
          <div class="gap-x-5px flex">
            <div
              class="w-6px h-6px rounded-3px round"
              v-for="(item, index) in tuples"
              :key="item"
              :class="[index === currindex ? 'active' : '']"
            ></div>
          </div>
          <img src="/image/right.png" class="ml-5px" @click="add" />
        </div>
      </div>
    </div>
  </div>
</template>
// 
<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'

import {open} from '~/utils/hooks/jump';
import {default_obj,key_locael} from '~/utils/store'
const currindex = ref(0);
const wraperChild = ref<HTMLDivElement>();
const state = useStorage(key_locael, default_obj, localStorage)

const tuples=computed(()=>{
    if(state.value.data.length) return group(state.value.data,9)
    return []
    
})


const clear = () => {
  if (currindex.value < 1) return;
  currindex.value--;
  scrolling(false);
};


const router=useRouter();
const scrolling = (state:boolean) => {
if (!wraperChild.value) return
if(wraperChild.value.children.length===0) return
    let width=wraperChild.value.children[0].clientWidth
    let offset= width*currindex.value
    if(offset){
        if(!state){
            offset=Math.abs(offset)
        }else{
            offset=~offset;
        }
    }
    wraperChild.value.style.transform = `translateX(${offset}px)`;
};

const add = () => {
  if (currindex.value >= 2) return;
  currindex.value++;
  scrolling(true);
};



function group(array: any, subNum: number) {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subNum)));
  }
  return newArray;
}
</script>

<style lang="scss" scoped>
.active {
  background: #ff7a22 !important;
}
.drop_menu {
    display: none;

  box-shadow: 0px 4px 6px 0px rgba(255, 122, 34, 0.1);

  border: solid 1px rgba(255, 122, 34, 0.5);
  background: #fff;
  .child {
    transition: all 0.3s ease 0s;
  }
  .love {
    color: #ff7a22;
  }
  .loves {
    background: #ff7a22;
  }
  .round {
    background: #d3d3d3;
    transition: 0.2s ease-in-out;
  }
  .item {
    color: red;
  }
}
.wraper{
    overflow: hidden;
}
.grid {
  grid-template-rows: repeat(3, minmax(85px, auto));
  img {
    background: #ccc;
  }
  .text_ {
    color: #9b9a9a;
    overflow: hidden;
    Text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>