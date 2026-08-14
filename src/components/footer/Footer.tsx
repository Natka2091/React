import { FooterLogo } from "./FooterLogo.tsx";
import { FooterNavigation } from "./FooterNavigation.tsx";
import { FooterSupport } from "./FooterSupport.tsx";
import { FooterContacts } from "./FooterContacts.tsx";
import { FooterSocials } from "./FooterSocials.tsx";

export function Footer() {
    return (
        <footer className="bg-[#F6F7FF] py-10 mt-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-5 gap-12 items-start">
                <FooterLogo />
                <FooterNavigation />
                <FooterSupport />
                <FooterContacts />
                <FooterSocials />
            </div>
        </footer>
    );
}