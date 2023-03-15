<template>
  <div class="classify flex-grow w-full px-12px py-14px container_bg">
    <div>
      <ul class="flex sm:flex-wrap md:flex-wrap items-center gap-x-24px text-13px font-500 mb-10px">
        <li
          class="cursor-pointer min-h-30px classify_li leading-30px"
          v-for="item in gameType"
          :class="[activeInx === item.inx ? 'active' : '']"
          @click="handoffClick(item)"
          :key="item.inx"
        >
          {{ item.name }}
        </li>
      </ul>
      <div></div>
    </div>
    <div class="flex-grow relative" style="min-height:100%"  v-loading="loading">
      <div class="wraper overflow-hidden">
        <!-- gap-x-15px  -->
        <div class="
        flex 
        flex-wrap 
        justify-between
        gap-y-15px" 
        ref="target">
          <card :data="cardData" ></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSorted } from "@vueuse/core";
import {Item,Classify} from '~/types/data';
import {getRandomIntInclusive} from '~/utils/randomRange'
import { useEventBus } from '@vueuse/core'
import {fooKey} from '~/utils/fookey'
import Fuse from 'fuse.js'
const bus = useEventBus(fooKey)
const gameType = ref<Array<Classify>>([]);
const cardData = ref<Array<Item>>([]);
const activeInx = ref<string | null>("99");
const loading = ref(false);
const list = ref<Array<Item>>([]);
const store = useGameJson()
async function getData(){
    const {all,classifys}=store.getList;
    gameType.value=classifys
    cardData.value =sorted(all.data,'99');
    list.value = cardData.value;

}
getData()











// fuse 搜索参数配置
const options = {
  includeScore: true,
  shouldSort:true,
  threshold: 0.4,
  location:0,
  minMatchCharLength:1,
  keys: ['name']
}
const fuse = new Fuse(list.value, options)



bus.on((e:string) => {
    if(!e) {
        cardData.value=list.value
        return
    }
    const result = fuse.search(e)

    
    if(result.length > 0) {
        const arr=result.map(item=>{
            return item.item
        })
      cardData.value=arr 
      return
    }
    cardData.value=[]
})

const handoffClick = (val: any) => {
  activeInx.value = val.inx;
//   排序
  collating(val.inx).then((res: any) => {
    cardData.value=[]
    setTimeout(() => {
      loading.value = false;
      cardData.value = res;
    }, getRandomIntInclusive(500, 1000));
  
  });
};
// 排序
function sorted(data: Array<Item>, inx: string) {
  return useSorted(data, (a: Item, b: Item) => Number(a.labelPosition[inx]) - Number(b.labelPosition[inx])).value;
}








const collating = async (inx: string) => {
  const array: any = [];
  loading.value = true;
  if (inx === "99") return Promise.resolve(list.value);
  return new Promise((resolve, reject) => {
    for (let i = 0; i < list.value.length; i++) {
      const item = list.value[i];
      if (item.classify.includes(Number(inx))) {
        array.push(item);
      }
    }
    resolve(array);
  }).then((res: any) => {
    const data=sorted(res,inx)
    return data;
  });
};







</script>

<style lang="scss" scoped>

.classify_li{
    color: #7c7c7c;
  
    &:nth-child(2){
        position: relative;
        &::after{
            content: "";
            width: 30px;
            height: 20px;
            position: absolute;
            display: inline-block;
           
            background: url('/image/y-hot.png');
            background-size: 100% 100%;
            top: -14px;
            left: 3px;
        }
    }
}
.active {
  font-size: 16px;
  color: #ff6600;
  font-weight: 600;
  transition: 0.2s linear;
}
</style>