// Taha Rashid
// May 17, 2025
// API interfaces

export interface IProducts {
    id: string,
    created_at: string,
    name: string,
    slug: string,
    cover: string,
    media: string[],
    description: string,
    release_date: number,
    upc: string,
    price_new: number,
    price_complete: number,
    price_loose: number,
    price_last_updated: number
}

export interface IProductsInventory {
    type: {
        new: number
        complete: number
        used: number
    }
    condition: {
        new: number
        excellent: number
        veryGood: number
        good: number
        acceptable: number
    }
    info: {
        name: string
        cover: string
    }
}