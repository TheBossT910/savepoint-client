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
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;