import type { HistoryItem } from "./types";

type ConverterHistoryProps = {
    history: HistoryItem[];
};

export function ConverterHistory({
    history,
}: ConverterHistoryProps) {
    if (history.length === 0) {
        return (
            <p className="text-center text-[#707C87] py-8">
                Історія порожня
            </p>
        );
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            {history.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white rounded px-5 py-3 shadow-sm">
                    <span className="text-sm text-[#B0B8C2]">
                        {item.date}
                    </span>
                    <span className="font-medium">
                        {item.amount} {item.from}
                    </span>
                    <span className="text-[#707C87]">
                        →
                    </span>
                    <span className="font-semibold text-[#202020]">
                        {item.result} {item.to}
                    </span>
                </div>
            ))}
        </div>
    );
}