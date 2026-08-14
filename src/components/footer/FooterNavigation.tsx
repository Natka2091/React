const links = [
    "Послуги",
    "Конвертер валют",
    "Контакти",
    "Задати питання"
];

export function FooterNavigation() {
    return (
        <nav className="flex flex-col gap-4">
            {links.map((item) => (
                <a key={item} href="#" className="text-[#707C87] hover:text-[#2F37F4] transition">
                    {item}
                </a>
            ))}
        </nav>
    );
}