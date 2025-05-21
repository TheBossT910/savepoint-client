// Taha Rashid
// May 18, 2025
// styles for inventory/home

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
        column: {
            flex: 1,
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        productCard: {
            backgroundColor: 'red',
            flexDirection: 'row',
            width: 352,
            height: 151,
        },
        coverSection: {
            flex: 3,
            flexDirection: 'column',
            backgroundColor: 'yellow',
        },
        titleSection: {
            flex: 5,
            flexDirection: 'column',
            backgroundColor: 'blue',
        },
        titleArea: {
            flex: 2,
            flexDirection: 'row',
        },
        conditionsArea: {
            flex: 1,
            flexDirection: 'row',
        },
        totalProductsArea: {
            flex: 1,
        },
        addButtonArea: {
            flex: 1,
            position: 'absolute',
            bottom: 0
        }
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;