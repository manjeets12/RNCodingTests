export interface LoginProps {
    mobile: string;
    onMobileChange: (value: string) => void;
    onGetOtp: () => void;
    loading?: boolean;
}
