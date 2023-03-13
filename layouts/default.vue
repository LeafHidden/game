<template>
  <main class="w-full flex-col flex ">
    <div class="h-full flex-col flex flex-grow">
        <slot />
    </div>
 
    
  </main>
</template>

<style scoped lang="scss">
main{

 min-height: 100%;   

}
</style>