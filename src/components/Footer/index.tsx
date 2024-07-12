import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center mt-[41px]">
      <Image
        src="/footer-copywrite.svg"
        alt="copywrite"
        width={266}
        height={21}
      />
    </footer>
  );
}
