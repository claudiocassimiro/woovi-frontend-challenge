import Image from "next/image";

type HeaderProps = {
  title: string;
  className?: string;
};

export default function Header({ title, className }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-10 pt-9 pb-8">
      <Image
        src="/woovi-logo.svg"
        alt="Logo da Woovi"
        width={123.51}
        height={36.65}
      />
      <p
        className={`font-extrabold text-2xl text-neutral-600 text-center ${className}`}
      >
        {title}
      </p>
    </header>
  );
}
