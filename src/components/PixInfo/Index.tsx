import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PaymentInformation from "../PaymentInformation";

type PixInfoProps = {
  page: string;
};

export default function PixInfo({ page }: PixInfoProps) {
  return (
    <>
      <div className="mt-5 text-center text-base leading-[21px]">
        <p className="font-semibold text-zinc-400">Prazo de pagamento:</p>
        <p className="font-extrabold text-neutral-600">15/12/2021 - 08:17</p>
      </div>
      <PaymentInformation checked={page == "payment-confirmation"} />
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
