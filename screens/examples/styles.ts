// Taha Rashid
// May 10, 2025
// Styles for example views

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
        container: {
            width: 500,
            height: 500,
        },
        squareRed: {
            width: 150,
            height: 150,
            backgroundColor: 'red',
            // absolute makes it go to the exact position on the parent container when specified by top, bottom, left, right. Otherwise, the position is relative
            // position: 'absolute',
            top: 50,
            left: 50,
            zIndex: 2
        },
        squareGreen: {
            width: 150,
            height: 150,
            backgroundColor: 'green',
            // position: 'absolute',
            // top: 70,
            // right: 70,
            zIndex: 1
        }
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;