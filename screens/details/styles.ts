// Taha Rashid
// May 8, 2025
// styles for details.tsx

import { StyleSheet, useWindowDimensions } from 'react-native';

// styles
const useStyles = () => {
    // const dimensions = useWindowDimensions();

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
            // TODO: fix. temporarily hard-coded dimensions
            width: 200,
            height: 267,
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            // TODO: fix. temporarily hard-coded to push items down
            paddingTop: 50,
        },
        column: {
            flex: 1,
            flexDirection: 'column',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold'
        },
        button: {
            width: 100,
            height: 50,
            padding: 5,
            backgroundColor: 'red',
            color: 'white',
        },
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;