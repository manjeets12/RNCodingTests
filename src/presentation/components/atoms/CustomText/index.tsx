import React, { useMemo } from 'react';
import {
    TextProps as RNTextProps,
    StyleSheet,
    Text,
    TextStyle,
} from 'react-native';
import { colors, ColorsType, typography, TypographyVariant } from '../../../theme';

interface TextProps extends RNTextProps {
    variant?: TypographyVariant;
    color?: ColorsType;
    align?: TextStyle['textAlign'];
}

export const CustomText: React.FC<TextProps> = ({
    variant = 'bodyMedium',
    color = 'textPrimary',
    align = 'left',
    style,
    ...props
}) => {
    const dynamicStyles = useMemo(() => {
        const variantStyle = typography[variant];
        const colorValue =
            typeof colors[color] === 'string' ? colors[color] : undefined;

        return [variantStyle, { color: colorValue, textAlign: align },];
    }, [variant, color, align]);

    return (
        <Text
            style={[
                styles.base,
                ...dynamicStyles,
                style,
            ]}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    base: {},
});
