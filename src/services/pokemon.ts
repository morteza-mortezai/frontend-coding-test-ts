import useHttp from "./http";
import { GetPokemonListResponse } from '../types/Api/getPokemonListResponse';
import { GetPokemonDetailResponse } from "../types/Api/getPokemonDetailResponse";

const { http } = useHttp()

export default function usePokemon() {
    const getAll = async (page: number, limit = 10) => {
        const offset = (page - 1) * limit
        const { data } = await http.get <GetPokemonListResponse>(`pokemon`, { params: { offset, limit } })
        return data
    }
    const getDetail = async (name: string) => {
        const { data } = await http.get<GetPokemonDetailResponse>(`pokemon/${name}`)
        return data
    }
    return { getAll, getDetail }
}