export const rates = {
    UAH: 1,
    USD: 41.5,
    EUR: 45.2,
} as const;

export type Currency = keyof typeof rates;