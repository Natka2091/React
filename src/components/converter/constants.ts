export type Currency = string;

export type BankRates = {
    CurrencyCodeL: Currency;
    Amount: number;
};

export type HistoryItem = {
    id: number;
    amount: number;
    from: Currency;
    to: Currency;
    result: number;
    date: string;
}

export type ConverterStoreTypes = {
  history: HistoryItem[];
  addHistory: (item: HistoryItem) => void;
  clearHistory: () => void;
};