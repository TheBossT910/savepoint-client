// Taha Rashid
// May 10, 2025
// an example view to show how stacking elements works

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useStyles from './styles';

const LayoutScreen = () => {
    // getting styles
    const { styles } = useStyles();
    
    return (
        <View>
            <Text>Hello, world</Text>
        </View>
    );
};

export default LayoutScreen;