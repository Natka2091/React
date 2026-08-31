import { useConverterStore } from '../../stores/app';

export function ConverterHistory() {
  const history = useConverterStore(
    (state) => state.history
  );

  const clearHistory = useConverterStore(
    (state) => state.clearHistory
  );

  return (
    <section className="max-w-6xl mx-auto mt-16 p-16">
    <div className="bg-[#F6F7FF] rounded p-10">

        <div className="flex justify-between items-center mb-8">

        <h2 className="text-[34px] font-bold text-[#202020]">
            Історія конвертації
        </h2>

        <button
            onClick={clearHistory}
            className="h-10 px-6 rounded bg-[#2F37F4] text-white text-sm font-medium hover:bg-[#2430dc] transition"
        >
            Очистити історію
        </button>

        </div>

    <div className="grid grid-cols-2 gap-4">
      {history.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white rounded px-5 py-3 shadow-sm"
        >
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

  </div>
</section>
  );
}