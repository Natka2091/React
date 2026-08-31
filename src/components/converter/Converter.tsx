import { useState } from 'react';
import { ConverterDefault } from './ConverterDefault';
import { ConverterForm } from './ConverterForm';
import { ConverterHistory } from './ConverterHistory';

export function Converter() {
const [pageOpen, setPageOpen] = useState<boolean>(false);
function onChangePageOpen(){
   setPageOpen(true)
}
  return (
    <>
    {pageOpen ? (
      <div>
      <ConverterForm />
      <ConverterHistory />
      </div>
    ) : (
      <ConverterDefault onOpen={onChangePageOpen}/>
    )}
    </>
  );
};