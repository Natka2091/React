const navigationItems = [
  {
    title: "Послуги",
    href: "#",
  },
  {
    title: "Конвертер валют",
    href: "#",
  },
  {
    title: "Контакти",
    href: "#",
  },
  {
    title: "Задати питання",
    href: "#",
  },
];

export function Navigation() {
    return (
        <nav>
            <ul className="flex gap-8 items-center">
                {navigationItems.map((item) => (
                    <li key={item.title}>
                        <a href={item.href} className="hover:text-blue-600 transition-colors">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
