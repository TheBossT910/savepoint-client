// Taha Rashid
// May 8, 2025
// Product details view

import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import useStyles from './styles';
import { ProductBox } from '@/components/ProductBox';
import { Retailer } from '@/components/Retailers';
import { CustomButton } from '@/components/Button';

// main screen
const DetailsScreen = () => {
    // getting styles
    const { styles } = useStyles();

    const coverURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/co2e25.jpg';
    const productName = 'Forza Horizon 3';
    const productDescription = 'You’re in charge of the Horizon Festival. Customize everything, hire and fire your friends, and explore Australia in over 350 of the world’s greatest cars. Make your Horizon the ultimate celebration of cars, music, and freedom of the open road. How you get there is up to you.';
    
    const productImagesURLs= [
        {
            id: 0,
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/gandhrp2rigbws03src1.jpg",
        },
        {
            id: 1,
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/myjwiby66b6ge2mdt8oe.jpg",
        },
        {
            id: 2,
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/gaq2zazdgb1r01kiavgz.jpg"
        },
        {
            id: 3,
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/frxljlqm8d1xiefpbdhq.jpg",
        },
        {
            id: 4,
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/rcn1hi35udaatrailha2.jpg",
        },
    ];
    const productImages = productImagesURLs.map( image => {
        return (
            <View style={{ padding: 5 }} key={ image.id }>
                <Image 
                    style={{ width: 240, height: 135 }}
                    source={{ uri: image.url }}
                />
            </View>
        );
    });

    return(
        <View style={ styles.center }>
            <ScrollView contentContainerStyle={ styles.mainScrollView }>
                {/* Top area */}
                <View style={ styles.row }>
                    <ProductBox image={ coverURL } width={ styles.productImage.width } height={ styles.productImage.height } />

                    {/* vertically align items */}
                    <View style={ [styles.column, styles.center] }>
                        <Text style={ styles.title }>{ productName }</Text>

                        {/* Buy button */}
                        <CustomButton style={ styles.button } colors={{ backgroundColor: '#00FFB2', color: 'white' }} text={ 'Buy' } onPress={ () => console.log('Buy button pressed') }/>

                        {/* Add to collection button */}
                        <CustomButton style={ styles.button } colors={{ backgroundColor: '#FF0000', color: 'white' }} text={ 'Add' } onPress={ () => console.log('Add button pressed') }/>

                    </View>
                </View>

                {/* description area */}
                <View>
                    <Text style={{ padding: 10 }}>{ productDescription }</Text>
                    {/* TODO: implement autoscrolling, https://www.npmjs.com/package/react-native-auto-scrolling? */}
                    {/* displays all the images */}
                    <ScrollView horizontal={ true }>
                        { productImages }
                    </ScrollView>
                </View>

                {/* Stores/purchase area */}
                <View>
                    <Text>Retailers</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;