<template>
    <div class="w-full  con flex-grow flex-col flex items-center">
    <div class="flex flex-col h-full index w-1230px  flex-grow">
    <!-- 搜索文本区域 -->
    <search/>
    <!-- 热门游戏 -->
   <popular/>
   <!-- 分类 -->
   <classify class=" flex flex-col"></classify>
   <footers></footers>
  </div>
    </div>
 
</template>

<script setup lang="ts">
 

  
</script>
<style scoped lang="scss">
.con{
    min-height: 100%;
    height: fit-content;
    background: #f6f7fa;
}

</style>
