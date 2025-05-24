// Taha Rashid
// May 18, 2025
// Inventory home screen

import React from 'react';
import { View, ScrollView } from 'react-native';
import useStyles from './styles';
import ProductCard from '@/components/ProductCard';
import { IProductsInventory } from '@/interfaces/api';

const InventoryHomeScreen = () => {
    const { styles } = useStyles();

    // testing object
    const product: IProductsInventory = {
        type: {
            new: 2,
            complete: 5,
            used: 23
        },
        condition: {
            new: 2,
            excellent: 4,
            veryGood: 10,
            good: 7,
            acceptable: 9
        },
        info: {
            name: 'Super Mario World',
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co8lo8.jpg',
            id: '1ec9ff37-a721-4034-84f8-b9105c71f211'
        }
    }

    const product2: IProductsInventory = {
        type: {
            new: 5,
            complete: 3,
            used: 12
        },
        condition: {
            new: 5,
            excellent: 3,
            veryGood: 4,
            good: 3,
            acceptable: 2
        },
        info: {
            name: 'The Legend of Zelda: Breath of the Wild',
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co3p2d.jpg',
            id: 'aa0ff61d-0829-4bc7-b904-107e63dc35b0'
        }
    };

    const product3: IProductsInventory = {
        type: {
            new: 1,
            complete: 7,
            used: 8
        },
        condition: {
            new: 1,
            excellent: 2,
            veryGood: 3,
            good: 2,
            acceptable: 1
        },
        info: {
            name: 'The Legend of Zelda: Tears of the Kingdom',
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co5vmg.jpg',
            id: '7aca26d0-a15b-4dbf-8820-6274e39fc609'
        }
    };

    const product4: IProductsInventory = {
        type: {
            new: 1,
            complete: 7,
            used: 8
        },
        condition: {
            new: 1,
            excellent: 2,
            veryGood: 3,
            good: 2,
            acceptable: 1
        },
        info: {
            name: 'Super Mario Sunshine',
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co21rh.jpg',
            id: '4b869686-f4fa-4c8e-ae43-be69ce363ca9'
        }
    };

    const product5: IProductsInventory = {
        type: {
            new: 1,
            complete: 7,
            used: 8
        },
        condition: {
            new: 1,
            excellent: 2,
            veryGood: 3,
            good: 2,
            acceptable: 1
        },
        info: {
            name: 'Persona 5 Royal',
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co1nic.jpg',
            id: 'd59171f4-70a5-468c-ba80-3f49ba813c0c'
        }
    };

    return(
        <View style={ styles.container }>
            <ScrollView style={{ marginVertical: 100 }}>
                <ProductCard product={ product } style={ styles.productCard }></ProductCard>
                <ProductCard product={ product2 } style={ styles.productCard }></ProductCard>
                <ProductCard product={ product3 } style={ styles.productCard }></ProductCard>
                <ProductCard product={ product4 } style={ styles.productCard }></ProductCard>
                <ProductCard product={ product5 } style={ styles.productCard }></ProductCard>
            </ScrollView>
        </View>
    )
}

export default InventoryHomeScreen;