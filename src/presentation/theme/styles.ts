import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { sizes } from './sizes';
export const globalStyles = StyleSheet.create({
    full: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: sizes.spacing.md,
        backgroundColor: colors.background,
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
// Body Text
