// Taha Rashid
// May 17, 2025
// API services

import { Products } from "../interfaces/api"
import axios from "axios"

export const fetchProducts = async(): Promise<Products[]> => {
    const response = await axios.get<Products[]>('http://localhost:8080/products/lists/popular')
    return response.data
}

// DEBUG
// console.log(fetchProducts())
