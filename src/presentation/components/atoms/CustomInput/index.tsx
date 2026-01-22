import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export interface CustomInputProps extends TextInputProps {
    // Add any custom props if needed
}

const CustomInput: React.FC<CustomInputProps> = ({ style, ...props }) => (
    <TextInput
        style={[styles.input, style]}
        {...props}
    />
);

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
});

export default CustomInput;
