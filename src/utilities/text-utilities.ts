const validCountryCharacters = /^[a-zA-Z-\s]+$/;

export function isValidCountryInput(str: string): boolean {
    return validCountryCharacters.test(str);
}