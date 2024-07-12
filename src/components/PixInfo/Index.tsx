import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function PixInfo() {
  return (
    <>
      <div className="mt-5 text-center text-base leading-[21px]">
        <p className="font-semibold text-zinc-400">Prazo de pagamento:</p>
        <p className="font-extrabold text-neutral-600">15/12/2021 - 08:17</p>
      </div>
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
          <div className="w-4 h-4 rounded-full border border-spacing-[2px] border-teal-500"></div>
          <div className="w-[2px] h-6 bg-neutral-200"></div>
          <div className="w-4 h-4 rounded-full border border-spacing-[2px] border-neutral-200"></div>
        </div>
      </ul>
      <div className="flex justify-between items-center w-[427px] mt-5 border-b-2 border-neutral-200 pb-5 font-semibold text-neutral-600">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg leading-6">Total: R$ 30.600,00</p>
      </div>
      <div className="flex justify-between items-center w-[427px] mt-5 border-b-2 border-neutral-200 pb-5 font-semibold text-neutral-600">
        <p className="text-base font-extrabold leading-5">Como funciona?</p>
        <ExpandLessIcon />
      </div>

      <p className="text-sm text-center font-extrabold mt-5 text-neutral-600">
        <span className="block font-semibold text-zinc-400te">
          Identificador:
        </span>{" "}
        2c1b951f356c4680b13ba1c9fc889c47
      </p>
    </>
  );
}
