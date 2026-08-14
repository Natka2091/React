import logo from "../../assets/icons/mainIcon.png";
import mainIconBackFon from "../../assets/icons/mainIconBackFon.png";

export function FooterLogo() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 shrink-0">
                    <img src={mainIconBackFon} className="absolute inset-0 w-full h-full object-contain" />
                    <img src={logo} alt="Чіп Чендж" className="absolute inset-0 w-full h-full object-contain" />
                </div>

                <h2 className="text-base font-bold text-[#202020]">
                    Чіп Чендж
                </h2>
            </div>

            <p className="text-[11px] text-[#707C87] mt-3 leading-4">
                04128, м.Київ, вул. Хрещатик, 19<br />
                Ліцензія НБУ №156<br />
                © ПАТ ЧіпЧендж, 2019-2023
            </p>
        </div>
    );
}