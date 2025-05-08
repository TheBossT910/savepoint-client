// Taha Rashid
// May 8, 2025
// Product details view

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// main screen
const DetailsScreen = () => {
    // getting styles
    const { styles } = useStyles();

    return(
        <View style={ styles.center }>
            <Text>Hello, world!</Text>
        </View>
    );
};

const useStyles = () => {
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return { styles };
};

export default DetailsScreen;