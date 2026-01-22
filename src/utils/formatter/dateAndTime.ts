export const formatOtpTime = (seconds: number) =>
    `00:${seconds.toString().padStart(2, "0")}s`;