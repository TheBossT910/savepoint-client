// Taha Rashid
// May 8, 2025
// Details screen

import DetailsScreen from "@/screens/details/details";
import { useLocalSearchParams } from 'expo-router';

const Screen = () => {
    const { id } = useLocalSearchParams();
    // forcing id to be of type string, and not string[]
    const safeId = id as string
    return DetailsScreen( safeId );
}

export default Screen