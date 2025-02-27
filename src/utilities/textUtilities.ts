const validCountryCharacters = /^[a-zA-Z-\s]+$/;

export function isValidCountryInput(str: string): boolean {
    return validCountryCharacters.test(str);
}

/**
 * Capitalises the first letter of each word in a string.
 * @param {string} label - The label to be capitalised.
 * @return {string} - The capitalised text.
 */
export const capitaliseTxt = (label: string): string => {
    return label.replace(/\b\w/g, char => char.toUpperCase());
};