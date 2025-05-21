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
            {/* Product card */}
            <View style={ styles.productCard }>
                {/* Cover section */}
                <View style={ styles.coverSection }>
                    {/* Total # */}
                    <View style={ styles.totalProductsArea }>
                        <Text>Total #</Text>
                    </View>

                    {/* Add button */}
                    <View style={ styles.addButtonArea }>
                        <Text>Add btn</Text>
                    </View>
                </View>

                {/* Title section */}
                <View style={ styles.titleSection }>
                    {/* Title */}
                    <View style={ styles.titleArea }>
                        <Text>Title of Product</Text>
                    </View>

                    {/* Conditions */}
                    <View style={ styles.conditionsArea }>
                        <View style={ styles.column }>
                            {/* Conditon type */}
                            <View style={ styles.row }>
                                <Text>New </Text>
                                <Text>Complete </Text>
                                <Text>Used</Text>
                            </View>

                            {/* Condition (specific) */}
                            <View style={ styles.row }>
                                <Text>Excellent </Text>
                                <Text>Very Good </Text>
                                <Text>Good </Text>
                                <Text>Acceptable</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InventoryHomeScreen;