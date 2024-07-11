"use client";

import Image from "next/image";
import Badge from "@/components/Badge";
import { useState } from "react";
import Flag from "@/components/Flag";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("avista");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="min-h-screen p-4">
      <header className="flex flex-col items-center gap-10 pt-9 pb-8">
        <Image
          src="/woovi-logo.svg"
          alt="Logo da Woovi"
          width={123.51}
          height={36.65}
        />
        <p className="font-extrabold text-2xl text-neutral-600">
          João, como você quer pagar?
        </p>
      </header>
      <main className="flex flex-col">
        <Badge
          value="avista"
          label="Pix"
          priceChildren={
            <p className="text-2xl font-semibold text-neutral-600">
              <strong>1x</strong> R$ 30.500,00
            </p>
          }
          totalChildren={
            <p className="text-base leading-5 text-teal-500">
              Ganhe <strong>3%</strong> de Cashback
            </p>
          }
          flagChildren={
            <>
              🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora
            </>
          }
          handleChange={handleChange}
          selectedValue={selectedValue}
        />

        <div className="w-full max-w-[429px] my-0 mx-auto">
          <Badge
            value="2x parcelado"
            className="mt-[34px] rounded-none rounded-t-[10px]"
            label="Pix Parcelado"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>2x</strong> R$ 15.300,00
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 30.600,00
              </p>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <Badge
            value="3x parcelado"
            className="rounded-none"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>3x</strong> R$ 10.196,66
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 30.620,00
              </p>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <Badge
            value="4x parcelado"
            className="rounded-none"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>4x</strong> R$ 7.725,00
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 30.900,00
              </p>
            }
            flagChildren={
              <Flag>
                <strong>-3% de juros:</strong> Melhor opção de parcelamento
              </Flag>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <Badge
            value="5x parcelado"
            className="rounded-none"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>5x</strong> R$ 6.300,00
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 31.500,00
              </p>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <Badge
            value="6x parcelado"
            className="rounded-none"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>6x</strong> R$ 5.283,33
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 31.699,00
              </p>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
          <Badge
            value="7x parcelado"
            className="rounded-none"
            priceChildren={
              <p className="text-2xl font-semibold text-neutral-600">
                <strong>7x</strong> R$ 4.542,85
              </p>
            }
            totalChildren={
              <p className="text-base leading-5 text-zinc-400">
                Total: R$ 31.800,00
              </p>
            }
            handleChange={handleChange}
            selectedValue={selectedValue}
          />
        </div>
      </main>
      <footer className="flex justify-center mt-[41px]">
        <Image
          src="/footer-copywrite.svg"
          alt="copywrite"
          width={266}
          height={21}
        />
      </footer>
    </div>
  );
}
