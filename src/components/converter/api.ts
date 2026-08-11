import type { Currency } from "./types";

const API_URL =
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export async function getRates() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const rates: Record<Currency, number> = {
        UAH: 1,
        USD: 1,
        EUR: 1,
        PLN: 1,
    };
    data.forEach((currency: any) => {
        if (currency.cc in rates) {
            rates[currency.cc as Currency] = currency.rate;
        }
    });
    return rates;
}