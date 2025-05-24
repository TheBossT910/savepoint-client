// Taha Rashid
// May 18, 2025
// a file to keep default constants for items in /interfaces/api
import { IProducts } from '@/interfaces/api';
const defaultUrl = 'https://wallpapers.com/images/featured-full/solid-grey-ew5fya1gh2bgc49b.jpg'

export const defaultProduct: IProducts = {
    id: '',
    created_at: '',
    name: '',
    slug: '',
    cover: defaultUrl,
    media: [defaultUrl, defaultUrl, defaultUrl],
    description: '',
    release_date: -1,
    upc: '',
    price_new: -1,
    price_complete: -1,
    price_loose: -1,
    price_last_updated: -1
}