import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

export function FooterSocials() {
    return (
    <div className="flex gap-4">
                <a href="#" aria-label="Facebook">
                    <FaFacebookF size={16} className="hover:text-[#2F37F4] transition" />
                </a>
                <a href="#" aria-label="Instagram">
                    <FaInstagram size={16} className="hover:text-[#2F37F4] transition" />
                </a>
                <a href="#" aria-label="Twitter">
                    <FaTwitter size={16} className="hover:text-[#2F37F4] transition" />
                </a>
                <a href="#"  aria-label="YouTube">
                    <FaYoutube size={16} className="hover:text-[#2F37F4] transition" />
                </a>
            </div>
    );
}