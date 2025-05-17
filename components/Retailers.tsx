// Taha Rashid
// May 10, 2025
// view to display product retailers

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CustomButton } from '@/components/CustomButton';

type RetailerProps = {
    name: string;
    rating: number;
    quantity: number;
}

export const Retailer = ( props: RetailerProps ) => {
    const styles = StyleSheet.create({
        button: {
            width: 150,
            height: 50,
            padding: 5,
        },
        btnProperties: {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: 10,
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
        },
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        storeName: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    })

    return(
        <View style={ styles.row }>
            <View style={ styles.center }>
                <Text style={ styles.storeName }>{ props.name }</Text>
                <Text style={{ padding: 5 }}>Rating: { props.rating }/5</Text>
            </View>
            <View style={ styles.center }>
                <CustomButton style={ styles.button } properties={ styles.btnProperties } text={ `${ props.quantity } avaliable` } onPress={ () => console.log("pressed!") }/>
            </View>
        </View>
    );
}