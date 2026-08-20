export function convertCurrency(
    amount: string,
    fromRate: number,
    toRate: number
):string {
    return ((+amount * fromRate) / toRate).toFixed(2);
}