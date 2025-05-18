// Taha Rashid
// May 17, 2025
// API services

import { Products } from "../interfaces/api"
import axios from "axios"

const address = '192.168.2.97'
// const address = 'localhost'

export const productService = {
    getListsPopular: async () => {
        const response = await axios.get<Products[]>(`http://${address}:8080/products/lists/popular`)
        return response.data
    },
    getListsTrending: async () => {
        const response = await axios.get<Products[]>(`http://${address}:8080/products/lists/trending`)
        return response.data
    },
    getListsHighestRated: async ( platform: string) => {
        const response = await axios.get<Products[]>(`http://${address}:8080/products/lists/highest-rated`, {
            params: {
                platform: platform,
            }
        })
        return response.data
    }
}

export const developerService = {
    getGetProducts: async ( recordId: string ) => {
        const response = await axios.get<Products[]>(`http://${address}:8080/developer/get-products`, {
            params: {
                id: recordId,
            }
        })
        return response.data
    }
}

// DEBUG
// console.log(fetchProducts())
// developerService.getGetProducts('e408dad8-23e1-46c5-9b8a-7e47cc7eb114')
//     .then( (data) => console.log(data) )
