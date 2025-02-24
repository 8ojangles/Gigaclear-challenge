import { StringMap } from '../../types/generic';

export const btnColorVariants: StringMap = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    tertiary: 'bg-white text-gray-600 hover:text-gray-700',
    error: 'bg-red-600 text-white hover:bg-red-700',
    skeleton: 'bg-white border border-gray-400 text-gray-400 hover:text-gray-500 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-400 hover:text-gray-500 hover:bg-gray-100'
}

export const btnRoundedVariants: StringMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xxl: 'rounded-2xl',
    xxxl: 'rounded-3xl',
    full: 'rounded-full'
}