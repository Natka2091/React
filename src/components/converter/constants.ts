export const currencies = [
    "UAH",
    "USD",
    "EUR",
 ] as const;

export type Currency = (typeof currencies) [number];

export type BankRates = {
    cc: Currency;
    rate: number;
};

export type ConverterDefaultProps = {
  onOpen: () => void;
};