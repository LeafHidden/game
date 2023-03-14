<template>
  <div class="w-full container_bg mt-10px">
    <div class="flex items-center p-12px gap-x-15px gap-y-15px">
        <card 
        :data="cardData"
        ></card>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Item} from '~/types/data';

const cardData = ref<Array<Item>>([]);
    const store = useGameJson()
const getdata = async () => {
    
    const {hot}=store.getList;

    
    
    cardData.value=hot.slice(0,3)
};
getdata()
</script>

<style lang="scss" scoped>

:deep(.card){
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 230px;
    >div:nth-child(1){
        position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    }
    .card_text{
        margin-top: auto;
        color: #fff;
        span{
            color: #fff;
        }
    }

}

</style>

