export const currencies = [
    "UAH",
    "USD",
    "EUR",
 ] as const;

export type Currency = (typeof currencies) [number];

export type BankRate = {
    cc: Currency;
    rate: number;
};