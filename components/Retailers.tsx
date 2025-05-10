// Taha Rashid
// May 10, 2025
// view to display product retailers

import React from 'react';
import { View, Text } from 'react-native';

type RetailerProps = {
    name: string;
    rating: number;
    quantity: number;
}

export const Retailer = ( props: RetailerProps ) => {
    return(
        <View>
            <Text>{ props.name }</Text>
            
        </View>
    );
}