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
    const products = productURLs.map( product => <ProductBox image={ product.url }/>);

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
                        <Text style={ styles.splashDescription }>{ splashDetail }</Text>
                    </View>
                </View>

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
        mainScrollView: {
            flex: 0,
            // adding this padding allows us to scroll past the navbar and properly see all content
            paddingBottom: 100,
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
        },
        splashDetailsBox: {
            height: 100,
            width: dimensions.width,
            backgroundColor: 'grey',
        },
        splashDescription: {
            padding: 10,
            paddingTop: 0,
        },
        splashTitle: {
            padding: 10,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 20,
            fontWeight: 'bold',
        }
    });

    // exporting style sheet
    return { styles };
}

export default HomeScreen;