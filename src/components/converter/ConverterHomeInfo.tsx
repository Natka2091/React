type ConverterHomeInfoProps = {
  onOpen: () => void;
};

export function ConverterHomeInfo({
  onOpen,
}: ConverterHomeInfoProps) {
  return (
    <div className="max-w-md">
      <h2 className="text-5xl font-bold text-[#202020] mb-8">
        Конвертер валют
      </h2>

      <p className="text-xl text-[#707C87] leading-9 mb-10">
        Переважна діяльність банківської групи за останні чотири
        звітні квартали становить 50 і більше відсотків.
      </p>

      <button
        onClick={onOpen}
        className="w-60 h-15 rounded bg-[#2F37F4] text-white text-s font-semibold hover:bg-[#2630D8] transition">
        Конвертувати валюту
      </button>
    </div>
  );
}