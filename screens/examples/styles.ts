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
    });

    // exporting style sheet
    return { styles };
}

export default useStyles;