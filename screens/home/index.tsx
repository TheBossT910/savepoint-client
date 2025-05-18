// Taha Rashid
// May 7, 2025
// Home view

import React, { useState, useEffect } from 'react';
import { ScrollView, Image, View, Text, Pressable, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import { ProductBox } from "@/components/ProductBox"
import useStyles from "./styles";

// service dependancies
import { productService } from '@/services/api';
import { Products } from '@/interfaces/api';

// main screen
const HomeScreen = () => {
    // getting styles
    const { styles }  = useStyles();
    const router = useRouter();

    // function to create product elements
    const createProducts = (rawProducts: Products[]) => {
        const formattedProducts = rawProducts.map( product => {
            return(
                <Pressable key={ product.id } onPress={ () => router.navigate({
                    pathname: '/(tabs)/details/[id]',
                    params: { 'id': product.id }

                }) }>
                    <ProductBox
                        key={ product.id }  
                        image={ product.cover } 
                        width={ styles.productImage.width } 
                        height={ styles.productImage.height }
                    />
                </Pressable>
            )
        });

        return formattedProducts;
    }

    // splash image url
    const splashURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/scahhs.jpg'
    const splashDetail = 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open-world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.';
    const splashTitle = 'Forza Horizon 5';
    const splashId = '7370486a-da93-42c0-b308-964c973e3f95';

    // using services
    const [popularProducts, setPopularProducts] = useState<React.JSX.Element[]>([]);
    const [trendingProducts, setTrendingProducts] = useState<React.JSX.Element[]>([]);
    const [highestRatedProducts, setHighestRatedProducts] = useState<React.JSX.Element[]>([]);

    // runs server-side code on-load
    useEffect( () => {
        // setting our state
        const loadServices = async() => {
            // get products
            const popularResult = await productService.getListsPopular();
            const trendingResult = await productService.getListsTrending();
            const highestRatedResult = await productService.getListsHighestRated('Nintendo Switch');

            // create an element for each product
            const popularProductsElements = createProducts(popularResult);
            const trendingProductsElements = createProducts(trendingResult);
            const highestRatedProductsElements = createProducts(highestRatedResult);

            setPopularProducts(popularProductsElements);
            setTrendingProducts(trendingProductsElements);
            setHighestRatedProducts(highestRatedProductsElements);
        }
        loadServices();
    }, []);
    

    return(
        <View style={ styles.center }>
            {/* Vertical scroll*/}
            <ScrollView contentContainerStyle={ styles.mainScrollView }>
                {/* Displaying splash */}
                <View>
                    <Pressable onPress={ () => router.navigate({
                        pathname: '/(tabs)/details/[id]',
                        params: { 'id': splashId }

                    })}>
                        {/* Splash image */}
                        <Image style={ styles.splashImage } source={{ uri: splashURL }}/>

                        {/* Details box */}
                        {/* TODO: create it as a gradient, overlaid on top of the splash image. Move title to image area */}
                        <View style={ styles.splashDetailsBox }>
                            <Text style={ styles.splashTitle }>{ splashTitle }</Text>
                            <Text style={ styles.splashDescription } adjustsFontSizeToFit={ true }>{ splashDetail }</Text>
                        </View>
                    </Pressable>
                </View>

                {/* Displaying lists */}
                <View>
                    <Text style={ styles.listTitle }>Most Popular of All Time</Text>
                    {/* Displaying a list of products */}
                    <FlatList
                        horizontal
                        data={popularProducts}
                        renderItem={ ({ item }) => (
                            <View> 
                                { item }
                            </View>
                        )}
                    />
 
                    <Text style={ styles.listTitle }>Trending</Text>
                    {/* Displaying a list of products */}
                    <FlatList
                        horizontal
                        data={trendingProducts}
                        renderItem={ ({ item }) => (
                            <View> 
                                { item }
                            </View>
                        )}
                    />

                    <Text style={ styles.listTitle }>Highest Rated on Nintendo Switch</Text>
                    {/* Displaying a list of products */}
                    <FlatList
                        horizontal
                        data={highestRatedProducts}
                        renderItem={ ({ item }) => (
                            <View> 
                                { item }
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;