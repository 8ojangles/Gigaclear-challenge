/**
 * @object textVariant
 * @description text size variants - Tailwind classes for constructing text-size variants in React components 'className' prop
 * @example 'textVariant.xl' or 'textVariant.xxl'
 * @example '${textVariant["xl"]}' or '${textVariant["xxl"]}'
 */
export const textVariant = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xl2: 'text-2xl',
    xl3: 'text-3xl',
    xl4: 'text-4xl',
    xl5: 'text-5xl',
    xl6: 'text-6xl',
    xl7: 'text-7xl',
    xl8: 'text-8xl',
    xl9: 'text-9xl',
}

/**
 * @type textVariantType
 * @description textVariantType - Allowed list for text size derived from textVariant
 */
export type textVariantType = keyof typeof textVariant;

/**
 * @object zLayer
 * @description z-index variants - Tailwind classes for constructing z-index variants in React components 'className' prop
 * @example 'zLayer.z0' or 'zLayer.z10'
 * @example '${zLayer["z0"]}' or '${zLayer["z10"]}'
 */
export const zLayer = {
    z0: "z-0",
    z10: "z-10",
    z20: "z-20",
    z30: "z-30",
    z40: "z-40",
    z50: "z-50",
    z60: "z-60",
    z70: "z-70",
    z80: "z-80",
    z90: "z-90",
    z100: "z-100",
    zAuto: "z-auto"
}

/**
 * @type ZLayerType
 * @description ZLayerType - Allowed list for z-index class selection derived from zLayerList
 */
export type ZLayerType = keyof typeof zLayer;

/**
 * @object roundedVariants 
 * @description border-radius variants - Tailwind classes for constructing border-radius variants in React components className prop
 */
export const roundedVariants = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xxl: 'rounded-2xl',
    xxxl: 'rounded-3xl',
    full: 'rounded-full'
};

/**
 * @type RoundedVariantType
 * @description RoundedVariantType - Allowed list for border-radius class selection derived from roundedVariants
 */
export type RoundedVariantType = keyof typeof roundedVariants;

/**
 * @object heightVariants 
 * @description height variants - Tailwind classes for constructing height variants in React components className prop
 */
export const heightVariants = {
    h0: 'h-0',
    hPx: 'h-px',
    h05: 'h-0.5',
    h1: 'h-1',
    h15: 'h-1.5',
    h2: 'h-2',
    h25: 'h-2.5',
    h3: 'h-3',
    h35: 'h-3.5',
    h4: 'h-4',
    h45: 'h-4.5',
    h5: 'h-5',
    h6: 'h-6',
    h7: 'h-7',
    h8: 'h-8',
    h9: 'h-9',
    h10: 'h-10',
    h11: 'h-11',
    h12: 'h-12',
    h14: 'h-14',
    h16: 'h-16',
    h24: 'h-24',
    h28: 'h-28',
    h32: 'h-32',
    h36: 'h-36',
    h40: 'h-40',
    h44: 'h-44',
    h48: 'h-48',
    h52: 'h-52',
    h56: 'h-56',
    h60: 'h-60',
    h64: 'h-64',
    h72: 'h-72',
    h80: 'h-80',
    h96: 'h-96',
    hAuto: 'h-auto',
    hHalf: 'h-1/2',	
    hThird: 'h-1/3',	
    hTwoThirds: 'h-2/3',	
    hQuarter: 'h-1/4',	
    hTwoQuarters: 'h-2/4',	
    hThreeQuarters: 'h-3/4',	
    hFifth: 'h-1/5',	
    hTwoFifths: 'h-2/5'	,
    hThreeFifths: 'h-3/5',
    hFourFifths: 'h-4/5',	
    hSixth: 'h-1/6',	
    hTwoSixths: 'h-2/6',	
    hThreeSixths: 'h-3/6',	
    hFourSixths: 'h-4/6',	
    hFiveSixths: 'h-5/6',	
    hFull: 'h-full'	,
    hScreen: 'h-screen'
}

/**
 * @type HeightVariantType
 * @description HeightVariantType - Allowed list for height class selection derived from heightVariants
 */
export type HeightVariantType = keyof typeof heightVariants;

