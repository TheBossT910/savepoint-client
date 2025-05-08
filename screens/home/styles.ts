// Taha Rashid
// May 8, 2025
// styles for index.tsx

import { StyleSheet, useWindowDimensions } from 'react-native';

// styles
const useStyles = () => {
    const dimensions = useWindowDimensions();

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
            flexGrow: 1
        },
        productImage: {
            // temporarily hard-coded dimensions
            width: 200,
            height: 267,
        },
        listTitle: {
            padding: 10,
            paddingBottom: 0,
            fontSize: 20,
        },
        splashImage: {
            // TODO: fix. temporarily hard-coded
            height: dimensions.height * (2/5), 
            width: dimensions.width,
        },
        splashDetailsBox: {
            height: 100,
            width: dimensions.width,
            backgroundColor: 'grey',
        },
        splashDescription: {
            padding: 10,
            paddingTop: 0,
            paddingBottom: 0,
            height: 70,
            width: dimensions.width,
        },
        splashTitle: {
            padding: 10,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 20,
            fontWeight: 'bold',
        }
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;