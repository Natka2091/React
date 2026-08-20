export function convertCurrency(
    amount: number,
    fromRate: number,
    toRate: number
) {
    return (amount * fromRate) / toRate;
}