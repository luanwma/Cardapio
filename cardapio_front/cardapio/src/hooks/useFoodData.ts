import axios, {AxiosPromise} from "axios"
import {useQuery} from "@tanstack/react-query"
import { FoodData } from "../interface/FoodData"
const API_URL = 'http://localhost:8090'

/*
    a função async tem que retornar alguma coisa a response é um promise do axios, o axios vai no back
    e busca todas as informações, como o headers e coloca em headers, o que veio do body em um objeto data , 
    e assim por diante, então o retorno dessa arrow function é essa PromiseAxiosResponse<any, any>> e esse any any
    é que não declaramos o que irá retornar no body da request, então iremos colocar o tipo de dado que irá 
    retornar para frontend AxiosPromise recebe um generics AxiosPromise<> que é um array de FoodData que foi criado
    na pasta interface 
*/
const fetchData = async (): AxiosPromise<FoodData[] > => {
    const response = axios.get(API_URL + '/food')
    return response
}

export function useFoodData(){
    const query =  useQuery({
        queryFn : fetchData, 
        queryKey:['food-data'], retry:2
    })
    return {
        ...query, data : query.data?.data
    }
}