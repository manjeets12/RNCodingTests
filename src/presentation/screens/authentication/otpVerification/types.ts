export type BaseOtpVerificationPorps = {
    //would be passed in API, could be mobile/email etc
    identifier: string;
    //Backend API/Analytics tool might need this
    identifierType?: "MOBILE" | "EMAIL",
    //consumer can call this and handle data as per their use-case
}

export type OtpVerificationProps = BaseOtpVerificationPorps & {
    //Title to be shown for the purpose of verification, could be OTP/PIN
    title?: string;
    //Relavent message if required,
    message?: string;
    onEditIdentifier?: () => void;

}