import { useState } from 'react';
import { ConverterDefault } from './ConverterDefault';
import { ConverterForm } from './ConverterForm';

export function Converter() {
const [pageOpen, setPageOpen] = useState<boolean>(false);
function onChangePageOpen(){
   setPageOpen(true)
}
  return (
    <>
    {pageOpen ? (
      <ConverterForm />
    ) : (
      <ConverterDefault onOpen={onChangePageOpen}/>
    )}
    </>
  );
};