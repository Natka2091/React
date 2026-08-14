import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { PersonalAccountMenu } from "./PersonalAccountMenu";

export function Header() {
    return (
        <header className="flex items-center justify-between p-10">
            <Logo />
            <Navigation />
            <PersonalAccountMenu />
        </header>
    );
}


