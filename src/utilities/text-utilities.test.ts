import { isValidCountryInput } from './textUtilities';

describe('text-utilities', () => {
    describe('isValidCountryInput', () => {
        it('should return true for strings with only letters, hyphens, and spaces', () => {
            expect(isValidCountryInput('Hello-World')).toBe(true);
            expect(isValidCountryInput('Test Case')).toBe(true);
            expect(isValidCountryInput('Valid-String')).toBe(true);
            expect(isValidCountryInput('Country Name')).toBe(true);
        });

        it('should return false for strings with characters other than letters, hyphens, and spaces', () => {
            expect(isValidCountryInput('Hello World!')).toBe(false); // contains an exclamation mark
            expect(isValidCountryInput('Hello123')).toBe(false);    // contains numbers
            expect(isValidCountryInput('Hello-World!')).toBe(false); // contains an exclamation mark
            expect(isValidCountryInput('Hello@World')).toBe(false); // contains an at symbol
        });

        it('should return false for empty strings', () => {
            expect(isValidCountryInput('')).toBe(false);
        });
    });
});