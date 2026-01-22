export type onOtpChangeType = (otp: string, isValid: boolean) => void;

type MaxOtpSize = 4 | 6 | 8;

export type BaseOtpProps = {
    maxOtpSize?: MaxOtpSize;
    onOtpValueChange?: onOtpChangeType;
    errorMessage?: string;
}
export type OtpInputProps = BaseOtpProps & {
    size?: 'small' | 'medium' | 'large'
}
