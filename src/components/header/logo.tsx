import logo from "../../assets/icons/mainIcon.png";
import backlogo from "../../assets/icons/mainIconBackFon.png";

export function Logo() {
    return (
        <a href="/" className="flex items-center gap-2">
            <div className="relative">
                <img src={logo} alt="Логотип Чіп Чендж" className="absolute"/>
                <img src={backlogo}/>
            </div>
            <span className="font-bold">Чіп Чендж</span>
        </a>
    );
}

