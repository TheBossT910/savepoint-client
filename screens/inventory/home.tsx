// Taha Rashid
// May 18, 2025
// Inventory home screen

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import useStyles from './styles';
import ProductCard from '@/components/ProductCard';
import { IProductsInventory } from '@/interfaces/api';
import { posService } from '@/services/api';

const InventoryHomeScreen = () => {
    const { styles } = useStyles();
    const storeId = '8fea0411-e4f4-4394-82a5-b703ba71f2cd';  // Mithu Games

    // using services
    const [products, setProducts] = useState<React.JSX.Element[]>([]);

    const createProductsInventory = (rawProducts: IProductsInventory[]) => {
        const formattedProducts = rawProducts.map( product => {
            return <ProductCard product={ product } style={ styles.productCard }></ProductCard>;
        });

        return formattedProducts;
    }

    // runs server-side code on-load
    useEffect( () => {
        // setting our state
        const loadServices = async() => {
            // get products
            const productsResult = await posService.getGetAll( storeId );

            // create an element for each product
            const productsFormatted = createProductsInventory(productsResult);

            setProducts(productsFormatted);
        }
        loadServices();
    }, []);

    return(
        <View style={ styles.container }>
            <FlatList
                style={{ marginVertical: 100 }}
                data={products}
                renderItem={ ({ item }) => (
                    <View> 
                        { item }
                    </View>
                )}
            />
        </View>
    )
}

export default InventoryHomeScreen;