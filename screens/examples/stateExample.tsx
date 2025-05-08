import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const StateScreen = () => {
    // setting initial state to 0
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>You clicked the count button {count} times!</Text>
            <Button 
                onPress={ () => setCount(count + 1) }
                title="Click me!"
            />
        </View>
    );
};

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StateScreen;