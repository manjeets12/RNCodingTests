import React, { useRef, useState, useCallback, useEffect } from "react";
import { TextInput, TextInputKeyPressEvent } from "react-native";
import { BaseOtpProps } from "../types";

const isValidDigit = (char: string) => {
    return /^\d$/.test(char);
}
const isValidOtp = (otp: string, maxOtpSize: number) => {
    return [...otp].every(c => c >= '0' && c <= '9') && otp.length === maxOtpSize;
}
const useOtpLogics = ({ maxOtpSize = 4, onOtpValueChange }: BaseOtpProps) => {
    const inputsRefs = useRef(Array.from({ length: maxOtpSize }, () => React.createRef<TextInput>()));
    const [otpValues, setOtpValues] = useState<string[]>(Array(maxOtpSize).fill(''));
    const [focusedIndex, setFocusedIndex] = useState<number>(0);

    useEffect(() => {
        const otp = otpValues.join('');
        if (isValidOtp(otp, maxOtpSize)) {
            onOtpValueChange?.(otp, true);
        } else {
            onOtpValueChange?.(otp, false);
        }
    }, [otpValues, onOtpValueChange, maxOtpSize]);

    const focus = (index: number) => {
        inputsRefs.current[index].current?.focus();
        setFocusedIndex(index);
    }
    const blur = (index: number) => {
        inputsRefs.current[index].current?.blur();
    }
    const moveInputFocus = (index: number, forward: boolean) => {
        const delta = forward ? 1 : -1;
        const isWithinRange = (index + delta) >= 0 && (index + delta) < maxOtpSize;
        if (isWithinRange) {
            focus(index + delta);
            blur(index);
        }
    }
    const onChangeText = (text: string, index: number) => {
        if (text.length > 1) {
            //handle paste event
            const textChars = text.split('');
            setOtpValues((prev) => {
                const newOtpValues = [...prev];
                for (let i = 0; i < textChars.length; i++) {
                    if (index + i < maxOtpSize && isValidDigit(textChars[i])) {
                        newOtpValues[index + i] = textChars[i];
                    }
                }
                return newOtpValues;
            });
            const lastIndex = Math.min(index + textChars.length - 1, maxOtpSize - 1);
            focus(lastIndex);
            return;
        }
        //check if input is numeric
        if (text !== '' && !isValidDigit(text)) {
            return;
        }
        setOtpValues((prev) => {
            const newOtpValues = [...prev];
            newOtpValues[index] = text;
            return newOtpValues;
        })
        !!text && moveInputFocus(index, true);
    }
    const onKeyPress = useCallback((e: TextInputKeyPressEvent, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            moveInputFocus(index, false);
        }
    }, [])

    const onOtpPress = () => {
        //focus first empty input
        const firstEmptyIndex = otpValues.findIndex(value => value === '');
        if (firstEmptyIndex !== -1) {
            focus(firstEmptyIndex);
        } else {
            //if all inputs are filled, focus last input
            focus(maxOtpSize - 1);
        }
    }
    return {
        inputsRefs,
        state: {
            otpValues,
            focusedIndex
        },
        callbacks: {
            onChangeText,
            onKeyPress,
            onOtpPress
        }
    }
}
export default useOtpLogics;