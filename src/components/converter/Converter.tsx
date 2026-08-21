import { useState } from 'react';
import { ConverterDefault } from './ConverterDefault';
import { ConverterForm } from './ConverterForm';

export function Converter() {
const [pageOpen, setPageOpen] = useState<boolean>(false);

  return (
    <>
    {pageOpen ? (
      <ConverterForm />
    ) : (
      <ConverterDefault />
    )}
    </>
  );
};