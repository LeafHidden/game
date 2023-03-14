<template>
  <div class="w-1300px m-auto">
    <div class="p-t-24px flex items-center mb-16px">
      <img src="/image/x-hot.png" class="m-r-10px" />
      <h2 class="text-15px font-600">相关推荐</h2>
    </div>
    <div class="flex w-full">
      <div class="flex w-full gap-x-10px items-center">
        <card-detail :data="list"></card-detail>
        <div class="w-25% more py-10px px-14px">
            <div class="grid grid-cols-3 gap-x-36px gap-y-13.2px">
            <div class="item"  v-for="item in data" :key="item.id">
              <img :src="item.avatar" class="h-72px w-full rounded-8px" alt="" />
              <div class="text_ text-center">
                <span class="text-11px"> {{ item.name }} </span>
              </div>
            </div>
            </div>
            <div class="text-center mt-12px">
              <div class="btn rounded-15px text-12px" @click="open">更多游戏</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRoute,useRouter } from "vue-router";
import CardDetail from "~/components/detail/CardDetail.vue";
import { Item ,All} from "~/types/data";
import {getRandomIntInclusive} from '~/utils/randomRange'
import { aesDecryptParams } from '~/utils/aes'
const route = useRoute();
const idlist = ref<Array<string>>([]);
const list = ref<Array<Item>>([]);
const data=ref<Array<Item>>([]) 
let serverData:All;
let route_id: any;
const store = useGameJson()

async function getServerJson (){
    const {all}=store.getList
    serverData=all
    data.value=ranges(6)


    
}

const getAllData = () => {
  let array: Array<Item> = [];
   
    
  for (let i = 0; i < serverData.data.length; i++) {
    const item = serverData.data[i];
  
    
    if (array.length === 3) {
      return array;
    }
    for (let j = 0; j < item.classify.length; j++) {
      const itemChild = JSON.stringify(item.classify[j]);

      if (itemChild !== "99" && idlist.value.indexOf(itemChild) !== -1) {
   
        
        if (route_id === item.id) break;
        array.push(item);
        break;
      }
    }
  }
  return array;
};

getServerJson()


function  ranges(sum:number){
    const arr:Array<number>=[];
    const allData=[];
    while(arr.length<sum){
        let a=getRandomIntInclusive(0,serverData.data.length-1);
        if(arr.includes(a)) break;
        arr.push(a)
        allData.push(serverData.data[a])
    }    
    return allData
}

const router=useRouter()
const open=()=>{
    router.push('/')
}


onMounted(() => {

  if (route.query) {
    const query=JSON.parse(aesDecryptParams(route.query.params) )
    const { arr, id } = query;
    // @ts-ignore
    idlist.value = arr.split(",");
    list.value =getAllData();
    route_id = id;
   

    
  }
});
</script>

<style>
.more{
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.09);
}
.text_{
    color: #9b9a9a;
    overflow: hidden;
    Text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1
}
.btn{
    background-image: linear-gradient(95deg, 
		#ff7430 0%, 
		#ff7430 46%, 
		#ffc664 100%, 
		#ffc664 100%);
	box-shadow: 0px 2px 4px 0px 
		rgba(255, 116, 48, 0.2);
	
}
</style>