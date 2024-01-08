import { Ref } from 'vue'
import useHttp from "./http";

const { http } = useHttp()

export default function usePokemon() {
    const getAll = async (page: number, limit = 10) => {
        const offSet = (page - 1) * limit
        const { data } = await http.get(`item-attribute?limit=${limit}&offset=${offSet}`)
        return data
    }
    const getDetail = async (name:string) => {
        const { data } = await http.get(`item-attribute/${name}`)
        return data
    }
    return { getAll,getDetail }
}