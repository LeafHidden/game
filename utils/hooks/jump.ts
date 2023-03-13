import {Item} from '~/types/data';
import {storageAdd} from '~/utils/store';
import {Router} from 'vue-router'

export function open(val:Item,router:Router):void{
    let routeData = router.resolve({
          query:{url:val.url,arr:val.classify.join(','),id:val.id},
          path:'/details'
     });
     storageAdd(val)
    window.open(routeData.href, '_blank');
}
