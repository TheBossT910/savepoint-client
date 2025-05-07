// Taha Rashid
// May 7, 2025
// Home view

import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

// props
// product box
type ProductBoxProps = {
    image: string;
};

const ProductBox = ( props: ProductBoxProps ) => {
    return (
        <View>
            <Image 
                style={ styles.image }
                resizeMode={'contain'}
                source={{ uri: props.image }}
            />
        </View>
    );
};

// main screen
const HomeScreen = () => {
    const imageURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/co2e25.jpg';
    return(
        <View style={ styles.center }>
            <Text> Hello, World! </Text>
            <View style={ styles.row }>
                <ProductBox image={imageURL} />
                <ProductBox image={imageURL} />
            </View>
        </View>
    );
};

// styles
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        // change so we capture the size of the image. The aspect ratio is not always 16/9!
        aspectRatio: 16 / 9,
    },
    row: {
        // TODO: fix weird spacing between items
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});

export default HomeScreen;