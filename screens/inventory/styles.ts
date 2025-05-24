// Taha Rashid
// May 18, 2025
// styles for inventory/home

import { StyleSheet, useWindowDimensions } from 'react-native';

// styles
const useStyles = () => {
    const dimensions = useWindowDimensions();

    // stylesheet
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        productCard: {
            margin: 5
        }
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;