import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PaymentConfirmationForm from "@/components/PaymentConfirmationForm";
import PixInfo from "@/components/PixInfo/Index";

export default function PaymentConfirmation() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <Header
        title="João, pague o restante em 1x no cartão"
        className="max-w-[422px]"
      />
      <PaymentConfirmationForm />
      <PixInfo page="payment-confirmation" />
      <Footer />
    </main>
  );
}
