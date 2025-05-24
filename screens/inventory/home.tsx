// Taha Rashid
// May 18, 2025
// Inventory home screen

import React from 'react';
import { View } from 'react-native';
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
            cover: 'https://images.igdb.com/igdb/image/upload/t_1080p/co8lo8.jpg'
        }
    }

    return(
        <View style={ styles.container }>
            <ProductCard product={ product }></ProductCard>
            <ProductCard product={ product }></ProductCard>
            <ProductCard product={ product }></ProductCard>
        </View>
    )
}

export default InventoryHomeScreen;