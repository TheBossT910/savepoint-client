import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// making standard styles we can use later
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
});

// defining the type for the Greeting props
type GreetingProps = {
    name: string;
}

// this is a prop, a reusable component
const Greeting = (props: GreetingProps) => {
    return (
        <View style={styles.center}>
            <Text>Hello, {props.name}!</Text>
        </View>
    )
}

// main 'view'
const HelloWorldApp = () => {
    return (
        <View
        style={[styles.center, {top: 500}]}>
            <Greeting name="Taha Rashid" />
            <Greeting name="Zain" />
        </View>
    );
};

export default HelloWorldApp;