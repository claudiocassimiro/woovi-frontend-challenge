import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PixInfo from "@/components/PixInfo/Index";
import Image from "next/image";
import Link from "next/link";

export default function PaymentPix() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <Header
        title="João, pague a entrada de R$ 15.300,00 pelo Pix"
        className="w-80"
      />
      <div className="flex w-[332px] justify-center border-[2px] rounded-[10px] border-teal-500 p-2">
        <Image
          src="/qr-code.svg"
          alt="image de qr code para pagamento do pix"
          width={332}
          height={332}
        />
      </div>
      <Link
        href="/payment-confirmation"
        className="mt-5 flex justify-center items-center gap-[10px] text-lg leading-6 font-semibold bg-sky-900 text-white w-[310px] h-[39px] rounded-lg"
      >
        Clique para copiar QR CODE
        <Image
          src="/copy-icon.svg"
          alt="Icone para copiar o qrcode"
          width={19}
          height={22}
        />
      </Link>
      <PixInfo page="payment-pix" />
      <Footer />
    </main>
  );
}
