

export default class server{

   static async post(url:string,data:object){
        return $fetch('https://www.waipu3.com'+url,{
            method :"POST",
            body:data
        })
    }
    static async get(url:string){
        return $fetch(url,{
            method :"get",
        })
    }
    static getData():Promise<any>{
      return this.get('/mock.json')
    }
}