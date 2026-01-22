export const isValidDigit = (char: string) => {
    return /^\d$/.test(char);
}

export default {
    isValidDigit
}   