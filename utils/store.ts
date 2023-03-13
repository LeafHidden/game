
import { useStorage } from '@vueuse/core'
import {Item} from '~/types/data';
export  const key_locael='GAME_KEY'
const sum=27
type DEFAULT={
    data:Array<Item>
    key:{
        [key:string]:string,
    }

}
export const default_obj:DEFAULT={
    data:[],
    key:{}
}
export function getItem(key:string){
    return JSON.parse(localStorage.getItem(key)||'') 
 }
export  function storageAdd(data:Item){
    const state= useStorage(key_locael, default_obj, localStorage) 
    if(state.value.key[data.id]) return
    if(state.value.data.length>sum-1){
        delete state.value.key[state.value.data[0].id];
        state.value.data.shift()
    }
    state.value.key[data.id]=data.id
    state.value.data.push(data)
   
}



