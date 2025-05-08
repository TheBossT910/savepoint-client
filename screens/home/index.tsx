// Taha Rashid
// May 7, 2025
// Home view

import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';

import { ProductBox } from "@/components/ProductBox"
import useStyles from "./styles";

// main screen
const HomeScreen = () => {
    // getting styles
    const { styles }  = useStyles();

    // splash image url
    const splashURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/scahhs.jpg'
    const splashDetail = 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.';
    const splashTitle = 'Forza Horizon 5';

    // all product urls
    const productURLs = [
        { 
            id: 0,  // TODO: use actual DB product keys instead of # ids. This is temporary
            url: 'https://images.igdb.com/igdb/image/upload/t_1080p/co2e25.jpg' 
        }, 
        {
            id: 1,
            url: 'https://images.igdb.com/igdb/image/upload/t_1080p/co21ro.jpg'
        },
        {
            id: 2,
            url: 'https://images.igdb.com/igdb/image/upload/t_1080p/co721v.jpg'
        },
        {
            id: 3,
            url: 'https://images.igdb.com/igdb/image/upload/t_1080p/co2f5s.jpg'
        }
    ];

    // creating a ProductBox prop for all products in productURLs
    const products = productURLs.map( product => {
        return <ProductBox 
            key={ product.id } 
            image={ product.url } 
            width={ styles.productImage.width } 
            height={ styles.productImage.height }
        />;
    });

    return(
        <View style={ styles.center }>
            {/* Vertical scroll*/}
            <ScrollView contentContainerStyle={ styles.mainScrollView }>
            {/* Displaying splash */}
                <View>
                    {/* Splash image */}
                    <Image style={ styles.splashImage } source={{ uri: splashURL }}/>

                    {/* Details box */}
                    {/* TODO: create it as a gradient, overlaid on top of the splash image. Move title to image area */}
                    <View style={ styles.splashDetailsBox }>
                        <Text style={ styles.splashTitle }>{ splashTitle }</Text>
                        <Text style={ styles.splashDescription } adjustsFontSizeToFit={ true }>{ splashDetail }</Text>
                    </View>
                </View>

                {/* Displaying lists */}
                <View>
                    <Text style={ styles.listTitle }>Trending</Text>
                    <ScrollView horizontal={true}>
                        {/* Displaying a list of products */}
                        { products }
                    </ScrollView>

                    <Text style={ styles.listTitle }>Highly Rated</Text>
                    <ScrollView horizontal={true}>
                        {/* Displaying a list of products */}
                        { products }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;