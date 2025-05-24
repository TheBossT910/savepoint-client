// Taha Rashid
// May 8, 2025
// Product details view

import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, Item } from 'react-native';

import useStyles from './styles';
import { ProductBox } from '@/components/ProductBox';
import { Retailer } from '@/components/Retailers';
import { CustomButton } from '@/components/CustomButton';

// service dependancies
import { developerService } from '@/services/api';
import { IProducts } from '@/interfaces/api';
import { defaultProduct } from '@/constants/api';

// main screen
const DetailsScreen = ( id: string ) => {
    // getting styles
    const { styles } = useStyles();

    const createProductImages = ( images: string[] ) => {
        const productImages = images.map( image => {
            return (
                // TODO: create proper key
                <View style={{ padding: 5 }} key={ images.indexOf(image) }>
                    <Image 
                        style={{ width: 240, height: 135 }}
                        // defaults to local image if 
                        source={{ uri: image }}
                    />
                </View>
            );
        });

        return productImages;
    }

    // using services
    const [product, setProduct] = useState<IProducts>(defaultProduct);
    const [productImages, setProductImages] = useState<React.JSX.Element[]>([])
    useEffect( () => {
        // reset previous data
        setProduct(defaultProduct)
        setProductImages([])

        // set new data
        const loadServices = async () => {
            const productResult = await developerService.getGetProducts( id );
            setProduct(productResult[0]);

            const productImages = createProductImages(productResult[0].media)
            setProductImages(productImages)
        }
        loadServices();
    }, [id])

    // DEBUG
    const productImagesURLs= [
        {
            id: '0',
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/gandhrp2rigbws03src1.jpg",
        },
        {
            id: '1',
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/myjwiby66b6ge2mdt8oe.jpg",
        },
        {
            id: '2',
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/gaq2zazdgb1r01kiavgz.jpg"
        },
        {
            id: '3',
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/frxljlqm8d1xiefpbdhq.jpg",
        },
        {
            id: '4',
            url: "https://images.igdb.com/igdb/image/upload/t_1080p/rcn1hi35udaatrailha2.jpg",
        },
    ];

    return(
        <View style={ styles.center }>
            <ScrollView contentContainerStyle={ styles.mainScrollView }>
                {/* Top area */}
                <View style={ styles.row }>
                    <ProductBox image={ product.cover } width={ styles.productImage.width } height={ styles.productImage.height } />

                    {/* vertically align items */}
                    <View style={ [styles.column, styles.center] }>
                        <Text style={ styles.title }>{ product.name }</Text>

                        {/* Buy button */}
                        <CustomButton style={ styles.button } properties={{ backgroundColor: '#33b249', color: 'white', borderRadius: 5 }} text={ 'Buy' } onPress={ () => console.log('Buy button pressed') }/>

                        {/* Add to collection button */}
                        <CustomButton style={ styles.button } properties={{ backgroundColor: '#FF0000', color: 'white', borderRadius: 5 }} text={ 'Add' } onPress={ () => console.log('Add button pressed') }/>
                    </View>
                </View>

                <View>
                    {/* description area */}
                    <Text style={ styles.subtitle }>Description</Text>
                    <Text style={{ padding: 10 }}>{ product.description }</Text>

                    {/* TODO: implement autoscrolling, https://www.npmjs.com/package/react-native-auto-scrolling? */}
                    {/* displays all the images */}
                    <Text style={ styles.subtitle }>Images</Text>
                    <FlatList
                        horizontal
                        data={productImages}
                        renderItem={ ({ item }) => (
                            <View> 
                                { item }
                            </View>
                        )}
                    />
                </View>

                {/* Stores/purchase area */}
                <View>
                    <Text style={ styles.subtitle }>Retailers</Text>
                    <Retailer name={ 'Mithu Games' } rating={ 8.5 } quantity={ 3 }/>
                    <Retailer name={ 'Mithu Games' } rating={ 8.5 } quantity={ 3 }/>
                    <Retailer name={ 'Mithu Games' } rating={ 8.5 } quantity={ 3 }/>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;