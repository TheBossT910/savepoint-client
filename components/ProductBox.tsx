// Taha Rashid
// May 8, 2025
// ProductBox

import React from 'react';
import { Image, View } from 'react-native';

// product box
type ProductBoxProps = {
    image: string;
    width: number;
    height: number;
};

export const ProductBox = ( props: ProductBoxProps ) => {
    return (
        <View style={{ padding: 10 }}>
            <Image 
                style={{ width: props.width, height: props.height }}
                source={{ uri: props.image }}
            />
        </View>
    );
};