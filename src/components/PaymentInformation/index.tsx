import Image from "next/image";

type PaymentInformationProps = {
  checked?: boolean;
};

export default function PaymentInformation({
  checked,
}: PaymentInformationProps) {
  return (
    <ul className="relative w-[427px] flex flex-col items-end gap-4 mt-5 border-b-2 border-neutral-200 pb-5">
      <li className="w-[403px] flex justify-between text-lg leading-6 text-neutral-600">
        <span className="font-semibold">1ª entrada no Pix</span>
        <span className="font-extrabold">R$ 15.300,00</span>
      </li>
      <li className="w-[403px] flex justify-between text-lg leading-6 text-neutral-600">
        <span className="font-semibold">2ª no cartão</span>
        <span className="font-extrabold">R$ 15.300,00</span>
      </li>
      <div className="absolute left-0 bottom-[25px] flex flex-col justify-between items-center w-4 h-[54px]">
        {checked ? (
          <>
            <div className="flex justify-center items-center w-4 h-4 rounded-full border border-spacing-[2px] border-teal-500 bg-teal-500">
              <Image
                src="/check-icon-small.svg"
                alt="icone de confirmação"
                width={7}
                height={6}
              />
            </div>
            <div className="w-[2px] h-6 bg-neutral-200"></div>
            <div className="w-4 h-4 rounded-full border border-spacing-[2px] border-teal-500"></div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center w-4 h-4 rounded-full border border-spacing-[2px] border-teal-500"></div>
            <div className="w-[2px] h-6 bg-neutral-200"></div>
            <div className="w-4 h-4 rounded-full border border-spacing-[2px] border-neutral-200"></div>
          </>
        )}
      </div>
    </ul>
  );
}
