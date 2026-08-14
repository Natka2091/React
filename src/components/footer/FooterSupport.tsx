import { Smartphone } from "lucide-react";

export function FooterSupport() {
    return (
        <div className="flex items-start gap-3">
            <Smartphone size={18} className="text-[#202020] shrink-0 mt-1" />

            <div>
                <h3 className="text-base font-bold text-[#202020]">
                    3773
                </h3>
                <p className="text-xs text-[#707C87] mt-1 leading-4">
                    Цілодобова підтримка
                </p>
            </div>
        </div>
    );
}