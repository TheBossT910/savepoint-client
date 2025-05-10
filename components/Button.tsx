// Taha Rashid
// May 10, 2025
// custom buttom

import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    text: string;
    style: {
        width: number;
        height: number;
        padding: number;

    };
    properties: {
        backgroundColor?: string;
        color?: string;
        borderRadius?: number;
    }
    onPress: () => void;
};

export const CustomButton = ( props: ButtonProps ) => {
    const styles = StyleSheet.create({
        button: {
            width: props.style.width,
            height: props.style.height,
            padding: 5,
            backgroundColor: props.properties.backgroundColor,
            borderRadius: props.properties.borderRadius,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonPadding: {
            padding: props.style.padding,
        },
        buttonText: {
            color: props.properties.color
        }
    })

    return(
        <View style={ styles.buttonPadding }>
            <Pressable style={ styles.button } onPress={ props.onPress }>
                <Text style={ styles.buttonText }>{ props.text }</Text>
            </Pressable>
        </View>
    );
};