import { createVNode, render } from "vue";
// import { useThrottleFn } from '@vueuse/core'
const svgIcon = {
    render (component) {
        return createVNode('div', { class: 'absolute loading_a w-full h-full max-h-full  left-0 flex just-center z-5', style: 'background:rgb(255 255 255 / 100%);top:0;color: #3787eb;' },
            [createVNode('div', { class: ' flex justify-center items-center rotate m-auto' }, [
                createVNode('div',{class:"loading"})
                // createVNode(component, { iconClass: 'loading' })

            ])]

        )
    }
}


function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}
let vm=null
const appendEl=(el)=>{
    el.appendChild(vm.el)
}
const reomveEl=(el)=>{

    el.removeChild(vm.el)
}

const directives = {
    install: ((app) => {
        app.directive('loading', {
            mounted(el,binding) {
              
                 vm = createVNode(svgIcon.render(app._context.components.SvgIcon))
                render(vm, document.createElement('div'))
           
                if(binding.value){
                    el.appendChild(vm.el);  
                }
            },
            updated (el, binding,) {
             
                if(binding.value!==binding.oldValue){
                    binding.value?appendEl(el):reomveEl(el)
                }
         
            },
        });
    })
}
export default directives;
