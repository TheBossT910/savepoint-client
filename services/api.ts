// Taha Rashid
// May 17, 2025
// API services

import { Products } from "../interfaces/api"
import axios from "axios"

export const fetchProducts = async(): Promise<Products[]> => {
    const response = await axios.get<Products[]>('http://localhost:8080/products/lists/popular')
    return response.data
}

export const productService = {
    getListsPopular: async () => {
        const response = await axios.get<Products[]>('http://localhost:8080/products/lists/popular')
        return response.data
    },
    getListsTrending: async () => {
        const response = await axios.get<Products[]>('http://localhost:8080/products/lists/trending')
        return response.data
    },
    getListsHighestRated: async ( platform: string) => {
        const response = await axios.get<Products[]>('http://localhost:8080/products/lists/highest-rated', {
            params: {
                platform: platform,
            }
        })
        return response.data
    }
}

// DEBUG
// console.log(fetchProducts())
