import { defineStore } from "pinia";
import { Mock } from '~/types/data';
import server from "~/server/api";
import {getItem,setItem} from '~/utils/store'
import { useStorage } from '@vueuse/core'
import data from '~/public/mock.json'
const key="MOCK_KEY";
const Key_term="IS_TERM";
var localStorage;
export const default_obj:Mock={
    all:{data:[]},
    classifys:[],
    tag:[],
    hot:[],

}
// export const localestore= useStorage(key, default_obj, localStorage) 

export const useGameJson = defineStore('main', {
    state: () => {
        return {
            isProlonged: false,
            list: <Mock>{}
        }
    },
    getters:{
        getList:(state)=>{
         
            return state.list
        }
    },
    actions: {
        async getData() {
          
            
            try{
                this.list=data
                //  const { data } = await useFetch('/api/getGameJson', {
                //     method: 'get'
                //   })
                //   if(data.value){
                //     this.list=data.value.data
                //   }

               
            }catch(err){
                console.log('mock找不到了');
                
            }
        }
    }
})