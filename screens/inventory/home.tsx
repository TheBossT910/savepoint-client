// Taha Rashid
// May 18, 2025
// Inventory home screen

import React from 'react';
import { View, Text } from 'react-native';
import useStyles from './styles';

const InventoryHomeScreen = () => {
    const { styles } = useStyles();
    return(
        <View style={ styles.center }>
            <Text>Hello, world!</Text>
        </View>
    )
}

export default InventoryHomeScreen;