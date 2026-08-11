import { currencies } from "./constants";

export type Currency = typeof currencies[number];
export interface HistoryItem {
    id: number;
    amount: number;
    from: Currency;
    to: Currency;
    result: number;
    date: string;
}