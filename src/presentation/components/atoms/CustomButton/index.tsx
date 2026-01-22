import React from 'react';

import BaseButton from './BaseButton';
import { BUTTON_VARIANTS } from './buttonConfig';
import { CustomButtonProps } from './types';


const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    loading = false,
    testID,
    size = 'medium',
    underline = false,
}) => {
    const config = BUTTON_VARIANTS[variant];

    const baseButtonProps = {
        title,
        onPress,
        disabled,
        loading,
        containerStyle: config.containerStyle,
        textStyle: config.textStyle,
        testID,
        size,
        variant,
    };

    if (variant === 'link') {
        return <BaseButton {...baseButtonProps} underline={underline} />;
    }
    return <BaseButton {...baseButtonProps} />;
};

export default CustomButton;
