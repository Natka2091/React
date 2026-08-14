import { Phone } from "lucide-react";

export function FooterContacts() {
    return (
        <div className="flex items-start gap-3">
            <Phone size={18} className="text-[#202020] shrink-0 mt-1" />

            <div>
                <h3 className="text-base font-bold text-[#202020] whitespace-nowrap">
                    8 800 111 22 33
                </h3>

                <p className="text-xs text-[#707C87] mt-1 leading-4">
                    Безкоштовно для дзвінків
                    <br />
                    в межах України
                </p>
            </div>
        </div>
    );
}