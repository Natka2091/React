import {useEffect, useState} from 'react'
import { type Currency, type BankRates} from './constants'
import { convertCurrency } from './utils';

export function ConverterForm() {

    const [amount, setAmount] = useState<string>("");
    const [fromCurrency, setFromCurrency] = useState<Currency>("UAH");
    const [toCurrency, setToCurrency] = useState<Currency>("USD");

    const [currenсy, setCurrenсy] = useState<BankRates[]>([{CurrencyCodeL: "UAH", Amount: 1}]);

    const amountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.currentTarget.value)
    }
    const fromRate = currenсy.find((bankRate) => bankRate.CurrencyCodeL === fromCurrency)?.Amount ?? 1;
    const toRate = currenсy.find((bankRate) => bankRate.CurrencyCodeL === toCurrency)?.Amount ?? 1;

    const result = convertCurrency(
        amount,
        fromRate,
        toRate,
    )

    const currencies = currenсy.map((bankRate) => bankRate.CurrencyCodeL);

    useEffect(() => {
        const focusElement = document.getElementById('input');
        focusElement?.focus();
    }, []);

    useEffect(() => {
        const getBankRates = async() => {
            try {
                const response = await fetch('/nbu/NBU_Exchange/exchange?json');
                const data = await response.json();
                debugger
                setCurrenсy([
                    currenсy,
                    ...data,
                ]);

            } catch (error) {
                console.error('Помилка отримання даних', error);
            }        
        }
        getBankRates();
    }, []);

    return (
        <div className="max-w-6xl mx-auto bg-[#F6F7FF]">
            <section className="rounded p-16">
                <div className="w-full mx-auto rounded bg-white px-12 py-10 shadow-sm">
                    <h2 className="text-[40px] font-bold text-[#202020] mb-10">
                        Конвертер валют
                    </h2>
                    <div className="flex justify-between items-end">
                        <div>
                            <label className="block text-sm text-[#707C87] mb-2">
                                В мене є:
                            </label>
                            <div className="flex gap-2">
                                <input id="input" className="w-32.5 h-11 rounded border border-[#D8DFE6] px-4 outline-none focus:border-[#2F37F4]"
                                type="number"
                                value={amount}
                                onChange={amountChange}
                                />
                                <select className="w-18 h-11 rounded border border-[#D8DFE6] bg-white px-2"
                                    value={fromCurrency}
                                    onChange={(event) => 
                                        setFromCurrency(event.currentTarget.value)
                                        }
                                >
                                    {currencies.map((currency) => 
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>)}
                                </select>
                            </div>
                        </div>
                        <button
                            className="pb-2 text-2xl text-[#707C87] hover:text-[#2F37F4] transition">
                            ⇄
                        </button>
                        <div>
                            <label className="block text-sm text-[#707C87] mb-2">
                                Хочу придбати:
                            </label>
                            <div className="flex gap-2">
                                <input className="w-32.5 h-11 rounded border border-[#D8DFE6] bg-[#FAFAFA] px-4"
                                readOnly
                                type="number"
                                value={result}
                                />
                                <select className="w-18 h-11 rounded border border-[#D8DFE6] bg-white px-2"
                                    value={toCurrency}
                                    onChange={(event) => 
                                        setToCurrency(event.currentTarget.value)
                                        }
                                >
                                        {currencies.map((currency) => 
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <input
                            type="date"
                            className="w-42.5 h-11 rounded border border-[#D8DFE6] px-4"
                        />
                        <button className="h-11 px-7 rounded bg-[#2F37F4] text-white font-semibold hover:bg-[#2430dc] transition">
                            Зберегти результат
                        </button>
                    </div>
                </div>
            </section>
        </div>
)} 