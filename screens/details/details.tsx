// Taha Rashid
// May 8, 2025
// Product details view

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useStyles from './styles';

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

export default DetailsScreen;