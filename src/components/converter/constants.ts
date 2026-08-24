export type Currency = string;

export type BankRates = {
    CurrencyCodeL: Currency;
    Amount: number;
};

export type ConverterDefaultProps = {
  onOpen: () => void;
};