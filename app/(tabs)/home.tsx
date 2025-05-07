// Taha Rashid
// May 7, 2025
// Home view

import React from 'react';
import { useWindowDimensions, ScrollView, Image, View, Text, StyleSheet } from 'react-native';

// props
// product box
type ProductBoxProps = {
    image: string;
};

const ProductBox = ( props: ProductBoxProps ) => {
    // getting styles
    const { styles }  = useStyles();

    return (
        <View>
            <Image 
                style={ styles.productImage }
                source={{ uri: props.image }}
            />
        </View>
    );
};

// main screen
const HomeScreen = () => {
    // getting styles
    const { styles }  = useStyles();

    // splash image url
    const splashURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/scahhs.jpg'

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
    const products = productURLs.map( product => <ProductBox image={ product.url }/>);

    return(
        <View style={ styles.center }>
            {/* Vertical scroll */}
            <ScrollView>
                {/* Displaying splash */}
                <Image style={ styles.splashImage } source={{ uri: splashURL }}/>

                {/* Displaying lists */}
                <View>
                    <Text style={ styles.listTitle }>Trending</Text>
                    <ScrollView contentContainerStyle={ styles.row } horizontal={true}>
                        {/* Displaying a list of products */}
                        { products }
                    </ScrollView>

                    <Text style={ styles.listTitle }>Highly Rated</Text>
                    <ScrollView contentContainerStyle={ styles.row } horizontal={true}>
                        {/* Displaying a list of products */}
                        { products }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

// styles
const useStyles = () => {
    const dimensions = useWindowDimensions();

    // stylesheet
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        productImage: {
            // temporarily hard-coded dimensions
            width: 200,
            height: 267,
            padding: 10
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        listTitle: {
            padding: 10,
            paddingBottom: 0,
            fontSize: 20,
        },
        splashImage: {
            // temporarily hard-coded
            height: 400, 
            width: dimensions.width,
        }
    });

    // exporting style sheet
    return { styles };
}

export default HomeScreen;