import { useState } from "react";
import { ConverterDefault } from "./ConverterDefault";
import { ConverterForm } from "./ConverterForm";

export function ConverterSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className= "py-16">
            {isOpen ? (
                <ConverterForm />
            ) : (
                <ConverterDefault onOpen={() => setIsOpen(true)} />
            )}
        </section>
        );
}