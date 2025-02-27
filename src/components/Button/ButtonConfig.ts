
/**
 * @namespace
 * @object btnColorVariants 
 * @description Button color variants - Themed button styling types for constructing button color variants in Button Component 'btnType' prop. Classes are defined in top level index.css tailwind file
 * @see index.css
 */
export const btnColorVariants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    error: 'btn-error ',
    skeleton: 'btn-skeleton',
    ghost: 'btn-ghost'
};

/**
 * @type BtnColorVariantType
 * @description BtnColorVariantType - Allowed list of values for styling buttons derived from btnColorVariants
 */
export type BtnColorVariantType = keyof typeof btnColorVariants;

/**
 * @type BtnHTMLTypeVariantType 
 * @description Allowed list of values for HTML button type attribute
 */
export type BtnHTMLTypeVariantType = 'button' | 'submit' | 'reset';
