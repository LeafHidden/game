
// import data from '../json/mock.json'
import datas from '../json/mock.js'

export default async (req: any, res: any) => {
    return {
        data: datas||[]
    }
}