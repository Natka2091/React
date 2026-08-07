import myAccountIcon from "../../assets/icons/myAcccountIcon.png"

export function PersonalAccountMenu () {
    return (
        <a href="#" className="flex items-center gap-2">
            <img src={myAccountIcon} className="w-5 h-5"/>
            <span className="text-sm font-medium">Особистий кабінет</span>
        </a>
    );
}

