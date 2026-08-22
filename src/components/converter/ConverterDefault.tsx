import converterDefaultImg from '../../assets/images/converterDefaultImg.png'
import type { ConverterDefaultProps } from './constants'


export function ConverterDefault({onOpen}: ConverterDefaultProps) {
    return (
        <section className="max-w-6xl mx-auto flex items-center justify-center gap-16 pt-24 pb-12">
            <div className="w-90">
                <h2 className="text-[32px] font-bold leading-tight text-gray-900 mb-5">Конвертер валют</h2>
                <p className="text-[18px] leading-7 text-gray-500 mb-8">Переважна діяльність банківської <br />
                групи за останні чотири звітні квартали <br />
                становить 50 і більше відсотків
                </p>
                <a href="#" className="inline-block bg-indigo-600 text-white font-semibold px-7 py-4 rounded hover:bg-indigo-700 transition"
                onClick={onOpen}
                >Конвертувати валюту</a>
            </div>
            <img src={converterDefaultImg} alt="Конвертер валют" className="w-90 h-65 object-cover rounded" />
        </section>
    )
}