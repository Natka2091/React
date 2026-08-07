import Logo from "./Logo";
import Navigation from "./Navigation";
import PersonalAccount from "./PersonalAccountMenu";

function Header() {
    return (
        <header className="flex items-center justify-between py-6 px-6">
            <Logo />
            <Navigation />
            <PersonalAccount />
        </header>
    );
}

export default Header;
