import { useEffect, useState } from "react";
import { getRates } from "./api";
import { convertCurrency } from "./conversionUtils";
import { currencies } from "./constants";
import type { Currency, HistoryItem } from "./types";
import { ConverterHistory } from "./ConverterHistory";

export function ConverterForm() {
    const [rates, setRates] = useState<Record<Currency, number>>({
        UAH: 1,
        USD: 1,
        EUR: 1,
        PLN: 1,
    });
    const [amount, setAmount] = useState(1000);
    const [from, setFrom] = useState<Currency>("UAH");
    const [to, setTo] = useState<Currency>("USD");
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState<HistoryItem[]>([]);

    {/* Завантажуємо курси НБУ */}

    useEffect(() => {
        getRates().then(setRates);
    }, []);

    {/* Автоматичний перерахунок */}

    useEffect(() => {
        const value = convertCurrency(
            amount,
            rates[from],
            rates[to]
        );
        setResult(Number(value.toFixed(2)));
    }, [amount, from, to, rates]);

    {/* Зберегти результат */}

    function saveResult() {
        const item: HistoryItem = {
            id: Date.now(),
            amount,
            from,
            to,
            result,
            date: new Date().toLocaleDateString("uk-UA"),
        };
        setHistory((prev) => [item, ...prev]);
    }

    {/* Поміняти валюти місцями */}

    function swapCurrencies() {
        setFrom(to);
        setTo(from);
    }
    return (
        <div className="max-w-6xl mx-auto bg-[#F6F7FF]">
            {/* ================= Конвертер ================= */}
            <section className="rounded p-16">
                <div className=" w-full mx-auto rounded bg-white px-12 py-10 shadow-sm">
                    <h2 className="text-[40px] font-bold text-[#202020] mb-10">
                        Конвертер валют
                    </h2>
                    <div className="flex justify-between items-end">
                        {/* Звідки */}
                        <div>
                            <label className="block text-sm text-[#707C87] mb-2">
                                В мене є:
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) =>
                                        setAmount(Number(e.target.value))
                                    } className="w-32.5 h-11 rounded border border-[#D8DFE6] px-4 outline-none focus:border-[#2F37F4]"/>
                                <select
                                    value={from}
                                    onChange={(e) =>
                                        setFrom(e.target.value as Currency)
                                    } className="w-18 h-11 rounded border border-[#D8DFE6] bg-white px-2">
                                    {currencies.map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Кнопка поміняти */}
                        <button
                            onClick={swapCurrencies}
                            className="pb-2 text-2xl text-[#707C87] hover:text-[#2F37F4] transition">
                            ⇄
                        </button>
                        {/* Куди */}
                        <div>
                            <label className="block text-sm text-[#707C87] mb-2">
                                Хочу придбати:
                            </label>
                            <div className="flex gap-2">
                                <input
                                    readOnly
                                    value={result}
                                    className="w-32.5 h-11 rounded border border-[#D8DFE6] bg-[#FAFAFA] px-4"/>
                                <select
                                    value={to}
                                    onChange={(e) =>
                                        setTo(e.target.value as Currency)
                                    }
                                    className="w-18 h-11 rounded border border-[#D8DFE6] bg-white px-2">
                                    {currencies.map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Нижній ряд */}
                    <div className="mt-8 flex justify-between items-center">
                        <input type="date" className=" w-42.5 h-11 rounded border border-[#D8DFE6] px-4"/>
                        <button
                            onClick={saveResult}
                            className="h-11 px-7 rounded bg-[#2F37F4] text-white font-semibold hover:bg-[#2430dc] transition">
                            Зберегти результат
                        </button>
                    </div>
                </div>
            </section>
            {/* Історія */}
            <section className="mt-16 p-8">
                <div className="bg-[#F6F7FF] rounded p-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-[34px] font-bold text-[#202020]">
                            Історія конвертації
                        </h2>
                        <button
                            onClick={() => setHistory([])}
                            className="h-10 px-6 rounded bg-[#2F37F4] text-white text-sm font-medium hover:bg-[#2430dc] transition">
                            Очистити історію
                        </button>
                    </div>
                    <ConverterHistory history={history} />
                </div>
            </section>
        </div>
    );
}