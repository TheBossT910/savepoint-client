// Taha Rashid
// May 17, 2025
// Services example

import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView } from 'react-native';
import useStyles from './styles';

// service dependancies
import { fetchProducts } from '@/services/api';
import { Products } from '@/interfaces/api';



const ServicesScreen = () => {
    const { styles } = useStyles();

    // using our services
    const [products, setProducts] = useState<Products[]>([]);

    // runs server-side code on load
    useEffect( () => {
        // setting our state
        const loadServices = async() => {
            const result = await fetchProducts();
            setProducts(result)
        }
        loadServices();
    }, []);

    return (
        <View style={ styles.center }>
            <ScrollView>
                <Text>Hello, world</Text>
                {/* Displaying all products' name */}
                { products.map( product => {
                    return(
                        <Text key={ product.id }>{ product.name }</Text>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ServicesScreen;