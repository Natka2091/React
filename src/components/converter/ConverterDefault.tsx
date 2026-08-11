import converterImage from "../../assets/images/converterDefaultImg.png";
import { ConverterHomeInfo } from "./ConverterHomeInfo";

type ConverterDefaultProps = {
  onOpen: () => void;
};

export function ConverterDefault({ onOpen }: ConverterDefaultProps) {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between gap-20 px-6">
      <ConverterHomeInfo onOpen={onOpen} />

      <div className="shrink-0">
        <img
          src={converterImage}
          alt="Конвертер валют"
          className="w-95 h-75 object-cover rounded"
        />
      </div>
    </div>
  );
}