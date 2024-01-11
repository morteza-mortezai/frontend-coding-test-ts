import useHttp from "./http";
import { GetPokemonResponse } from '../types/Api/getPokemonResponse';

const { http } = useHttp()

export default function usePokemon() {
    const getAll = async (page: number, limit = 10) => {
        const offset = (page - 1) * limit
        const { data } = await http.get <GetPokemonResponse>(`pokemon`, { params: { offset, limit } })
        return data
    }
    const getDetail = async (name: string) => {
        const { data } = await http.get(`pokemon/${name}`)
        return data
    }
    return { getAll, getDetail }
}