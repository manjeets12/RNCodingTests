import { TextStyle, ViewStyle } from "react-native";

export type ButtonVariant = 'primary' | 'secondary' | "link";
export type ButtonSize = 'small' | 'medium' | 'large';



type CustomButtonCommonProps = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    testID?: string;
    size?: ButtonSize;
};

type BaseButtonCommonProps = CustomButtonCommonProps & {
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
};

export type BaseButtonProps = BaseButtonCommonProps & {
    variant?: 'primary' | 'secondary' | 'link';
    underline?: boolean;
};

export type CustomButtonProps = CustomButtonCommonProps & {
    variant?: 'primary' | 'secondary' | 'link';
    underline?: boolean;
};
