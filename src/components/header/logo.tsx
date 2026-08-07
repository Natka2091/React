import logo from "../../assets/icons/mainIcon.png";
function Logo() {
    return (
        <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Логотип Чіп Чендж" />
            <span>Чіп Чендж</span>
        </a>
    );
}

export default Logo;