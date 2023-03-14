
import data from '../json/mock.json'
import datas from '../json/mock.js'
console.log(datas);

export default async (req: any, res: any) => {
    return {
        data: datas||[]
    }
}