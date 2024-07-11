"use client";

import { ReactNode } from "react";
import CustomRadio from "../CustomRadio";
import Flag from "../Flag";

type BadgeProps = {
  label?: string;
  priceChildren: ReactNode;
  totalChildren: ReactNode;
  flagChildren?: ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
  className?: string;
  value: string;
};

export default function Badge({
  label,
  priceChildren,
  totalChildren,
  flagChildren,
  handleChange,
  selectedValue,
  className,
  value,
}: BadgeProps) {
  return (
    <section
      className={`flex flex-col gap-1 p-5 border relative w-full max-w-[429px] my-0 mx-auto rounded-[10px] ${
        selectedValue === value ? "border-teal-500" : ""
      } ${className}`}
    >
      {label ? (
        <div className="bg-neutral-200 absolute top-[-0.9rem] left-[1rem] flex justify-center items-center h-[27px] px-5  rounded-full">
          <p className="font-extrabold text-lg leading-6 text-neutral-600">
            {label}
          </p>
        </div>
      ) : null}
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-neutral-600">
          {priceChildren}
        </p>
        <CustomRadio
          handleChange={handleChange}
          selectedValue={selectedValue}
          value={value}
        />
      </div>
      <p className="text-base leading-5 text-teal-500">{totalChildren}</p>
      {flagChildren ? <Flag>{flagChildren}</Flag> : null}
    </section>
  );
}
